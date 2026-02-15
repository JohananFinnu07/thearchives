import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  // 🔎 FILTER LOGIC
  const filteredDestinations = useMemo(() => {
    if (!query) return destinations;

    const lowerQuery = query.toLowerCase();

    return destinations.filter((dest) => {
      if (dest.name.toLowerCase().includes(lowerQuery)) return true;

      return dest.products.some((product) =>
        product.name.toLowerCase().includes(lowerQuery),
      );
    });
  }, [query]);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, [filteredDestinations]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="destinations"
      className="py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Off the Tourist Trail
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            Places Where{" "}
            <span className="italic text-primary">Time Moves Slowly</span>
          </h2>

          {query ? (
            <p className="text-muted-foreground text-lg">
              Showing results for "<span className="font-medium">{query}</span>"
            </p>
          ) : (
            <p className="text-muted-foreground text-lg">
              Hill stations where tribal traditions still breathe, coffee grows
              wild, and the outside world feels far away.
            </p>
          )}
        </motion.div>
      </div>

      {/* NO RESULTS */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">No results found</h2>
          <p className="text-muted-foreground mt-2">
            Try searching for another destination or product.
          </p>
        </div>
      ) : (
        <div className="relative">
          {/* Scroll Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollLeft ? 1 : 0 }}
            onClick={() => scroll("left")}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-elevated flex items-center justify-center text-foreground hover:bg-background transition-colors"
            style={{ pointerEvents: canScrollLeft ? "auto" : "none" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            onClick={() => scroll("right")}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-elevated flex items-center justify-center text-foreground hover:bg-background transition-colors"
            style={{ pointerEvents: canScrollRight ? "auto" : "none" }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-8 lg:px-16 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 snap-center"
              >
                <Link
                  to="/destinations"
                  className="group block relative w-[320px] sm:w-[400px] lg:w-[480px] h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-500"
                >
                  <div className="absolute inset-0">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm text-background text-xs font-medium mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Andhra Pradesh</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-background mb-2">
                      {destination.name}
                    </h3>

                    <p className="text-background/80 text-sm sm:text-base italic">
                      {destination.tagline}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Hint */}
      {!query && (
        <div className="mt-8 flex justify-center">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 animate-pulse" />
            <span>Scroll to explore</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </p>
        </div>
      )}
    </section>
  );
};

export default Destinations;
