import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { ServiceFeatureCard } from "@/components/ServiceFeatureCard";
import { Card } from "@/components/ui/card";
import { Cloud, Rocket, Shield, DollarSign, Zap, Server } from "lucide-react";

const CloudTransformation = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Faster Deployments",
      description: "Accelerate your release cycles with automated CI/CD pipelines."
    },
    {
      icon: Zap,
      title: "Auto-Scaling",
      description: "Handle traffic spikes effortlessly with intelligent scaling."
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Optimize cloud spending with right-sizing and efficient architecture."
    },
    {
      icon: Shield,
      title: "Enhanced Reliability",
      description: "Build resilient systems with high availability and disaster recovery."
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal disruption."
    },
    {
      title: "CI/CD Automation",
      description: "Implement automated pipelines for continuous integration and deployment."
    },
    {
      title: "Infrastructure as Code",
      description: "Manage infrastructure with Terraform and CloudFormation for consistency."
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes."
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring, logging, and alerting for your cloud infrastructure."
    },
    {
      title: "Security & Compliance",
      description: "Implement security best practices and maintain compliance standards."
    }
  ];

  const technologies = [
    "Kubernetes", "Docker", "Terraform", "AWS", "Azure", "GCP", "Jenkins", "GitLab CI"
  ];

  return (
    <ServicePageLayout
      title="DevOps & Cloud Transformation"
      subtitle="Accelerate innovation with modern cloud infrastructure, automation, and DevOps best practices"
      seoDescription="DevOps and cloud transformation services using Kubernetes, Docker, Terraform, AWS, Azure. Modernize your infrastructure and deployment processes."
    >
      {/* Overview Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Modernize Your Infrastructure</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your IT operations with cloud-native technologies and DevOps practices. We help organizations 
            migrate to the cloud, implement automation, and build scalable infrastructure that supports rapid 
            innovation while reducing costs and improving reliability.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Cloud Transformation Benefits</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ServiceFeatureCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our DevOps Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <Server className="w-5 h-5 text-white" />
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
          <h2 className="text-3xl font-bold text-center mb-12">DevOps Technology Stack</h2>
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

      {/* Cloud Providers */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Multi-Cloud Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Amazon Web Services", desc: "Comprehensive AWS solutions from EC2 to Lambda" },
            { name: "Microsoft Azure", desc: "Enterprise Azure services and integrations" },
            { name: "Google Cloud Platform", desc: "Scalable GCP infrastructure and AI services" }
          ].map((provider, index) => (
            <Card key={index} className="p-6 text-center">
              <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
              <p className="text-muted-foreground text-sm">{provider.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Migration Process */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-secondary/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Cloud Migration Journey</h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Assessment", desc: "Analyze current infrastructure and define migration strategy" },
              { step: "2", title: "Planning", desc: "Design target architecture and migration roadmap" },
              { step: "3", title: "Migration", desc: "Execute phased migration with minimal downtime" },
              { step: "4", title: "Optimization", desc: "Fine-tune performance and optimize costs" },
              { step: "5", title: "Operations", desc: "Establish monitoring, support, and continuous improvement" }
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

export default CloudTransformation;
