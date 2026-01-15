import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Thermometer, Calendar, Mountain, Sparkles, Star } from 'lucide-react';
import { getDestinationById } from '@/data/destinations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = getDestinationById(id || '');

  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Destination Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const famousProducts = destination.products.filter(p => p.type === 'famous');
  const underratedProducts = destination.products.filter(p => p.type === 'underrated');

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
            to="/"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Explore</span>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-sage mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Andhra Pradesh, India</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-3">
                {destination.name}
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-6">
                {destination.heroDescription}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Mountain className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-sm">{destination.elevation}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Thermometer className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-sm">{destination.temperature}</span>
                </div>
                <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4 text-sage" />
                  <span className="text-primary-foreground text-sm">{destination.bestTime}</span>
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
            className="max-w-3xl"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              About {destination.name}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {destination.about}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Famous Products Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
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
              Discover the celebrated items that have put this region on the map.
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
      <section className="py-16 lg:py-24 bg-background">
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
              Underrated <span className="italic text-primary">Gems</span> to Discover
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Lesser-known products that locals cherish but few visitors know about.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {underratedProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
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
              Plan your journey to discover these treasures firsthand and support local communities.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-medium px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors"
            >
              Explore More Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
