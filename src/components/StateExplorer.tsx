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

    const startAutoScroll = () => {
      interval = setInterval(() => {
        container.scrollBy({
          left: 420,
          behavior: "smooth",
        });

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 4000);
    };

    const resetInactivity = () => {
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(() => {
        startAutoScroll();
      }, 7000);
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

    /* Detect user interaction */
    container.addEventListener("wheel", resetInactivity);
    container.addEventListener("touchstart", resetInactivity);
    container.addEventListener("mousedown", resetInactivity);
    container.addEventListener("scroll", resetInactivity);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(inactivityTimer);

      container.removeEventListener("wheel", resetInactivity);
      container.removeEventListener("touchstart", resetInactivity);
      container.removeEventListener("mousedown", resetInactivity);
      container.removeEventListener("scroll", resetInactivity);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#E6F4EA] atlas-texture overflow-hidden"
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
        className="flex gap-10 overflow-x-auto px-12 scroll-smooth scrollbar-hide"
      >
        {states.map((state) => (
          <Link
            key={state.slug}
            to={`/${state.slug}`}
            className="relative min-w-[420px] h-[520px] rounded-3xl overflow-hidden card-hover group block"
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
                {" "}
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
