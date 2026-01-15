import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Leaf, Wrench, Lightbulb } from 'lucide-react';
import { Product } from '@/data/destinations';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                product.type === 'famous' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-accent/10 text-accent'
              }`}>
                {product.type === 'famous' ? 'Famous' : 'Hidden Gem'}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-muted-foreground">
              {product.description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6 border-t border-border pt-6">
              {/* Significance */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Significance</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {product.significance}
                </p>
              </div>

              {/* Making Process */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">Making Process</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {product.makingProcess}
                </p>
              </div>

              {/* Uses */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-5 h-5 text-sage" />
                  <h4 className="font-semibold text-foreground">Uses</h4>
                </div>
                <div className="flex flex-wrap gap-2 pl-7">
                  {product.uses.map((use) => (
                    <span
                      key={use}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default ProductCard;
