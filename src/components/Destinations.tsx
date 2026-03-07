import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { allDestinations } from "@/data/destinations";
import { Destination } from "@/data/types";
import { stateConfig } from "@/data/stateConfig";

interface DestinationsProps {
  destinations?: Destination[];
}

const Destinations: React.FC<DestinationsProps> = ({ destinations }) => {
  const { state } = useParams<{ state: string }>();

  const data = destinations ?? allDestinations;
  const currentState = state ? stateConfig[state] : null;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* Scroll arrow visibility */
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
    if (!container) return;

    container.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  /* Manual scroll buttons */
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
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
      }, 1800);
    };

    const resetInactivity = () => {
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      syncIndexWithScroll();

      inactivityTimer = setTimeout(() => {
        startAutoScroll();
      }, 2500);
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

    /* Detect user scroll direction */
    const detectDirection = () => {
      const currentScroll = container.scrollLeft;

      if (currentScroll > lastScrollLeft) {
        direction = 1;
      } else if (currentScroll < lastScrollLeft) {
        direction = -1;
      }

      lastScrollLeft = currentScroll;
    };

    /* Pause on hover / touch */
    const pause = () => clearInterval(interval);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("touchstart", pause);

    /* Track scroll direction */
    container.addEventListener("scroll", detectDirection);

    /* Restart after inactivity */
    container.addEventListener("wheel", resetInactivity);
    container.addEventListener("mousedown", resetInactivity);
    container.addEventListener("scroll", resetInactivity);

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
  /* ===================================================== */

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path}`;
  };

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-24 lg:py-34 bg-background overflow-hidden"
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
            Authentic Destinations in <br />
            <span className="italic text-primary">
              {currentState?.name || "India"}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Discover destinations shaped by culture, craft, and tradition —
            living landscapes of heritage.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scroll Arrows */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: canScrollLeft ? 1 : 0 }}
          onClick={() => scroll("left")}
          className="hidden absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-elevated flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: canScrollRight ? 1 : 0 }}
          onClick={() => scroll("right")}
          className="hidden absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-elevated flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-8 lg:px-16 pb-4 scrollbar-hide"
        >
          {data.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="flex-shrink-0 snap-center state-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={prefix(`/destination/${destination.slug}`)}
                className="group block relative w-[320px] sm:w-[400px] lg:w-[480px] h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {currentState?.name || "India"}
                  </div>

                  <h3 className="font-serif text-3xl">{destination.name}</h3>

                  <p className="text-white/80 italic mt-1">
                    {destination.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
