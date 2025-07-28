import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-glasses.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient grain-texture-heavy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium eyewear" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          See Without 
          <span className="bg-gradient-premium bg-clip-text text-transparent"> Limits</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Join the eyewear revolution
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Get all the glasses you need - when you need them.<br />
          One simple monthly fee. Zero ownership stress.
        </p>
        
        <Button className="glass-button text-lg px-8 py-6 rounded-2xl hover-glass mb-8">
          DISCOVER YOUR VISION MATCH
          <span className="ml-2">→</span>
        </Button>
        
        <div className="glass-card p-4 rounded-2xl inline-block">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Barcelona:</span> 2,847 members and growing
          </p>
        </div>
      </div>
      
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 glass-card rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 glass-card rounded-full opacity-40 animate-float-delayed"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 glass-card rounded-full opacity-50 animate-float"></div>
    </section>
  );
};

export default HeroSection;