import { Button } from "@/components/ui/button";
import { Brain, Heart, MapPin, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Take the Quiz",
      description: "Our AI analyzes your lifestyle and vision needs",
      icon: Brain
    },
    {
      number: "2", 
      title: "Get Your Match",
      description: "Receive your personalized eyewear recommendation",
      icon: Heart
    },
    {
      number: "3",
      title: "Visit Your Optician", 
      description: "Choose from 47 Barcelona locations",
      icon: MapPin
    },
    {
      number: "4",
      title: "Start Seeing Differently",
      description: "Pick your frames. Change them anytime. Live freely.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            How VisionMatch Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="glass-card p-6 rounded-2xl text-center hover-glass">
                <div className="w-16 h-16 bg-gradient-premium rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button className="glass-button text-lg px-8 py-6 rounded-2xl hover-glass">
            FIND MY VISION MATCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;