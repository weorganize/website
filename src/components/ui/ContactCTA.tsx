import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export const ContactCTA = ({
  title = "Ready to Get Started?",
  description = "Let's discuss how we can help transform your business with our solutions.",
  primaryButtonText = "Schedule a Consultation",
  secondaryButtonText = "Request a PoC",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/poc-approach"
}: ContactCTAProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to={primaryButtonLink}>
              <Button variant="hero" size="lg" className="group">
                <Calendar className="mr-2" />
                {primaryButtonText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={secondaryButtonLink}>
              <Button variant="outline" size="lg">
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
