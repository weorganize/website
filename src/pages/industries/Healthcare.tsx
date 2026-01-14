import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Brain,
  FileText,
  Shield,
  Clock,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Activity,
  Pill,
} from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "AI-powered transcription and summarization of patient encounters, reducing documentation time by 60%.",
    savings: "60% time savings",
  },
  {
    icon: Brain,
    title: "Diagnostic Support",
    description: "ML models that assist radiologists and pathologists with early detection and pattern recognition.",
    savings: "40% faster diagnosis",
  },
  {
    icon: Activity,
    title: "Patient Risk Prediction",
    description: "Predict readmission risks, deterioration, and treatment outcomes using historical patient data.",
    savings: "32% readmission reduction",
  },
  {
    icon: Pill,
    title: "Drug Interaction Analysis",
    description: "Automated screening of prescriptions against patient history and known interactions.",
    savings: "99.5% accuracy",
  },
  {
    icon: Users,
    title: "Staff Scheduling",
    description: "AI-optimized scheduling that balances patient load, staff preferences, and compliance requirements.",
    savings: "25% efficiency gain",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Automated HIPAA compliance monitoring, audit trails, and regulatory reporting.",
    savings: "80% audit time reduction",
  },
];

const stats = [
  { value: "32%", label: "Reduction in readmissions" },
  { value: "60%", label: "Less documentation time" },
  { value: "$2.4M", label: "Average annual savings" },
  { value: "99.5%", label: "Diagnostic accuracy" },
];

const challenges = [
  {
    challenge: "Physician burnout from administrative tasks",
    solution: "AI documentation assistants reduce charting time by 60%",
  },
  {
    challenge: "Missed early warning signs in patient data",
    solution: "Predictive models flag at-risk patients 48 hours earlier",
  },
  {
    challenge: "HIPAA compliance complexity",
    solution: "Automated compliance monitoring with audit-ready reports",
  },
  {
    challenge: "Resource allocation inefficiencies",
    solution: "ML-optimized scheduling across facilities",
  },
];

const Healthcare = () => {
  return (
    <PageLayout>
      <SEO
        title="AI Solutions for Healthcare"
        description="Transform patient care with AI. Reduce documentation time, predict patient risks, and automate compliance. HIPAA-compliant solutions."
      />
      <PageHero
        title="AI for Healthcare"
        subtitle="Empower clinicians, improve outcomes, and reduce costs with intelligent automation designed for healthcare."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Healthcare", href: "/industries/healthcare" },
        ]}
      />

      {/* Hero Stats */}
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
            AI Applications in <span className="font-semibold">Healthcare</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From clinical documentation to predictive analytics, our AI solutions address
            the most pressing challenges in healthcare.
          </p>
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

      {/* Challenges & Solutions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Solving Healthcare's <span className="font-semibold">Biggest Challenges</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {challenges.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card border border-border/40">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">Challenge</Badge>
                    <p className="text-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <Badge className="mb-2 text-xs bg-green-600">Solution</Badge>
                    <p className="text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border border-border/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  HIPAA-Compliant by Design
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our healthcare AI solutions are built with security and compliance at the core.
                  We understand the unique requirements of handling PHI.
                </p>
                <ul className="space-y-2">
                  {[
                    "End-to-end encryption",
                    "Access controls & audit logs",
                    "BAA agreements available",
                    "SOC 2 Type II compliant infrastructure",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["HIPAA", "SOC 2", "HITRUST", "GDPR"].map((cert, idx) => (
                  <div key={idx} className="p-4 bg-secondary/50 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary">{cert}</div>
                    <div className="text-xs text-muted-foreground">Compliant</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
            <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              See how AI can improve patient outcomes while reducing costs.
              Start with a free proof of concept.
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
        </div>
      </section>
    </PageLayout>
  );
};

export default Healthcare;
