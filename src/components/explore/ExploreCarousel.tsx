import React, { useState, useEffect, useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exploreCards } from "./ExploreData";
import { ExploreCard } from "./ExploreCard";

export function ExploreCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(emblaApi);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {exploreCards.map((card, index) => (
            <ExploreCard
              key={card.id}
              cardData={card}
              isActive={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-12 z-20 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/50 backdrop-blur-sm hover:bg-white text-black pointer-events-auto"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/50 backdrop-blur-sm hover:bg-white text-black pointer-events-auto"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-8 space-x-2 z-10">
        {exploreCards.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
