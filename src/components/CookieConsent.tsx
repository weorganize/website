import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Shield } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
          {!showDetails ? (
            // Simple View
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90">
                      Accept All
                    </Button>
                    <Button variant="outline" onClick={acceptNecessary}>
                      Necessary Only
                    </Button>
                    <Button variant="ghost" onClick={() => setShowDetails(true)} className="text-muted-foreground">
                      Customize
                    </Button>
                  </div>
                </div>
                <button
                  onClick={acceptNecessary}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          ) : (
            // Detailed View
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <CookieOption
                  title="Necessary Cookies"
                  description="Essential for the website to function. Cannot be disabled."
                  checked={true}
                  disabled={true}
                  id="necessary"
                />
                <CookieOption
                  title="Analytics Cookies"
                  description="Help us understand how visitors interact with our website."
                  defaultChecked={true}
                  id="analytics"
                />
                <CookieOption
                  title="Marketing Cookies"
                  description="Used to deliver relevant ads and track campaign performance."
                  defaultChecked={false}
                  id="marketing"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90">
                  Accept All
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const analytics = (document.getElementById("analytics") as HTMLInputElement)?.checked ?? false;
                    const marketing = (document.getElementById("marketing") as HTMLInputElement)?.checked ?? false;
                    savePreferences(analytics, marketing);
                  }}
                >
                  Save Preferences
                </Button>
                <Button variant="ghost" onClick={acceptNecessary} className="text-muted-foreground">
                  Reject All
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                For more information, please read our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CookieOption = ({
  title,
  description,
  checked,
  defaultChecked,
  disabled,
  id,
}: {
  title: string;
  description: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id: string;
}) => (
  <div className="flex items-start justify-between gap-4 p-4 bg-secondary/30 rounded-lg">
    <div>
      <h4 className="font-medium text-foreground text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        className="sr-only peer"
      />
      <div className={`w-11 h-6 rounded-full peer ${disabled ? 'bg-primary' : 'bg-secondary'} peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/20 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5 ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} />
    </label>
  </div>
);
