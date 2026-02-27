// src/components/RecipeCard.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: {
    name: string;
    description: string;
    image?: string;
    season?: "All Year" | "Monsoon" | "Winter" | "Summer" | "Seasonal";
  };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const slug = slugify(recipe.name);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border p-6">
      {/* Image */}
      {recipe.image && (
        <Link
          to={`/recipes/${slug}`}
          className="block mb-4 overflow-hidden rounded-lg"
        >
          <motion.img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 object-cover object-center"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </Link>
      )}

      {/* Season Badge */}
      {recipe.season && (
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent mb-3">
          {recipe.season} Special
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4">{recipe.description}</p>

      {/* CTA */}
      <Link
        to={`/recipes/${slug}`}
        className="inline-block text-primary font-medium hover:underline"
      >
        Inside the Recipe →
      </Link>
    </div>
  );
};

export default RecipeCard;
