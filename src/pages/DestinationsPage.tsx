import { motion } from 'framer-motion';
import { MapPin, Mountain, Thermometer, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinations';

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Explore Our <span className="text-primary">Destinations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the untouched beauty of Eastern Ghats through these four magnificent destinations, 
              each offering unique landscapes, cultures, and experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/destination/${destination.id}`}>
                  <div className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm text-white/80">{destination.tagline}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">{destination.heroDescription}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Mountain className="w-4 h-4 text-accent" />
                          <span>{destination.elevation}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Thermometer className="w-4 h-4 text-accent" />
                          <span>{destination.temperature}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{destination.bestTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Destinations', value: '4' },
              { label: 'Local Products', value: '20+' },
              { label: 'Elevation Range', value: '900-1400m' },
              { label: 'Best Months', value: 'Oct-Feb' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationsPage;
