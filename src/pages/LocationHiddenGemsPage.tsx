import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, MapPin, ArrowLeft, ArrowRight, Heart } from "lucide-react";

import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import {
  getDestinationBySlug,
  getDestinationsByState,
} from "@/data/destinations";
import { slugify } from "@/lib/slugify";
import { Button } from "@/components/ui/button";

const LocationHiddenGemsPage = () => {
  const { state, slug } = useParams<{
    state: string;
    slug: string;
  }>();

  const destination =
    state && slug ? getDestinationBySlug(slug, state) : undefined;

  const stateDestinations = state ? getDestinationsByState(state) : [];

  const prefix = (path: string) => (state ? `/${state}${path}` : path);

  const [saved, setSaved] = useState<Record<string, boolean>>({});

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl mb-4">Destination not found</h1>
          <Link
            to={prefix("/hidden-gems")}
            className="text-primary hover:underline"
          >
            Back to Hidden Gems
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const underratedProducts = destination.products.filter(
    (p) => p.type === "underrated",
  );

  const famousProducts = destination.products.filter(
    (p) => p.type === "famous",
  );

  const currentIndex = stateDestinations.findIndex(
    (d) => d.slug === destination.slug,
  );

  const prevDestination = stateDestinations[currentIndex - 1];
  const nextDestination = stateDestinations[currentIndex + 1];

  const toggleSave = (productName: string) => {
    setSaved((prev) => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* ================= HERO ================= */}
        <section className="py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src={destination.image}
              alt=""
              className="w-full h-full object-cover blur-sm"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={prefix("/hidden-gems")}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Hidden Gems
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {destination.elevation} · {destination.bestTime}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Hidden Gems of{" "}
                <span className="italic text-primary">{destination.name}</span>
              </h1>

              <p className="text-muted-foreground text-lg max-w-2xl">
                {destination.tagline} — Discover the underrated treasures that
                make this destination truly special.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= UNDERRATED ================= */}
        {underratedProducts.length > 0 && (
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Hidden Treasures</span>
                </div>
                <h2 className="font-serif text-3xl font-semibold text-foreground">
                  Underrated gems waiting to be discovered
                </h2>
              </motion.div>
              <div className="grid gap-10">
                {underratedProducts.map((product, index) => {
                  const productSlug = slugify(product.name);
                  const isSaved = saved[product.name];

                  return (
                    <motion.article
                      key={product.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row md:h-[380px]"
                    >
                      {/* IMAGE */}
                      <Link
                        to={prefix(
                          `/hidden-gems/${destination.slug}/${productSlug}`,
                        )}
                        className="group w-full md:w-[40%] h-60 md:h-full relative overflow-hidden"
                      >
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* subtle overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </Link>

                      {/* CONTENT */}
                      <div className="p-6 md:w-[60%] flex flex-col">
                        {/* Badge */}
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/15 text-accent font-medium w-fit mb-3">
                          Hidden Gem
                        </span>

                        {/* Title */}
                        <Link
                          to={prefix(
                            `/hidden-gems/${destination.slug}/${productSlug}`,
                          )}
                        >
                          <h3 className="font-serif text-2xl lg:text-3xl font-semibold hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed line-clamp-2">
                          {product.description}
                        </p>

                        {/* Info Blocks */}
                        <div className="hidden md:grid mt-6 grid-cols-2 gap-4">
                          <div className="bg-secondary/40 rounded-xl p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              Why It Matters
                            </p>
                            <p className="text-sm leading-relaxed line-clamp-2">
                              {product.significance}
                            </p>
                          </div>

                          <div className="bg-secondary/40 rounded-xl p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                              How It's Made
                            </p>
                            <p className="text-sm leading-relaxed line-clamp-2">
                              {product.makingProcess}
                            </p>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-6">
                          <Link
                            to={prefix(
                              `/hidden-gems/${destination.slug}/${productSlug}`,
                            )}
                            className="inline-flex items-center text-primary text-base font-medium hover:underline"
                          >
                            Explore the Story →
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        {/* ================= FAMOUS REFERENCE ================= */}
        {famousProducts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-2xl font-semibold mb-2">
                Also famous for
              </h2>
              <p className="text-muted-foreground mb-10">
                Well-known treasures from {destination.name}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {famousProducts.map((product) => {
                  const productSlug = slugify(product.name);

                  return (
                    <Link
                      key={product.name}
                      to={prefix(
                        `/hidden-gems/${destination.slug}/${productSlug}`,
                      )}
                      className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition"
                    >
                      <h3 className="font-serif text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {product.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ================= NAVIGATION ================= */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {prevDestination ? (
                <Link
                  to={prefix(`/hidden-gems/${prevDestination.slug}`)}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-wide">Previous</p>
                    <p className="font-medium truncate max-w-[180px]">
                      {prevDestination.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full md:w-auto"
              >
                <Link to={prefix(`/${destination.slug}`)}>
                  Explore {destination.name}
                </Link>
              </Button>

              {nextDestination ? (
                <Link
                  to={prefix(`/hidden-gems/${nextDestination.slug}`)}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide">Next</p>
                    <p className="font-medium truncate max-w-[180px]">
                      {nextDestination.name}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocationHiddenGemsPage;
