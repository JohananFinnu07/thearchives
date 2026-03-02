import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import GemCard from "./GemCard";
import { slugify } from "@/lib/slugify";
import { stateConfig } from "@/data/stateConfig";
import { allDestinations } from "@/data/destinations";

const HiddenGems: React.FC = () => {
  const { state } = useParams<{ state?: string }>();
  const currentState = state ? stateConfig[state] : null;

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  /* ---------------- FILTER DESTINATIONS ---------------- */

  const filteredDestinations = useMemo(() => {
    if (!state) return allDestinations;

    return allDestinations.filter(
      (d) => d.state.toLowerCase() === state.toLowerCase(),
    );
  }, [state]);

  /* ---------------- EXTRACT 3 RANDOM UNDERRATED ---------------- */

  const hiddenGems = useMemo(() => {
    const gems = filteredDestinations.flatMap((destination) =>
      destination.products
        .filter((product) => product.type === "underrated")
        .map((product) => ({
          name: product.name,
          location: destination.name,
          locationId: destination.id,
          description: product.description,
          image: product.image,
        })),
    );

    return gems.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [filteredDestinations]);

  return (
    <section id="gems" className="py-24 lg:py-38 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            What the Markets Miss
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            The Underrated{" "}
            <span className="italic text-primary">
              {currentState?.name || "Local Specialties"}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Beyond the famous names lie crafts, flavors, and forest harvests
            that rarely leave their source. We document and bring forward these
            overlooked treasures — before they fade into silence.
          </p>

          <Button
            size="lg"
            className="gradient-accent text-accent-foreground border-0 px-8 font-medium hover:scale-105 transition-transform"
            asChild
          >
            <Link to={prefix("/hidden-gems")}>Explore All Gems</Link>
          </Button>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hiddenGems.map((gem, index) => (
            <Link
              key={`${gem.locationId}-${gem.name}`}
              to={prefix(`/hidden-gems/${gem.locationId}/${slugify(gem.name)}`)}
            >
              <GemCard
                name={gem.name}
                location={gem.location}
                description={gem.description}
                image={gem.image}
                index={index}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
