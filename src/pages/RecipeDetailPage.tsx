import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ChefHat, Flame, ArrowUpRight } from "lucide-react";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { recipes } from "@/data/recipes";
import { ingredientAffiliateMap } from "@/data/ingredientAffiliateMap";
import { slugify } from "@/lib/slugify";

const RecipeDetail = () => {
  const { state, slug } = useParams<{
    state: string;
    slug: string;
  }>();

  const recipe = recipes.find(
    (r) => slugify(r.name) === slug && r.state === state,
  );

  const prefix = (path: string) => (state ? `/${state}${path}` : path);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-serif">Recipe Not Found</h1>
          <Link
            to={prefix("/")}
            className="text-primary underline mt-4 inline-block"
          >
            Return Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const destinationSlug = slugify(recipe.id);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Link
                  to={prefix(`/destination/${destinationSlug}`)}
                  state={{ scrollTo: "recipes" }}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {recipe.destination}
                </Link>

                <h1 className="font-serif text-5xl font-semibold">
                  {recipe.name}
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl">
                  {recipe.description}
                </p>

                {/* Meta */}
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {recipe.prepTime} + {recipe.cookTime}
                  </div>

                  <div className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4" />
                    {recipe.servings}
                  </div>

                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    {recipe.difficulty}
                  </div>
                </div>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-[450px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-border max-w-5xl mx-auto" />

        {/* CONTENT */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* INGREDIENTS */}
              <div>
                <div className="bg-card rounded-2xl p-8 border border-border sticky top-24 shadow-sm">
                  <h2 className="font-serif text-2xl mb-6">Ingredients</h2>

                  <ul className="space-y-3 text-muted-foreground">
                    {recipe.ingredients.map((item, index) => {
                      const lowerItem = item.toLowerCase();

                      const matchedKey = Object.keys(
                        ingredientAffiliateMap,
                      ).find((key) => lowerItem.includes(key));

                      const affiliate = matchedKey
                        ? ingredientAffiliateMap[matchedKey]
                        : null;

                      return (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="text-primary font-bold">•</span>

                          {affiliate ? (
                            <a
                              href={affiliate.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1 text-primary"
                            >
                              {item}
                              {affiliate.verified && (
                                <span className="text-[10px] bg-primary/10 text-primary px-2 py-[2px] rounded-full ml-2">
                                  Verified
                                </span>
                              )}
                              <ArrowUpRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition" />
                            </a>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* STEPS */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl mb-12">The Process</h2>

                <div className="relative border-l border-border pl-12 space-y-12">
                  {recipe.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <span className="absolute -left-[30px] top-2 w-3 h-3 rounded-full bg-primary"></span>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        {recipe.story && (
          <section className="bg-secondary/30 py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-serif text-3xl mb-8">
                The Story Behind This Dish
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {recipe.story}
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RecipeDetail;
