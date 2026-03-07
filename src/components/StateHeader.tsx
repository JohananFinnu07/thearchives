import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavSearch from "@/components/NavSearch";
import { stateConfig } from "@/data/stateConfig";
import { useActiveState } from "@/hooks/use-ActiveState";

const StateHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeState = useActiveState();
  const currentState = activeState ? stateConfig[activeState] : null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Hidden Gems", href: "/hidden-gems" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about", global: true },
  ];

  const prefix = (path: string) => {
    if (!activeState) return path;

    if (path === "/") {
      return `/${activeState}`;
    }

    return `/${activeState}${path}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        currentState
          ? "bg-[#FDFDFB]/60"
          : isScrolled
            ? "bg-white/70 shadow-sm"
            : "bg-[#FDFDFB]/40"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to={activeState ? `/${activeState}` : "/"}
          className="flex items-center gap-2"
        >
          <MapPin className="w-6 h-6 text-primary" />
          <span className="font-serif text-xl font-semibold">IntoOrigins</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.global ? link.href : prefix(link.href)}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <NavSearch />

        {/* CTA */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to={prefix("/destinations")}>Start Exploring</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.global ? link.href : prefix(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default StateHeader;
