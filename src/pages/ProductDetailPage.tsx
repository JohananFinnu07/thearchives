import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Leaf, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDestinationById } from "@/data/destinations";
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
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-background py-16">
          <div className="container mx-auto px-6 lg:px-12 relative">
            {/* Subtle Background Panel */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-secondary/20 rounded-l-[60px] -z-10" />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              {/* LEFT – TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Breadcrumb */}
                <Link
                  to={`/hidden-gems/${destination.id}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Hidden Gems / {product.name}</span>
                </Link>

                {/* Title */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                  {product.name}
                </h1>

                {/* Location */}
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">
                    From {destination.name}, Andhra Pradesh
                  </span>
                </div>

                {/* Badge */}
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

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {product.description}
                </p>
              </motion.div>

              {/* RIGHT – IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={product.image || destination.image}
                    alt={product.name}
                    className="w-full h-[420px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="origin-left h-[1px] bg-border/60 mx-auto max-w-5xl"
        />

        {/* ================= MAIN CONTENT ================= */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-2 space-y-16">
                {/* Cultivation & Harvesting */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                    Cultivation & Harvesting
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Making Process */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="aspect-video rounded-xl overflow-hidden mb-4">
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

                      <h3 className="font-serif text-lg font-semibold mb-2">
                        {product.name}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.makingProcess}
                      </p>
                    </div>

                    {/* Significance */}
                    <div className="bg-card rounded-2xl p-6 border border-border">
                      <div className="aspect-video rounded-xl overflow-hidden mb-4">
                        <img
                          src={
                            product.flavorImage ||
                            product.image ||
                            destination.image
                          }
                          alt="Flavor profile"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="font-serif text-lg font-semibold mb-2">
                        Significance
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.significance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-8">
                    Benefits & Uses
                  </h2>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.uses.map((use, index) => (
                      <div
                        key={use}
                        className="bg-secondary/50 rounded-xl p-4 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-primary" />
                        </div>

                        <span className="text-foreground font-medium text-sm">
                          {use}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div className="space-y-8">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-lg font-semibold mb-2">
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
