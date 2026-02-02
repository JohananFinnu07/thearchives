import { motion } from "framer-motion";
import { MapPin, Heart, Users, Camera, Compass, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

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
              We document India’s most underrated cultural gems — the crafts,
              foods, and traditions that thrive locally, yet remain unseen
              beyond their place of origin.
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
                  Across India, remarkable foods, crafts, and techniques
                  continue to exist — practiced daily, refined over generations,
                  and deeply rooted in place.
                </p>
                <p>
                  Yet many regions become known for a single famous product,
                  while equally valuable traditions remain in the background —
                  not lost, but overlooked.
                </p>
                <p>
                  TheArchives was born from a simple realization: visibility
                  shapes value. We are building a living archive that brings
                  underrepresented regional treasures into focus, without
                  removing them from their context or origin.
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
              To discover, document, and share India’s underrepresented regional
              treasures — connecting curious travelers and conscious consumers
              with the people who sustain them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Find",
                description:
                  "We look beyond the obvious — into villages, hill regions, and local markets — to uncover traditions that rarely travel beyond their home regions.",
              },
              {
                icon: BookOpen,
                title: "Document",
                description:
                  "Every item is explored in full context: how it’s made, who makes it, what makes it distinct, and why place matters.",
              },
              {
                icon: Heart,
                title: "Connect",
                description:
                  "When interest turns into action, we guide it back to the source — ensuring visibility benefits the communities behind the tradition.",
              },
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
                  title: "Authenticity",
                  description:
                    "We only share what we have directly researched — through firsthand visits, conversations, and regional study.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We highlight traditions shaped by season, land, and community — not scaled copies detached from origin.",
                },
                {
                  title: "Respect",
                  description:
                    "We treat regional knowledge as living culture, shared responsibly and with care.",
                },
                {
                  title: "Accessibility",
                  description:
                    "We believe regional heritage should be easy to discover — without being simplified or misrepresented.",
                },
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
