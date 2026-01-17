import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinations';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">Visual Journey</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Gallery by <span className="italic text-primary">Destination</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore the visual stories of each destination. Select a location to discover its 
                landscapes, culture, and hidden treasures through our curated gallery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/gallery/${destination.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-secondary/50 relative overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{destination.elevation}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {destination.tagline}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Gallery coming soon
                        </span>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Note */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              We're curating stunning visuals for each destination. Check back soon for immersive photo galleries.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
