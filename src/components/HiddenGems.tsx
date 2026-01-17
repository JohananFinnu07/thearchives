import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GemCard from './GemCard';
import { destinations } from '@/data/destinations';
import coffeeImage from '@/assets/araku-coffee.jpg';
import craftsImage from '@/assets/tribal-crafts.jpg';
import honeyImage from '@/assets/wild-honey.jpg';

// Get a sample of underrated gems from different destinations for the homepage
const sampleGems = [
  {
    name: 'Araku Coffee',
    location: 'Araku Valley',
    locationId: 'araku-valley',
    description: 'Organic, shade-grown coffee cultivated by tribal communities. Award-winning beans with a unique flavor profile shaped by the Eastern Ghats.',
    image: coffeeImage,
  },
  {
    name: 'Tribal Bamboo Crafts',
    location: 'Paderu Region',
    locationId: 'paderu',
    description: 'Handwoven baskets, mats, and decorative items crafted by local artisans using traditional techniques passed down through generations.',
    image: craftsImage,
  },
  {
    name: 'Wild Forest Honey',
    location: 'Maredumilli',
    locationId: 'maredumilli',
    description: 'Pure, unprocessed honey harvested from forest hives. Rich in medicinal properties and sustainably collected by tribal honey hunters.',
    image: honeyImage,
  },
];

const HiddenGems = () => {
  return (
    <section id="gems" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Local Treasures
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Hidden Gems <br />
              <span className="italic text-primary">Worth Exploring</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Beyond the scenic beauty lies a rich tapestry of local products, artisan crafts, 
              and culinary traditions that make each destination truly special.
            </p>
            <Button 
              size="lg" 
              className="gradient-accent text-accent-foreground border-0 px-8 font-medium hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/hidden-gems">Explore All Gems</Link>
            </Button>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="flex flex-col gap-6">
            {sampleGems.map((gem, index) => (
              <Link key={gem.name} to={`/hidden-gems/${gem.locationId}`}>
                <GemCard
                  name={gem.name}
                  location={gem.location}
                  description={gem.description}
                  image={gem.image}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenGems;
