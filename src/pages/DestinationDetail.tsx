import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Thermometer,
  Calendar,
  Mountain,
  Sparkles,
  Star,
} from "lucide-react";
import { getDestinationById } from "@/data/destinations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = getDestinationById(id || "");
  const destinationRecipes = recipes.filter(
    (recipe) => recipe.destination === destination.name,
  );
  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">
            Destination Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const famousProducts = destination.products.filter(
    (p) => p.type === "famous",
  );
  const underratedProducts = destination.products.filter(
    (p) => p.type === "underrated",
  );
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const slug = destination.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 left-4 sm:left-8 lg:left-16"
        >
          <Link
            to="/destinations"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Destinations</span>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-16 pb-10 sm:pb-14 lg:pb-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 text-sage mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium tracking-wide uppercase">
                  Andhra Pradesh, India
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3 leading-tight">
                {destination.name}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-xl leading-relaxed mb-6">
                {destination.heroDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3 sm:gap-6">
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Mountain className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-xs sm:text-sm">
                    {destination.elevation}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Thermometer className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-xs sm:text-sm">
                    {destination.temperature}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-xs sm:text-sm">
                    {destination.bestTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              About {destination.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {destination.about}
            </p>
            {/* Section Quick Links */}
            {/* Section Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("famous")}
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Famous
              </button>

              <button
                onClick={() => scrollToSection("underrated")}
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Underrated
              </button>

              <button
                onClick={() => scrollToSection("recipes")}
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Recipes
              </button>

              <button
                onClick={() => scrollToSection("culture")}
                className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition"
              >
                Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Famous Products Section */}
      <section id="famous" className="py-16 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                Renowned Treasures
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Famous Products of {destination.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover the celebrated items that have put this region on the
              map.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {famousProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Underrated Products Section */}
      <section
        id="underrated"
        className="py-16 lg:py-24 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                Hidden Treasures
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Underrated <span className="italic text-primary">Gems</span> to
              Discover
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Lesser-known products that locals cherish but few visitors know
              about.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {underratedProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Recipes Section */}
      <section id="recipes" className="py-16 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                The Action
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Traditional Recipes of {destination.name}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover how local ingredients transform into unforgettable
              dishes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinationRecipes.map((recipe) => (
              <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section
        id="culture"
        className="py-16 lg:py-24 bg-background scroll-mt-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-accent" />
              <p className="text-accent font-medium tracking-widest uppercase text-sm">
                The Live Experience
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Culture & Traditions
            </h2>
            <p className="text-muted-foreground text-lg max-w-5xl leading-relaxed">
              {destination.culture}
            </p>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 lg:py-24 gradient-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to Explore {destination.name}?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Plan your journey to discover these treasures firsthand and
              support local communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
              >
                Explore More Destinations
              </Link>

              <Link
                to={`/gallery/${slug}`}
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
              >
                Explore {destination.name}'s Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationDetail;
