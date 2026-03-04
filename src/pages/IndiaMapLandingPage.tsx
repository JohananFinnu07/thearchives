import { motion } from "framer-motion";
import { useEffect } from "react";
import IndiaMap from "@/components/IndiaMap";
import IndiaHeader from "@/components/IndiaHeader";
import AshokaChakra from "@/assets/India/chakra-image.png";
import SaffornImage from "@/assets/India/saffronsection.jpg";
import whiteImage from "@/assets/India/whitesection.jpg";
import greenImage from "@/assets/India/greenLandscape.jpg";

const IndiaMapLandingPage = () => {
  /* Cursor Glow Effect */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#1E2A22]">
      {/* 🇮🇳 Animated Flag Background */}
      <div className="flag-bg fixed inset-0 -z-30" />

      {/* Cursor Glow */}
      <div className="flag-hover fixed inset-0 -z-20 pointer-events-none" />

      <IndiaHeader />

      {/* ===== 3 SECTION GRID ===== */}
      <main className="grid grid-rows-[90vh_auto_90vh] md:grid-rows-[100vh_100vh_100vh]">
        {/* HERO SECTION */}
        <section className="relative h-[100vh] flex items-center justify-center text-center">
          {/* background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${SaffornImage})`,
            }}
          />

          {/* saffron overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF9933]/20 via-[#F4F1EA]/10 to-[#F4F1EA]" />

          {/* text */}
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white drop-shadow-lg">
              The Living <span className="text-[#FFD27F]">Archive</span>
              <br />
              of India
            </h1>

            <p className="mt-8 text-white/90 max-w-xl mx-auto text-lg">
              Discover destinations, hidden gems, traditions and cultural
              systems documented with depth and authenticity.
            </p>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="relative flex flex-col items-center justify-center px-6">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${whiteImage})` }}
          />

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10" />

          {/* Content */}
          <div className="relative z-30 flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-14 text-[#2C2A26]">
              Explore India by State
            </h2>

            <div className="relative flex justify-center items-center">
              {/* Chakra ABOVE overlay */}
              <motion.img
                src={AshokaChakra}
                alt="Ashoka Chakra"
                className="absolute w-[420px] md:w-[520px] lg:w-[620px] opacity-20 chakra-rotate pointer-events-none z-20"
              />

              {/* Map Glow */}
              <div className="absolute w-[650px] h-[650px] bg-[#C6A34F]/10 blur-[160px] rounded-full -z-10" />

              {/* India Map */}
              <div className="relative z-30 w-[90%] md:w-[650px] lg:w-[750px]">
                <IndiaMap />
              </div>
            </div>
          </div>
        </section>
        {/* CURATED SECTION */}
        <section className="relative flex flex-col items-center justify-center text-center px-6">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${greenImage})` }}
          />

          {/* Green overlay */}
          <div className="absolute inset-0 bg-green-900/20 backdrop-blur-[1px]" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-display mb-6 text-white">
              Curated Destinations
            </h2>

            <p className="max-w-xl text-white/90">
              Explore handpicked locations representing India's ecological,
              cultural and artisanal diversity.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-[#4F473B]">
        Cultural Atlas — 28 States & 8 Union Territories
      </footer>
    </div>
  );
};

export default IndiaMapLandingPage;
