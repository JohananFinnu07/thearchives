import { motion } from 'framer-motion';
import { Gem, Star, Leaf, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { destinations } from '@/data/destinations';

// Collect all underrated products from all destinations
const allGems = destinations.flatMap(dest => 
  dest.products
    .filter(p => p.type === 'underrated')
    .map(p => ({ ...p, destination: dest.name, destinationId: dest.id }))
);

const HiddenGemsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Gem className="w-4 h-4" />
              <span className="text-sm font-medium">Discover the Undiscovered</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hidden <span className="text-primary">Gems</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Uncover the underrated treasures of the Eastern Ghats — rare products, ancient traditions, 
              and local secrets known only to the tribal communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Gems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Underrated Treasures
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              These rare finds are often overlooked by tourists but are cherished by locals for their 
              unique qualities and traditional significance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGems.map((gem, index) => (
              <motion.div
                key={`${gem.destinationId}-${gem.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-xl transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                    {gem.destination}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {gem.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {gem.description}
                </p>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Significance: </span>
                    <span className="text-muted-foreground">{gem.significance}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Uses: </span>
                    <span className="text-muted-foreground">{gem.uses}</span>
                  </div>
                </div>

                <Link 
                  to={`/destination/${gem.destinationId}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                >
                  Explore {gem.destination}
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Are Special */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Why These Gems Matter
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each hidden gem represents generations of knowledge passed down through tribal communities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Authentic Heritage',
                description: 'Products made using ancient techniques preserved for centuries by local artisans.'
              },
              {
                icon: Leaf,
                title: 'Sustainable & Natural',
                description: 'Sourced directly from nature using sustainable practices that protect the environment.'
              },
              {
                icon: Coffee,
                title: 'Unique Flavors',
                description: 'Distinct tastes and aromas that cannot be replicated anywhere else in the world.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HiddenGemsPage;
