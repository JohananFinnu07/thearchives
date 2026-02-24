// src/data/recipes.ts

export interface Recipe {
  name: string;
  description: string;
  destination: string;
  ingredients: string[];
  steps: string[];
}

export const recipes: Recipe[] = [
  {
    name: "Niger Seed Chutney",
    destination: "Araku Valley",
    description: "A tribal-style roasted niger seed chutney.",
    ingredients: ["Niger seeds", "Dry red chillies", "Garlic", "Salt"],
    steps: [
      "Dry roast niger seeds",
      "Grind with chillies and garlic",
      "Add salt and serve",
    ],
  },
];
