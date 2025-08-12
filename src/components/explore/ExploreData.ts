export interface ExploreCardData {
  id: string;
  name: string;
  description: string;
  image: string;
  exploreText: string;
  iconName: string;
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
    iconName: "MountainSnow",
    href: "/explore/mountain",
  },
  {
    id: "gravel",
    name: "Gravel Bikes",
    description: "Versatile bikes perfect for speed on mixed terrains.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_GravelEditorial_What-is-gravel-riding",
    exploreText: "Explore Gravel",
    iconName: "Mountain",
    href: "/",
  },
  {
    id: "road",
    name: "Road Bikes",
    description: "Experience speed and efficiency on smooth pavement.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_WEB_Road_Tire_Clearance_Update_Editorial_Marquee_sm",
    exploreText: "Explore Roads",
    iconName: "Wind",
    href: "/",
  },
  {
    id: "city",
    name: "City Bikes",
    description: "Navigate through urban streets in comfort and style.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle2",
    exploreText: "Explore Cities",
    iconName: "Bike",
    href: "/",
  },
  {
    id: "electric",
    name: "Electric Bikes",
    description: "Effortless riding with pedal-assist technology.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/24-Verveplus-CY-NA-DR_57132_4x3",
    exploreText: "Explore Electric",
    iconName: "Zap",
    href: "/",
  },
  {
    id: "kids",
    name: "Kids Bikes",
    description: "Safe, fun, and colorful bikes for young riders.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK20_900x1100_kids_ages3",
    exploreText: "Explore Fun",
    iconName: "Baby",
    href: "/",
  },
];

export const mountainBikeCards: ExploreCardData[] = [
  {
    name: "Full Suspension",
    id: "full-suspension",
    description: "Maximum traction and comfort for the most demanding trails.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK25-MTBBuyersGuide-Column-FullSuspension",
    exploreText: "Explore Suspension",
    iconName: "GitCommitVertical",
    href: "/",
  },
  {
    name: "Hardtail",
    id: "hardtail",
    description: "Lightweight, efficient, and direct connection to the trail.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK25-MTBBuyersGuide-Column-Hardtails",
    exploreText: "Explore Hardtails",
    iconName: "Mountain",
    href: "/",
  },
  {
    name: "e-MTB",
    id: "e-mtb",
    description:
      "Power up climbs and go farther, faster with an electric boost.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/TK25-MTBBuyersGuide-Column-Travel",
    exploreText: "Explore e-MTB",
    iconName: "Zap",
    href: "/",
  },
];
