import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, Leaf, Heart, Sparkles } from "lucide-react";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { getDestinationBySlug } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/slugify";
import { stateConfig } from "@/data/stateConfig";
const ProductDetailPage = () => {
  const { state, slug, productSlug } = useParams<{
    state: string;
    slug: string;
    productSlug: string;
  }>();

  const destination =
    state && slug ? getDestinationBySlug(slug, state) : undefined;

  const product = destination?.products.find(
    (p) => slugify(p.name) === productSlug,
  );

  const prefix = (path: string) => (state ? `/${state}${path}` : path);

  if (!destination || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl mb-4">Product not found</h1>
          <Link
            to={prefix(`/hidden-gems/${slug}`)}
            className="text-primary hover:underline"
          >
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
        {/* ================= HERO ================= */}
        <section className="relative py-16">
          <div className="container mx-auto px-6 lg:px-12 relative">
            {/* Subtle Background Panel */}
            <div className="absolute top-0 right-0 w-[45%] h-full bg-secondary/20 rounded-l-[60px] -z-10" />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Link
                  to={
                    isUnderrated
                      ? prefix(`/hidden-gems/${slug}`)
                      : prefix(`/destination/${slug}`)
                  }
                  state={isUnderrated ? undefined : { scrollTo: "famous" }}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>
                    {isUnderrated
                      ? `Hidden Gems / ${product.name}`
                      : `Famous Products / ${product.name}`}
                  </span>
                </Link>
                {/* Title */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  {product.name}
                </h1>

                {/* Location */}
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">
                    From {destination.name}, {stateConfig?.[state!]?.name}
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

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg">
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

        {/* Divider */}
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
                {/* Cultivation & Significance Cards */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-8">
                    Cultivation & Significance
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-8">
                    {/* Making */}
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
                        Cultivation & Making
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
                          alt="Significance"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="font-serif text-lg font-semibold mb-2">
                        Cultural Significance
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.significance}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-8">
                    Benefits & Uses
                  </h2>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.uses.map((use) => (
                      <div
                        key={use}
                        className="bg-secondary/50 rounded-xl p-4 flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-primary" />
                        </div>

                        <span className="text-sm font-medium">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <div className="space-y-8">
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
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
                      <Link to={prefix(`/${slug}`)}>View Destination</Link>
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
