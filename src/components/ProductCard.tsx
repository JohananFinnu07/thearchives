import { motion } from "framer-motion";
import { Product } from "@/data/destinations";
import { Link, useParams } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { id } = useParams();
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-sm border p-6 flex flex-col h-full">
        {/* Image */}
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover object-center rounded-lg mb-4"
          />
        )}

        {/* Badge */}
        <span
          className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            product.type === "famous"
              ? "bg-primary/10 text-primary"
              : "bg-accent/10 text-accent"
          }`}
        >
          {product.type === "famous" ? "Famous" : "Hidden Gem"}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* CTA aligned bottom */}
        <div className="mt-auto">
          <Link
            to={`/hidden-gems/${id}/${slug}`}
            className="inline-block text-primary font-medium hover:underline"
          >
            Explore →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
