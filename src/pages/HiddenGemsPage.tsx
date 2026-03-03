import { motion } from "framer-motion";
import { Gem, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { getDestinationsByState } from "@/data/destinations";
import { stateConfig } from "@/data/stateConfig";

const HiddenGemsPage = () => {
  const { state } = useParams<{ state: string }>();

  const currentState = state ? stateConfig[state] : null;
  const destinations = state ? getDestinationsByState(state) : [];

  const destinationsWithGems = destinations
    .map((dest) => ({
      ...dest,
      gemsCount: dest.products.filter((p) => p.type === "underrated").length,
      famousCount: dest.products.filter((p) => p.type === "famous").length,
    }))
    .filter((dest) => dest.gemsCount > 0);

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-secondary/30 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8">
              <Gem className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                What Survives Locally
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Authentic Village{" "}
              <span className="text-primary italic">Products</span>
              <br />
              from{" "}
              <span className="text-primary italic">
                {currentState?.name || ""}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore rare tribal spices, forest honey, traditional cookware,
              and handcrafted goods that survive only within{" "}
              {currentState?.name}'s villages — grown, harvested, and handmade
              at their source.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsWithGems.map((destination, index) => (
              <motion.div
                key={destination.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={prefix(`/hidden-gems/${destination.slug}`)}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-foreground">
                          {destination.gemsCount} Hidden{" "}
                          {destination.gemsCount === 1 ? "Gem" : "Gems"}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{destination.elevation}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {destination.tagline}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4 text-sm">
                        <span>
                          <strong>{destination.gemsCount}</strong> Underrated
                        </span>
                        <span>
                          <strong>{destination.famousCount}</strong> Famous
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Discover the Villages Behind the Products
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every tribal spice, forest honey harvest, handcrafted tool, and
            heritage sweet begins in a specific village across{" "}
            {currentState?.name}.
          </p>

          <Link
            to={prefix("/destinations")}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiddenGemsPage;
