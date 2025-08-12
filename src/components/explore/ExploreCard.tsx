import React from "react";
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
};

interface ExploreCardProps {
  cardData: ExploreCardData;
  isActive: boolean;
  onClick: () => void;
}

export function ExploreCard({ cardData, isActive, onClick }: ExploreCardProps) {
  const IconComponent =
    iconMap[cardData.iconName as keyof typeof iconMap] || Mountain;

  return (
    <div className="embla__slide" onClick={onClick}>
      <div
        className="h-full w-full transition-all duration-500 ease-out flex items-center justify-center cursor-pointer"
        style={{
          transform: `scale(${isActive ? 1 : 0.85})`,
          opacity: isActive ? 1 : 0.5,
        }}
      >
        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={cardData.image}
            alt={cardData.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
