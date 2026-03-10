import { ArrowLeft, MapPin, Globe, Users, Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StateInfo } from "@/data/stateInfo";

interface Props {
  state: StateInfo;
}

const StateComingSoon = ({ state }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "india-map" } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-primary hover:underline transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          Back Into Origins
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            {state.name}
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {state.description}
          </p>
        </motion.div>

        {/* State Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="bg-card border border-border/50 rounded-3xl shadow-xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Capital</p>
                <p className="font-semibold text-lg">{state.capital}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Globe className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="font-semibold text-lg">{state.area}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">Population</p>
                <p className="font-semibold text-lg">{state.population}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Languages className="text-primary mt-1" size={20} />
              <div>
                <p className="text-sm text-muted-foreground">
                  Primary Language
                </p>
                <p className="font-semibold text-lg">{state.language}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
            Full Cultural Archive Coming Soon
          </div>

          <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm">
            We are currently documenting hidden gems, heritage crafts, tribal
            knowledge systems, and local food traditions from {state.name}.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StateComingSoon;
