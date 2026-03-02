import { motion } from "framer-motion";
import { MapPin, Heart, Users, Camera, Compass, BookOpen } from "lucide-react";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";
import { useParams } from "react-router-dom";
import { stateConfig } from "@/data/stateConfig";

const AboutPage = () => {
  const { state } = useParams<{ state: string }>();
  const currentState = state ? stateConfig[state] : null;

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
              About{" "}
              <span className="text-primary">
                {currentState?.name || "The Archives"}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              We document {currentState?.name || "India’s"} most underrated
              cultural treasures — traditional crafts, indigenous foods, and
              regional practices that thrive locally yet remain unseen beyond
              their place of origin.
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
              <span className="text-primary font-medium mb-4 block">
                Our Story
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Highlighting What Thrives Locally
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Across {currentState?.name || "India"}, extraordinary regional
                  foods, handcraft traditions, and ancestral techniques continue
                  to exist — practiced daily, refined across generations, and
                  deeply rooted in geography.
                </p>

                <p>
                  Yet many destinations become known for just one “hero”
                  product, while equally valuable traditions remain overlooked —
                  not lost, but hidden in plain sight.
                </p>

                <p className="font-bold">Visibility shapes value.</p>

                <p>
                  We are building a living cultural archive that brings
                  underrepresented regional products, indigenous craftsmanship,
                  and local food systems into focus — without removing them from
                  their context, ecosystem, or community.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: MapPin,
                  label: destinations.length,
                  sublabel: "Explored deeply",
                },
                {
                  icon: Heart,
                  label: "30+ Products",
                  sublabel: "Researched at source",
                },
                {
                  icon: Users,
                  label: "Local Communities",
                  sublabel: "Directly engaged",
                },
                {
                  icon: Camera,
                  label: "100+ Stories",
                  sublabel: "Documented with context",
                },
              ].map((item) => (
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
                  <div className="text-sm text-muted-foreground">
                    {item.sublabel}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
