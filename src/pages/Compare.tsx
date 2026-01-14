import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Award, Shield, Clock, Users } from "lucide-react";

const comparisonData = [
  {
    feature: "Free Proof of Concept",
    weorganize: true,
    bigConsulting: false,
    freelancers: false,
    diy: false,
  },
  {
    feature: "Enterprise Experience (Fortune 500)",
    weorganize: true,
    bigConsulting: true,
    freelancers: false,
    diy: false,
  },
  {
    feature: "Dedicated Team",
    weorganize: true,
    bigConsulting: true,
    freelancers: false,
    diy: false,
  },
  {
    feature: "Fixed-Price Projects",
    weorganize: true,
    bigConsulting: false,
    freelancers: true,
    diy: true,
  },
  {
    feature: "Production-Ready Delivery",
    weorganize: true,
    bigConsulting: true,
    freelancers: false,
    diy: false,
  },
  {
    feature: "Ongoing Support Included",
    weorganize: true,
    bigConsulting: false,
    freelancers: false,
    diy: false,
  },
  {
    feature: "Startup-Friendly Pricing",
    weorganize: true,
    bigConsulting: false,
    freelancers: true,
    diy: true,
  },
  {
    feature: "Quick Turnaround (4-6 weeks)",
    weorganize: true,
    bigConsulting: false,
    freelancers: true,
    diy: false,
  },
  {
    feature: "Custom AI/ML Development",
    weorganize: true,
    bigConsulting: true,
    freelancers: "varies",
    diy: false,
  },
  {
    feature: "Cloud Architecture Expertise",
    weorganize: true,
    bigConsulting: true,
    freelancers: "varies",
    diy: false,
  },
];

const competitors = [
  {
    name: "Big 4 Consulting",
    description: "Traditional consulting firms",
    pros: ["Brand recognition", "Large teams", "Enterprise relationships"],
    cons: ["Very expensive ($500+/hr)", "Slow delivery", "Junior staff on projects", "Long contracts"],
    priceRange: "$500K - $5M+",
  },
  {
    name: "Freelancers",
    description: "Individual contractors",
    pros: ["Lower cost", "Flexible", "Quick to start"],
    cons: ["Variable quality", "No backup", "Limited scope", "Knowledge gaps"],
    priceRange: "$10K - $50K",
  },
  {
    name: "DIY / In-House",
    description: "Building internally",
    pros: ["Full control", "Build internal knowledge"],
    cons: ["Hiring challenges", "Long timeline", "High risk", "Expensive mistakes"],
    priceRange: "$200K+ (team cost)",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Enterprise DNA, Startup Agility",
    description: "Our team has built AI systems at ADP, AT&T, Barclays, and Bank of America. You get Fortune 500 expertise without the Fortune 500 price tag.",
  },
  {
    icon: Award,
    title: "Free PoC - Prove Value First",
    description: "We build you a working prototype before you commit. No other consulting firm does this. See results before you invest.",
  },
  {
    icon: Clock,
    title: "Weeks, Not Months",
    description: "Our focused approach delivers production-ready AI in 4-8 weeks. Big consultants take 6-12 months for the same work.",
  },
  {
    icon: Users,
    title: "Senior Engineers Only",
    description: "No junior staff learning on your project. Every team member has 10+ years of experience building production systems.",
  },
];

const Compare = () => {
  return (
    <PageLayout>
      <SEO
        title="Compare AI Consulting Options"
        description="Compare WeOrganize.ai with Big 4 consulting, freelancers, and DIY options. See why mid-market companies choose us for AI implementation."
      />
      <PageHero
        title="Why Choose WeOrganize.ai"
        subtitle="Compare your options for AI implementation. Enterprise expertise at startup prices."
        breadcrumbs={[{ label: "Compare", href: "/compare" }]}
      />

      {/* Differentiators */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Difference</Badge>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              The <span className="font-semibold">WeOrganize.ai Advantage</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card border border-border/40 text-center">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            Feature <span className="font-semibold">Comparison</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we stack up against other options for AI implementation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="bg-primary/10 rounded-lg px-3 py-2 inline-block">
                    <span className="font-semibold text-primary">WeOrganize.ai</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium">Big 4 Consulting</th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium">Freelancers</th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium">DIY / In-House</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.weorganize === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : row.weorganize === false ? (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.weorganize}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.bigConsulting === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : row.bigConsulting === false ? (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.bigConsulting}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.freelancers === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : row.freelancers === false ? (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.freelancers}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.diy === true ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : row.diy === false ? (
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-xs text-muted-foreground">{row.diy}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-secondary/30">
                <td className="py-4 px-4 font-semibold text-foreground">Typical Project Cost</td>
                <td className="py-4 px-4 text-center">
                  <span className="font-semibold text-primary">$15K - $150K</span>
                </td>
                <td className="py-4 px-4 text-center text-muted-foreground">$500K - $5M+</td>
                <td className="py-4 px-4 text-center text-muted-foreground">$10K - $50K</td>
                <td className="py-4 px-4 text-center text-muted-foreground">$200K+ (team)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Competitor Details */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Understanding Your <span className="font-semibold">Options</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {competitors.map((comp, idx) => (
              <Card key={idx} className="p-6 bg-card border border-border/40">
                <h3 className="text-lg font-semibold text-foreground mb-1">{comp.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{comp.description}</p>

                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">{comp.priceRange}</Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-500 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {comp.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-red-400 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {comp.cons.map((con, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <X className="w-3 h-3 text-red-400 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WeOrganize Card */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-primary">Best of Both Worlds</Badge>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                WeOrganize.ai: Enterprise Quality, Startup Pricing
              </h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-green-500" />
                  16+ years enterprise experience
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-green-500" />
                  Free PoC to prove value first
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-green-500" />
                  Fixed pricing, no surprises
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-green-500" />
                  4-8 week delivery timeline
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-green-500" />
                  Production-ready, not prototypes
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-1">$15K - $150K</div>
                <div className="text-sm text-muted-foreground">Typical project range</div>
              </div>
              <div className="space-y-3">
                <Link to="/contact">
                  <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 gap-2">
                    Start Free PoC
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  No commitment required
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Common <span className="font-semibold">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How can you offer enterprise quality at lower prices?",
                a: "We're a lean, senior team without the overhead of big consulting firms. No fancy offices, no layers of management, no junior staff. You pay for expertise, not brand names.",
              },
              {
                q: "What's included in the free PoC?",
                a: "A working prototype that demonstrates the core functionality of your AI solution. Typically 2-3 weeks of development. You keep the code and insights regardless of whether you continue.",
              },
              {
                q: "How do you compare to hiring in-house?",
                a: "Hiring a senior AI engineer takes 3-6 months and costs $200K+/year. We can deliver a production solution in that same timeframe for less than one year's salary, with no ongoing commitment.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 bg-card border border-border/40">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Compare;
