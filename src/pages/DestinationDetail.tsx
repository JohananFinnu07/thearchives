import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Thermometer,
  Calendar,
  Mountain,
  Sparkles,
  Star,
  Compass,
} from "lucide-react";

import { getDestinationBySlug } from "@/data/destinations";
import { stateConfig } from "@/data/stateConfig";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import RecipeCard from "@/components/RecipeCard";
import { getRecipesByDestination } from "@/data/recipes";
import { slugify } from "@/lib/slugify";

import PlaceCard from "@/components/PlaceCard";
import { getPlacesByDestination } from "@/data/places";

const DestinationDetail = () => {
  const { state, slug: destinationSlug } = useParams<{
    state: string;
    slug: string;
  }>();

  const destination =
    state && destinationSlug
      ? getDestinationBySlug(destinationSlug, state)
      : undefined;

  const currentState = state ? stateConfig[state] : null;

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  const location = useLocation() as {
    state?: { scrollTo?: string };
  };

  const destinationPlaces = destination
    ? getPlacesByDestination(destination.name)
    : [];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Destination Not Found
          </h1>
          <Link
            to={prefix("/destinations")}
            className="text-primary hover:underline"
          >
            Return to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const famousProducts = destination.products.filter(
    (p) => p.type === "famous",
  );

  const underratedProducts = destination.products.filter(
    (p) => p.type === "underrated",
  );

  const destinationRecipes = getRecipesByDestination(destination.name);

  const destinationSlugified = slugify(destination.name);

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    destination.mapsQuery + ", " + currentState?.name + ", India",
  )}`;
  const [showNavButton, setShowNavButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavButton(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  /* ================= AUTO SCROLL SYSTEM ================= */

  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    if (!container || !section) return;

    let index = 0;
    let direction = 1;
    let interval: any;
    let inactivityTimer: any;
    let observer: IntersectionObserver;

    let lastScrollLeft = 0;

    const getCardWidth = () => {
      const card = container.querySelector(".state-card") as HTMLElement;
      return card?.offsetWidth + 24 || 400;
    };

    const syncIndexWithScroll = () => {
      const cardWidth = getCardWidth();
      index = Math.round(container.scrollLeft / cardWidth);
    };

    const startAutoScroll = () => {
      clearInterval(interval);

      syncIndexWithScroll();

      interval = setInterval(() => {
        const cards = container.querySelectorAll(".state-card");
        if (!cards.length) return;

        const cardWidth = getCardWidth();

        index += direction;

        if (index >= cards.length - 1) direction = -1;
        if (index <= 0) direction = 1;

        container.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }, 500);
    };

    const resetInactivity = () => {
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      syncIndexWithScroll();

      inactivityTimer = setTimeout(() => {
        startAutoScroll();
      }, 1500);
    };

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          resetInactivity();
        } else {
          clearInterval(interval);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    const detectDirection = () => {
      const currentScroll = container.scrollLeft;

      if (currentScroll > lastScrollLeft) direction = 1;
      else if (currentScroll < lastScrollLeft) direction = -1;

      lastScrollLeft = currentScroll;
    };

    const pause = () => clearInterval(interval);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("touchstart", pause);

    const handleScroll = () => {
      detectDirection();
      resetInactivity();
    };

    container.addEventListener("scroll", handleScroll);
    container.addEventListener("wheel", resetInactivity);
    container.addEventListener("mousedown", resetInactivity);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("touchstart", pause);

      container.removeEventListener("scroll", detectDirection);

      container.removeEventListener("wheel", resetInactivity);
      container.removeEventListener("mousedown", resetInactivity);
      container.removeEventListener("scroll", resetInactivity);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 left-4 sm:left-8 lg:left-16"
        >
          <Link
            to={prefix("/destinations")}
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Destinations</span>
          </Link>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-sage mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wide">
                {currentState?.name}, India
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3">
              {destination.name}
            </h1>

            <p className="text-primary-foreground/80 text-lg mb-6">
              {destination.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                <Mountain className="w-4 h-4 text-sage" />
                <span className="text-primary-foreground text-xs sm:text-sm">
                  {destination.elevation}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                <Thermometer className="w-4 h-4 text-sage" />
                <span className="text-primary-foreground text-xs sm:text-sm">
                  {destination.temperature}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                <Calendar className="w-4 h-4 text-sage" />
                <span className="text-primary-foreground text-xs sm:text-sm">
                  {destination.bestTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
            About {destination.name}
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            {destination.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {["famous", "underrated", "recipes", "culture"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Must Explore Places */}
      <section
        id="explore"
        ref={sectionRef}
        className="py-16 scroll-mt-24 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
              Explore Around {destination.name}
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl">
              From iconic landmarks to hidden local gems worth discovering.
            </p>
          </div>

          {/* Horizontal Scroll Container */}

          <div
            ref={scrollContainerRef}
            className="
    flex gap-6
    overflow-x-auto
    scroll-smooth
    snap-x snap-mandatory
    touch-pan-x
    no-scrollbar
    px-[calc((100vw-260px)/2)]
    sm:px-[calc((100vw-300px)/2)]
    lg:px-0
    pb-4
  "
          >
            {destinationPlaces.map((place) => (
              <div
                key={place.slug}
                className="
        state-card
        min-w-[260px]
        sm:min-w-[300px]
        lg:min-w-[320px]
        flex-shrink-0
        snap-center
      "
              >
                <PlaceCard
                  place={place}
                  state={state!}
                  destinationSlug={destinationSlugified}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Signature */}
      <section id="famous" className="py-16 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <p className="uppercase text-sm tracking-widest text-accent">
                Renowned Treasures
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Signature of {destination.name}
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
              Discover the defining experiences, flavors, crafts, and stories
              that have put this region on the map.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {famousProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* UNDERRATED */}
      <section id="underrated" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <p className="uppercase text-sm tracking-widest text-accent">
                Hidden Treasures
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Underrated Gems to Discover
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-10">
              Beyond the obvious — uncover the quiet, authentic pieces of this
              place known best to locals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {underratedProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* RECIPES */}
      <section id="recipes" className="py-16 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                The Action
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Traditional Recipes of {destination.name}
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Discover how local ingredients transform into unforgettable
              dishes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinationRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section
        id="culture"
        className="py-16 lg:py-24 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-accent" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                The Live Experience
              </p>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Culture & Traditions
            </h2>

            <p className="text-muted-foreground text-lg max-w-5xl leading-relaxed">
              {destination.culture}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-forest text-center">
        <h2 className="font-serif text-3xl text-primary-foreground mb-4">
          Ready to Explore {destination.name}?
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            to={prefix("/destinations")}
            className="bg-primary-foreground text-foreground px-6 py-3 rounded-full"
          >
            Explore More Destinations
          </Link>

          <Link
            to={prefix(`/gallery/${destinationSlugified}`)}
            className="bg-primary-foreground text-foreground px-6 py-3 rounded-full"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* FLOATING NAVIGATION BUTTON */}
      {/* Floating Navigate Button */}
      <motion.a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full gradient-forest text-primary-foreground shadow-elevated hover:scale-105 transition-transform"
        aria-label={`Navigate to ${destination.name}`}
      >
        <Compass className="w-5 h-5" />

        <span className="font-medium text-xs hidden sm:inline">
          Into {destination.name}
        </span>
      </motion.a>
      <Footer />
    </div>
  );
};

export default DestinationDetail;
