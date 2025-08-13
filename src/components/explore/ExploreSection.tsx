import React, { useEffect, useRef } from "react";
import { ExploreCarousel } from "./ExploreCarousel";
import type { ExploreCardData } from "./ExploreData";

const playerConfig = {
  player: null as YT.Player | null,
  videoId: "",
  startTime: 0,
  endTime: undefined as number | undefined,
};

function onYouTubeIframeAPIReady() {
  if (!playerConfig.videoId) return;

  playerConfig.player = new YT.Player(`Youtubeer-${playerConfig.videoId}`, {
    videoId: playerConfig.videoId,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 0,
      playsinline: 1,
      start: playerConfig.startTime,
      end: playerConfig.endTime,
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          event.target.seekTo(playerConfig.startTime, true);
        }
      },
    },
  });
}

interface ExploreSectionProps {
  title: string;
  subtitle: string;
  cards: ExploreCardData[];
  videoId: string;
  videoStartTime?: number;
  videoEndTime?: number;
}

export function ExploreSection({
  title,
  subtitle,
  cards,
  videoId,
  videoStartTime = 0,
  videoEndTime,
}: ExploreSectionProps) {
  const scaleFactor = 1.05;

  useEffect(() => {
    playerConfig.videoId = videoId;
    playerConfig.startTime = videoStartTime;
    playerConfig.endTime = videoEndTime;

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerConfig.player) {
        playerConfig.player.destroy();
        playerConfig.player = null;
      }
    };
  }, [videoId, videoStartTime, videoEndTime]);

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
        <div
          id={`Youtubeer-${videoId}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          style={{ transform: `scale(${scaleFactor})` }}
        ></div>
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
