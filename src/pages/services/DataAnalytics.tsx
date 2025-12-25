import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { ServiceFeatureCard } from "@/components/ServiceFeatureCard";
import { Card } from "@/components/ui/card";
import { BarChart, Brain, Database, TrendingUp, Eye, Lightbulb } from "lucide-react";

const DataAnalytics = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Data-Driven Decisions",
      description: "Make informed strategic decisions backed by comprehensive data analysis."
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Anticipate trends and opportunities with machine learning models."
    },
    {
      icon: Eye,
      title: "Real-Time Dashboards",
      description: "Monitor KPIs and metrics with interactive, real-time visualizations."
    },
    {
      icon: Brain,
      title: "Advanced Analytics",
      description: "Leverage statistical modeling and AI for deeper insights."
    }
  ];

  const services = [
    {
      title: "Data Strategy & Consulting",
      description: "Develop a comprehensive data strategy aligned with your business objectives."
    },
    {
      title: "ETL & Data Pipelines",
      description: "Build robust data pipelines for seamless data integration and transformation."
    },
    {
      title: "Machine Learning Models",
      description: "Create predictive models that learn from your data and improve over time."
    },
    {
      title: "Business Intelligence",
      description: "Design interactive dashboards and reports for actionable insights."
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, compelling visual stories."
    },
    {
      title: "Big Data Engineering",
      description: "Process and analyze large-scale datasets with distributed computing."
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "Power BI", "Tableau", "Snowflake", "Apache Spark", "AWS Redshift", "Azure Synapse"
  ];

  return (
    <ServicePageLayout
      title="Data & Analytics Services"
      subtitle="Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence"
      seoDescription="Data analytics and business intelligence services using Python, TensorFlow, Power BI, Tableau. Turn your data into competitive advantage."
    >
      {/* Overview Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Unlock the Power of Your Data</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In today's data-driven world, the ability to extract meaningful insights from your data is crucial 
            for competitive advantage. We help organizations harness the full potential of their data through 
            advanced analytics, machine learning, and intuitive visualization tools that drive informed 
            decision-making at every level.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Transform Your Data Strategy</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ServiceFeatureCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Analytics Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Analytics Technology Stack</h2>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium text-center">{tech}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-secondary/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Analytics in Action</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Customer Analytics", desc: "Understand customer behavior, preferences, and lifetime value" },
              { title: "Sales Forecasting", desc: "Predict future sales trends with machine learning models" },
              { title: "Operational Efficiency", desc: "Identify bottlenecks and optimize business processes" },
              { title: "Risk Management", desc: "Detect anomalies and mitigate risks proactively" }
            ].map((useCase, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default DataAnalytics;
