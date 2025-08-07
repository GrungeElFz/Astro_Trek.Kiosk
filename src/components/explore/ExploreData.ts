// src/components/explore/data.ts
import type { LucideProps } from "lucide-react";
import { MountainSnow, Mountain, Wind, Zap, Bike, Baby } from "lucide-react";

export interface ExploreCardData {
  id: string;
  name: string;
  description: string;
  image: string;
  exploreText: string;
  icon: React.FC<LucideProps>;
  href?: string;
}

export const exploreCards: ExploreCardData[] = [
  {
    id: "mountain",
    name: "Mountain Bikes",
    description: "Conquer rugged trails and steep climbs.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK25-MTBBuyersGuide-Column-Travel",
    exploreText: "Explore Mountains",
    icon: MountainSnow,
    href: "/",
  },
  {
    id: "gravel",
    name: "Gravel Bikes",
    description: "Versatile bikes perfect for speed on mixed terrains.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_GravelEditorial_What-is-gravel-riding",
    exploreText: "Explore Gravel",
    icon: Mountain,
    href: "/",
  },
  {
    id: "road",
    name: "Road Bikes",
    description: "Experience speed and efficiency on smooth pavement.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_WEB_Road_Tire_Clearance_Update_Editorial_Marquee_sm",
    exploreText: "Explore Roads",
    icon: Wind,
    href: "/",
  },
  {
    id: "city",
    name: "City Bikes",
    description: "Navigate through urban streets in comfort and style.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle2",
    exploreText: "Explore Cities",
    icon: Bike,
    href: "/",
  },
  {
    id: "electric",
    name: "Electric Bikes",
    description: "Effortless riding with pedal-assist technology.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/24-Verveplus-CY-NA-DR_57132_4x3",
    exploreText: "Explore Electric",
    icon: Zap,
    href: "/",
  },
  {
    id: "kids",
    name: "Kids Bikes",
    description: "Safe, fun, and colorful bikes for young riders.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK20_900x1100_kids_ages3",
    exploreText: "Explore Fun",
    icon: Baby,
    href: "/",
  },
];
