import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const JoinMovementSection = () => {
  const expansionCities = [
    { city: "Madrid", date: "Coming March 2025" },
    { city: "Valencia", date: "Coming May 2025" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-foreground mb-6">
          Barcelona sees differently. You're next.
        </h2>
        
        <div className="glass-card p-8 rounded-3xl mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Join the Movement
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input 
              placeholder="Enter your email" 
              className="rounded-xl border-border"
            />
            <Button className="glass-button px-8 py-3 rounded-xl hover-glass">
              JOIN VISIONMATCH
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Get exclusive member benefits and be first to know when we launch in your neighborhood.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {expansionCities.map((city, index) => (
            <div key={index} className="glass-card p-4 rounded-2xl">
              <h4 className="font-semibold text-foreground">{city.city}</h4>
              <p className="text-sm text-muted-foreground">{city.date}</p>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="border-border hover:bg-secondary rounded-xl">
          REQUEST YOUR CITY
        </Button>
      </div>
    </section>
  );
};

export default JoinMovementSection;