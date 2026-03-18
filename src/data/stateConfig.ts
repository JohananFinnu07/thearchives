import APHeroImage from "@/assets/hero-araku.jpg";
import TGHeroImage from "@/assets/State Hero/TGHero.jpg";
import ARHeroImage from "@/assets/State Hero/ARHero.jpg";
import ANHeroImage from "@/assets/State Hero/ANHero.jpg";
import PYHeroImage from "@/assets/State Hero/PYHero.jpg";

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
  ar: {
    slug: "ar",
    name: "Arunachal Pradesh",
    heroImage: ARHeroImage,
    theme: "",
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
    heroImage: ANHeroImage,
    theme: "gold",
  },
  py: {
    slug: "py",
    name: "Puducherry",
    heroImage: PYHeroImage,
    theme: "french-coastal",
  },
};
