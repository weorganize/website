import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { WhyWeorganize } from "@/components/WhyWeorganize";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PoCTimeline } from "@/components/PoCTimeline";
import { TechStackPremium } from "@/components/TechStackPremium";
import { VisionSection } from "@/components/VisionSection";
import { ContactSection } from "@/components/ContactSection";
import { InNumbersSection } from "@/components/InNumbersSection";
import { DesignPartnerSection } from "@/components/DesignPartnerSection";
import { SEO } from "@/components/SEO";
import { StickyCtaBar } from "@/components/StickyCtaBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Weorganize.ai - Reorganizing the Future with AI Agents"
        description="Build intelligent, autonomous agents that optimize workflows, decisions, and performance. Enterprise AI consulting and automation solutions."
      />
      
      <Navigation />
      <Hero />
      <ClientLogos />
      <WhyWeorganize />
      <SolutionsGrid />
      <IndustriesSection />
      <PoCTimeline />
      <InNumbersSection />
      <DesignPartnerSection />
      <TechStackPremium />
      <VisionSection />
      <ContactSection />
      <Footer />
      <StickyCtaBar />
    </div>
  );
};

export default Index;
