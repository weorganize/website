import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const PoCSection = () => {
  const benefits = [
    {
      title: "De-Risk Your Investment",
      description: "Demonstrate real-world value and technical feasibility before full-scale implementation."
    },
    {
      title: "Understand Our Approach",
      description: "Get a clear window into our collaborative methods and technical expertise."
    },
    {
      title: "Accelerate Innovation",
      description: "Rapidly prototype and test new ideas with cutting-edge technologies."
    },
  ];

  const features = [
    "No upfront commitment required",
    "Clear deliverables and timeline",
    "Hands-on collaboration with our experts",
    "Tangible results you can measure"
  ];

  return (
    <section id="poc" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Commitment
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                See the Value Before You Invest
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe trust is earned through transparency and results. That's why we offer to develop 
              a Proof of Concept (PoC) upfront for any of our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 space-y-3"
              >
                <CheckCircle2 className="w-8 h-8 text-accent" />
                <h4 className="text-lg font-semibold">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-12 border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your PoC Journey?
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience our process and validate the feasibility of our solutions firsthand. 
                Invest with complete confidence knowing exactly what you'll get.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="hero" size="lg">
                  Request Your PoC
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
