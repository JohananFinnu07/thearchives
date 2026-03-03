import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { ODOPDistrict } from "@/data/odop";

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
      className="group w-full text-left bg-card rounded-xl border border-border
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

        <div className="mt-1 flex items-center justify-center">
          <ArrowUpRight
            className="w-4 h-4 text-muted-foreground
               group-hover:text-primary
               group-hover:translate-x-1
               group-hover:-translate-y-1
               transition-all duration-300"
          />
        </div>
      </div>
    </motion.button>
  );
};

export default DistrictCard;
