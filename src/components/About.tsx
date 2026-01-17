import { motion } from 'framer-motion';
import { Mountain, Users, Leaf, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Mountain,
    title: 'Scenic Routes',
    description: 'Curated travel guides through the most breathtaking landscapes.',
    link: '/destinations',
  },
  {
    icon: Users,
    title: 'Local Stories',
    description: 'Authentic narratives from tribal communities and local artisans.',
    link: '/about',
  },
  {
    icon: Leaf,
    title: 'Sustainable Travel',
    description: 'Eco-conscious recommendations that support local livelihoods.',
    link: '/hidden-gems',
  },
  {
    icon: Camera,
    title: 'Visual Journey',
    description: 'Stunning photography capturing the essence of each destination.',
    link: '/gallery',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              About TheArchives
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Curating <span className="italic text-primary">Authentic</span> Travel Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe the best travel experiences come from discovering what makes a place truly special — 
              the hidden spots, local crafts, and cultural traditions that don't make it to mainstream travel guides.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={feature.link}
                  className="text-center group block"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
