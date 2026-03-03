import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import IndiaMap from "@/components/IndiaMap";
import IndiaHeader from "@/components/IndiaHeader";
import IndiaHero from "@/assets/IndiaHero.jpg";
const IndiaMapLandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -80]); // slow parallax
  const scale = useTransform(scrollY, [0, 1000], [1, 1.05]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#1E2A22]">
      {/* ===== Background Image Layer ===== */}
      <motion.div style={{ y, scale }} className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IndiaHero})`,
          }}
        />

        {/* Soft archival overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/90 via-[#ECE6DC]/85 to-[#E5DDD0]/95" />
      </motion.div>

      {/* ===== Content Layer ===== */}
      <div className="relative z-10">
        <IndiaHeader />

        <main className="pt-28 pb-24 px-6">
          {/* HERO SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-28"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              The Living{" "}
              <span className="text-[#C6A34F]">Archive of India</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-[#6B6254] text-lg">
              Discover destinations, hidden gems, traditions and cultural
              systems documented with depth and authenticity.
            </p>
          </motion.section>

          {/* CURATED SECTION (Glass Effect) */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-28"
          >
            <div>
              <h2 className="text-3xl font-semibold text-center mb-10">
                Curated Destinations
              </h2>

              <p className="text-center text-[#6B6254] max-w-2xl mx-auto">
                Explore handpicked locations that represent the ecological,
                cultural and artisanal diversity of India.
              </p>
            </div>
          </motion.section>

          {/* INDIA MAP SECTION */}
          <motion.section
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div>
              <h2 className="text-3xl font-semibold text-center mb-10">
                Explore by State
              </h2>

              <IndiaMap />
            </div>
          </motion.section>
        </main>

        <footer className="text-center py-10 text-sm text-[#6B6254]">
          Cultural Atlas — 28 States & 8 Union Territories
        </footer>
      </div>
    </div>
  );
};

export default IndiaMapLandingPage;
