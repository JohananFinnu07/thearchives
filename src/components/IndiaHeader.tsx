import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import NavSearch from "@/components/NavSearch";

const IndiaHeader = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
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

          {/* Center Tagline (Optional but nice for India view) */}
          <div className="hidden md:block text-sm text-muted-foreground">
            Discover India’s Hidden Origins
          </div>

          {/* Search */}
          {/*<NavSearch />*/}
        </div>
      </div>
    </motion.header>
  );
};

export default IndiaHeader;
