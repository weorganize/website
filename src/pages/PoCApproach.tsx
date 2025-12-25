import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Target, TrendingUp, Clock, Users, FileText, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const PoCApproach = () => {
  const benefits = [
    {
      icon: Shield,
      title: "De-Risk Your Investment",
      description: "Validate technical feasibility and business value before committing to full-scale development."
    },
    {
      icon: Target,
      title: "Understand the Approach",
      description: "Experience our methodology, communication style, and technical expertise firsthand."
    },
    {
      icon: Clock,
      title: "Fast Time-to-Insight",
      description: "Get working prototypes and measurable results in weeks, not months."
    },
    {
      icon: TrendingUp,
      title: "Accelerate Innovation",
      description: "Quickly test ideas and iterate based on real feedback and data."
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "No Upfront Commitment",
      description: "Start small with a focused PoC. Scale up only when you see the value."
    },
    {
      icon: Target,
      title: "Clear Deliverables",
      description: "Defined scope, timeline, and success metrics from day one."
    },
    {
      icon: Users,
      title: "Collaborative Process",
      description: "Work closely with our team throughout the PoC journey."
    },
    {
      icon: CheckCircle,
      title: "Measurable Results",
      description: "Concrete metrics and demonstrations of business impact."
    }
  ];

  const process = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: [
        "Stakeholder interviews to understand challenges and goals",
        "Technical assessment of existing systems",
        "Define success criteria and KPIs",
        "Finalize PoC scope and deliverables"
      ]
    },
    {
      phase: "Design & Planning",
      duration: "Week 1-2",
      activities: [
        "Architecture design and technology selection",
        "Create wireframes or technical specifications",
        "Set up development environment",
        "Establish communication cadence"
      ]
    },
    {
      phase: "Development",
      duration: "Week 2-4",
      activities: [
        "Iterative development with regular check-ins",
        "Integrate with your existing systems (where applicable)",
        "Internal testing and quality assurance",
        "Documentation of key decisions and approach"
      ]
    },
    {
      phase: "Demonstration & Evaluation",
      duration: "Week 4-5",
      activities: [
        "Live demonstration of the PoC",
        "Present findings and recommendations",
        "Review metrics and business impact",
        "Discuss roadmap for full implementation"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      challenge: "Manual patient record processing taking hours per case",
      solution: "AI-powered document extraction and classification system",
      result: "Target: Reduce processing time by 80%+"
    },
    {
      industry: "E-commerce",
      challenge: "Customer service overwhelmed with repetitive inquiries",
      solution: "Multi-agent chatbot with product knowledge and order tracking",
      result: "Target: 30-50% reduction in support tickets"
    },
    {
      industry: "Finance",
      challenge: "Risk assessment process taking days and prone to errors",
      solution: "Predictive analytics model for automated risk scoring",
      result: "Target: Same-day risk assessment"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Proof of Concept Approach"
        description="De-risk your technology investments with our proven PoC methodology. Fast, focused, and results-driven validation of AI and software solutions."
      />
      <PageHero
        title="Our Proof of Concept Approach"
        subtitle="Validate your ideas with minimal risk and maximum insight before full-scale investment"
        breadcrumbs={[{ label: "PoC Approach", href: "/poc-approach" }]}
      />

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Start with a Proof of Concept?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Investing in new technology can be daunting. Will it work? Will it integrate with existing 
            systems? Will it deliver ROI? Our PoC approach lets you answer these questions with concrete 
            evidence before making a major commitment.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">PoC Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Included in a PoC?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The PoC Process</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Typical PoC timeline: 4-6 weeks from kickoff to final presentation
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {process.map((step, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold">{step.phase}</h3>
                      <span className="text-muted-foreground font-medium">{step.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{activity}</span>
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

      {/* Example Scenarios */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Example PoC Scenarios</h2>
        <p className="text-xl text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
          Common challenges we help clients address
        </p>
        <p className="text-sm text-muted-foreground text-center mb-12 max-w-2xl mx-auto italic">
          These represent typical project scopes. Actual outcomes depend on your specific systems and requirements.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-6">
              <div className="text-sm font-semibold text-primary mb-3">{study.industry}</div>
              <h3 className="text-lg font-bold mb-2">Challenge</h3>
              <p className="text-muted-foreground text-sm mb-4">{study.challenge}</p>
              <h3 className="text-lg font-bold mb-2">Solution</h3>
              <p className="text-muted-foreground text-sm mb-4">{study.solution}</p>
              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-bold mb-2">Result</h3>
                <p className="text-primary font-semibold">{study.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ready to Validate Your Idea?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                PoC pricing starts at $15,000 for a 4-week engagement. Custom scopes available 
                based on your specific needs and complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Request a PoC
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PoCApproach;
