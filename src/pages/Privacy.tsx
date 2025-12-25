import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";

const Privacy = () => {
  return (
    <PageLayout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for weorganize.ai - Learn how we collect, use, and protect your information."
      />
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: December 2024"
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Contact Information:</strong> Name, email address, company name when you fill out our contact form or request a consultation.</li>
            <li><strong>Communications:</strong> Any messages, feedback, or other communications you send to us.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, collected automatically through cookies and similar technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our services (only if you've opted in)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>With service providers who assist in operating our website (e.g., hosting, analytics)</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Third-Party Links</h2>
          <p className="text-muted-foreground mb-6">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:privacy@weorganize.ai" className="text-primary hover:underline">
              privacy@weorganize.ai
            </a>
          </p>

        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
