import CompanyAnalysis from "../components/CompanyAnalysis";
import CompanyOverviewSection from "../components/CompanyOverviewSection";
import CTASection from "../components/CTASection";
import FeatureSection from "../components/FeatureSection";
import FinancialsSection from "../components/FinancialsSection";
import Footer from "../components/Footer";
import GlobalDataSection from "../components/GlobalDataSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PeerGroupSection from "../components/PeerGroupSection";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/Question";
import TestimonialSection from "../components/TestimonialSection";
import ValuationSection from "../components/ValuationSection";

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <GlobalDataSection />
      <CompanyOverviewSection />
      <FinancialsSection />
      <ValuationSection />
      <PeerGroupSection />
      <CompanyAnalysis />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HeroPage;
