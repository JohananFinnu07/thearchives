import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { odopAndhraPradesh, ODOPDistrict } from '@/data/odop';
import { Button } from '@/components/ui/button';

const ODOPDiscovery = () => {
  const [expandedDistrict, setExpandedDistrict] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleDistricts = showAll ? odopAndhraPradesh : odopAndhraPradesh.slice(0, 6);

  const toggleDistrict = (id: string) => {
    setExpandedDistrict(expandedDistrict === id ? null : id);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">One District, One Product</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            What Each District <span className="italic text-primary">Does Best</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The Government of India recognized one signature product from each district. 
            We went further — finding what the official lists missed.
          </p>
        </motion.div>

        {/* Districts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {visibleDistricts.map((district, index) => (
            <DistrictCard 
              key={district.id} 
              district={district} 
              index={index}
              isExpanded={expandedDistrict === district.id}
              onToggle={() => toggleDistrict(district.id)}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {odopAndhraPradesh.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="group"
            >
              {showAll ? 'Show Less' : `Explore All ${odopAndhraPradesh.length} Districts`}
              <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface DistrictCardProps {
  district: ODOPDistrict;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const DistrictCard = ({ district, index, isExpanded, onToggle }: DistrictCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-300"
    >
      {/* Collapsed Header */}
      <button
        onClick={onToggle}
        className="w-full p-5 text-left flex items-start justify-between gap-4 group"
      >
        <div className="flex-1">
          {/* District Name & Badge */}
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {district.name}
            </h3>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-full text-xs text-primary font-medium">
              <Award className="w-3 h-3" />
              ODOP
            </span>
          </div>
          
          {/* Anchor Product */}
          <p className="text-primary font-medium text-sm mb-1">
            {district.anchorProduct}
          </p>
          
          {/* Brief Description */}
          <p className="text-muted-foreground text-sm line-clamp-2">
            {district.anchorProductDescription}
          </p>
        </div>
        
        {/* Expand Icon */}
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 border-t border-border/50">
              {/* Cultural Significance */}
              <div className="py-4 border-b border-border/30">
                <p className="text-sm text-muted-foreground italic">
                  "{district.culturalSignificance}"
                </p>
              </div>

              {/* Beyond ODOP - Hidden Gems */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Beyond the Official Product</span>
                </div>
                
                <div className="space-y-2">
                  {district.hiddenGems.map((gem, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg group/gem hover:bg-secondary transition-colors cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{gem.name}</p>
                        <p className="text-xs text-muted-foreground">{gem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <button className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all">
                  <span>Explore {district.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ODOPDiscovery;
