import { motion } from "framer-motion";
import { Gem, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

// Get destinations with underrated products count
const destinationsWithGems = destinations
  .map((dest) => ({
    ...dest,
    gemsCount: dest.products.filter((p) => p.type === "underrated").length,
    famousCount: dest.products.filter((p) => p.type === "famous").length,
  }))
  .filter((dest) => dest.gemsCount > 0);

const HiddenGemsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-8"
            >
              <Gem className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">
                What Survives Locally
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Treasures That{" "}
              <span className="text-primary italic">Never Left</span>
              <br />
              Their Villages
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The finest spices stay with the farmers who grew them. The purest
              honey never reaches city markets. Here's what we found before it
              disappeared—products that exist only where they were made.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationsWithGems.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/hidden-gems/${destination.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                    {/* Gems Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-foreground">
                          {destination.gemsCount} Hidden{" "}
                          {destination.gemsCount === 1 ? "Gem" : "Gems"}
                        </span>
                      </div>
                    </div>

                    {/* Location Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{destination.elevation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {destination.tagline}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {destination.gemsCount}
                          </span>{" "}
                          Underrated
                        </span>
                        <span className="text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {destination.famousCount}
                          </span>{" "}
                          Famous
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Go Deeper?
            </h2>
            <p className="text-muted-foreground mb-8">
              Behind every product is a village, a tradition, and a story
              waiting to be told. Explore the places where these treasures come
              from.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-elegant"
            >
              View All Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiddenGemsPage;
