import { Shield, Check, X } from "lucide-react";

const ProtectionSection = () => {
  const protections = [
    "Theft ✓",
    "Loss ✓", 
    "Damage ✓",
    "Prescription changes ✓",
    "Style regrets ✓"
  ];

  return (
    <section className="py-24 liquid-bg grain-texture">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Protection That Actually Protects
          </h2>
          <p className="text-xl text-muted-foreground">
            Life happens. We've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {protections.map((protection, index) => (
                <span key={index} className="bg-gradient-premium text-white px-3 py-1 rounded-full text-sm">
                  {protection}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Shield className="w-24 h-24 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold text-foreground">VS</p>
          </div>
          
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Traditional insurance:</span>
                <X className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-sm text-muted-foreground">€8-15/month + deductibles</p>
            </div>
            
            <div className="glass-card p-4 rounded-xl bg-gradient-premium">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">VisionMatch:</span>
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm text-white/80">Already included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;