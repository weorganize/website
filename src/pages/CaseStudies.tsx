import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Bot,
  BarChart3,
  Cloud,
  Zap,
} from "lucide-react";

const caseStudies = [
  {
    id: "fintech-automation",
    title: "AI-Powered Document Processing for FinTech",
    client: "Leading Payment Processor",
    industry: "Financial Services",
    services: ["AI Solutions", "Process Automation", "Data Analytics"],
    challenge:
      "Manual processing of 50,000+ monthly documents was causing delays and errors, impacting customer satisfaction and compliance.",
    solution:
      "Implemented an intelligent document processing system using Azure AI Document Intelligence and custom ML models for extraction and validation.",
    results: [
      { metric: "Processing Time", value: "85%", label: "Reduction" },
      { metric: "Accuracy Rate", value: "99.2%", label: "Achieved" },
      { metric: "Cost Savings", value: "$2.4M", label: "Annual" },
      { metric: "ROI", value: "340%", label: "First Year" },
    ],
    testimonial: {
      quote:
        "WeOrganize.ai transformed our document processing. What used to take days now happens in minutes with higher accuracy.",
      author: "VP of Operations",
      company: "Payment Solutions Inc.",
    },
    icon: DollarSign,
    color: "from-green-500/20 to-emerald-500/20",
    featured: true,
  },
  {
    id: "healthcare-analytics",
    title: "Predictive Analytics for Healthcare Provider",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    services: ["Data Analytics", "Machine Learning", "Cloud Infrastructure"],
    challenge:
      "Needed to predict patient readmission risks and optimize resource allocation across 12 facilities.",
    solution:
      "Built a predictive analytics platform using Azure ML with real-time dashboards for clinical staff and administrators.",
    results: [
      { metric: "Readmissions", value: "32%", label: "Reduction" },
      { metric: "Bed Utilization", value: "24%", label: "Improvement" },
      { metric: "Staff Efficiency", value: "40%", label: "Increase" },
      { metric: "Patient Satisfaction", value: "18%", label: "Increase" },
    ],
    testimonial: {
      quote:
        "The predictive models have given us unprecedented visibility into patient care patterns. We're making better decisions faster.",
      author: "Chief Medical Officer",
      company: "Regional Health Partners",
    },
    icon: BarChart3,
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
  },
  {
    id: "retail-chatbot",
    title: "Conversational AI for E-Commerce Giant",
    client: "National Retail Chain",
    industry: "Retail",
    services: ["AI Solutions", "Custom Development", "Integration"],
    challenge:
      "Customer support team overwhelmed with 100,000+ monthly inquiries, leading to long wait times and customer frustration.",
    solution:
      "Deployed a GPT-powered conversational AI with seamless handoff to human agents, integrated with existing CRM and inventory systems.",
    results: [
      { metric: "Inquiries Automated", value: "73%", label: "Handled by AI" },
      { metric: "Response Time", value: "< 5s", label: "Average" },
      { metric: "Support Costs", value: "58%", label: "Reduction" },
      { metric: "CSAT Score", value: "4.6/5", label: "Rating" },
    ],
    testimonial: {
      quote:
        "Our customers love the instant responses, and our support team can now focus on complex issues that truly need human touch.",
      author: "Director of Customer Experience",
      company: "National Retail Corp.",
    },
    icon: Bot,
    color: "from-purple-500/20 to-pink-500/20",
    featured: true,
  },
  {
    id: "manufacturing-cloud",
    title: "Cloud Migration for Manufacturing Leader",
    client: "Industrial Equipment Manufacturer",
    industry: "Manufacturing",
    services: ["Cloud Transformation", "DevOps", "Security"],
    challenge:
      "Legacy on-premise infrastructure causing scalability issues and limiting ability to adopt modern analytics tools.",
    solution:
      "Executed a phased cloud migration to Azure with zero downtime, implementing modern DevOps practices and security controls.",
    results: [
      { metric: "Infrastructure Costs", value: "45%", label: "Reduction" },
      { metric: "Deployment Speed", value: "10x", label: "Faster" },
      { metric: "System Uptime", value: "99.99%", label: "Achieved" },
      { metric: "Time to Market", value: "60%", label: "Faster" },
    ],
    testimonial: {
      quote:
        "The migration was seamless. We're now more agile than ever and can scale our operations globally with confidence.",
      author: "CTO",
      company: "Industrial Solutions Ltd.",
    },
    icon: Cloud,
    color: "from-orange-500/20 to-amber-500/20",
    featured: false,
  },
  {
    id: "logistics-optimization",
    title: "AI Route Optimization for Logistics Company",
    client: "Regional Logistics Provider",
    industry: "Logistics",
    services: ["AI Solutions", "Data Analytics", "Custom Development"],
    challenge:
      "Inefficient route planning leading to high fuel costs and missed delivery windows.",
    solution:
      "Developed an AI-powered route optimization engine considering real-time traffic, weather, and delivery constraints.",
    results: [
      { metric: "Fuel Costs", value: "28%", label: "Reduction" },
      { metric: "On-Time Delivery", value: "95%", label: "Achieved" },
      { metric: "Routes Optimized", value: "500+", label: "Daily" },
      { metric: "Carbon Emissions", value: "22%", label: "Reduction" },
    ],
    testimonial: {
      quote:
        "The AI optimization has transformed our operations. We're delivering faster while spending less on fuel.",
      author: "Operations Manager",
      company: "Express Logistics Co.",
    },
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/20",
    featured: false,
  },
];

const industries = [
  "All",
  "Financial Services",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Logistics",
];

const CaseStudies = () => {
  return (
    <PageLayout>
      <SEO
        title="Case Studies"
        description="Explore how WeOrganize.ai has helped businesses transform their operations with AI solutions. Real results from real clients."
      />
      <PageHero
        title="Case Studies"
        subtitle="Real results from real clients. See how we've helped businesses across industries achieve transformational outcomes with AI."
        breadcrumbs={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      {/* Stats Banner */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "$10M+", label: "Client Savings" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "340%", label: "Average ROI" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Featured
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-light mb-4">
            <span className="font-semibold">Transformational</span> Results
          </h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies
            .filter((cs) => cs.featured)
            .map((study, index) => (
              <Card
                key={study.id}
                className="overflow-hidden border border-border/40 hover:border-primary/30 transition-all"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left: Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${study.color}`}
                      >
                        <study.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="text-xs">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {study.client}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-1">
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <Link to={`/case-studies/${study.id}`}>
                      <Button variant="outline" className="gap-2">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Right: Results */}
                  <div className="bg-secondary/30 p-8 flex flex-col justify-center">
                    <h4 className="text-sm font-semibold text-primary mb-6 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Key Results
                    </h4>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-background/50 rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {result.metric}
                          </div>
                          <div className="text-xs text-foreground font-medium">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                      "{study.testimonial.quote}"
                      <footer className="mt-2 not-italic">
                        <span className="text-foreground font-medium">
                          {study.testimonial.author}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          — {study.testimonial.company}
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              More <span className="font-semibold">Success Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies
              .filter((cs) => !cs.featured)
              .map((study) => (
                <Card
                  key={study.id}
                  className="p-6 border border-border/40 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-br ${study.color}`}
                    >
                      <study.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {study.challenge}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${study.id}`}
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how we can help your business achieve similar
            transformational results with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
