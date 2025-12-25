import { Bot, LineChart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const WhyWeorganize = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous",
      description: "AI agents that think, learn, and act independently to streamline your operations without constant human intervention."
    },
    {
      icon: LineChart,
      title: "Scalable",
      description: "Solutions that grow with your business, from pilot projects to enterprise-wide deployment across all departments."
    },
    {
      icon: Shield,
      title: "Responsible",
      description: "Built with ethics, transparency, and security at the core. Your data and operations are always protected."
    }
  ];

  return (
    <section className="py-16 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-5 tracking-tight">
              Why <span className="font-semibold">Weorganize.ai</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-light px-2 sm:px-0">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that actually work.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card 
                className="bg-card border border-border/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] h-full"
              >
                <CardContent className="p-5 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
