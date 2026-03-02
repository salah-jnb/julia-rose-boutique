import { Link } from "react-router-dom";
import { ShoppingBag, User, LogOut } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="font-heading text-2xl font-bold italic text-gradient-rose">
          Julia
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Boutique
          </Link>
          <Link to="/contact" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
          {user?.role === "admin" && (
            <Link to="/admin" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2 text-foreground transition-colors hover:text-rose-dark">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full gradient-rose text-[10px] font-bold text-card">
                {totalItems}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-rose text-xs font-bold text-card">
                {user.name[0]}
              </div>
              <span className="hidden text-sm font-medium md:inline">{user.name}</span>
              {user.role === "admin" && (
                <Badge variant="outline" className="border-accent text-accent text-[10px]">
                  Admin
                </Badge>
              )}
              <Button variant="ghost" size="icon" onClick={logout} className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
