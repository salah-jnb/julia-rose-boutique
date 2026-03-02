import { useState } from "react";
import { motion } from "framer-motion";
import { Package, ShoppingCart, DollarSign, Users, Plus, Pencil, Trash2 } from "lucide-react";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const stats = [
  { label: "Total Produits", value: "12", icon: Package },
  { label: "Commandes aujourd'hui", value: "5", icon: ShoppingCart },
  { label: "Chiffre du jour", value: "3 450 MAD", icon: DollarSign },
  { label: "Clients", value: "48", icon: Users },
];

const orders = [
  { id: "#1042", client: "Amina B.", amount: "750 MAD", status: "Confirmée" },
  { id: "#1041", client: "Yasmine K.", amount: "380 MAD", status: "En attente" },
  { id: "#1040", client: "Nora L.", amount: "1 200 MAD", status: "Livrée" },
  { id: "#1039", client: "Lina S.", amount: "520 MAD", status: "Confirmée" },
  { id: "#1038", client: "Sofia M.", amount: "290 MAD", status: "En attente" },
];

const statusColor: Record<string, string> = {
  "En attente": "bg-amber-100 text-amber-700 border-amber-200",
  "Confirmée": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Livrée": "bg-blue-100 text-blue-700 border-blue-200",
};

type Tab = "overview" | "products" | "orders" | "clients";

export default function Admin() {
  const [tab, setTab] = useState<Tab>("overview");

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: "Vue d'ensemble" },
    { key: "products", label: "Produits" },
    { key: "orders", label: "Commandes" },
    { key: "clients", label: "Clients" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-56 border-r border-border bg-card p-4 md:block">
        <h2 className="font-heading text-lg font-bold italic text-gradient-rose mb-6">Admin</h2>
        <nav className="space-y-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                tab === t.key ? "gradient-rose text-card shadow-rose" : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile tabs */}
      <div className="flex flex-col flex-1">
        <div className="flex gap-1 overflow-x-auto border-b border-border p-2 md:hidden">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                tab === t.key ? "gradient-rose text-card" : "bg-secondary text-muted-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-6">
          {tab === "overview" && <OverviewTab />}
          {tab === "products" && <ProductsTab />}
          {tab === "orders" && <OrdersTab />}
          {tab === "clients" && <ClientsTab />}
        </main>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-secondary p-2">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="font-heading text-xl font-bold">{s.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="font-heading text-lg font-semibold mb-4">Commandes récentes</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Commande</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Client</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Montant</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Statut</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{o.id}</td>
                  <td className="px-4 py-3">{o.client}</td>
                  <td className="px-4 py-3">{o.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold">Produits</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-rose text-card hover:shadow-rose gap-1">
              <Plus className="h-4 w-4" /> Ajouter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-heading">Ajouter un produit</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 mt-2">
              <Input placeholder="Nom du produit" className="bg-secondary/50" />
              <Select>
                <SelectTrigger className="bg-secondary/50"><SelectValue placeholder="Catégorie" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Casual">Casual</SelectItem>
                  <SelectItem value="Soirée">Soirée</SelectItem>
                  <SelectItem value="Mariage">Mariage</SelectItem>
                  <SelectItem value="Été">Été</SelectItem>
                </SelectContent>
              </Select>
              <Input type="number" placeholder="Prix (MAD)" className="bg-secondary/50" />
              <Input type="number" placeholder="Stock" className="bg-secondary/50" />
              <Button className="w-full gradient-rose text-card">Ajouter le produit</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Image</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Nom</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Catégorie</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prix</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Stock</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-border">
                <td className="px-4 py-2"><img src={p.image} alt={p.name} className="h-10 w-8 rounded object-cover" /></td>
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">{p.price} MAD</td>
                <td className="px-4 py-3">{p.stock}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive"><Trash2 className="h-3.5 w-3.5" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrdersTab() {
  return (
    <div>
      <h3 className="font-heading text-lg font-semibold mb-4">Toutes les commandes</h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Commande</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Client</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Montant</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{o.id}</td>
                <td className="px-4 py-3">{o.client}</td>
                <td className="px-4 py-3">{o.amount}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusColor[o.status]}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ClientsTab() {
  const clients = [
    { name: "Amina B.", email: "amina@email.com", orders: 3, total: "2 130 MAD" },
    { name: "Yasmine K.", email: "yasmine@email.com", orders: 1, total: "380 MAD" },
    { name: "Nora L.", email: "nora@email.com", orders: 5, total: "3 800 MAD" },
    { name: "Lina S.", email: "lina@email.com", orders: 2, total: "830 MAD" },
  ];

  return (
    <div>
      <h3 className="font-heading text-lg font-semibold mb-4">Clients</h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Nom</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Commandes</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.email} className="border-t border-border">
                <td className="px-4 py-3 font-medium">{c.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.email}</td>
                <td className="px-4 py-3">{c.orders}</td>
                <td className="px-4 py-3">{c.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
