import { useParams } from "react-router-dom";
import { recipes } from "@/data/recipes";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const RecipeDetail = () => {
  const { slug } = useParams();

  const recipe = recipes.find((r) => slugify(r.name) === slug);

  if (!recipe) return <div>Recipe Not Found</div>;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

      <p className="mb-6 text-muted-foreground">{recipe.description}</p>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="list-decimal ml-6 mt-2">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
