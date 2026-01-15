import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Destinations', href: '/#destinations' },
  { name: 'Hidden Gems', href: '/#gems' },
  { name: 'About', href: '/#about' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">
              TheArchives
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="gradient-forest text-primary-foreground border-0">
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="gradient-forest text-primary-foreground border-0 mt-2">
                Plan Your Trip
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
