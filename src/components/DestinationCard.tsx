import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  name: string;
  tagline: string;
  image: string;
  index: number;
  id: string;
}

const DestinationCard = ({ name, tagline, image, index, id }: DestinationCardProps) => {
  return (
    <Link to={`/destination/${id}`}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer"
      >
        {/* Image Container */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={`${name} landscape`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-sage mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs font-medium tracking-wide uppercase">Andhra Pradesh</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-1">
                {name}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {tagline}
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default DestinationCard;
