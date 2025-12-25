import { Bot, BarChart3, Cloud, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

export const SolutionsGrid = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Agents & Automation",
      description: "Autonomous systems powered by LangGraph and CrewAI that handle complex tasks, make decisions, and scale without adding headcount.",
      link: "/services/ai-solutions"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Transform scattered data into structured pipelines that fuel AI decision-making. ETL engineering, predictive modeling, real-time dashboards.",
      link: "/services/data-analytics"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure for deploying and scaling AI workloads. Kubernetes orchestration, CI/CD pipelines, multi-cloud architecture.",
      link: "/services/cloud-transformation"
    }
  ];

  return (
    <section className="py-16 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 sm:mb-5 tracking-tight">
              Three Services. <span className="font-semibold">One Stack.</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg font-light px-2 sm:px-0">
              Everything you need to build, deploy, and scale AI that works.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Link to={solution.link} className="block h-full">
                <Card className="bg-card border border-border/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] h-full group">
                  <CardContent className="p-5 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/15 transition-colors">
                      <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light">
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Inline CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-muted-foreground mb-4 font-light">Not sure where to start?</p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 shadow-md hover:shadow-lg transition-all">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 font-light">
              We'll map your highest-ROI automation opportunity.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
