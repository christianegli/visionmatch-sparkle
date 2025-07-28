import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TheNewWaySection from "@/components/TheNewWaySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PersonalizedProfileSection from "@/components/PersonalizedProfileSection";
import ProtectionSection from "@/components/ProtectionSection";
import OpticiansSection from "@/components/OpticiansSection";
import PricingSection from "@/components/PricingSection";
import JoinMovementSection from "@/components/JoinMovementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main grain-texture">
      <Navigation />
      <HeroSection />
      <TheNewWaySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PersonalizedProfileSection />
      <ProtectionSection />
      <OpticiansSection />
      <PricingSection />
      <JoinMovementSection />
      <Footer />
    </div>
  );
};

export default Index;
