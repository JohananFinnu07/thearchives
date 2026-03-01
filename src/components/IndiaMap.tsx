import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import indiaMap from "@svg-maps/india";
import { stateData } from "@/data/stateInfo";

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
}
const stateIdToSlug: Record<string, string> = {
  "IN-AP": "andhra-pradesh",
  "IN-TG": "telangana",
};
const IndiaMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
  });

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
      if (tooltip.visible) {
        setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
      }
    },
    [tooltip.visible],
  );

  const handleClick = useCallback(
    (svgId: string) => {
      // Convert "IN-AP" → "ap"
      const shortId = svgId.replace("IN-", "").toLowerCase();

      const state = stateData[shortId];

      if (state) {
        navigate(`/${state.slug}`);
      }
    },
    [navigate],
  );

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseMove={handleMouseMove}
    >
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-md bg-foreground text-background text-sm font-medium shadow-lg transition-opacity duration-150"
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
        className="w-full h-auto"
        aria-label={indiaMap.label}
      >
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
            strokeWidth={0.8}
            onMouseEnter={() => handleMouseEnter(location.id, location.name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(location.id)}
            style={{
              filter:
                hoveredState === location.id
                  ? "drop-shadow(0 2px 6px hsl(var(--map-hover) / 0.4))"
                  : "none",
              transform:
                hoveredState === location.id ? "scale(1.01)" : "scale(1)",
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default IndiaMap;
