import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <PageLayout>
      <SEO
        title="Cookie Policy"
        description="Cookie Policy for WeOrganize.ai - Learn about the cookies we use and how to manage your preferences."
      />
      <PageHero
        title="Cookie Policy"
        subtitle="Last updated: January 2026"
        breadcrumbs={[{ label: "Cookie Policy", href: "/cookies" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">

          <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="text-muted-foreground mb-6">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p className="text-muted-foreground mb-4">
            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Session cookies:</strong> Maintain your session while browsing</li>
            <li><strong>Security cookies:</strong> Protect against cross-site request forgery</li>
            <li><strong>Preference cookies:</strong> Remember your cookie consent choices</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
          <p className="text-muted-foreground mb-4">
            These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Google Analytics:</strong> Tracks page views, session duration, and user behavior</li>
            <li><strong>Vercel Analytics:</strong> Monitors website performance metrics</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
          <p className="text-muted-foreground mb-4">
            These cookies are used to track visitors across websites to display relevant advertisements.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>LinkedIn Insight Tag:</strong> Measures campaign performance</li>
            <li><strong>Google Ads:</strong> Conversion tracking (if applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Cookie Duration</h2>
          <table className="w-full text-sm text-muted-foreground mb-6">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 font-semibold">Cookie Type</th>
                <th className="text-left py-2 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Session cookies</td>
                <td className="py-2">Deleted when you close your browser</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Persistent cookies</td>
                <td className="py-2">Up to 2 years</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Analytics cookies</td>
                <td className="py-2">Up to 26 months</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Managing Cookies</h2>
          <p className="text-muted-foreground mb-4">
            You can control and manage cookies in several ways:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Cookie Banner:</strong> Use our cookie consent banner to accept or reject non-essential cookies</li>
            <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
            <li><strong>Third-Party Tools:</strong> Use browser extensions to manage tracking cookies</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Browser-Specific Instructions:</h3>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Cookies</h2>
          <p className="text-muted-foreground mb-6">
            Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective privacy policies:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
            <li><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel Privacy Policy</a></li>
            <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Privacy Policy</a></li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Updates to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this page periodically.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            If you have questions about our use of cookies, please contact us at:{" "}
            <a href="mailto:privacy@weorganize.ai" className="text-primary hover:underline">
              privacy@weorganize.ai
            </a>
          </p>

          <div className="mt-8 p-4 bg-muted/30 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              Related policies:{" "}
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              {" · "}
              <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </p>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;
