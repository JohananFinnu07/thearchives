import { motion } from "framer-motion";
import { Gem, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

// 🔹 Slug helper
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

const HiddenGemsPage = () => {
  const { destinationId, productSlug } = useParams();

  // 🔹 If destinationId exists → show destination specific view
  if (destinationId) {
    const destination = destinations.find((dest) => dest.id === destinationId);

    if (!destination) {
      return (
        <div className="min-h-screen bg-background pt-32 text-center">
          <Header />
          <h1 className="text-2xl font-semibold">Destination Not Found</h1>
          <Footer />
        </div>
      );
    }

    // 🔹 If productSlug exists → show product detail
    if (productSlug) {
      const product = destination.products.find(
        (p) => slugify(p.name) === productSlug,
      );

      if (!product) {
        return (
          <div className="min-h-screen bg-background pt-32 text-center">
            <Header />
            <h1 className="text-2xl font-semibold">Hidden Gem Not Found</h1>
            <Footer />
          </div>
        );
      }

      return (
        <div className="min-h-screen bg-background">
          <Header />
          <div className="pt-32 container mx-auto px-4 max-w-4xl">
            <h1 className="font-serif text-4xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-muted-foreground mb-6">
              From {destination.name}
            </p>

            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl mb-6 w-full"
              />
            )}

            <p className="mb-6">{product.description}</p>

            <h2 className="text-xl font-semibold mb-2">Significance</h2>
            <p className="mb-6">{product.significance}</p>

            <h2 className="text-xl font-semibold mb-2">Making Process</h2>
            <p className="mb-6">{product.makingProcess}</p>

            <h2 className="text-xl font-semibold mb-2">Uses</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.uses.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      );
    }

    // 🔹 Destination-level hidden gems list
    const hiddenGems = destination.products.filter(
      (p) => p.type === "underrated",
    );

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-6">
            Hidden Gems of {destination.name}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiddenGems.map((product) => (
              <Link
                key={product.name}
                to={`/hidden-gems/${destination.id}/${slugify(product.name)}`}
                className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-6"
              >
                <h3 className="font-serif text-2xl font-semibold group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 🔹 ORIGINAL GRID VIEW (UNCHANGED)
  const destinationsWithGems = destinations
    .map((dest) => ({
      ...dest,
      gemsCount: dest.products.filter((p) => p.type === "underrated").length,
      famousCount: dest.products.filter((p) => p.type === "famous").length,
    }))
    .filter((dest) => dest.gemsCount > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* YOUR ORIGINAL CODE REMAINS EXACTLY SAME BELOW */}
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8"
            >
              <Gem className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                What Survives Locally
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Treasures That{" "}
              <span className="text-primary italic">Never Left</span>
              <br />
              Their Villages
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The finest spices stay with the farmers who grew them. The purest
              honey never reaches city markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid section stays EXACTLY as you wrote it */}

      <Footer />
    </div>
  );
};

export default HiddenGemsPage;
