import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom"; // ✅ added
import GemCard from "./GemCard";
import coffeeImage from "@/assets/araku-coffee.jpg";
import craftsImage from "@/assets/tribal-crafts.jpg";
import honeyImage from "@/assets/wild-honey.jpg";
import jackfruitchipImage from "@/assets/products/JackfruitHero.jpeg";
import forestturmericImage from "@/assets/products/ForesttermericHero.jpeg";
import { slugify } from "@/lib/slugify";
import { stateConfig } from "@/data/stateConfig"; // ✅ added

interface HiddenGemsProps {
  state?: string;
}

// Sample data unchanged
const sampleGems = [
  {
    name: "Araku Valley Coffee",
    location: "Araku Valley",
    locationId: "araku-valley",
    description:
      "Organic, shade-grown coffee cultivated by tribal communities. Award-winning beans with a unique flavor profile shaped by the Eastern Ghats.",
    image: coffeeImage,
  },
  {
    name: "Jack fruit Chips and Products",
    location: "Paderu Region",
    locationId: "paderu",
    description:
      "Sun-dried jackfruit chips and preserves prepared using traditional tribal techniques from locally grown jackfruit.",
    image: jackfruitchipImage,
  },
  {
    name: "Forest Turmeric",
    location: "Maredumilli",
    locationId: "maredumilli",
    description:
      "Wild forest-grown turmeric known for high curcumin concentration and strong medicinal properties.",
    image: forestturmericImage,
  },
];

const HiddenGems: React.FC<HiddenGemsProps> = () => {
  const { state } = useParams<{ state: string }>();
  const currentState = state ? stateConfig[state] : null;

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  return (
    <section id="gems" className="py-24 lg:py-38 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sampleGems.map((gem, index) => (
            <Link
              key={gem.name}
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
