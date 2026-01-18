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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Featured Places
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            Destinations Worth <span className="italic text-primary">Discovering</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Five extraordinary hill stations in Andhra Pradesh, each offering a unique experience of nature, culture, and tranquility.
          </p>
        </motion.div>

        {/* Destinations Grid - Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* First row - 2 large cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="lg:col-span-7"
          >
            <DestinationCard
              id={destinations[0].id}
              name={destinations[0].name}
              tagline={destinations[0].tagline}
              image={destinations[0].image}
              index={0}
              featured
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <DestinationCard
              id={destinations[1].id}
              name={destinations[1].name}
              tagline={destinations[1].tagline}
              image={destinations[1].image}
              index={1}
              featured
            />
          </motion.div>

          {/* Second row - 3 equal cards */}
          {destinations.slice(2).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="lg:col-span-4"
            >
              <DestinationCard
                id={destination.id}
                name={destination.name}
                tagline={destination.tagline}
                image={destination.image}
                index={index + 2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
