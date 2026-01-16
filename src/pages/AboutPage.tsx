import { motion } from 'framer-motion';
import { MapPin, Heart, Users, Camera, Compass, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">TheArchives</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Preserving and sharing the untold stories of hidden destinations worldwide — 
              where ancient traditions meet breathtaking landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium mb-4 block">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Documenting the Soul of Hidden Places
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TheArchives was born from a deep passion for exploring the unexplored and 
                documenting the rich cultural heritage of hidden destinations around the world. 
                What started as personal journeys through misty hills and remote villages has 
                evolved into a mission to share these treasures with travelers everywhere.
              </p>
                <p>
                  We believe that every destination has stories waiting to be told — stories of 
                  ancient coffee traditions, handcrafted textiles, wild honey harvested from 
                  cliff faces, and communities living in harmony with nature.
                </p>
                <p>
                  Our team works closely with local communities to understand and authentically 
                  represent their traditions, ensuring that our content respects and celebrates 
                  their heritage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: MapPin, label: '4 Destinations', sublabel: 'Documented' },
                { icon: Heart, label: '20+ Products', sublabel: 'Featured' },
                { icon: Users, label: 'Local Communities', sublabel: 'Partnered' },
                { icon: Camera, label: '100+ Stories', sublabel: 'Shared' },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-card p-6 rounded-xl shadow-elegant border border-border/50 text-center"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif text-xl font-bold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              We're committed to sustainable tourism that benefits local communities 
              while preserving the natural beauty and cultural heritage of these regions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: 'Discover',
                description: 'Uncover hidden gems and lesser-known destinations that offer authentic experiences away from crowded tourist spots.'
              },
              {
                icon: BookOpen,
                title: 'Document',
                description: 'Preserve traditional knowledge, artisanal techniques, and cultural practices through detailed documentation.'
              },
              {
                icon: Heart,
                title: 'Support',
                description: 'Promote sustainable tourism that directly benefits local artisans, farmers, and tribal communities.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-elegant text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
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

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              What We Stand For
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Authenticity',
                  description: 'We only share genuine information gathered through firsthand experiences and conversations with local communities.'
                },
                {
                  title: 'Sustainability',
                  description: 'We promote responsible travel practices that minimize environmental impact and support local economies.'
                },
                {
                  title: 'Respect',
                  description: 'We honor the traditions, customs, and privacy of the communities we document, always seeking permission before sharing.'
                },
                {
                  title: 'Accessibility',
                  description: 'We believe everyone should have access to information about these beautiful destinations and their unique offerings.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
