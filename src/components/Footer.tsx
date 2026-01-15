import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-lg font-heading font-bold text-foreground">
              Payday<span className="text-gradient-gold">Picks</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Bet responsibly. Gambling can be addictive. 18+ only.
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Payday Picks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
