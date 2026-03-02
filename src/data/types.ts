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
  image: string;
  heroDescription: string;
  elevation: string;
  bestTime: string;
  temperature: string;
  about: string;
  products: Product[];
  culture: string;
}
