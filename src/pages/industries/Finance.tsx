import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Shield,
  TrendingUp,
  FileText,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowRight,
  Building2,
  CreditCard,
  PieChart,
} from "lucide-react";

const useCases = [
  {
    icon: AlertTriangle,
    title: "Fraud Detection",
    description: "Real-time ML models that detect fraudulent transactions with 99.7% accuracy, reducing false positives by 60%.",
    savings: "99.7% accuracy",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Automate processing of loan applications, KYC documents, and compliance paperwork with AI extraction.",
    savings: "85% faster processing",
  },
  {
    icon: TrendingUp,
    title: "Risk Assessment",
    description: "Predictive models for credit risk, market risk, and operational risk scoring with explainable AI.",
    savings: "40% better accuracy",
  },
  {
    icon: CreditCard,
    title: "Customer Onboarding",
    description: "Streamline KYC/AML processes with automated document verification and identity validation.",
    savings: "70% time reduction",
  },
  {
    icon: PieChart,
    title: "Portfolio Analytics",
    description: "AI-powered insights for portfolio optimization, risk balancing, and market trend analysis.",
    savings: "Real-time insights",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Automated monitoring and reporting for SOX, Basel III, GDPR, and other regulatory requirements.",
    savings: "90% audit ready",
  },
];

const stats = [
  { value: "$2.4M", label: "Annual fraud prevented" },
  { value: "85%", label: "Faster document processing" },
  { value: "99.7%", label: "Fraud detection accuracy" },
  { value: "60%", label: "Fewer false positives" },
];

const Finance = () => {
  return (
    <PageLayout>
      <SEO
        title="AI Solutions for Financial Services"
        description="Transform financial operations with AI. Fraud detection, document processing, risk assessment, and compliance automation."
      />
      <PageHero
        title="AI for Financial Services"
        subtitle="Reduce risk, automate compliance, and improve customer experience with intelligent automation."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Finance", href: "/industries/finance" },
        ]}
      />

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Use Cases</Badge>
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            AI Applications in <span className="font-semibold">Finance</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="p-6 bg-card border border-border/40 hover:border-primary/30 transition-all">
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
              <Badge variant="secondary" className="text-xs">{useCase.savings}</Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 bg-card border border-border/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Built for Financial Compliance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our solutions are designed with financial industry regulations in mind.
                </p>
                <ul className="space-y-2">
                  {[
                    "SOC 2 Type II certified",
                    "GDPR & CCPA compliant",
                    "PCI DSS ready",
                    "Audit trail for all AI decisions",
                    "Explainable AI for regulatory review",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["SOC 2", "PCI DSS", "GDPR", "SOX"].map((cert, idx) => (
                  <div key={idx} className="p-4 bg-secondary/50 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary">{cert}</div>
                    <div className="text-xs text-muted-foreground">Ready</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
          <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            See how AI can reduce risk, improve efficiency, and enhance customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 gap-2">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </PageLayout>
  );
};

export default Finance;
