import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-bold italic text-gradient-rose">Julia</h3>
            <p className="mt-2 text-sm text-muted-foreground">La mode qui vous ressemble</p>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/" className="transition-colors hover:text-foreground">Boutique</a>
              <a href="/contact" className="transition-colors hover:text-foreground">Contact</a>
              <a href="/cart" className="transition-colors hover:text-foreground">Panier</a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-heading text-sm font-semibold">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="#" className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Julia Boutique. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
