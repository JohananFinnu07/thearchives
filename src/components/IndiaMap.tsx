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
  ld: "ld",
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

const IndiaMap = () => {
  const navigate = useNavigate();

  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [activeDot, setActiveDot] = useState<string | null>(null);
  const [introDot, setIntroDot] = useState<string | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState<string | null>(null);

  const [showDots, setShowDots] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("map-mode") === "dots";
    }
    return false;
  });

  const [dots, setDots] = useState<
    { id: string; name: string; x: number; y: number }[]
  >([]);

  const [stateLabel, setStateLabel] = useState<StateLabel>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  /* Save map mode */
  useEffect(() => {
    localStorage.setItem("map-mode", showDots ? "dots" : "map");
  }, [showDots]);

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Generate dot positions */
  useEffect(() => {
    if (!showDots) return;

    const newDots: any[] = [];

    indiaMap.locations.forEach((state) => {
      if (!mapping[state.id]) return;

      const path = document.querySelector(
        `path[d="${state.path}"]`,
      ) as SVGPathElement;

      if (!path) return;

      const bbox = path.getBBox();

      newDots.push({
        id: state.id,
        name: state.name,
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2,
      });
    });

    setDots(newDots);
  }, [showDots]);

  /* Intro highlight */
  useEffect(() => {
    if (!showDots || dots.length === 0) return;

    const randomIndex = Math.floor(Math.random() * dots.length);
    const randomDot = dots[randomIndex];

    setIntroDot(randomDot.id);

    const timer = setTimeout(() => {
      setIntroDot(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dots, showDots]);

  /* Hover logic */
  const handleMouseEnter = useCallback(
    (id: string, name: string, e: React.MouseEvent<SVGPathElement>) => {
      if (hoveredState === id || showDots) return;

      const bbox = e.currentTarget.getBBox();

      setHoveredState(id);

      setStateLabel({
        visible: true,
        x: bbox.x + bbox.width / 2,
        y: bbox.y,
        name,
      });
    },
    [hoveredState, showDots],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredState(null);
    setStateLabel((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleNavigate = (id: string, name: string) => {
    const slug = mapping[id];
    if (!slug) return;

    setIsTransitioning(name);

    setTimeout(() => {
      navigate(`/${slug}`);
    }, 400);
  };

  return (
    <>
      {/* Transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="text-5xl mb-6"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10 }}
              >
                🧭
              </motion.div>

              <h2 className="text-3xl font-bold">
                Into <span className="text-primary">{isTransitioning}</span>
              </h2>

              <p className="text-sm text-muted-foreground mt-2">
                Discovering culture, places & origins
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instruction */}
      {showDots && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mb-3"
        >
          <p className="text-xs tracking-wide text-[#2C2A26]/70 bg-[#F7EED7] backdrop-blur px-3 py-1 rounded-full">
            Tap a discovery point — select the name to enter{" "}
          </p>
        </motion.div>
      )}

      {/* Map */}
      <div className="relative w-full max-w-[1100px] lg:max-w-[1300px] mx-auto px-4 py-8">
        <svg
          viewBox={indiaMap.viewBox}
          className="w-full h-auto overflow-visible"
          onClick={() => setActiveDot(null)}
        >
          <defs>
            <filter id="mapGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Outline */}
          <path
            d={indiaMap.outline}
            fill="none"
            stroke="#ffffff"
            strokeWidth={3}
          />

          {/* States */}
          {indiaMap.locations.map((location) => (
            <path
              key={location.id}
              d={location.path}
              fill={
                hoveredState === location.id
                  ? "hsl(var(--map-hover))"
                  : "hsl(var(--map-default))"
              }
              stroke="hsl(var(--map-stroke))"
              strokeWidth={isMobile ? 3 : 0.8}
              className={showDots ? "pointer-events-none" : "cursor-pointer"}
              onMouseEnter={(e) =>
                !isMobile &&
                !showDots &&
                handleMouseEnter(location.id, location.name, e)
              }
              onMouseLeave={() => !isMobile && handleMouseLeave()}
              onClick={() => {
                if (!showDots) {
                  handleNavigate(location.id, location.name);
                }
              }}
            />
          ))}

          {/* Hover label */}
          <AnimatePresence>
            {stateLabel.visible && (
              <motion.g
                key={stateLabel.name}
                initial={{ opacity: 0, y: 14, scale: 0.8 }}
                animate={{ opacity: 1, y: -4, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.85 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                }}
                style={{ pointerEvents: "none" }}
              >
                {/* Light Gold background */}
                <rect
                  x={stateLabel.x - 75}
                  y={stateLabel.y - 46}
                  width="150"
                  height="32"
                  rx="10"
                  fill="#C6A34F"
                  stroke="#C6A34F"
                  strokeWidth="1"
                />

                {/* Pointer triangle */}
                <polygon
                  points={`
          ${stateLabel.x - 7},${stateLabel.y - 14}
          ${stateLabel.x + 7},${stateLabel.y - 14}
          ${stateLabel.x},${stateLabel.y - 6}
        `}
                  fill="#C6A34F"
                  stroke="#C6A34F"
                  strokeWidth="1"
                />

                {/* State name */}
                <text
                  x={stateLabel.x}
                  y={stateLabel.y - 26}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="600"
                  style={{ letterSpacing: "0.4px" }}
                >
                  {stateLabel.name}
                </text>
              </motion.g>
            )}
          </AnimatePresence>

          {/* Dots */}
          {showDots &&
            dots.map((dot, i) => (
              <motion.g
                key={dot.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDot((prev) => (prev === dot.id ? null : dot.id));
                }}
                className="cursor-pointer"
              >
                {/* Ripple */}
                <motion.circle
                  cx={dot.x}
                  cy={dot.y}
                  r={14}
                  fill="rgba(198,163,79,0.15)"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />

                <circle cx={dot.x} cy={dot.y} r={7} fill="#C6A34F" />
                {/* Dot */}
                <circle cx={dot.x} cy={dot.y} r={7} fill="#C6A34F" />

                {/* Floating label */}
                <AnimatePresence>
                  {(activeDot === dot.id || introDot === dot.id) && (
                    <motion.g
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: -8 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ type: "spring", stiffness: 260 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(dot.id, dot.name);
                      }}
                    >
                      <rect
                        x={dot.x - 70}
                        y={dot.y - 46}
                        width="140"
                        height="28"
                        rx="10"
                        fill="#EAD7A1"
                      />
                      <text
                        x={dot.x}
                        y={dot.y - 28}
                        textAnchor="middle"
                        fill="#2C2A26"
                        fontSize="12"
                        fontWeight="600"
                      >
                        {dot.name}
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </motion.g>
            ))}
        </svg>
        {/* Buttons */}
        {isMobile && !showDots && (
          <div className="flex justify-center mb-3">
            <button
              onClick={() => setShowDots(true)}
              className="px-4 py-2 rounded-full bg-[#C6A34F] text-white text-sm shadow"
            >
              View States
            </button>
          </div>
        )}

        {showDots && (
          <div className="flex justify-center mb-3">
            <button
              onClick={() => setShowDots(false)}
              className="px-4 py-2 rounded-full bg-white/70 backdrop-blur text-sm shadow"
            >
              Back to Map
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default IndiaMap;
