import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Shield, Eye, Users, Scale, Lock, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety and security of AI systems, implementing robust testing, monitoring, and fail-safes to prevent harmful outcomes."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are open about how our AI systems work, their capabilities, limitations, and the data they use. We believe in explainable AI."
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "AI should augment human capabilities, not replace human judgment. We design systems that keep humans in control of critical decisions."
  },
  {
    icon: Scale,
    title: "Fairness & Non-Discrimination",
    description: "We actively work to identify and mitigate biases in AI systems, ensuring fair treatment across all demographic groups."
  },
  {
    icon: Lock,
    title: "Privacy & Data Protection",
    description: "We respect user privacy and handle data responsibly, collecting only what's necessary and protecting it with enterprise-grade security."
  },
  {
    icon: Lightbulb,
    title: "Accountability",
    description: "We take responsibility for the AI systems we build, maintaining clear ownership and providing mechanisms for redress."
  },
];

const AIEthics = () => {
  return (
    <PageLayout>
      <SEO
        title="AI Ethics Statement"
        description="WeOrganize.ai's commitment to responsible AI development. Learn about our ethical principles, data practices, and approach to AI safety."
      />
      <PageHero
        title="AI Ethics Statement"
        subtitle="Our commitment to responsible AI development"
        breadcrumbs={[{ label: "AI Ethics", href: "/ai-ethics" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Ethical Commitment</h2>
            <p className="text-muted-foreground text-lg mb-6">
              At WeOrganize.ai, we believe that AI technology should be developed and deployed responsibly. As an AI consulting firm, we have a duty to ensure that the solutions we build are ethical, safe, and beneficial to society.
            </p>
            <p className="text-muted-foreground mb-6">
              We align our practices with established frameworks including the EU AI Act, NIST AI Risk Management Framework, and IEEE Ethically Aligned Design principles.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {principles.map((principle, index) => (
              <div key={index} className="p-6 bg-card border rounded-lg">
                <principle.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">

            <h2 className="text-2xl font-bold mt-12 mb-4">AI Development Practices</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Data Handling</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>We only use data that has been ethically sourced and properly consented</li>
              <li>Client data is never used to train models without explicit permission</li>
              <li>We implement data minimization principles - collecting only what's necessary</li>
              <li>All data is encrypted at rest and in transit</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Model Development</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>We conduct bias testing and fairness audits on all models</li>
              <li>Models are tested across diverse demographic groups</li>
              <li>We document model limitations and failure modes</li>
              <li>Regular model monitoring and retraining to prevent drift</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Deployment & Monitoring</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>All AI systems include human oversight mechanisms</li>
              <li>We implement kill switches and rollback capabilities</li>
              <li>Continuous monitoring for unexpected behaviors</li>
              <li>Clear escalation paths for AI-related incidents</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Client Commitments</h2>
            <p className="text-muted-foreground mb-4">
              When working with clients, we commit to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Honest Assessment:</strong> We will honestly assess whether AI is the right solution for your problem</li>
              <li><strong>Clear Communication:</strong> We explain AI capabilities and limitations in plain language</li>
              <li><strong>Responsible Use:</strong> We decline projects that could cause harm or violate ethical principles</li>
              <li><strong>Knowledge Transfer:</strong> We educate clients on responsible AI governance</li>
              <li><strong>Long-term Support:</strong> We provide ongoing monitoring and maintenance recommendations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Use Cases We Decline</h2>
            <p className="text-muted-foreground mb-4">
              We do not build AI systems for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Mass surveillance or unauthorized monitoring</li>
              <li>Autonomous weapons or military applications</li>
              <li>Manipulation, deception, or social engineering</li>
              <li>Discrimination based on protected characteristics</li>
              <li>Applications that violate privacy laws or human rights</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Continuous Improvement</h2>
            <p className="text-muted-foreground mb-6">
              AI ethics is an evolving field. We commit to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Regular review and updates to our ethical guidelines</li>
              <li>Staying current with AI safety research and best practices</li>
              <li>Engaging with the broader AI ethics community</li>
              <li>Training our team on emerging ethical considerations</li>
            </ul>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold mb-2">Questions or Concerns?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have questions about our AI ethics practices or want to report a concern, please contact us:
              </p>
              <a href="mailto:ethics@weorganize.ai" className="text-primary hover:underline font-medium">
                ethics@weorganize.ai
              </a>
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

export default AIEthics;
