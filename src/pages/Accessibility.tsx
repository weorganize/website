import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Mail } from "lucide-react";

const accessibilityFeatures = [
  "Semantic HTML structure with proper heading hierarchy",
  "ARIA labels and roles for screen readers",
  "Keyboard navigation support throughout the site",
  "Focus indicators for interactive elements",
  "Color contrast ratios meeting WCAG AA standards",
  "Alt text for all meaningful images",
  "Responsive design for all device sizes",
  "Dark mode support for reduced eye strain",
  "Skip navigation links for keyboard users",
  "Form labels and error messages for assistive technology",
];

const Accessibility = () => {
  return (
    <PageLayout>
      <SEO
        title="Accessibility Statement"
        description="WeOrganize.ai is committed to digital accessibility. Learn about our accessibility features and how to report issues."
      />
      <PageHero
        title="Accessibility Statement"
        subtitle="Our commitment to digital inclusion"
        breadcrumbs={[{ label: "Accessibility", href: "/accessibility" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
          <p className="text-muted-foreground mb-6">
            WeOrganize.ai is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conformance Status</h2>
          <p className="text-muted-foreground mb-6">
            We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility Features</h2>
          <p className="text-muted-foreground mb-4">
            Our website includes the following accessibility features:
          </p>
          <ul className="space-y-3 mb-6">
            {accessibilityFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Assistive Technologies</h2>
          <p className="text-muted-foreground mb-4">
            Our website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Known Limitations</h2>
          <p className="text-muted-foreground mb-4">
            While we strive for full accessibility, some areas may have limitations:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Third-party content:</strong> Some embedded content from third parties may not meet accessibility standards</li>
            <li><strong>PDF documents:</strong> Older PDF files may not be fully accessible</li>
            <li><strong>Interactive tools:</strong> Some complex interactive features may have limited accessibility</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Feedback</h2>
          <p className="text-muted-foreground mb-4">
            We welcome your feedback on the accessibility of WeOrganize.ai. Please let us know if you encounter accessibility barriers:
          </p>
          <div className="bg-muted/30 p-6 rounded-lg border mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:accessibility@weorganize.ai" className="text-primary hover:underline font-medium">
                accessibility@weorganize.ai
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              We aim to respond to accessibility feedback within 5 business days.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Continuous Improvement</h2>
          <p className="text-muted-foreground mb-6">
            We are committed to ongoing accessibility improvements. Our team regularly:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Conducts accessibility audits using automated tools and manual testing</li>
            <li>Trains team members on accessibility best practices</li>
            <li>Reviews and updates content for accessibility compliance</li>
            <li>Tests with assistive technologies across different platforms</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Specifications</h2>
          <p className="text-muted-foreground mb-4">
            This website relies on the following technologies for accessibility:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>HTML5</li>
            <li>WAI-ARIA</li>
            <li>CSS3</li>
            <li>JavaScript (with progressive enhancement)</li>
          </ul>

          <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong>Last reviewed:</strong> January 2026
              <br />
              This statement was created using the W3C Accessibility Statement Generator Tool.
            </p>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default Accessibility;
