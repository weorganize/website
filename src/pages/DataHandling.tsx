import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield, Server, Lock, FileCheck, Clock, Users, AlertTriangle } from "lucide-react";

const securityMeasures = [
  {
    icon: Lock,
    title: "Encryption",
    description: "AES-256 encryption at rest, TLS 1.3 in transit"
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "SOC 2 Type II compliant cloud providers"
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Role-based access with MFA enforcement"
  },
  {
    icon: FileCheck,
    title: "Auditing",
    description: "Complete audit trails for all data access"
  },
];

const DataHandling = () => {
  return (
    <PageLayout>
      <SEO
        title="Data Handling & Security"
        description="Learn how WeOrganize.ai handles, protects, and secures your data. Enterprise-grade security practices for AI projects."
      />
      <PageHero
        title="Data Handling & Security"
        subtitle="How we protect your data in AI projects"
        breadcrumbs={[{ label: "Data Handling", href: "/data-handling" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <p className="text-muted-foreground text-lg mb-6">
              Data security is paramount in AI projects. At WeOrganize.ai, we implement enterprise-grade security practices to ensure your data is protected throughout every stage of our engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="p-4 bg-card border rounded-lg text-center">
                <measure.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm mb-1">{measure.title}</h3>
                <p className="text-xs text-muted-foreground">{measure.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Lifecycle Management</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              1. Data Collection
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>We collect only the minimum data necessary for the project</li>
              <li>All data collection is documented and agreed upon in the project scope</li>
              <li>Sensitive data is identified and classified at intake</li>
              <li>Data is transferred through secure, encrypted channels only</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              2. Data Storage
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>All data is stored in SOC 2 Type II compliant infrastructure</li>
              <li>Data is encrypted at rest using AES-256 encryption</li>
              <li>Access is restricted to authorized team members only</li>
              <li>Regular backups with encryption and geographic redundancy</li>
              <li>Client data is logically isolated from other clients</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              3. Data Processing
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Data is processed only for agreed-upon purposes</li>
              <li>We use anonymization and pseudonymization where possible</li>
              <li>Processing environments are isolated and secured</li>
              <li>All data transformations are logged and auditable</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              4. Data Retention & Deletion
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Data is retained only for the duration of the project plus any agreed retention period</li>
              <li>Upon project completion, data is securely deleted or returned to client</li>
              <li>We provide certificates of destruction upon request</li>
              <li>Backup data is purged according to our retention schedule</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">NDA & Confidentiality</h2>
            <div className="bg-muted/30 p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-3">We're NDA-Ready</h3>
              <p className="text-muted-foreground mb-4">
                We understand that many projects involve sensitive business information. We are prepared to sign Non-Disclosure Agreements (NDAs) before any project discussions begin.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Mutual NDA templates available</li>
                <li>We accept custom NDA terms from enterprise clients</li>
                <li>All team members are bound by confidentiality agreements</li>
                <li>We can work with your legal team on specific requirements</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Compliance & Certifications</h2>
            <p className="text-muted-foreground mb-4">
              Our infrastructure and processes are designed to support:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-card border rounded-lg">
                <h4 className="font-semibold mb-2">Data Protection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• GDPR (EU General Data Protection)</li>
                  <li>• CCPA (California Consumer Privacy)</li>
                  <li>• PIPEDA (Canadian Privacy)</li>
                </ul>
              </div>
              <div className="p-4 bg-card border rounded-lg">
                <h4 className="font-semibold mb-2">Industry Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• HIPAA (Healthcare - available)</li>
                  <li>• SOC 2 Type II infrastructure</li>
                  <li>• ISO 27001 aligned practices</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Client Data Rights</h2>
            <p className="text-muted-foreground mb-4">
              As our client, you retain full ownership of your data. You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Access:</strong> Request a copy of all your data we hold</li>
              <li><strong>Portability:</strong> Receive your data in a standard format</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data at any time</li>
              <li><strong>Audit:</strong> Request information about how your data was used</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">AI Model Data</h2>
            <p className="text-muted-foreground mb-4">
              For AI and machine learning projects:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Your data is <strong>never</strong> used to train models for other clients</li>
              <li>Models trained on your data are your intellectual property</li>
              <li>We can deploy models in your own infrastructure if required</li>
              <li>Training data can be deleted while preserving model functionality</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Incident Response</h2>
            <p className="text-muted-foreground mb-4">
              In the unlikely event of a security incident:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>We will notify affected clients within 72 hours</li>
              <li>Full incident investigation and root cause analysis</li>
              <li>Remediation steps and prevention measures</li>
              <li>Support for any required regulatory notifications</li>
            </ul>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Questions About Data Handling?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our security team to discuss your specific data handling requirements:
              </p>
              <a href="mailto:security@weorganize.ai" className="text-primary hover:underline font-medium">
                security@weorganize.ai
              </a>
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                Related policies:{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                {" · "}
                <Link to="/ai-ethics" className="text-primary hover:underline">AI Ethics</Link>
                {" · "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              <strong>Last updated:</strong> January 2026
            </p>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DataHandling;
