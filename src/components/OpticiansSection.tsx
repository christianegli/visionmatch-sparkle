import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

const OpticiansSection = () => {
  return (
    <section className="py-24 organic-background grain-texture">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Find Your VisionMatch Optician
          </h2>
          <p className="text-xl text-muted-foreground">
            Available at the best opticians in Barcelona
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-3xl">
            <div className="aspect-video bg-gradient-premium rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-16 h-16 text-white" />
              <span className="text-white ml-4 text-lg">Interactive Map Coming Soon</span>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span className="font-semibold text-foreground">Óptica Rambla</span>
              </div>
              <p className="text-muted-foreground italic text-sm">
                "VisionMatch transformed our business. Customers love the freedom."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Button className="glass-button w-full text-lg py-6 rounded-2xl hover-glass">
              SEE STORES NEAR ME
            </Button>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Your optician not listed yet?</p>
              <Button variant="outline" className="border-border hover:bg-secondary rounded-xl">
                SUGGEST A STORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpticiansSection;