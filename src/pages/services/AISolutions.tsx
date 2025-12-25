import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { ServiceFeatureCard } from "@/components/ServiceFeatureCard";
import { Card } from "@/components/ui/card";
import { Bot, Brain, Zap, Clock, TrendingUp, Shield } from "lucide-react";

const AISolutions = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and free up your team to focus on strategic initiatives."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI agents work around the clock, ensuring consistent service delivery at any time."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Scale your operations instantly without the need for proportional resource increases."
    },
    {
      icon: Shield,
      title: "Cost Reduction",
      description: "Reduce operational costs while maintaining or improving service quality."
    }
  ];

  const technologies = [
    { name: "LangGraph", logo: "/logos/crewai.png" },
    { name: "CrewAI", logo: "/logos/crewai.png" },
    { name: "OpenAI", logo: "/logos/crewai.png" },
    { name: "Azure AI", logo: "/logos/crewai.png" }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Intelligent chatbots and virtual assistants that understand context and provide personalized support."
    },
    {
      title: "Document Processing",
      description: "Automated extraction, classification, and analysis of documents with high accuracy."
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered monitoring systems that predict equipment failures before they occur."
    }
  ];

  return (
    <ServicePageLayout
      title="AI Solutions & Intelligent Automation"
      subtitle="Transform your business with cutting-edge AI agents and multi-agent systems powered by LangGraph and CrewAI"
      seoDescription="Advanced AI solutions and intelligent automation services using LangGraph, CrewAI, and multi-agent systems to transform your business operations."
    >
      {/* Overview Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Intelligent AI Agents</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in building sophisticated AI agent systems that can reason, make decisions, and collaborate 
            to solve complex business problems. Using cutting-edge frameworks like LangGraph and CrewAI, we create 
            multi-agent systems that work together seamlessly to automate workflows, analyze data, and deliver 
            intelligent insights.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Solutions?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ServiceFeatureCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Real-World Applications</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-secondary/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our AI Implementation Process</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Discovery & Analysis", desc: "Understand your business challenges and identify AI opportunities" },
              { step: "2", title: "Design & Architecture", desc: "Design multi-agent systems tailored to your needs" },
              { step: "3", title: "Development & Training", desc: "Build and train AI agents with your data" },
              { step: "4", title: "Integration & Testing", desc: "Seamlessly integrate with existing systems" },
              { step: "5", title: "Deployment & Monitoring", desc: "Launch and continuously optimize performance" }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default AISolutions;
