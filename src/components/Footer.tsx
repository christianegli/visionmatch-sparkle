import VisionMatchLogo from "./VisionMatchLogo";
import { Check, Star, Users, MapPin } from "lucide-react";

const Footer = () => {
  const trustSignals = [
    { icon: Users, text: "2,847 active members" },
    { icon: MapPin, text: "47 partner opticians" },
    { icon: Star, text: "4.8★ member satisfaction" },
    { icon: Check, text: "Powered by OptiQa technology" }
  ];

  const links = [
    { text: "FAQ", href: "#" },
    { text: "How It Works", href: "#" },
    { text: "Find Stores", href: "#" },
    { text: "Contact", href: "#" }
  ];

  return (
    <footer className="py-16 liquid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <VisionMatchLogo className="justify-center mb-8" />
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div key={index} className="glass-card p-4 rounded-xl flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">{signal.text}</span>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 VisionMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;