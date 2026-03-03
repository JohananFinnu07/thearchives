import APHeroImage from "@/assets/hero-araku.jpg";
import TGHeroImage from "@/assets/State Hero/TGHero.jpg";
export interface StateConfig {
  slug: string;
  name: string;
  heroImage?: string;
  theme: string;
}

export const stateConfig: Record<string, StateConfig> = {
  "andhra-pradesh": {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    heroImage: APHeroImage,
    theme: "forest",
  },
  telangana: {
    slug: "telangana",
    name: "Telangana",
    heroImage: TGHeroImage,
    theme: "maroon",
  },
  andaman: {
    slug: "andaman",
    name: "Andaman",
    theme: "gold",
  },
};
