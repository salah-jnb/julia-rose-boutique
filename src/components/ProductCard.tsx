import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAdd = () => {
    addToCart(product);
    toast({ title: "Ajouté au panier ✨", description: product.name });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-300 hover:shadow-rose-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-4">
        <h3 className="font-heading text-sm font-semibold leading-tight">{product.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-gradient-rose">{product.price} MAD</span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 rounded-full gradient-rose px-3 py-1.5 text-xs font-medium text-card transition-all duration-200 hover:shadow-rose active:scale-95"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Ajouter
          </button>
        </div>
      </div>
    </motion.div>
  );
}
