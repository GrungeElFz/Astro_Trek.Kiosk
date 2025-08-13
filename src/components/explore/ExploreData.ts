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
    href: "/explore/gravel",
  },
  {
    id: "road",
    name: "Road Bikes",
    description: "Experience speed and efficiency on smooth pavement.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_WEB_Road_Tire_Clearance_Update_Editorial_Marquee_sm",
    exploreText: "Explore Roads",
    iconName: "Wind",
    href: "/explore/road",
  },
  {
    id: "city",
    name: "City Bikes",
    description: "Navigate through urban streets in comfort and style.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle2",
    exploreText: "Explore Cities",
    iconName: "Bike",
    href: "/explore/city",
  },
  {
    id: "electric",
    name: "Electric Bikes",
    description: "Effortless riding with pedal-assist technology.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/24-Verveplus-CY-NA-DR_57132_4x3",
    exploreText: "Explore Electric",
    iconName: "Zap",
    href: "/explore/electric",
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

export const gravelBikeCards: ExploreCardData[] = [
  {
    name: "Gravel",
    id: "gravel",
    description: "Versatile bikes perfect for speed on mixed terrains.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK23_GravelEditorial_allroad-2",
    exploreText: "Explore Gravel",
    iconName: "Mountain",
    href: "/",
  },
  {
    name: "Cyclocross",
    id: "cyclocross",
    description:
      "Race machine for explosive speed through mud, grass, and sand.",
    image:
      "https://media.trekbikes.com/image/upload/w_768,f_auto,fl_progressive:semi,q_auto/cyclocross2020CatCard",
    exploreText: "Explore Cyclocross",
    iconName: "MountainSnow",
    href: "/",
  },
  {
    name: "e-Gravel",
    id: "e-gravel",
    description:
      "Go farther and faster on any terrain, turns tough climbs into pure fun.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/TK23_GravelEditorial_Desert-climb-shot",
    exploreText: "Explore e-Gravel",
    iconName: "Zap",
    href: "/",
  },
];

export const roadBikeCards: ExploreCardData[] = [
  {
    name: "Race",
    id: "race",
    description:
      "Lightest, fastest, and most aerodynamic bikes, engineered to win.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/25-road-buyers-guide-all-road-bikes-marquee",
    exploreText: "Explore Race",
    iconName: "Wind",
    href: "/",
  },
  {
    name: "Endurance",
    id: "endurance",
    description:
      "Ride longer and stronger with a comfortable all-day adventures on the pavement.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,f_auto,fl_progressive:semi,q_auto/DomaneCarbon_Big_Marquee_19_NEW",
    exploreText: "Explore Endurance",
    iconName: "Gem",
    href: "/",
  },
  {
    name: "e-Road",
    id: "e-road",
    description:
      "Flatten hills and crush headwinds, feels smooth, sleek, and natural.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_2346,c_pad,f_auto,fl_progressive:semi,q_auto/DomaneSLRplus_Why_900x1100_03",
    exploreText: "Explore e-Road",
    iconName: "Zap",
    href: "/",
  },
  {
    name: "Triathlon",
    id: "triathlon",
    description:
      "Radically competitive, built to shave seconds and smash every record.",
    image:
      "https://media.trekbikes.com/image/upload/w_800,c_pad,f_auto,fl_progressive:semi,q_auto/knibb_stgeorge_win_3Nov2022_9x11",
    exploreText: "Explore Triathlon",
    iconName: "Timer",
    href: "/",
  },
];

export const cityBikeCards: ExploreCardData[] = [
  {
    name: "Comfort",
    id: "comfort",
    description:
      "Relaxed, upright riding, and features that prioritize pure comfort.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle",
    exploreText: "Explore Comfort",
    iconName: "Sofa",
    href: "/",
  },
  {
    name: "Active",
    id: "active",
    description:
      "Fitness rides or fun cruises, offering a blend of speed, versatility, and performance.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle2",
    exploreText: "Explore Active",
    iconName: "Flame",
    href: "/",
  },
  {
    name: "Commuter",
    id: "commuter",
    description: "Daily grind with practical, a reliable ride to work.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle3",
    exploreText: "Explore Commuter",
    iconName: "BriefcaseBusiness",
    href: "/",
  },
  {
    name: "Cruiser",
    id: "cruiser",
    description:
      "Simple, stylish, and fun for casual spins around the neighborhood or boardwalk.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle4",
    exploreText: "Explore Cruiser",
    iconName: "Palmtree",
    href: "/",
  },
  {
    name: "Cargo",
    id: "cargo",
    description:
      "Haul it all with a stable design, perfect for carrying groceries, kids, and more.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25CityBGLifestyle5",
    exploreText: "Explore Cargo",
    iconName: "PackagePlus",
    href: "/",
  },
];

export const electricBikeCards: ExploreCardData[] = [
  {
    name: "e-City",
    id: "e-city",
    description:
      "Relaxed, upright riding, and features that prioritize pure comfort.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25WhyTrek4x3City",
    exploreText: "Explore e-City",
    iconName: "Zap",
    href: "/",
  },
  {
    name: "e-Mountain",
    id: "active",
    description:
      "Power up climbs and go farther, faster with an electric boost.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25WhyTrek4x3MTB",
    exploreText: "Explore e-Mountain",
    iconName: "Zap",
    href: "/",
  },
  {
    name: "e-Road",
    id: "e-road",
    description:
      "Flatten hills and crush headwinds, feels smooth, sleek, and natural.",
    image:
      "https://media.trekbikes.com/image/upload/w_1920,h_1440,c_pad,f_auto,fl_progressive:semi,q_auto/TK25WhyTrek4x3Road",
    exploreText: "Explore e-Road",
    iconName: "Zap",
    href: "/",
  },
];
