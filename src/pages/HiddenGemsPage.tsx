import { motion } from 'framer-motion';
import { Gem, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinations';

// Group underrated products by destination
const destinationsWithGems = destinations
  .map(dest => ({
    ...dest,
    gems: dest.products.filter(p => p.type === 'underrated')
  }))
  .filter(dest => dest.gems.length > 0);

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
              <span className="text-sm font-medium tracking-wide">Discover the Undiscovered</span>
            </motion.div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hidden <span className="text-primary italic">Gems</span> by
              <br />Destination
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each destination holds secrets—rare products, ancient traditions, and local treasures 
              known only to those who venture off the beaten path. Explore them by place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations with Gems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {destinationsWithGems.map((destination, destIndex) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: destIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              {/* Destination Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-border/50">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-wide uppercase">
                      {destination.elevation} elevation
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    {destination.name}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-xl">
                    {destination.tagline}
                  </p>
                </div>
                
                <Link 
                  to={`/destination/${destination.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
                >
                  Explore destination
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Gems Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.gems.map((gem, gemIndex) => (
                  <motion.article
                    key={gem.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: gemIndex * 0.1 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-border/30"
                  >
                    {/* Card Header with Icon */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-medium">
                          Hidden Gem
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {gem.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {gem.description}
                      </p>
                    </div>

                    {/* Story Preview */}
                    <div className="px-6 pb-4">
                      <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                        <div>
                          <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                            Why it matters
                          </span>
                          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                            {gem.significance}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {gem.uses.slice(0, 3).map((use, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-full"
                          >
                            {use}
                          </span>
                        ))}
                        {gem.uses.length > 3 && (
                          <span className="text-xs text-muted-foreground px-2 py-1">
                            +{gem.uses.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
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
              Ready to Explore?
            </h2>
            <p className="text-muted-foreground mb-8">
              Each destination has more to offer. Dive deeper into the culture, 
              history, and traditions that make these places extraordinary.
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