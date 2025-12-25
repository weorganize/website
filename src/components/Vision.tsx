import { Zap, Shield, TrendingUp } from "lucide-react";

export const Vision = () => {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Streamline complex workflows with AI-powered automation"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with infinite scalability"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Transform data into actionable business intelligence"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Vision
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Transforming Industries with AI-Powered Agents
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We empower organizations by leveraging intelligent, autonomous AI agents that optimize complex workflows, 
              unlock data-driven insights, and enable superior decision-making. We build the future of work, 
              where human ingenuity is amplified by artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
