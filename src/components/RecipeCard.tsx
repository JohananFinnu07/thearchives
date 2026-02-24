// src/components/RecipeCard.tsx

import { Link } from "react-router-dom";

interface RecipeCardProps {
  recipe: {
    name: string;
    description: string;
    image?: string;
  };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border p-6">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>

      <p className="text-muted-foreground mb-4">{recipe.description}</p>

      <Link
        to={`/recipes/${slugify(recipe.name)}`}
        className="inline-block text-primary font-medium hover:underline"
      >
        View Recipe →
      </Link>
    </div>
  );
};

export default RecipeCard;
