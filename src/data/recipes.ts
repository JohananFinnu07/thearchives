// src/data/recipes.ts

import { Recipe } from "./types";
import { andhraRecipes } from "./states/andhraRecipes";
import { slugify } from "@/lib/slugify";
export const recipes: Recipe[] = [...andhraRecipes];

export const getRecipesByState = (state: string): Recipe[] => {
  return recipes.filter((recipe) => recipe.state === state);
};

export const getRecipesByDestination = (destination: string): Recipe[] => {
  return recipes.filter(
    (recipe) => slugify(recipe.destination) === slugify(destination),
  );
};

export const getRecipeBySlug = (
  slug: string,
  state: string,
): Recipe | undefined => {
  return recipes.find(
    (recipe) =>
      recipe.name.toLowerCase().replace(/\s+/g, "-") === slug &&
      recipe.state === state,
  );
};
