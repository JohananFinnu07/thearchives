import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { destinations } from '@/data/destinations';

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Featured Places
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            Destinations Worth <span className="italic text-primary">Discovering</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Four extraordinary hill stations in Visakhapatnam district, each offering a unique experience of nature, culture, and tranquility.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              tagline={destination.tagline}
              image={destination.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
