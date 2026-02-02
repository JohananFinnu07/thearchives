import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award, MapPin, Sparkles, ArrowRight } from "lucide-react";

import { odopAndhraPradesh, ODOPDistrict } from "@/data/odop";
import { Button } from "@/components/ui/button";

const ODOPDiscovery = () => {
  const [activeDistrict, setActiveDistrict] = useState<ODOPDistrict | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);

  const visibleDistricts = showAll
    ? odopAndhraPradesh
    : odopAndhraPradesh.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">
              One District, One Product
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            What Each District{" "}
            <span className="italic text-primary">Does Best</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            The Government of India recognized one signature product from each
            district. We went further — uncovering what the official lists
            missed.
          </p>
        </motion.div>

        {/* District Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {visibleDistricts.map((district, index) => (
            <DistrictCard
              key={district.id}
              district={district}
              index={index}
              onOpen={() => setActiveDistrict(district)}
            />
          ))}
        </div>

        {/* Show More / Less */}
        {odopAndhraPradesh.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Show Less"
                : `Explore All ${odopAndhraPradesh.length} Districts`}
              <ChevronDown
                className={`ml-2 w-4 h-4 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeDistrict && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/40 backdrop-blur-sm px-4"
            onClick={() => setActiveDistrict(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card max-w-xl w-full rounded-2xl
                         border border-border shadow-xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-serif text-2xl font-semibold">
                    {activeDistrict.name}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5
                                   bg-primary/10 rounded-full text-xs text-primary font-medium"
                  >
                    <Award className="w-3 h-3" />
                    ODOP
                  </span>
                </div>

                <p className="text-primary font-medium">
                  {activeDistrict.anchorProduct}
                </p>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground italic">
                  “{activeDistrict.culturalSignificance}”
                </p>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="font-medium">
                      Beyond the Official Product
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeDistrict.hiddenGems.map((gem, i) => (
                      <div key={i} className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm font-medium">{gem.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {gem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-border/50">
                <button
                  className="inline-flex items-center gap-2 text-primary
                             font-medium hover:gap-3 transition-all"
                >
                  <span>Explore {activeDistrict.name}</span>
                  <ArrowRight className="w-6 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface DistrictCardProps {
  district: ODOPDistrict;
  index: number;
  onOpen: () => void;
}

const DistrictCard = ({ district, index, onOpen }: DistrictCardProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onOpen}
      className="w-full text-left bg-card rounded-xl border border-border
                 p-5 hover:border-primary/30 hover:shadow-sm
                 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-serif text-lg font-semibold">
              {district.name}
            </h3>
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5
                             bg-primary/10 rounded-full text-xs text-primary font-medium"
            >
              <Award className="w-3 h-3" />
              ODOP
            </span>
          </div>

          <p className="text-primary font-medium text-sm mb-1">
            {district.anchorProduct}
          </p>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {district.anchorProductDescription}
          </p>
        </div>

        <div
          className="w-8 h-8 mt-1 rounded-full bg-secondary
                        flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </motion.button>
  );
};

export default ODOPDiscovery;
