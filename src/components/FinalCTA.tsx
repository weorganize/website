import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="cta" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how our AI-powered solutions can drive innovation and growth for your organization. 
            Start with a Proof of Concept to see the value firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              <Calendar className="mr-2" />
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Request a PoC
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
