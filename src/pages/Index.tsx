import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, Category } from "@/data/products";
import { Slider } from "@/components/ui/slider";

const categories: Category[] = ["Casual", "Soirée", "Mariage", "Été"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (activeCategory === "all" || p.category === activeCategory) &&
          p.price >= priceRange[0] &&
          p.price <= priceRange[1]
      ),
    [activeCategory, priceRange]
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden gradient-rose-light py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold italic md:text-6xl"
          >
            Julia — <span className="text-gradient-rose">L'élégance au féminin</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-md text-muted-foreground"
          >
            Découvrez notre collection de robes élégantes, conçues pour sublimer chaque moment.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeCategory === "all"
                  ? "gradient-rose text-card shadow-rose"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/20"
              }`}
            >
              Toutes
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "gradient-rose text-card shadow-rose"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 md:w-64">
            <span className="text-xs text-muted-foreground whitespace-nowrap">Prix: {priceRange[0]} — {priceRange[1]} MAD</span>
            <Slider
              min={0}
              max={1500}
              step={50}
              value={priceRange}
              onValueChange={setPriceRange}
              className="flex-1"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">Aucune robe ne correspond à vos critères.</p>
        )}
      </section>
    </div>
  );
};

export default Index;
