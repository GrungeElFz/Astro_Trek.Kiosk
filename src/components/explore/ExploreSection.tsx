import React from "react";
import { ExploreCarousel } from "./ExploreCarousel";
import type { ExploreCardData } from "./ExploreData";

interface ExploreSectionProps {
  title: string;
  subtitle: string;
  cards: ExploreCardData[];
}

export function ExploreSection({
  title,
  subtitle,
  cards,
}: ExploreSectionProps) {
  const videoId = "jo9KVvakFwc";
  const scaleFactor = 1.05;

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full text-white bg-black overflow-hidden">
      <div
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          width: `${177.77 * scaleFactor}vh`,
          height: `${56.25 * scaleFactor}vw`,
          minWidth: `${100 * scaleFactor}vw`,
          minHeight: `${100 * scaleFactor}vh`,
        }}
      >
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          style={{ transform: `scale(${scaleFactor})` }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
          title="YouTube video player background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div className="absolute inset-0 z-10 bg-gray-100/5"></div>

      <div className="relative z-20 flex w-full flex-col items-center">
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <ExploreCarousel cards={cards} />
      </div>
    </div>
  );
}
