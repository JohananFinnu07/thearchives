import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface GemCardProps {
  name: string;
  location: string;
  description: string;
  image: string;
  index: number;
}

const GemCard = ({ name, location, description, image, index }: GemCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full md:w-40 h-40 flex-shrink-0 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
            {location}
          </span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default GemCard;
