import React from "react";
import { ExploreCarousel } from "./ExploreCarousel";

export function ExploreSection() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full text-white bg-gray-900 overflow-hidden">
      <div className="text-center mb-12 px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore the paths
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Discover the perfect bike for your journey, from mountain peaks to
          city streets.
        </p>
      </div>
      <ExploreCarousel />
    </div>
  );
}
