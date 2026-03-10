import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import heroImage from "@/assets/hero-araku.jpg";
import { stateConfig } from "@/data/stateConfig";

interface HeroProps {
  state?: any;
}

const Hero: React.FC<HeroProps> = ({ state: passedState }) => {
  const { state } = useParams<{ state: string }>();

  const activeState = passedState || (state ? stateConfig[state] : null);

  const backgroundImage = activeState?.heroImage || heroImage;

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Back to India Button (ONLY on state pages) */}
      {state && (
        <Link
          to="/"
          state={{ scrollTo: "india-map" }}
          className="absolute top-24 left-6 z-30 flex items-center gap-2
          bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full
          hover:bg-black/60 transition-all duration-300"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm tracking-wide">Back to Origins</span>
        </Link>
      )}

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Scenic view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sage font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6"
          >
            Step Into the Story
          </motion.p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-primary-foreground mb-6 max-w-4xl">
            The <span className="italic">Living</span> Treasures
            <br className="hidden sm:block" />
            of{" "}
            <span className="text-amber-300 font-semibold">
              {activeState ? activeState.name : "India"}
            </span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            We document famous and overlooked regional products, tribal crafts,
            traditional foods, and cultural treasures — preserving the stories
            that define a place.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="gradient-forest text-primary-foreground border-0 px-8 py-6 text-base font-medium shadow-elevated hover:scale-105 transition-transform"
              asChild
            >
              <Link to={prefix("/destinations")}>Start Exploring</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-base"
              asChild
            >
              <Link to={prefix("/hidden-gems")}>Find Hidden Gems</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">
            Discover
          </span>
          <ChevronDown className="w-5 h-5 text-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
