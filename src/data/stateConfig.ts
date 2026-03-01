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
    theme: "forest",
  },
  telangana: {
    slug: "telangana",
    name: "Telangana",
    theme: "maroon",
  },
};
