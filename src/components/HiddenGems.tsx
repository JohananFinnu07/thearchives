import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GemCard from './GemCard';
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
        {/* Section Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            What the Markets Miss
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Treasures That <span className="italic text-primary">Stay Local</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            The best coffee never leaves the valley. The finest honey stays with the tribe. 
            Here's what we found before it disappeared.
          </p>
          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground border-0 px-8 font-medium hover:scale-105 transition-transform"
            asChild
          >
            <Link to="/hidden-gems">Explore All Gems</Link>
          </Button>
        </motion.div>

        {/* Cards Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
    </section>
  );
};

export default HiddenGems;
