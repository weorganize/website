import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Factory,
  Wrench,
  TrendingUp,
  Gauge,
  Package,
  Shield,
  CheckCircle2,
  ArrowRight,
  Cog,
  AlertTriangle,
} from "lucide-react";

const useCases = [
  {
    icon: Wrench,
    title: "Predictive Maintenance",
    description: "ML models predict equipment failures before they happen, reducing unplanned downtime by 45%.",
    savings: "45% less downtime",
  },
  {
    icon: Gauge,
    title: "Quality Control",
    description: "Computer vision systems detect defects with 99.5% accuracy, catching issues human inspectors miss.",
    savings: "99.5% accuracy",
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "AI-powered demand prediction for better production planning and inventory management.",
    savings: "30% better accuracy",
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    description: "Optimize logistics, reduce lead times, and improve supplier performance with AI analytics.",
    savings: "25% cost reduction",
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Digital twin modeling and AI optimization for production processes and resource utilization.",
    savings: "20% efficiency gain",
  },
  {
    icon: AlertTriangle,
    title: "Safety Monitoring",
    description: "Real-time safety monitoring using computer vision to detect hazards and compliance violations.",
    savings: "60% fewer incidents",
  },
];

const stats = [
  { value: "45%", label: "Reduction in downtime" },
  { value: "99.5%", label: "Defect detection accuracy" },
  { value: "25%", label: "Supply chain savings" },
  { value: "60%", label: "Fewer safety incidents" },
];

const Manufacturing = () => {
  return (
    <PageLayout>
      <SEO
        title="AI Solutions for Manufacturing"
        description="Transform manufacturing with AI. Predictive maintenance, quality control, supply chain optimization, and smart factory solutions."
      />
      <PageHero
        title="AI for Manufacturing"
        subtitle="Build smarter factories with predictive maintenance, quality control, and process optimization."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
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
            AI Applications in <span className="font-semibold">Manufacturing</span>
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

      {/* Industry 4.0 */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 bg-card border border-border/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Factory className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Industry 4.0 Ready
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our AI solutions integrate with your existing systems to enable smart manufacturing.
                </p>
                <ul className="space-y-2">
                  {[
                    "IoT sensor integration",
                    "SCADA/MES connectivity",
                    "ERP system integration",
                    "Digital twin modeling",
                    "Edge computing support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">45%</div>
                <div className="text-lg font-medium text-foreground mb-1">Less Unplanned Downtime</div>
                <div className="text-sm text-muted-foreground">
                  Predictive maintenance catches issues before they cause failures
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
          <Cog className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Build a Smarter Factory?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            See how AI can reduce downtime, improve quality, and optimize operations.
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

export default Manufacturing;
