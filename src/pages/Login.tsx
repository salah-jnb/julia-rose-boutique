import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      toast({ title: "Bienvenue ✨" });
      navigate("/");
    } else {
      toast({ title: "Erreur", description: "Identifiants incorrects.", variant: "destructive" });
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm rounded-lg border border-border bg-card p-8"
      >
        <h1 className="text-center font-heading text-3xl font-bold italic text-gradient-rose mb-6">Julia</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-secondary/50"
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-secondary/50"
          />
          <Button type="submit" className="w-full gradient-rose text-card hover:shadow-rose">
            Se connecter
          </Button>
        </form>

        <div className="mt-6 rounded-md bg-secondary/50 p-3 text-xs text-muted-foreground space-y-1.5">
          <p className="font-semibold text-foreground text-center mb-1">Comptes démo</p>
          <p><strong>Admin:</strong> admin@julia.ma / Admin2024</p>
          <p><strong>Utilisateur:</strong> user@julia.ma / User2024</p>
        </div>
      </motion.div>
    </div>
  );
}
