import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, MapPin, ArrowLeft, ImageIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDestinationById } from '@/data/destinations';
import { Button } from '@/components/ui/button';

const LocationGalleryPage = () => {
  const { id } = useParams<{ id: string }>();
  const destination = getDestinationById(id || '');

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Destination not found</h1>
          <Link to="/gallery" className="text-primary hover:underline">
            Back to Gallery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

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
                to="/gallery" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Gallery</span>
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">{destination.elevation}</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-4">
                {destination.name} <span className="italic text-primary">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {destination.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Empty Gallery State */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary/50 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Gallery Coming Soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We're curating a stunning visual collection for {destination.name}. 
                Check back soon to explore landscapes, local culture, and hidden treasures 
                through our immersive photo gallery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" className="gradient-forest">
                  <Link to={`/destination/${destination.id}`}>
                    Explore {destination.name}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to={`/hidden-gems/${destination.id}`}>
                    View Hidden Gems
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationGalleryPage;
