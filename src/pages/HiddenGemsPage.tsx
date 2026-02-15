import { motion } from "framer-motion";
import { Gem, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

const HiddenGemsPage = () => {
  const { destinationId, productSlug } = useParams();

  // 📌 Case 1 — No params → Show grid
  if (!destinationId) {
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

        <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-secondary/30 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Treasures That{" "}
              <span className="text-primary italic">Never Left</span>
            </h1>
            <p className="text-muted-foreground">
              Discover hidden gems preserved within their villages.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsWithGems.map((destination) => (
              <Link
                key={destination.id}
                to={`/hidden-gems/${destination.id}`}
                className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold group-hover:text-primary">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {destination.gemsCount} Hidden Gems
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // 📌 Case 2 & 3 — Destination exists
  const destination = destinations.find((d) => d.id === destinationId);

  if (!destination) {
    return <div className="pt-32 text-center">Destination Not Found</div>;
  }

  // 📌 Case 3 — Product detail
  if (productSlug) {
    const product = destination.products.find(
      (p) => slugify(p.name) === productSlug,
    );

    if (!product) {
      return <div className="pt-32 text-center">Hidden Gem Not Found</div>;
    }

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">From {destination.name}</p>

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

  // 📌 Case 2 — Destination hidden gems list
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
              className="group block border border-border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg group-hover:text-primary">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HiddenGemsPage;
