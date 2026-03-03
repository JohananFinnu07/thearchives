import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom"; // ✅ added useParams
import NavSearch from "@/components/NavSearch";
import { stateConfig } from "@/data/stateConfig"; // ✅ theme source

const navLinks = [
  { name: "Home", href: "/", global: true },
  { name: "Destinations", href: "/destinations" },
  { name: "Hidden Gems", href: "/hidden-gems" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about", global: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { state } = useParams<{ state: string }>();
  const currentState = state ? stateConfig[state] : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prefix = (path: string) => {
    if (!state) return path;
    return `/${state}${path === "/" ? "" : path}`;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300
        ${
          // Increased transparency using /40 and /60 opacities
          currentState
            ? `bg-[#FDFDFB]/60 border-${currentState.theme}/20`
            : isScrolled
              ? "bg-white/70 border-black/5 shadow-sm"
              : "bg-[#FDFDFB]/40 border-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 leading-none">
            <MapPin className="w-6 h-6 text-primary relative top-[1px]" />
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">
              IntoOrigins
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.global ? link.href : prefix(link.href)}
                className="relative text-[17px] font-normal font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* 🔍 Search */}
          <NavSearch />

          {/* CTA Button - Matched to Screenshot */}
          <div className="hidden md:block">
            <Button
              variant="default"
              asChild
              className="
      /* Color: Deep Forest Green */
      bg-[#2D4F3C] hover:bg-[#243f30] text-white border-0 
      
      /* Size & Shape: Large padding and high border radius */
      h-auto py-3 px-6 rounded-[16px] 
      
      /* Typography: Matches the clean, slightly bold look */
      text-[14px] font-medium tracking-tight
      
      /* Interaction */
      transition-all duration-300 shadow-sm active:scale-95
    "
            >
              <Link to={prefix("/destinations")}>Start Exploring</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.global ? link.href : prefix(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground py-2 font-medium"
                >
                  {link.name}
                </Link>
              ))}

              <Button
                variant="default"
                className="bg-[#228B22] hover:bg-[#1B6E1B] text-white border-0 mt-2"
                asChild
              >
                <Link to={prefix("/destinations")}>Start Exploring</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Header;
