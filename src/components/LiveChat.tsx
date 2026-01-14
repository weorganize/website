import { useEffect } from "react";

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

interface LiveChatProps {
  websiteId?: string;
}

export const LiveChat = ({ websiteId = "YOUR_CRISP_WEBSITE_ID" }: LiveChatProps) => {
  useEffect(() => {
    // Don't load in development if no real ID is set
    if (websiteId === "YOUR_CRISP_WEBSITE_ID") {
      console.log("LiveChat: Set your Crisp website ID to enable chat");
      return;
    }

    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = websiteId;

    // Load Crisp script
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const crispScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (crispScript) {
        crispScript.remove();
      }
    };
  }, [websiteId]);

  return null;
};

// Alternative: Simple chat button that opens email or calendly
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export const SimpleChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4">
            <h3 className="font-semibold text-primary-foreground">Chat with us</h3>
            <p className="text-sm text-primary-foreground/80">We typically reply within a few hours</p>
          </div>

          <div className="p-4 space-y-3">
            <a
              href="mailto:hr@weorganize.ai?subject=Website Inquiry"
              className="block w-full p-3 bg-secondary hover:bg-secondary/80 rounded-lg text-center text-sm font-medium transition-colors"
            >
              Send us an email
            </a>
            <a
              href="/contact"
              className="block w-full p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-center text-sm font-medium transition-colors"
            >
              Schedule a call
            </a>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-primary-foreground/80 hover:text-primary-foreground"
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};
