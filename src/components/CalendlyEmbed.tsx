import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Video } from "lucide-react";

interface CalendlyEmbedProps {
  url?: string;
}

export const CalendlyEmbed = ({
  url = "https://calendly.com/weorganize-ai/strategy-call"
}: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

export const CalendlyButton = ({
  url = "https://calendly.com/weorganize-ai/strategy-call",
  text = "Book a Call",
}: {
  url?: string;
  text?: string;
}) => {
  const openCalendly = () => {
    // @ts-expect-error - Calendly is loaded via external script
    if (window.Calendly) {
      // @ts-expect-error - Calendly is loaded via external script
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback to opening in new tab
      window.open(url, "_blank");
    }
  };

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <button
      onClick={openCalendly}
      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors gap-2"
    >
      <Calendar className="w-4 h-4" />
      {text}
    </button>
  );
};

export const BookingCard = () => {
  return (
    <Card className="p-6 bg-card border border-border/40">
      <h3 className="text-xl font-semibold mb-4">Book Your Strategy Call</h3>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>30 minutes</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Video className="w-4 h-4 text-primary" />
          <span>Google Meet or Zoom</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 text-primary" />
          <span>Pick a time that works for you</span>
        </div>
      </div>
      <CalendlyButton text="Schedule Now" />
    </Card>
  );
};
