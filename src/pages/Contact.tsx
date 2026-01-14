import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, MessageSquare, Linkedin, Calendar, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useSubmitLead } from "@/hooks/useSubmitLead";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    challenge: ""
  });
  const { submitLead, isLoading, error } = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitLead({
      email: formData.email,
      company: formData.company,
      challenge: formData.challenge,
      source: "contact-page"
    });
    if (success) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout>
        <SEO
          title="You're Booked"
          description="Thank you for booking a strategy call with weorganize.ai."
        />
        <section className="py-32 container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              You're on the calendar.
            </h1>
            <p className="text-muted-foreground mb-8 font-light">
              We'll send a confirmation to <span className="text-foreground font-medium">{formData.email}</span> shortly.
            </p>
            <Card className="p-6 sm:p-8 border border-border/40 bg-card text-left max-w-md mx-auto">
              <h3 className="font-semibold mb-4">What to expect:</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>A 30-minute conversation (no slideware)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>We'll identify one workflow worth automating</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>You'll leave with a clear next step—even if it's not with us</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Want to prep?</span> Think about the task your team dreads most. That's usually where we start.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO
        title="Book a Free Strategy Call"
        description="Book a free 30-minute strategy call with weorganize.ai. No pitch, just clarity on whether AI automation fits your workflow."
      />
      <PageHero
        title="Book a Free Strategy Call"
        subtitle="30 minutes. No pitch. Just clarity on whether AI automation fits your workflow."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-2">Request Your Call</h2>
            <p className="text-muted-foreground text-sm mb-6">
              We'll reach out within 24 hours to schedule your strategy session.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  required
                  disabled={isLoading}
                  aria-required="true"
                  aria-describedby="email-hint"
                />
                <span id="email-hint" className="sr-only">Enter your work email address</span>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                  required
                  disabled={isLoading}
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                  What's the #1 manual process slowing your team down?
                  <span className="text-muted-foreground font-normal ml-1">(optional)</span>
                </label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  rows={3}
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  placeholder="e.g., Processing customer support tickets, manual data entry, document review..."
                  disabled={isLoading}
                  aria-describedby="challenge-hint"
                />
                <span id="challenge-hint" className="sr-only">Describe a manual process you would like to automate</span>
              </div>
              {error && (
                <p className="text-sm text-red-500 text-center" role="alert" aria-live="polite">{error}</p>
              )}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                No spam. No sales pitch. Just a conversation.
              </p>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">What to Expect</h3>
              <ul className="text-sm text-muted-foreground space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>A 30-minute conversation (no slideware)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>We'll identify one workflow worth automating</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>You'll leave with a clear next step—even if it's not with us</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
              <p className="text-sm text-muted-foreground mt-2">
                We'll email you to confirm a time that works for both of us.
              </p>
            </Card>

            <Card className="p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prefer Email?</h3>
              <a href="mailto:hello@weorganize.ai" className="text-primary hover:underline">
                hello@weorganize.ai
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                For general inquiries or if you'd rather write first.
              </p>
            </Card>

            <Card className="p-6">
              <Linkedin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect on LinkedIn</h3>
              <a
                href="https://linkedin.com/company/weorganize-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Follow weorganize.ai
              </a>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
