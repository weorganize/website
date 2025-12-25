import { ScrollReveal } from "./ui/ScrollReveal";
import { FileCheck, MessageSquare, RefreshCw, Shield } from "lucide-react";

const principles = [
  {
    icon: FileCheck,
    title: "Prove Before You Pay",
    description: "Every engagement starts with a free proof-of-concept. See real results before any commitment."
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Weekly progress updates. No jargon. Direct access to the engineers building your solution."
  },
  {
    icon: RefreshCw,
    title: "Iterate Fast",
    description: "2-week sprint cycles. You review, we refine. Nothing ships without your sign-off."
  },
  {
    icon: Shield,
    title: "Your Data, Your Control",
    description: "We don't train on your data. Full NDA protection. Delete everything when we're done."
  }
];

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              How We <span className="font-semibold">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light">
              No long contracts. No vague promises. Here's exactly what working with us looks like.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">
                  {principle.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
