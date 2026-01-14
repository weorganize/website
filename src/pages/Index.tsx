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
import { Testimonials } from "@/components/Testimonials";
import { FAQ, faqData } from "@/components/FAQ";
import { TrustBadges } from "@/components/TrustBadges";
import { SEO } from "@/components/SEO";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/BackToTop";
import { SimpleChatButton } from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="WeOrganize.ai - Reorganizing the Future with AI Agents"
        description="Transform your business with intelligent AI agents and automation. Enterprise-grade AI solutions from Fortune 500 veterans. Free proof of concept. 16+ years experience."
        keywords="AI consulting, AI automation, enterprise AI, AI agents, LLM development, machine learning, business automation, workflow automation, Azure OpenAI, GPT integration, AI solutions"
        canonical="https://weorganize.ai/"
        faq={faqData}
      />

      <Navigation />
      <Hero />
      <TrustBadges />
      <ClientLogos />
      <WhyWeorganize />
      <SolutionsGrid />
      <IndustriesSection />
      <PoCTimeline />
      <Testimonials />
      <InNumbersSection />
      <DesignPartnerSection />
      <TechStackPremium />
      <FAQ />
      <VisionSection />
      <ContactSection />
      <Footer />

      {/* Global Components */}
      <StickyCtaBar />
      <BackToTop />
      <SimpleChatButton />
      <CookieConsent />
    </div>
  );
};

export default Index;
