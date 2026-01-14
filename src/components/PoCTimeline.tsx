import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const PoCTimeline = () => {
  const phases = [
    {
      phase: "01",
      title: "Pilot",
      description: "2-week sprint to validate core hypothesis",
      deliverables: ["Technical feasibility", "Initial metrics", "Risk assessment"]
    },
    {
      phase: "02",
      title: "Metrics",
      description: "Measure impact and refine the approach",
      deliverables: ["Performance benchmarks", "ROI analysis", "Optimization plan"]
    },
    {
      phase: "03",
      title: "Scale",
      description: "Deploy across the organization",
      deliverables: ["Production rollout", "Team training", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 tracking-tight">
                Proof-of-Concept <span className="font-semibold">First</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light px-2 sm:px-0">
                De-risk your AI investment with our proven three-phase methodology
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 relative mt-8 sm:mt-0">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
            
            {phases.map((phase, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="up">
                <Card
                  className="p-6 sm:p-8 border border-border/40 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] active:shadow-[var(--shadow-card)] relative transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  {/* Phase number */}
                  <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-base sm:text-lg shadow-md">
                    {phase.phase}
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{phase.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground font-light">
                        {phase.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {phase.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
