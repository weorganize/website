import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar, CheckCircle, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useSubmitLead } from "@/hooks/useSubmitLead";

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [challenge, setChallenge] = useState("");
  const { submitLead, isLoading, error } = useSubmitLead();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitLead({ email, company, challenge, source: "homepage" });
    if (success) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 tracking-tight">
                You're on the calendar.
              </h2>
              <p className="text-muted-foreground mb-8 font-light">
                We'll send a confirmation to <span className="text-foreground font-medium">{email}</span> shortly.
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
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left: Text Content */}
            <ScrollReveal direction="right">
              <div className="space-y-6 sm:space-y-10">
                <div>
                  <div className="inline-block px-4 sm:px-5 py-2 border border-primary/20 rounded-full bg-primary/5 mb-6 sm:mb-8">
                    <span className="text-xs sm:text-sm font-medium text-primary tracking-wider">FREE STRATEGY CALL</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 tracking-tight">
                    Book a Free <span className="font-semibold">Strategy Call</span>
                  </h2>

                  <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                    30 minutes. No pitch. Just clarity on whether AI automation fits your workflow.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 sm:mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">Identify one workflow worth automating</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-light">
                        We'll find your highest-ROI opportunity together
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 sm:mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">Get a clear next step</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-light">
                        Even if it's not with us—we'll point you in the right direction
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 sm:mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">No commitment required</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-light">
                        This is a conversation, not a sales pitch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact Form */}
            <ScrollReveal direction="left" delay={0.15}>
              <Card className="p-5 sm:p-8 border border-border/40 bg-card shadow-[var(--shadow-elegant)]">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-foreground">Work Email</label>
                    <Input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="bg-background border-border focus:border-primary/50 min-h-[44px] sm:min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-foreground">Company</label>
                    <Input
                      placeholder="Your Company"
                      autoComplete="organization"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      disabled={isLoading}
                      className="bg-background border-border focus:border-primary/50 min-h-[44px] sm:min-h-[40px]"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-foreground">
                      What's the #1 manual process slowing your team down?
                      <span className="text-muted-foreground font-light ml-1">(optional)</span>
                    </label>
                    <Textarea
                      placeholder="e.g., Processing customer support tickets, manual data entry, document review..."
                      rows={3}
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      disabled={isLoading}
                      className="bg-background border-border focus:border-primary/50 resize-none min-h-[80px]"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all min-h-[48px] active:scale-[0.98] disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-4 w-4" />
                        Book a Free Strategy Call
                        <ArrowRight className="ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-light">
                    We'll reach out within 24 hours to schedule your call
                  </p>
                </form>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
