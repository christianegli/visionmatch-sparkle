import { Check } from "lucide-react";

const TheNewWaySection = () => {
  const benefits = [
    "Multiple frames - always",
    "Free prescription updates",
    "Damage & loss protection included", 
    "Switch styles whenever you want",
    "Contact lenses available"
  ];

  return (
    <section className="py-24 liquid-bg grain-texture">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Finally. Eyewear that adapts to your life.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-gradient-premium rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-3xl text-center hover-glass">
            <p className="text-3xl font-bold text-foreground mb-2">From €19/month</p>
            <p className="text-muted-foreground">at participating opticians</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheNewWaySection;