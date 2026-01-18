import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

interface GemCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  index: number;
}

const GemCard = ({ name, location, description, image, index }: GemCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex flex-col rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-500 cursor-pointer overflow-hidden h-full"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
            {location}
          </span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {description}
        </p>

        {/* Like Button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <motion.button
            onClick={handleLike}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className={`w-5 h-5 transition-colors duration-300 ${
                  isLiked ? 'fill-accent text-accent' : 'text-muted-foreground'
                }`}
              />
              <AnimatePresence>
                {isLiked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Heart className="w-5 h-5 fill-accent text-accent" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <span className={isLiked ? 'text-accent' : ''}>
              {isLiked ? 'Interested' : 'Show Interest'}
            </span>
          </motion.button>
          <span className="text-xs text-muted-foreground">
            {likeCount} interested
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default GemCard;
