export interface Product {
  name: string;
  type: "famous" | "underrated";
  description: string;
  significance?: string;
  makingProcess?: string;
  uses?: string[];
  image?: string;
  makingImage?: string;
  flavorImage?: string;
}

export interface Destination {
  id: string;
  slug: string;
  state: string;
  name: string;
  tagline: string;
  mapsQuery: string;
  image: string;
  heroDescription: string;
  elevation: string;
  bestTime: string;
  temperature: string;
  about: string;
  products: Product[];
  culture: string;
}

export interface Recipe {
  name: string;
  state: string;
  description: string;
  destination: string;
  id: string;
  image: string;

  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: "Easy" | "Medium" | "Hard";

  ingredients: string[];
  steps: string[];

  story?: string;
  season?: "All Year" | "Monsoon" | "Winter" | "Summer" | "Seasonal" | "Spring";
  buyLink?: string;
}

export interface Place {
  state: string;
  destination: string;
  name: string;
  slug: string;
  type: "must-visit" | "underrated";
  image: string;
  description: string;
  about: string;
  distance: string;
  highlights: string[];
  bestTime: string;
  travelTips: string[];
  mapsQuery: string;
}
