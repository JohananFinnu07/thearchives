import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import IndiaMap from "@/components/IndiaMap";
import IndiaHeader from "@/components/IndiaHeader";

import AshokaChakra from "@/assets/India/chakra-image.png";
import SaffornImage from "@/assets/India/saffronsection.jpg";
import whiteImage from "@/assets/India/whitesection.jpg";
import greenImage from "@/assets/India/greenLandscape.jpg";
import heroVideo from "@/assets/India/heroBV.mp4";

import {
  Leaf,
  Mountain,
  UtensilsCrossed,
  Landmark,
  ArrowLeft,
} from "lucide-react";
import { Compass, Church, Map, Globe, BookOpen } from "lucide-react";
import StateExplorer from "@/components/StateExplorer";
import SeasonExplorer from "@/components/SeasonExplorer";

const IndiaMapLandingPage = () => {
  const heroRef = useRef(null);
  const location = useLocation();
  const section2Ref = useRef<HTMLDivElement | null>(null);
  /* Cursor Glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  useEffect(() => {
    if (location.state?.scrollTo === "india-map") {
      setTimeout(() => {
        if (section2Ref.current) {
          const y =
            section2Ref.current.getBoundingClientRect().top +
            window.pageYOffset -
            80;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      }, 200);
    }
  }, [location]);
  /* Hero cinematic scroll fade */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.05) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const keywords = [
    "Hidden Foods",
    "Lost Crafts",
    "Tribal Markets",
    "Sacred Landscapes",
    "Village Traditions",
  ];
  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#1E2A22]">
      {/* Animated background */}
      <div className="flag-bg fixed inset-0 -z-30" />
      <div className="flag-hover fixed inset-0 -z-20 pointer-events-none" />

      <IndiaHeader />

      {/* ================= PAGE CONTENT ================= */}

      <main className="flex flex-col">
        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-[90vh] md:min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-5 md:px-6 pt-24 md:pt-28 pb-24 md:pb-[30vh] overflow-hidden"
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            className="absolute -bottom-8 inset-x-0 w-full h-[110%] object-cover scale-110 translate-y-[2%] pointer-events-none"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Floating cultural icons (hidden on mobile) */}
          <div className="absolute inset-0 z-10 hidden md:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="absolute top-[20%] left-[12%] text-white/40 group cursor-pointer"
            >
              <Leaf size={36} />

              <span
                className="absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap
        bg-black/70 text-white text-xs px-3 py-1 rounded-md
        opacity-0 group-hover:opacity-100 transition"
              >
                Tribal Produce
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 10 }}
              className="absolute top-[35%] right-[10%] text-white/40 group cursor-pointer"
            >
              <Mountain size={40} />

              <span
                className="absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap
        bg-black/70 text-white text-xs px-3 py-1 rounded-md
        opacity-0 group-hover:opacity-100 transition"
              >
                Sacred Landscapes
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 9 }}
              className="absolute bottom-[30%] left-[18%] text-white/40 group cursor-pointer"
            >
              <UtensilsCrossed size={34} />

              <span
                className="absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap
        bg-black/70 text-white text-xs px-3 py-1 rounded-md
        opacity-0 group-hover:opacity-100 transition"
              >
                Hidden Foods
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 11 }}
              className="absolute bottom-[22%] right-[14%] text-white/40 group cursor-pointer"
            >
              <Landmark size={38} />

              <span
                className="absolute left-1/2 -translate-x-1/2 top-12 whitespace-nowrap
        bg-black/70 text-white text-xs px-3 py-1 rounded-md
        opacity-0 group-hover:opacity-100 transition"
              >
                Heritage Crafts
              </span>
            </motion.div>
          </div>
          {/* Hero Content */}
          <div className="relative z-20 max-w-md sm:max-w-lg md:max-w-4xl mx-auto flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold drop-shadow-lg leading-[1.2]"
            >
              <span className="text-white block mt-2">
                The Living <span className="text-[#FFD27F]">Archive</span> of
                Origins
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 md:mt-8 max-w-sm sm:max-w-md md:max-w-xl mx-auto text-base md:text-lg leading-relaxed text-[#F8F5EF] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            >
              India is not a single story, but a million origins.
              <span className="text-[#FFD27F]">
                {" "}
                We trace the threads of culture, craft, and cuisine
              </span>{" "}
              that define our diverse landscapes — honoring the centuries of
              knowledge that breathe within every state.
            </motion.p>

            {/* Keywords */}
            <motion.div
              className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm md:text-base text-[#D8CBB5]/90 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span>Hidden Foods</span>
              <span className="opacity-50">·</span>
              <span>Lost Crafts</span>
              <span className="opacity-50">·</span>
              <span>Tribal Markets</span>
              <span className="opacity-50">·</span>
              <span>Sacred Landscapes</span>
              <span className="opacity-50">·</span>
              <span>Village Traditions</span>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 md:mt-10 flex flex-col items-center gap-2 text-white/80"
            >
              <span className="text-[10px] md:text-xs tracking-widest">
                SCROLL TO EXPLORE
              </span>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              >
                🧭
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        {/* SECTION 2*/}
        <section
          ref={section2Ref}
          className="relative flex items-center justify-center min-h-[100vh] md:min-h-[15vh] lg:min-h-[180vh] px-6 overflow-visible"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${whiteImage})` }}
          />
          {/* Desktop Instruction set */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.9 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            className="hidden md:block relative z-20 text-center max-w-3xl mx-auto mb-6 md:mb-16 px-6 py-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg"
          >
            <p className="text-xs md:text-sm tracking-[0.35em] text-[#2C2A26]/70">
              TAP A STATE TO
            </p>

            <h2 className="mt-3 text-2xl md:text-4xl lg:text-5xl font-serif text-[#2C2A26] leading-tight">
              Step Into Its <span className="text-[#C6A34F]">Origins</span>
            </h2>
          </motion.div>
          {/* Center container */}
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="block md:hidden absolute -top-10 left-0 right-0 flex justify-center"
            >
              <div className="w-[90%] text-center px-5 py-4 rounded-xl bg-white/30 backdrop-blur-md shadow-md">
                <p className="text-[11px] tracking-[0.35em] text-[#2C2A26]/70">
                  TAP A STATE TO
                </p>

                <h2 className="mt-1 text-xl font-serif text-[#2C2A26] leading-tight">
                  Enter Into <span className="text-[#C6A34F]">Origins</span>
                </h2>
              </div>
            </motion.div>
            {/* Ashoka Chakra */}
            <motion.img
              src={AshokaChakra}
              alt="Ashoka Chakra"
              className="absolute w-[520px] md:w-[620px] lg:w-[720px] opacity-20 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 80,
                ease: "linear",
              }}
            />

            {/* Glow */}
            <div className="absolute w-[760px] h-[760px] bg-[#C6A34F]/10 blur-[200px] rounded-full" />

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-[95vw] max-w-[820px] pt-16 md:pt-0"
            >
              <IndiaMap />
            </motion.div>
          </div>
        </section>
        {/* SECTION 3 */}
        <section className="relative py-15 px-4 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${greenImage})` }}
          />

          {/* Glass blur layer */}
          <div className="absolute inset-0 backdrop-blur-[8px] bg-white/7" />

          {/* Subtle raindrops */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute w-6 h-6 rounded-full bg-white/25 blur-[2px] top-[20%] left-[25%]" />
            <div className="absolute w-4 h-4 rounded-full bg-white/20 blur-[1px] top-[40%] left-[60%]" />
            <div className="absolute w-5 h-5 rounded-full bg-white/25 blur-[2px] top-[65%] left-[35%]" />
            <div className="absolute w-4 h-4 rounded-full bg-white/20 blur-[1px] top-[50%] right-[20%]" />
            <div className="absolute w-6 h-6 rounded-full bg-white/25 blur-[2px] bottom-[25%] right-[40%]" />
          </div>

          {/* Soft light reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <StateExplorer />
          </div>
        </section>
        <SeasonExplorer />
      </main>
      <footer className="bg-[#1F3D35] text-[#F4F1EA] mt-24 border-t border-[#2E5248]">
        {/* Top Statistics */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center py-10 border-b border-[#2E5248]">
          <div>
            <h2 className="text-5xl font-bold text-[#C6A34F]">
              <span className="font-mono">28</span>
            </h2>
            <p className="text-xs tracking-[0.35em] text-[#D7D2C8] mt-3">
              STATES
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#C6A34F]">
              <span className="font-mono">8</span>
            </h2>
            <p className="text-xs tracking-[0.35em] text-[#D7D2C8] mt-3">
              UNION TERRITORIES
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#C6A34F]">
              <span className="font-mono">100+</span>
            </h2>
            <p className="text-xs tracking-[0.35em] text-[#D7D2C8] mt-3">
              CULTURAL STORIES
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center py-8 px-6">
          <p className="max-w-2xl mx-auto text-sm text-[#D7D2C8] italic">
            “Step into the origins. Discover the hidden pulse of India.”
          </p>

          <p className="mt-6 text-xs tracking-[0.3em] text-[#AFA89D] uppercase">
            INTOORIGINS — Cultural Atlas of India
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-[#AFA89D] pb-6">
          © {new Date().getFullYear()} IntoOrigins — All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default IndiaMapLandingPage;
