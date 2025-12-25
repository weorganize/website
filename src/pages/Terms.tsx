import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";

const Terms = () => {
  return (
    <PageLayout>
      <SEO
        title="Terms of Service"
        description="Terms of Service for weorganize.ai - The terms and conditions governing use of our website and services."
      />
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: December 2024"
        breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-6">
            By accessing or using the weorganize.ai website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Services</h2>
          <p className="text-muted-foreground mb-6">
            weorganize.ai provides AI consulting, custom software development, data analytics, and related technology services. Specific terms for individual projects are defined in separate service agreements.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Website</h2>
          <p className="text-muted-foreground mb-4">
            You agree to use our website only for lawful purposes. You may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Use the website in any way that violates applicable laws</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Use automated systems to access the website without permission</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            All content on this website, including text, graphics, logos, and software, is the property of weorganize.ai or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Client Work and Confidentiality</h2>
          <p className="text-muted-foreground mb-6">
            For engaged clients, intellectual property rights, confidentiality obligations, and deliverable ownership are governed by the specific service agreement signed between parties. We treat all client information as confidential unless otherwise agreed.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            To the fullest extent permitted by law, weorganize.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for services in the preceding 12 months.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-6">
            Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will meet your specific requirements or that the website will be uninterrupted or error-free.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Indemnification</h2>
          <p className="text-muted-foreground mb-6">
            You agree to indemnify and hold harmless weorganize.ai and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our website or violation of these terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated terms on this page. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact</h2>
          <p className="text-muted-foreground mb-6">
            For questions about these Terms of Service, please contact us at:{" "}
            <a href="mailto:legal@weorganize.ai" className="text-primary hover:underline">
              legal@weorganize.ai
            </a>
          </p>

        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
