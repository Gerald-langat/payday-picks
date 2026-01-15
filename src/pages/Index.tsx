import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TipsSection from "@/components/TipsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TipsSection />
      <PricingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
