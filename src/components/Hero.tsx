import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom"; // ✅ added useParams
import heroImage from "@/assets/hero-araku.jpg";
import { stateConfig } from "@/data/stateConfig"; // ✅ theme source

interface HeroProps {
  state?: any; // optional for flexibility
}

const Hero: React.FC<HeroProps> = ({ state: passedState }) => {
  const { state } = useParams<{ state: string }>();

  // Prefer passed state (from StateLandingPage), fallback to URL
  const activeState = passedState || (state ? stateConfig[state] : null);

  // ✅ Dynamic hero image fallback
  const backgroundImage = activeState?.heroImage || heroImage;

  // ✅ Prefix helper
  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sage font-medium tracking-widest uppercase text-sm mb-6"
          >
            {activeState
              ? `Hidden Local Products & Destinations of ${activeState.name}`
              : "Hidden Local Products & Destinations of India"}
          </motion.p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
            The <span className="italic text-[#D6A84F]">Archive</span> Of Hidden
            <br />
            <span className="italic">Local Gems</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            We document famous and underrated regional products, tribal crafts,
            traditional foods, and cultural treasures — before they disappear
            from national memory.
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
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() =>
            document
              .getElementById("destinations")
              ?.scrollIntoView({ behavior: "smooth" })
          }
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
