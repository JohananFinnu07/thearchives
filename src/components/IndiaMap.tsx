import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import indiaMap from "@svg-maps/india";

interface StateLabel {
  visible: boolean;
  x: number;
  y: number;
  name: string;
}

const IndiaMap = () => {
  const navigate = useNavigate();

  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState<string | null>(null);

  const [stateLabel, setStateLabel] = useState<StateLabel>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Hover state */
  const handleMouseEnter = useCallback(
    (id: string, name: string, e: React.MouseEvent<SVGPathElement>) => {
      if (hoveredState === id) return;

      const bbox = e.currentTarget.getBBox();

      const centerX = bbox.x + bbox.width / 2;
      const topY = bbox.y;

      setHoveredState(id);

      setStateLabel({
        visible: true,
        x: centerX,
        y: topY,
        name,
      });
    },
    [hoveredState],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredState(null);
    setStateLabel((prev) => ({ ...prev, visible: false }));
  }, []);

  /* Routing */
  const handleClick = (id: string, name: string) => {
    const mapping: Record<string, string> = {
      ap: "andhra-pradesh",
      tg: "telangana",
      an: "andaman",
      ar: "ar",
      as: "as",
      br: "br",
      ct: "ct",
      ga: "ga",
      gj: "gj",
      hr: "hr",
      hp: "hp",
      jh: "jh",
      ka: "ka",
      kl: "kl",
      mp: "mp",
      mh: "mh",
      mn: "mn",
      ml: "ml",
      mz: "mz",
      nl: "nl",
      or: "or",
      pb: "pb",
      rj: "rj",
      sk: "sk",
      tn: "tn",
      tr: "tr",
      up: "up",
      ut: "ut",
      wb: "wb",
      dl: "dl",
      jk: "jk",
    };

    const slug = mapping[id];

    if (slug) {
      setIsTransitioning(name);

      setTimeout(() => {
        navigate(`/${slug}`);
      }, 400);
    }
  };

  return (
    <>
      {/* Compass Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
          >
            <div className="relative flex flex-col items-center">
              <motion.svg
                viewBox={indiaMap.viewBox}
                className="absolute w-[340px] opacity-20"
              >
                <motion.path
                  d={indiaMap.outline}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  animate={{ opacity: [0.15, 0.4, 0.15] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
              </motion.svg>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="text-5xl mb-8"
              >
                🧭
              </motion.div>

              <h2 className="text-3xl font-bold tracking-tight">
                Into <span className="text-primary">{isTransitioning}</span>
              </h2>

              <p className="mt-2 text-muted-foreground text-sm">
                Discovering culture, places & origins
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Container */}
      <div
        className="
        relative 
        w-full 
        max-w-[95vw] 
        md:max-w-3xl 
        mx-auto 
        px-2 
        sm:px-4 
        scale-[1.15] 
        sm:scale-100
        "
        style={{ perspective: "900px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={indiaMap.viewBox}
          className="w-full h-auto drop-shadow-xl"
          aria-label={indiaMap.label}
        >
          {/* India Borders */}
          <path
            d={indiaMap.outline}
            fill="none"
            stroke="#ffffff"
            strokeWidth={3}
            className="pointer-events-none"
          />

          <path
            d={indiaMap.outline}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={1.5}
            className="pointer-events-none"
          />

          {/* States */}
          {indiaMap.locations.map((location) => (
            <path
              key={location.id}
              d={location.path}
              className="cursor-pointer"
              fill={
                hoveredState === location.id
                  ? "hsl(var(--map-hover))"
                  : "hsl(var(--map-default))"
              }
              stroke="hsl(var(--map-stroke))"
              strokeWidth={isMobile ? 2.2 : 0.8}
              style={{
                transition:
                  "transform 0.35s cubic-bezier(0.22,1,0.36,1), filter 0.35s",
                transform:
                  hoveredState === location.id
                    ? "translateY(-8px) rotateX(4deg)"
                    : "translateY(0) rotateX(0deg)",
                transformOrigin: "center",
                filter:
                  hoveredState === location.id
                    ? "drop-shadow(0 14px 18px rgba(0,0,0,0.35)) brightness(1.05)"
                    : "none",
              }}
              onMouseEnter={(e) =>
                !isMobile && handleMouseEnter(location.id, location.name, e)
              }
              onMouseLeave={() => !isMobile && handleMouseLeave()}
              onClick={(e) => {
                const bbox = e.currentTarget.getBBox();

                setHoveredState(location.id);

                setStateLabel({
                  visible: true,
                  x: bbox.x + bbox.width / 2,
                  y: bbox.y,
                  name: location.name,
                });

                handleClick(location.id, location.name);
              }}
            />
          ))}

          {/* STATE LABEL */}
          <AnimatePresence>
            {stateLabel.visible && (
              <motion.g
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 15 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                pointerEvents="none"
              >
                <rect
                  x={stateLabel.x - 70}
                  y={stateLabel.y - 40}
                  width="140"
                  height="30"
                  rx="8"
                  fill="rgba(15,15,15,0.9)"
                />

                <text
                  x={stateLabel.x}
                  y={stateLabel.y - 20}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                >
                  {stateLabel.name}
                </text>
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </div>
    </>
  );
};

export default IndiaMap;
