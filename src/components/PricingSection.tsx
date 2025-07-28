import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "ESSENTIAL",
      price: "€19",
      features: [
        "2 frames always available",
        "Annual style change", 
        "Basic protection"
      ]
    },
    {
      name: "COMFORT",
      price: "€29",
      features: [
        "2-3 frames in rotation",
        "Unlimited style changes",
        "Full protection included",
        "Prescription updates free"
      ],
      popular: true
    },
    {
      name: "PREMIUM", 
      price: "€39",
      features: [
        "3-4 frames available",
        "Contacts included",
        "Premium lens options",
        "Priority service"
      ]
    }
  ];

  return (
    <section className="py-24 liquid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose your vision freedom:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-3xl hover-glass relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-premium text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-foreground">
                  {plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 rounded-xl ${
                  plan.popular 
                    ? 'glass-button' 
                    : 'border border-border hover:bg-secondary'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="glass-button text-lg px-8 py-6 rounded-2xl hover-glass">
            QUIZ: FIND YOUR PERFECT PLAN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;