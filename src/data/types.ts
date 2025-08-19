// src/data/types.ts

/**
 * Represents a single color option for a bike model,
 * including the name and all associated image assets.
 */
export interface Color {
  name: string;
  hero: string;
  gallery?: string[];
}

/**
 * A flat key-value store for component specifications.
 * Used for size-specific overrides.
 */
export interface Spec {
  [key: string]: string;
}

/**
 * A categorized key-value store for base specifications.
 * e.g., { "drivetrain": { "Shifter": "SRAM RED..." } }
 */
export interface BaseSpecs {
  [category: string]: {
    [key: string]: string;
  };
}

/**
 * Defines component specifications that vary by frame size.
 */
export interface SizeSpecificSpec {
  size: string;
  specs: Spec; // e.g., { "Stem": "Trek RCS Pro, 100mm", "Handlebar": "Bontrager RSL Aero, 420mm" }
}

/**
 * Represents a specific, purchasable variant of a bike model.
 * Each combination of size and color has a unique SKU.
 */
export interface Variant {
  sku: string;
  size: string;
  colorName: string; // This links to a color defined in the parent Model
  price: number;
}

/**
 * Represents a bike model (e.g., "Madone SLR 9 AXS"), which is now a collection of variants.
 * This level holds the specifications and color options common to all its variants.
 */
export interface Model {
  modelName: string; // e.g., "SLR 9 AXS"
  overview: string;
  colors: Color[]; // Defines all available colors and their image assets for this model.
  base_specs: BaseSpecs;
  size_specific_specs: SizeSpecificSpec[];
  variants: Variant[]; // Contains all the unique, purchasable combinations.
}

/**
 * Represents the geometric measurements for a specific frame size.
 * Allows for various measurements like 'stack', 'reach', etc.
 */
export interface Geometry {
  size: string;
  [key: string]: number | string;
}

/**
 * Describes a key feature of a bike generation, like a new technology.
 */
export interface Feature {
  name: string;
  description: string;
  image?: string; // Optional image to illustrate the feature
}

/**
 * Represents a single service or replacement part.
 */
export interface ServicePart {
  itemType: string;
  description: string;
  partNumber?: string;
  manufacturerPartNumber?: string;
  alternativeItems?: string;
}

/**
 * Represents a range of measurements, like height or inseam, in different units.
 */
export interface MeasurementRange {
  cm: string;
  in: string;
}

/**
 * Provides a sizing recommendation, linking a size label to rider height and inseam ranges.
 */
export interface SizingRecommendation {
  size_label: string; // e.g., "XS (47cm)"
  rider_height: MeasurementRange;
  inseam: MeasurementRange;
}

/**
 * Represents a specific generation of a bike family (e.g., "Madone Gen 8").
 * Contains information shared across all models within that generation.
 */
export interface Generation {
  generationName: string; // e.g., "Gen 8"
  year: number;
  description: string;
  features: Feature[];
  sizing: SizingRecommendation[];
  geometry: Geometry[];
  serviceParts: ServicePart[];
  models: Model[];
}

/**
 * The top-level object representing a whole family of bikes (e.g., "Madone").
 * Main object, export from each data file.
 */
export interface BikeFamily {
  id: string; // URL-friendly slug, e.g., "madone"
  name: string; // e.g., "Madone"
  category: "Road" | "Mountain" | "Gravel" | "City" | "Electric" | "Kids";
  subCategory: string; // e.g., "Race", "Endurance", "Trail"
  familyDescription: string;
  generations: Generation[];
}
