import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message envoyé ✨", description: "Nous vous répondrons sous 24h." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-3xl font-bold text-center mb-10"
      >
        Contactez-nous
      </motion.h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 rounded-lg border border-border bg-card p-6"
        >
          <Input placeholder="Votre nom" required className="bg-secondary/50" />
          <Input type="email" placeholder="Email" required className="bg-secondary/50" />
          <Input type="tel" placeholder="Téléphone" className="bg-secondary/50" />
          <Textarea placeholder="Votre message..." required rows={5} className="bg-secondary/50" />
          <Button type="submit" disabled={sending} className="w-full gradient-rose text-card hover:shadow-rose">
            {sending ? "Envoi..." : "Envoyer"}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-heading text-sm font-semibold">Adresse</h4>
                <p className="text-sm text-muted-foreground">12 Rue des Roses, Casablanca</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-heading text-sm font-semibold">Téléphone</h4>
                <p className="text-sm text-muted-foreground">+212 6 XX XX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-heading text-sm font-semibold">Email</h4>
                <p className="text-sm text-muted-foreground">julia@boutique.ma</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-heading text-sm font-semibold">Horaires</h4>
                <p className="text-sm text-muted-foreground">Lun — Sam : 10h — 20h</p>
                <p className="text-sm text-muted-foreground">Dim : 14h — 19h</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846!2d-7.6192!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwOS4xIlc!5e0!3m2!1sfr!2sma!4v1"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Julia Boutique Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
