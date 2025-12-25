import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Clock, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * CASE STUDY PLACEHOLDER COMPONENT
 *
 * Use this component while building your case study portfolio.
 * Replace with CaseStudyCard components once you have VERIFIED results.
 *
 * DO NOT add case studies unless they meet ALL criteria in CASE_STUDY_RULES.md
 */

// Example of how a REAL case study should be structured (for future use)
export interface CaseStudyData {
  // Required: Must have written permission from client
  clientName: string;
  clientLogo?: string;
  industry: string;

  // Required: Specific, measurable challenge
  challenge: string;

  // Required: What you actually built/did
  solution: string;

  // Required: VERIFIED metrics with methodology
  results: {
    metric: string;
    value: string;
    methodology: string; // How was this measured?
    verifiedDate: string; // When was this verified?
  }[];

  // Required: Direct quote with attribution
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
    dateGiven: string;
  };

  // Required: Timeline of engagement
  timeline: {
    startDate: string;
    endDate: string;
    phases: string[];
  };

  // Optional but recommended
  caseStudyUrl?: string;
}

// Placeholder for when you don't have case studies yet
export const CaseStudyPlaceholder = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
              Case Studies <span className="font-semibold">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-light">
              We're currently working with our first design partners. Real case studies
              with verified results will be published as engagements complete.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 sm:p-10 border-dashed border-2 border-border/60 bg-muted/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Why We Don't Have Case Studies Yet
                  </h3>
                  <p className="text-muted-foreground font-light max-w-xl mx-auto">
                    We believe in radical honesty. Rather than fabricate success stories or
                    use anonymous testimonials, we're waiting until we can share real results
                    from real clients who've agreed to be named.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-border/40">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Q1 2025</div>
                    <div className="text-sm text-muted-foreground">First case studies expected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Verified</div>
                    <div className="text-sm text-muted-foreground">All metrics will be verifiable</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">Named</div>
                    <div className="text-sm text-muted-foreground">Real companies, real people</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground mb-4">
              Want to be one of our first case studies?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <Building2 className="w-4 h-4" />
              Join our Design Partner Program
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/**
 * TEMPLATE: Use this component when you have a REAL case study
 * Only use after verifying all data meets CASE_STUDY_RULES.md criteria
 */
export const CaseStudyCard = ({ caseStudy }: { caseStudy: CaseStudyData }) => {
  return (
    <Card className="p-6 sm:p-8 bg-card border border-border/40 hover:border-primary/30 transition-all">
      {/* Client info */}
      <div className="flex items-center gap-4 mb-6">
        {caseStudy.clientLogo ? (
          <img
            src={caseStudy.clientLogo}
            alt={caseStudy.clientName}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
        )}
        <div>
          <h3 className="font-semibold text-foreground">{caseStudy.clientName}</h3>
          <p className="text-sm text-muted-foreground">{caseStudy.industry}</p>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Challenge</h4>
        <p className="text-sm text-foreground font-light">{caseStudy.challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Solution</h4>
        <p className="text-sm text-foreground font-light">{caseStudy.solution}</p>
      </div>

      {/* Results */}
      <div className="mb-4">
        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Verified Results</h4>
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-3">
              <div className="text-xl font-bold text-primary">{result.value}</div>
              <div className="text-xs text-muted-foreground">{result.metric}</div>
              <div className="text-[10px] text-muted-foreground/60 mt-1">
                Verified: {result.verifiedDate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="border-t border-border/40 pt-4 mt-4">
          <blockquote className="text-sm italic text-muted-foreground mb-2">
            "{caseStudy.testimonial.quote}"
          </blockquote>
          <div className="text-xs">
            <span className="font-medium text-foreground">{caseStudy.testimonial.author}</span>
            <span className="text-muted-foreground"> — {caseStudy.testimonial.title}, {caseStudy.testimonial.company}</span>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="text-[10px] text-muted-foreground/60 mt-4 pt-4 border-t border-border/40">
        Engagement: {caseStudy.timeline.startDate} — {caseStudy.timeline.endDate}
      </div>
    </Card>
  );
};
