import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { stateConfig } from "@/data/stateConfig";

const states = Object.values(stateConfig);

const StateExplorer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    let interval: NodeJS.Timeout;
    let inactivityTimer: NodeJS.Timeout;
    let observer: IntersectionObserver;

    let index = 0;
    let direction = 1;

    const getCardWidth = () => {
      const card = container.querySelector(".state-card") as HTMLElement;
      if (!card) return 0;

      const gap =
        parseInt(
          window.getComputedStyle(container).columnGap.replace("px", ""),
        ) || 24;

      return card.offsetWidth + gap;
    };

    const startAutoScroll = () => {
      clearInterval(interval);

      interval = setInterval(() => {
        const cards = container.querySelectorAll(".state-card");

        if (!cards.length) return;

        const cardWidth = getCardWidth();

        index += direction;

        if (index >= cards.length - 1) {
          direction = -1;
        }

        if (index <= 0) {
          direction = 1;
        }

        container.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }, 400);
    };

    const resetInactivity = () => {
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(() => {
        startAutoScroll();
      }, 2000);
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

    /* Pause on user interaction */
    const pause = () => clearInterval(interval);

    container.addEventListener("mouseenter", pause);
    container.addEventListener("touchstart", pause);

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

      container.removeEventListener("wheel", resetInactivity);
      container.removeEventListener("mousedown", resetInactivity);
      container.removeEventListener("scroll", resetInactivity);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 atlas-texture overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <p className="text-xs tracking-[0.35em] uppercase text-[#2C2A26]/70">
          Atlas Explorer
        </p>

        <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#2C2A26]">
          Begin with a Region
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-sm text-[#2C2A26]/70">
          Each state reveals landscapes, traditions and cultural systems waiting
          to be explored through the archive.
        </p>
      </div>

      {/* Horizontal Cards */}
      <div
        ref={containerRef}
        className="flex gap-6 md:gap-10 overflow-x-auto px-[7.5vw] md:px-12 scroll-smooth scrollbar-hide snap-x snap-mandatory"
      >
        {states.map((state) => (
          <Link
            key={state.slug}
            to={`/${state.slug}`}
            className="state-card snap-center relative min-w-[85vw] md:min-w-[420px] h-[520px] rounded-3xl overflow-hidden group block
            shadow-[0_0_40px_rgba(255,255,255,0.15)]
            before:absolute before:inset-0 before:rounded-3xl
            before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]
            before:opacity-60 before:pointer-events-none"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${state.heroImage})`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-serif tracking-wide">
                {state.name}
              </h3>

              <span className="mt-4 inline-flex items-center justify-center text-xs tracking-[0.25em] border border-white/60 px-6 py-2 rounded-full group-hover:bg-white group-hover:text-black transition">
                Step Into {state.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StateExplorer;
