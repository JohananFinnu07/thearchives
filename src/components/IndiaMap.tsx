import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import indiaMap from "@svg-maps/india";

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
}

const IndiaMap = () => {
  const navigate = useNavigate();

  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = useCallback((id: string, name: string) => {
    setHoveredState(id);
    setTooltip((prev) => ({ ...prev, visible: true, name }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredState(null);
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (tooltip.visible && !isMobile) {
        setTooltip((prev) => ({
          ...prev,
          x: e.clientX,
          y: e.clientY,
        }));
      }
    },
    [tooltip.visible, isMobile],
  );

  const handleClick = (svgId: string) => {
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

    const slug = mapping[svgId];

    if (slug) {
      navigate(`/${slug}`);
    }
  };

  return (
    <div
      className="relative w-full max-w-[95vw] md:max-w-3xl mx-auto"
      onMouseMove={handleMouseMove}
    >
      {/* Tooltip (desktop only) */}
      {tooltip.visible && !isMobile && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium shadow-lg"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 10,
          }}
        >
          {tooltip.name}
        </div>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={indiaMap.viewBox}
        className="w-full h-auto drop-shadow-xl"
        aria-label={indiaMap.label}
      >
        {/* India outer glow border */}
        <path
          d={indiaMap.outline}
          fill="none"
          stroke="#ffffff"
          strokeWidth={3}
          className="pointer-events-none"
        />

        {/* India primary border */}
        <path
          d={indiaMap.outline}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth={1.5}
          className="pointer-events-none"
        />

        {indiaMap.locations.map((location) => (
          <path
            key={location.id}
            id={location.id}
            d={location.path}
            className="cursor-pointer transition-all duration-300 ease-out"
            fill={
              hoveredState === location.id
                ? "hsl(var(--map-hover))"
                : "hsl(var(--map-default))"
            }
            stroke="hsl(var(--map-stroke))"
            strokeWidth={isMobile ? 1.5 : 0.8}
            pointerEvents="visiblePainted"
            style={{
              transition: "all 0.3s ease",
              filter:
                hoveredState === location.id
                  ? "drop-shadow(0 6px 12px rgba(0,0,0,0.3))"
                  : "none",
              transform:
                hoveredState === location.id ? "scale(1.02)" : "scale(1)",
              transformOrigin: "center",
            }}
            onMouseEnter={() =>
              !isMobile && handleMouseEnter(location.id, location.name)
            }
            onMouseLeave={() => !isMobile && handleMouseLeave()}
            onClick={() => {
              if (isMobile) {
                setHoveredState(location.id);
              }
              handleClick(location.id);
            }}
          />
        ))}
      </svg>

      {/* Mobile state label */}
      {isMobile && hoveredState && (
        <div className="mt-4 text-center text-lg font-semibold text-primary">
          {indiaMap.locations.find((l) => l.id === hoveredState)?.name}
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
