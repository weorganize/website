import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Rocket, DollarSign, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partnerBenefits = [
  {
    icon: DollarSign,
    title: "Discounted Rates",
    description: "Significant discount on our standard pricing in exchange for your feedback and flexibility."
  },
  {
    icon: MessageSquare,
    title: "Direct Input",
    description: "Shape the product direction. Your feedback directly influences what we build next."
  },
  {
    icon: Rocket,
    title: "Early Access",
    description: "Be first to access new features and capabilities as we develop them."
  },
  {
    icon: Handshake,
    title: "Partnership Credit",
    description: "Featured as a founding partner when you're ready to share your story publicly."
  }
];

export const DesignPartnerSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
              Now Accepting Partners
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            Join Our <span className="font-semibold">Design Partner Program</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            We're in our early customer phase, working closely with select organizations
            to build AI solutions that deliver real business value. No vanity metrics.
            No fabricated case studies. Just honest collaboration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {partnerBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-5 sm:p-6 bg-card border border-border/40 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 sm:p-8 bg-background border border-border/60">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 text-center">
              What We're Looking For
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">Ideal Partners:</h4>
                <ul className="space-y-2 text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Mid-market companies with clear AI use cases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Decision-makers who can commit to a pilot
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Teams willing to provide regular feedback
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Organizations open to being a future reference
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">In Return, You Get:</h4>
                <ul className="space-y-2 text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    40-60% discount on standard engagement rates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Direct founder access and priority support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Flexible terms with minimal commitment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Influence over our product roadmap
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 gap-2">
                Apply to Become a Partner
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-3">
              Limited spots available. We review applications weekly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
