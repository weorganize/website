import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Building2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for testing AI capabilities with a focused project",
    price: "Free",
    priceDetail: "Proof of Concept",
    features: [
      "4-6 week engagement",
      "One focused use case",
      "Working prototype delivered",
      "ROI assessment report",
      "No commitment required",
      "Direct founder access",
    ],
    cta: "Start Free PoC",
    ctaLink: "/contact",
    highlighted: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    description: "Full implementation with ongoing support and optimization",
    price: "$15,000",
    priceDetail: "Starting price",
    features: [
      "Everything in Starter",
      "Full production deployment",
      "System integrations",
      "Team training included",
      "3 months support included",
      "Weekly progress updates",
      "Performance monitoring",
      "Documentation & handoff",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "Custom AI solutions for complex enterprise requirements",
    price: "Custom",
    priceDetail: "Based on scope",
    features: [
      "Everything in Growth",
      "Multi-system AI deployment",
      "Custom model development",
      "Dedicated success manager",
      "24/7 priority support",
      "SLA guarantees",
      "Security & compliance audit",
      "Outcome-based pricing option",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { feature: "Free Proof of Concept", starter: true, growth: true, enterprise: true },
  { feature: "Production Deployment", starter: false, growth: true, enterprise: true },
  { feature: "System Integrations", starter: false, growth: "Up to 3", enterprise: "Unlimited" },
  { feature: "Team Training", starter: false, growth: "4 hours", enterprise: "Unlimited" },
  { feature: "Support Duration", starter: "PoC only", growth: "3 months", enterprise: "12 months" },
  { feature: "Response Time", starter: "48 hours", growth: "24 hours", enterprise: "4 hours" },
  { feature: "Custom Model Training", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated Success Manager", starter: false, growth: false, enterprise: true },
  { feature: "SLA Guarantee", starter: false, growth: false, enterprise: true },
];

const Pricing = () => {
  return (
    <PageLayout>
      <SEO
        title="Pricing"
        description="Transparent pricing for AI solutions. Start with a free Proof of Concept and scale as you grow. No hidden fees, no long-term commitments."
      />
      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="Start with a free Proof of Concept. Pay only when you see value. Scale as you grow."
        breadcrumbs={[{ label: "Pricing", href: "/pricing" }]}
      />

      {/* Pricing Cards */}
      <section className="py-12 sm:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-4 sm:p-6 md:p-8 relative ${
                tier.highlighted
                  ? "border-primary bg-gradient-to-b from-primary/5 to-transparent md:scale-105 shadow-xl order-first md:order-none"
                  : "border-border/40 bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  tier.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}>
                  <tier.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.priceDetail}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={tier.ctaLink}>
                <Button
                  className={`w-full ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Compare <span className="font-semibold">Plans</span>
            </h2>
            <p className="text-muted-foreground">
              See what's included in each tier
            </p>
          </div>

          <div className="max-w-4xl mx-auto -mx-4 px-4 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm">Feature</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm">Starter</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm text-primary">Growth</th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-medium text-xs sm:text-sm">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">{row.feature}</td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm text-muted-foreground">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center bg-primary/5">
                      {typeof row.growth === "boolean" ? (
                        row.growth ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm font-medium">{row.growth}</span>
                      )}
                    </td>
                    <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-xs sm:text-sm text-muted-foreground">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Risk-Free Guarantee</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start with a free PoC. If you proceed to a paid engagement and aren't satisfied within the first 30 days, we'll refund your investment. No questions asked.
          </p>
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90">
              Start Your Free PoC
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </Card>
      </section>
    </PageLayout>
  );
};

export default Pricing;
