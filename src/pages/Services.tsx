import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const coreServices = [
    {
      title: "AI Agents & Automation",
      description: "Autonomous AI systems powered by LangGraph and CrewAI that handle complex tasks, make decisions, and learn from outcomes. Multi-agent architectures that orchestrate workflows end-to-end.",
      targetAudience: "Mid-market and enterprise companies drowning in repetitive, manual processes—customer service teams, operations leads, finance departments.",
      problemSolved: "Skilled employees waste 40-60% of their time on repetitive tasks. AI agents handle complexity, learn patterns, and scale without adding headcount.",
      icon: "/icons/services/ai-solutions.png",
      link: "/services/ai-solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data & Analytics",
      description: "Transform raw, scattered data into structured pipelines that fuel AI decision-making. Includes ETL engineering, predictive modeling, and real-time dashboards.",
      targetAudience: "Companies sitting on valuable data they can't use—operations teams, BI leads, and executives who need forecasting but lack infrastructure.",
      problemSolved: "AI agents are only as good as the data feeding them. Most companies have data in 10 different places, none of it clean.",
      icon: "/icons/services/data-analytics.png",
      link: "/services/data-analytics",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Infrastructure for deploying, scaling, and monitoring AI workloads. Kubernetes orchestration, CI/CD pipelines, multi-cloud architecture across AWS, Azure, and GCP.",
      targetAudience: "Engineering teams and CTOs who need to move AI from prototype to production—companies that have proven a concept but can't scale it reliably.",
      problemSolved: "87% of AI projects never make it to production. The gap between a working demo and enterprise-grade deployment requires infrastructure expertise.",
      icon: "/icons/services/devops-cloud.png",
      link: "/services/cloud-transformation",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <PageLayout>
      <SEO
        title="Our Services"
        description="AI agents and automation, data analytics, and cloud infrastructure—three focused services to help enterprises scale intelligent systems."
      />
      <PageHero
        title="What We Do"
        subtitle="Three services. One mission: help you build, deploy, and scale AI that works."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      {/* Core Services */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {coreServices.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} p-4 shrink-0`}>
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Who it's for</p>
                          <p className="text-sm text-muted-foreground">{service.targetAudience}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-primary mb-1">Problem solved</p>
                          <p className="text-sm text-muted-foreground">{service.problemSolved}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How They Work Together</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Each service feeds the next—creating a natural path from pilot to production
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Data & Analytics</h3>
              <p className="text-sm text-muted-foreground">Prepares the fuel</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">AI Agents & Automation</h3>
              <p className="text-sm text-muted-foreground">Does the work</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-sm text-muted-foreground">Runs it at scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start with a Free Pilot
          </h2>
          <p className="text-xl text-white/90">
            We build AI automation pilots that prove ROI before you spend a dollar. Get a working prototype in 4 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/poc-approach">
              <Button variant="secondary" size="lg" className="group">
                Learn About Our PoC
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
