import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

export const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (roughly past the hero)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border/40 shadow-lg transform transition-transform duration-300">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium text-foreground truncate">
              <span className="sm:hidden">Free AI Strategy Call</span>
              <span className="hidden sm:inline">Ready to explore AI automation?</span>
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 sm:px-6 shadow-md whitespace-nowrap"
              >
                <span className="hidden sm:inline">Book a Free Strategy Call</span>
                <span className="sm:hidden">Book Call</span>
                <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
              </Button>
            </Link>

            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground active:text-foreground/70 transition-colors touch-manipulation"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
