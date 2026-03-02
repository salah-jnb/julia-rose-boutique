import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DELIVERY = 30;

export default function Cart() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const { toast } = useToast();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <ShoppingBag className="h-16 w-16 text-primary/40" />
        <h2 className="font-heading text-2xl font-semibold">Votre panier est vide</h2>
        <p className="text-muted-foreground">Explorez notre collection et trouvez la robe parfaite ✨</p>
        <Link to="/">
          <Button className="gradient-rose text-card hover:shadow-rose mt-2">Retour à la boutique</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-heading text-3xl font-bold mb-8">Mon Panier</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 rounded-lg border border-border bg-card p-4"
            >
              <img src={item.product.image} alt={item.product.name} className="h-24 w-20 rounded-md object-cover" />
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-semibold">{item.product.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.product.price} MAD / unité</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-secondary px-2 py-1">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-muted-foreground hover:text-foreground">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-muted-foreground hover:text-foreground">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="font-heading text-sm font-bold">{item.product.price * item.quantity} MAD</span>
                  <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <Button variant="outline" onClick={() => { clearCart(); toast({ title: "Panier vidé" }); }} className="text-sm">
            Vider le panier
          </Button>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 h-fit sticky top-24">
          <h3 className="font-heading text-lg font-semibold mb-4">Résumé</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{subtotal} MAD</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Livraison</span><span>{DELIVERY} MAD</span></div>
            <div className="border-t border-border pt-2 mt-2 flex justify-between font-heading font-bold text-base">
              <span>Total</span><span className="text-gradient-rose">{subtotal + DELIVERY} MAD</span>
            </div>
          </div>
          <Button
            className="w-full mt-6 gradient-rose text-card hover:shadow-rose"
            onClick={() => toast({ title: "Commande passée ! 🎉", description: "Merci pour votre achat." })}
          >
            Passer la commande
          </Button>
        </div>
      </div>
    </div>
  );
}
