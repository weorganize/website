import { useEffect } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SEO } from "@/components/SEO";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Calendar, ArrowRight, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "contact";

  // Track conversion on page load
  useEffect(() => {
    // Google Analytics 4 conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        event_category: "lead",
        event_label: type,
        value: type === "demo" ? 100 : 50,
      });
    }

    // Google Tag Manager dataLayer push
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_submission",
        formType: type,
        conversionValue: type === "demo" ? 100 : 50,
      });
    }
  }, [type]);

  const content = {
    contact: {
      title: "Thank You for Reaching Out!",
      subtitle: "We've received your message",
      description: "Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our resources.",
      icon: Mail,
    },
    demo: {
      title: "Demo Request Received!",
      subtitle: "We're excited to show you what we can do",
      description: "A member of our team will reach out within 24 hours to schedule your personalized demo. Get ready to see AI in action!",
      icon: Calendar,
    },
    poc: {
      title: "PoC Request Submitted!",
      subtitle: "Your free proof of concept is on its way",
      description: "We'll review your requirements and reach out within 48 hours to discuss next steps for your free AI prototype.",
      icon: CheckCircle2,
    },
    newsletter: {
      title: "You're Subscribed!",
      subtitle: "Welcome to our community",
      description: "You'll receive our latest insights, case studies, and AI industry updates directly in your inbox.",
      icon: Mail,
    },
  };

  const currentContent = content[type as keyof typeof content] || content.contact;
  const Icon = currentContent.icon;

  return (
    <PageLayout>
      <SEO
        title="Thank You"
        description="Thank you for contacting WeOrganize.ai. We'll be in touch soon."
        noIndex={true}
      />

      <section className="min-h-[70vh] flex items-center justify-center py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-primary mb-4">
            {currentContent.subtitle}
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {currentContent.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Clock className="w-4 h-4" />
            <span>Expected response time: 24-48 hours</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/case-studies">
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                Read Our Blog
              </Link>
            </Button>
          </div>

          <div className="bg-muted/30 rounded-lg p-6 border">
            <h3 className="font-semibold mb-4">While you wait, explore:</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <Link to="/services/ai-solutions" className="p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                <span className="font-medium">AI Solutions</span>
                <p className="text-muted-foreground text-xs mt-1">See our AI capabilities</p>
              </Link>
              <Link to="/roi-calculator" className="p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                <span className="font-medium">ROI Calculator</span>
                <p className="text-muted-foreground text-xs mt-1">Calculate your savings</p>
              </Link>
              <Link to="/poc-approach" className="p-3 bg-background rounded-lg hover:bg-muted transition-colors">
                <span className="font-medium">Our Approach</span>
                <p className="text-muted-foreground text-xs mt-1">How we deliver results</p>
              </Link>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Questions? Email us at{" "}
            <a href="mailto:hr@weorganize.ai" className="text-primary hover:underline">
              hr@weorganize.ai
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default ThankYou;
