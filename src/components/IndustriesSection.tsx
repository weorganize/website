import { Building2, Wallet, ShoppingCart, Monitor, Scale, Factory, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const IndustriesSection = () => {
  const industries = [
    { icon: Building2, title: "Healthcare", description: "Document extraction and patient record automation" },
    { icon: Wallet, title: "Finance", description: "Risk assessment and fraud detection at scale" },
    { icon: ShoppingCart, title: "E-commerce", description: "Customer service agents and inventory optimization" },
    { icon: Monitor, title: "IT Operations", description: "Incident response and infrastructure monitoring" },
    { icon: Scale, title: "Legal", description: "Contract analysis and compliance workflows" },
    { icon: Factory, title: "Manufacturing", description: "Predictive maintenance and quality control" }
  ];

  return (
    <section className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-5 tracking-tight">
              Built for <span className="font-semibold">Your Industry</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              AI agents trained on industry-specific workflows and compliance requirements.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <Card
                className="bg-card border border-border/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] active:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group h-full"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/15 group-active:bg-primary/20 transition-colors">
                    <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base text-card-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Inline CTA */}
        <ScrollReveal delay={0.35}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-muted-foreground mb-4 font-light">See how AI automation applies to your industry.</p>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground font-medium px-8 transition-all">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
