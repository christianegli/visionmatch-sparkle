import { Button } from "@/components/ui/button";
import VisionMatchLogo from "./VisionMatchLogo";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-xl border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <VisionMatchLogo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#stores" className="text-muted-foreground hover:text-primary transition-colors">
              Find Stores
            </a>
          </div>
          
          <Button className="glass-button px-6 py-2 rounded-xl hover-glass">
            Take Quiz
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;