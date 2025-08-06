// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";

interface HeroSlotProps {
  videoId: string;
  title: string;
  subtitle: string;
  buttons: {
    text: string;
    href: string;
  }[];
}

function HeroSlot({ videoId, title, subtitle, buttons }: HeroSlotProps) {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden border-b-2 border-gray-800 last:border-b-0">
      <div className="absolute top-0 left-[-100%] z-0 h-full w-[300%]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/$2{videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>

      <div className="absolute inset-0 z-10 bg-black/20"></div>

      <div className="relative z-20 flex flex-col items-center text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
          {title}
        </h1>
        <h2 className="mt-2 text-2xl font-semibold drop-shadow-lg">
          {subtitle}
        </h2>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          {buttons.map((button) => (
            <a href={button.href} key={button.text}>
              <Button variant="secondary" size="lg" className="uppercase">
                {button.text}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const slotData = [
    {
      id: "RwKqUyAODug",
      title: "See Catalogs",
      subtitle: "The world's best bikes and cycling gear",
      buttons: [{ text: "See the bikes", href: "#" }],
    },
    {
      id: "agpgYHxmdCA",
      title: "Trust the process",
      subtitle: "Lidl-Trek Project One ICON: Untitled No. 25",
      buttons: [
        { text: "See the paint", href: "#" },
        { text: "Build your dream bike", href: "#" },
      ],
    },
    {
      id: "qfsce484LY0",
      title: "Bike Sizing",
      subtitle: "Find the right size that's best for you",
      buttons: [
        { text: "Size Finder", href: "#" },
        { text: "Precision Fit", href: "#" },
      ],
    },
  ];

  return (
    <main className="flex h-screen flex-col">
      {slotData.map((slot) => (
        <HeroSlot
          key={slot.id}
          videoId={slot.id}
          title={slot.title}
          subtitle={slot.subtitle}
          buttons={slot.buttons}
        />
      ))}
    </main>
  );
}
