import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Leaf, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDestinationById, destinations, Product } from "@/data/destinations";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  const { locationId, productName } = useParams<{
    locationId: string;
    productName: string;
  }>();
  const destination = getDestinationById(locationId || "");

  const decodedProductName = productName ? decodeURIComponent(productName) : "";
  const product = destination?.products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === decodedProductName,
  );

  if (!destination || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">
            Product not found
          </h1>
          <Link to="/hidden-gems" className="text-primary hover:underline">
            Back to Hidden Gems
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const isUnderrated = product.type === "underrated";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={product.image || destination.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              {/* Breadcrumb */}
              <Link
                to={`/hidden-gems/${destination.id}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Hidden Gems / {product.name}</span>
              </Link>

              {/* Product Name */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                {product.name}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-primary mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">
                  From {destination.name}, Andhra Pradesh
                </span>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                    isUnderrated
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  {isUnderrated ? (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Hidden Gem
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4" />
                      Famous Item
                    </>
                  )}
                </span>
              </div>

              {/* Poetic Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {product.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Content - Main Info */}
              <div className="lg:col-span-2 space-y-12">
                {/* Cultivation & Harvesting */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Cultivation & Harvesting
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Making Process Card */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="w-full aspect-video rounded-xl bg-secondary/50 mb-4 overflow-hidden">
                        <img
                          src={
                            product.makingImage ||
                            product.image ||
                            destination.image
                          }
                          alt="Making process"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.makingProcess}
                      </p>
                    </div>

                    {/* Flavor/Significance Card */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="w-full aspect-video rounded-xl bg-secondary/50 mb-4 overflow-hidden">
                        <img
                          src={
                            product.flavorImage ||
                            product.image ||
                            destination.image
                          }
                          alt="Flavor profile"
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        Flavor Profile & Significance
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.significance}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Health Benefits / Uses */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Benefits & Uses
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.uses.map((use, index) => (
                      <motion.div
                        key={use}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-secondary/50 rounded-xl p-4 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Leaf className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium text-sm">
                          {use}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Best Place to Buy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
                >
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Best Place to Buy
                  </h2>
                  <p className="text-primary font-medium mb-4">
                    {destination.name}, Andhra Pradesh
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The local markets and spice shops in the {destination.name}{" "}
                    area are the best places to find fresh and high-quality{" "}
                    {product.name} directly from the source. Look for tribal
                    cooperatives and organic certified sellers.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link to={`/destination/${destination.id}`}>
                      Explore {destination.name}
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Right Sidebar - Related Destination */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-24 space-y-6"
                >
                  {/* Related Destination Card */}
                  <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card">
                    <div className="p-6 text-center">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                        Related Destination
                      </h3>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {destination.name}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {destination.about}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/destination/${destination.id}`}>
                          View Destination
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Other Products */}
                  <div className="bg-secondary/30 rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                      More from {destination.name}
                    </h3>
                    <div className="space-y-3">
                      {destination.products
                        .filter((p) => p.name !== product.name)
                        .slice(0, 3)
                        .map((otherProduct) => (
                          <Link
                            key={otherProduct.name}
                            to={`/hidden-gems/${destination.id}/${otherProduct.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block p-3 bg-card rounded-xl hover:shadow-soft transition-shadow group"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  otherProduct.type === "underrated"
                                    ? "bg-accent"
                                    : "bg-primary"
                                }`}
                              />
                              <span className="text-foreground group-hover:text-primary transition-colors text-sm font-medium">
                                {otherProduct.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/hidden-gems/${destination.id}`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {destination.name} Hidden Gems</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
