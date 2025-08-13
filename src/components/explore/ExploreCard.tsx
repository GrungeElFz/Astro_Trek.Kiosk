import React, { useState, useEffect, useRef } from "react";
import { FastAverageColor } from "fast-average-color";
import { Button } from "@/components/ui/button";
import type { ExploreCardData } from "./ExploreData";

import {
  MountainSnow,
  Mountain,
  Wind,
  Zap,
  Bike,
  Baby,
  GitCommitVertical,
  Cog,
  Gem,
  Timer,
  Sofa,
  Flame,
  BriefcaseBusiness,
  Palmtree,
  PackagePlus,
} from "lucide-react";

const iconMap = {
  MountainSnow,
  Mountain,
  Wind,
  Zap,
  Bike,
  Baby,
  GitCommitVertical,
  Cog,
  Gem,
  Timer,
  Sofa,
  Flame,
  BriefcaseBusiness,
  Palmtree,
  PackagePlus,
};

interface ExploreCardProps {
  cardData: ExploreCardData;
  isActive: boolean;
  onClick: () => void;
}

export function ExploreCard({ cardData, isActive, onClick }: ExploreCardProps) {
  const IconComponent =
    iconMap[cardData.iconName as keyof typeof iconMap] || Mountain;

  const imgRef = useRef<HTMLImageElement>(null);
  const [gradientColor, setGradientColor] = useState<string>("#000");

  useEffect(() => {
    const fac = new FastAverageColor();

    if (imgRef.current) {
      fac
        .getColorAsync(imgRef.current)
        .then((color) => {
          if (color) {
            setGradientColor(color.isDark ? color.hex : "#000");
          }
        })
        .catch((e) => {
          console.error("Error getting average color:", e);
        });
    }

    return () => {
      fac.destroy();
    };
  }, [cardData.image]);

  return (
    <div className="embla__slide" onClick={onClick}>
      <div
        className="h-full w-full transition-all duration-500 ease-out flex items-center justify-center cursor-pointer"
        style={{
          transform: `scale(${isActive ? 1 : 0.85})`,
          opacity: isActive ? 1 : 0.4,
        }}
      >
        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            ref={imgRef}
            src={cardData.image}
            alt={cardData.name}
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0 transition-colors duration-500"
            style={{
              background: `linear-gradient(to top, ${gradientColor} 10%, transparent 60%)`,
            }}
          />

          <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
            <h3 className="text-2xl font-bold mb-2">{cardData.name}</h3>
            <p className="text-white/90 mb-4 h-12 text-sm">
              {cardData.description}
            </p>
            <a href={cardData.href}>
              <Button variant="secondary" className="w-full uppercase">
                {cardData.exploreText}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
