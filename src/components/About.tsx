import { motion } from "framer-motion";
import { Mountain, Users, Leaf, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Mountain,
    title: "Uncharted Places",
    description:
      "Hill stations where tourists are still rare and traditions run deep.",
    link: "/destinations",
  },
  {
    icon: Users,
    title: "Real Stories",
    description:
      "Meet the artisans, farmers, and keepers of vanishing traditions.",
    link: "/about",
  },
  {
    icon: Leaf,
    title: "Local Economy",
    description:
      "Every item you discover supports families who've made it for generations.",
    link: "/hidden-gems",
  },
  {
    icon: Camera,
    title: "Visual Archive",
    description: "Documenting what might not exist in another decade.",
    link: "/gallery",
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
              Why This Matters
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Some Things{" "}
              <span className="italic text-primary">Only Exist</span> in One
              Place
            </h2>
            <p className="text-muted-foreground text-lg">
              Every year, a recipe disappears when a grandmother passes. A craft
              dies when the last artisan can't find an apprentice. We're
              building an archive before it's too late.
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
                <Link to={feature.link} className="text-center group block">
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
