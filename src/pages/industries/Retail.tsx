import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Bot,
  TrendingUp,
  Package,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Store,
  BarChart3,
} from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI Customer Service",
    description: "24/7 conversational AI that handles 70%+ of customer inquiries, with seamless human handoff.",
    savings: "73% automation rate",
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "ML-powered product recommendations that increase average order value by 35%.",
    savings: "35% higher AOV",
  },
  {
    icon: Package,
    title: "Inventory Optimization",
    description: "Predict demand patterns and optimize stock levels to reduce overstock and stockouts.",
    savings: "40% less overstock",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description: "AI-driven pricing optimization based on demand, competition, and inventory levels.",
    savings: "15% margin increase",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description: "Advanced customer clustering for targeted marketing and personalized experiences.",
    savings: "50% better targeting",
  },
  {
    icon: BarChart3,
    title: "Sales Forecasting",
    description: "Accurate demand forecasting for better planning, staffing, and inventory decisions.",
    savings: "95% forecast accuracy",
  },
];

const stats = [
  { value: "73%", label: "Customer inquiries automated" },
  { value: "35%", label: "Increase in order value" },
  { value: "40%", label: "Reduction in overstock" },
  { value: "4.6/5", label: "Customer satisfaction" },
];

const Retail = () => {
  return (
    <PageLayout>
      <SEO
        title="AI Solutions for Retail & E-Commerce"
        description="Transform retail with AI. Customer service automation, personalized recommendations, inventory optimization, and demand forecasting."
      />
      <PageHero
        title="AI for Retail & E-Commerce"
        subtitle="Deliver exceptional customer experiences and optimize operations with intelligent automation."
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: "Retail", href: "/industries/retail" },
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
            AI Applications in <span className="font-semibold">Retail</span>
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

      {/* Customer Experience */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 bg-card border border-border/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Transform Customer Experience
                </h2>
                <p className="text-muted-foreground mb-4">
                  From discovery to delivery, AI enhances every touchpoint of the customer journey.
                </p>
                <ul className="space-y-2">
                  {[
                    "Instant 24/7 customer support",
                    "Personalized product discovery",
                    "Smart search & recommendations",
                    "Proactive order updates",
                    "Seamless returns handling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-primary mb-2">73%</div>
                <div className="text-lg font-medium text-foreground mb-1">Inquiries Automated</div>
                <div className="text-sm text-muted-foreground">
                  AI chatbots handle routine questions, freeing your team for complex issues
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
          <Store className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            See how AI can improve customer experience and operational efficiency.
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

export default Retail;
