import { Button } from "@/components/ui/button";
import { Clock, Eye, Palette, Target } from "lucide-react";

const PersonalizedProfileSection = () => {
  const considerations = [
    {
      icon: Clock,
      text: "Your daily activities and screen time"
    },
    {
      icon: Palette,
      text: "Style preferences and lifestyle"
    },
    {
      icon: Eye,
      text: "Vision challenges and needs"
    },
    {
      icon: Target,
      text: "Budget and priorities"
    }
  ];

  return (
    <section className="py-24 organic-background grain-texture">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Your Personalized Vision Profile
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          Not all eyes are the same. Neither should your solution be.
        </p>
        
        <div className="glass-card p-8 rounded-3xl mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Our AI-powered quiz considers:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg text-muted-foreground mb-2">
            Get your free personalized recommendation in 3 minutes.
          </p>
          <p className="text-sm text-muted-foreground">
            No obligation. No spam. Just clarity.
          </p>
        </div>
        
        <Button className="glass-button text-lg px-8 py-6 rounded-2xl hover-glass">
          START THE QUIZ
        </Button>
      </div>
    </section>
  );
};

export default PersonalizedProfileSection;