import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDestinationById, destinations } from '@/data/destinations';
import { Button } from '@/components/ui/button';

const LocationHiddenGemsPage = () => {
  const { id } = useParams<{ id: string }>();
  const destination = getDestinationById(id || '');

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Destination not found</h1>
          <Link to="/hidden-gems" className="text-primary hover:underline">
            Back to Hidden Gems
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const underratedProducts = destination.products.filter(p => p.type === 'underrated');
  const famousProducts = destination.products.filter(p => p.type === 'famous');

  // Get next/prev destinations for navigation
  const currentIndex = destinations.findIndex(d => d.id === destination.id);
  const prevDestination = destinations[currentIndex - 1];
  const nextDestination = destinations[currentIndex + 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
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
                to="/hidden-gems" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Locations</span>
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{destination.elevation} · {destination.bestTime}</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                Hidden Gems of <span className="italic text-primary">{destination.name}</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {destination.tagline} — Discover the underrated treasures that make this destination truly special.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Underrated Gems Section */}
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

              <div className="grid gap-8 lg:gap-12">
                {underratedProducts.map((product, index) => (
                  <motion.article
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 lg:p-10 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                            {product.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-xl p-6">
                          <h4 className="font-medium text-foreground mb-2">Why it matters</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {product.significance}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">How it's made</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {product.makingProcess}
                          </p>
                        </div>
                      </div>

                      {/* Uses Sidebar */}
                      <div className="lg:border-l lg:border-border lg:pl-8">
                        <h4 className="font-medium text-foreground mb-4">Common uses</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.uses.map((use) => (
                            <span
                              key={use}
                              className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Famous Products Reference */}
        {famousProducts.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Also famous for
                </h2>
                <p className="text-muted-foreground">
                  Well-known treasures from {destination.name}
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {famousProducts.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 border border-border"
                  >
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation to Other Destinations */}
        <section className="py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {prevDestination ? (
                <Link
                  to={`/hidden-gems/${prevDestination.id}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs uppercase tracking-wide">Previous</p>
                    <p className="font-medium">{prevDestination.name}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Button asChild variant="outline" size="sm">
                <Link to={`/destination/${destination.id}`}>
                  Explore {destination.name}
                </Link>
              </Button>

              {nextDestination ? (
                <Link
                  to={`/hidden-gems/${nextDestination.id}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide">Next</p>
                    <p className="font-medium">{nextDestination.name}</p>
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
