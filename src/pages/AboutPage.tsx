import { motion } from "framer-motion";
import { MapPin, Heart, Users, Camera, Compass, BookOpen } from "lucide-react";
import Header from "@/components/StateHeader";
import Footer from "@/components/Footer";
import { allDestinations } from "@/data/destinations";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              About <span className="text-primary">IntoOrigins</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              IntoOrigins documents famous and overlooked regional products,
              tribal crafts, traditional foods, and living cultural traditions —
              preserving the stories that shape identity before they fade from
              memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
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

              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Highlighting What Thrives Locally
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Across regions, extraordinary foods, handcraft traditions, and
                  ancestral techniques continue to exist — practiced daily,
                  refined across generations, and deeply rooted in geography.
                </p>

                <p>
                  Yet many places become known for a single “hero” product,
                  while equally valuable traditions remain overlooked — not
                  lost, but hidden in plain sight.
                </p>

                <p className="font-semibold text-foreground">
                  Visibility shapes value.
                </p>

                <p>
                  IntoOrigins was created to build a living cultural record —
                  one that honors underrepresented regional products, indigenous
                  craftsmanship, and local food systems without detaching them
                  from their communities.
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
                  label: allDestinations.length,
                  sublabel: "Regions Explored",
                },
                {
                  icon: Heart,
                  label: "30+ Products",
                  sublabel: "Researched at Source",
                },
                {
                  icon: Users,
                  label: "Local Communities",
                  sublabel: "Directly Engaged",
                },
                {
                  icon: Camera,
                  label: "100+ Stories",
                  sublabel: "Documented with Context",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card p-6 rounded-xl border border-border/50 text-center shadow-sm"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif text-xl font-semibold text-foreground">
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

      {/* ================= OUR MISSION ================= */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To discover, document, and share underrepresented regional
              treasures — connecting curious explorers and conscious consumers
              with the communities who sustain them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Find",
                description:
                  "We look beyond mainstream tourism — into villages, forest regions, weekly markets, and family workshops — uncovering traditions that rarely travel beyond their home regions.",
              },
              {
                icon: BookOpen,
                title: "Document",
                description:
                  "Every feature is explored in full context: how it’s made, who makes it, what makes it unique, and why geography and ecology matter.",
              },
              {
                icon: Heart,
                title: "Connect",
                description:
                  "Visibility should strengthen origin communities — not detach value from them. We guide attention responsibly back to the source.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border/50 text-center shadow-sm"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl font-semibold text-center mb-8">
            What We Stand For
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Authenticity",
                description:
                  "We document only what is directly researched through field visits and conversations with artisans, farmers, and makers.",
              },
              {
                title: "Sustainability",
                description:
                  "We highlight traditions shaped by season, biodiversity, and land — not mass-produced copies stripped of context.",
              },
              {
                title: "Respect",
                description:
                  "Indigenous knowledge and regional heritage are living cultures, shared responsibly and with care.",
              },
              {
                title: "Accessibility",
                description:
                  "We make regional heritage discoverable without simplifying, commercializing, or misrepresenting it.",
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
                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHIVE METHOD ================= */}
      <section className="py-20 bg-secondary/20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.35em] uppercase font-medium block mb-4">
              The Archive Method
            </span>
            <h2 className="font-serif text-4xl font-semibold text-foreground">
              How We Verify What We Share
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Field Documentation",
                description:
                  "On-site visits ensure documentation remains recorded within its natural context.",
              },
              {
                title: "Source Alignment",
                description:
                  "Products are traced to identifiable communities and regional networks.",
              },
              {
                title: "Seasonal Validation",
                description:
                  "Availability reflects agricultural rhythm and ecological timelines.",
              },
              {
                title: "Archive Review",
                description:
                  "Each feature undergoes review for origin confirmation and cultural accuracy.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="p-6 rounded-xl bg-card border border-border/60 shadow-sm hover:shadow-lg"
              >
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
