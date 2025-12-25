import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-5 py-2.5 mb-10">
            <span className="text-primary font-medium text-sm tracking-wide">Free Pilot Program</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 sm:mb-8 text-foreground tracking-tight">
            We build AI automation pilots that{" "}
            <span className="font-semibold">prove ROI before you spend a dollar.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto font-light leading-relaxed px-2 sm:px-0">
            Most AI projects fail because companies bet big before validating small. We flip that. Get a working prototype in 4 weeks—free—then decide if it's worth scaling.
          </p>

          <div className="flex flex-col items-center gap-3 px-4 sm:px-0">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 sm:px-10 shadow-md hover:shadow-lg transition-all w-full sm:w-auto min-h-[52px] text-base"
              >
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground font-light">
              30 minutes. No pitch. Just clarity on whether AI fits your workflow.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-3 gap-4 sm:gap-10 mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-border/40 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">Free</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-light">Proof of Concept</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">4-6</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-light">Weeks to Results</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">$0</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 font-light">Upfront Risk</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
