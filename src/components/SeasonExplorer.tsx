import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import winter from "@/assets/Seasons/winterSeason.jpg";
import summer from "@/assets/Seasons/SummerSeason.jpg";
import monsoon from "@/assets/Seasons/MonsoonSeason.jpeg";
import spring from "@/assets/Seasons/SpringSeason.jpg";

const seasons = [
  {
    name: "Winter",
    states: [
      { name: "Kashmir", path: "/jk" },
      { name: "Rajasthan", path: "/rj" },
      { name: "Gujarat", path: "/gj" },
    ],
    image: winter,
  },
  {
    name: "Summer",
    states: [
      { name: "Himachal", path: "/hp" },
      { name: "Uttarakhand", path: "/ut" },
      { name: "Sikkim", path: "/sk" },
    ],
    image: summer,
  },
  {
    name: "Monsoon",
    states: [
      { name: "Kerala", path: "/kl" },
      { name: "Meghalaya", path: "/ml" },
      { name: "Karnataka", path: "/ka" },
    ],
    image: monsoon,
  },
  {
    name: "Spring",
    states: [
      { name: "Punjab", path: "/pb" },
      { name: "Nagaland", path: "/nl" },
      { name: "Sikkim", path: "/sk" },
    ],
    image: spring,
  },
];

function getCurrentSeason() {
  const m = new Date().getMonth() + 1;

  if ([11, 12, 1, 2].includes(m)) return "Winter";
  if ([3, 4, 5, 6].includes(m)) return "Summer";
  if ([7, 8, 9].includes(m)) return "Monsoon";
  return "Spring";
}

export default function SeasonExplorer() {
  const navigate = useNavigate();
  const currentSeason = getCurrentSeason();

  return (
    <section className="py-28 px-6 bg-[#E6F2FF]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1F3D35]">
          Enter Into <span className="text-[#C6A34F]">Origins by Season</span>
        </h2>

        <p className="mt-4 text-[#5B5B5B] max-w-xl mx-auto">
          Discover where India reveals its landscapes and cultural stories
          throughout the year.
        </p>
      </div>

      {/* Season Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {seasons.map((season) => {
          const active = season.name === currentSeason;

          return (
            <div
              key={season.name}
              className={`relative h-[360px] rounded-2xl overflow-hidden shadow-lg group transition
              ${
                active
                  ? "ring-4 ring-[#C6A34F] scale-[1.02] shadow-[0_0_40px_rgba(198,163,79,0.6)]"
                  : ""
              }`}
            >
              {/* Background Image */}
              <img
                src={season.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Season Title */}
              <div
                className={`absolute top-6 left-6 text-2xl font-serif
                ${active ? "text-[#FFD27F]" : "text-white"}`}
              >
                {season.name}
              </div>

              {/* Active Badge */}
              {active && (
                <div className="absolute top-6 right-6 bg-[#C6A34F] text-white text-xs px-3 py-1 rounded-full">
                  Now Discovering
                </div>
              )}

              {/* Destinations */}
              <div className="absolute bottom-10 left-6 flex flex-wrap gap-3">
                {season.states.map((state, i) => (
                  <motion.button
                    key={state.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate(state.path)}
                    className={`px-3 py-1 text-sm rounded-full shadow transition
                    ${
                      active
                        ? "bg-[#C6A34F] text-white hover:bg-white hover:text-[#1F3D35]"
                        : "bg-white/90 text-[#1F3D35] hover:bg-[#C6A34F] hover:text-white"
                    }`}
                  >
                    {state.name}
                  </motion.button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
