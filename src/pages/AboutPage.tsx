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
              We document India’s most underrated cultural treasures —
              traditional crafts, indigenous foods, and regional practices that
              thrive locally yet remain unseen beyond their place of origin.
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
                  Across India, extraordinary regional foods, handcraft
                  traditions, and ancestral techniques continue to exist —
                  practiced daily, refined across generations, and deeply rooted
                  in geography.
                </p>
                <p>
                  Yet many destinations become known for just one “hero”
                  product, while equally valuable traditions remain overlooked —
                  not lost, but hidden in plain sight.
                </p>
                <p className="font-bold">
                  TheArchives was born from a simple realization: visibility
                  shapes value.
                </p>
                <p>
                  We are building a living cultural archive that brings
                  underrepresented regional products, indigenous craftsmanship,
                  and local food systems into focus — without removing them from
                  their context, ecosystem, or community.
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
            <br />
            <p className="text-muted-foreground">
              We focus on authentic Indian village products, tribal crafts,
              traditional foods, and indigenous knowledge systems that deserve
              wider recognition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Find",
                description:
                  "We look beyond mainstream tourism — into remote villages, forest regions, weekly markets, and family workshops — uncovering local traditions that rarely travel beyond their home regions.",
              },
              {
                icon: BookOpen,
                title: "Document",
                description:
                  "Every item is explored in full context: how it’s made, who makes it, what makes it unique, and why geography and ecology matter. We believe regional identity is inseparable from place.",
              },
              {
                icon: Heart,
                title: "Connect",
                description:
                  "When discovery turns into interest, we guide attention back to the source — ensuring that visibility strengthens the communities behind the tradition rather than detaching value from origin.",
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
                    "We document only what we have directly researched through field visits, regional study, and conversations with artisans, farmers, and makers.",
                },
                {
                  title: "Sustainability",
                  description:
                    "We highlight traditions shaped by season, land, biodiversity, and community — not mass-produced copies stripped of context.",
                },
                {
                  title: "Respect",
                  description:
                    "We treat indigenous knowledge and regional heritage as living cultures, shared responsibly and with care.",
                },
                {
                  title: "Accessibility",
                  description:
                    "We make India’s regional heritage discoverable and understandable — without simplifying, commercializing, or misrepresenting it.",
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
