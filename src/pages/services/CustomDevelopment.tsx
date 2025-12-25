import { ServicePageLayout } from "@/components/layouts/ServicePageLayout";
import { ServiceFeatureCard } from "@/components/ServiceFeatureCard";
import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, CheckCircle, Target, Users, TrendingUp, Zap } from "lucide-react";

const CustomDevelopment = () => {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Custom-built software designed specifically for your unique business requirements."
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Build for today, scale for tomorrow with flexible and maintainable code."
    },
    {
      icon: Users,
      title: "Transparent Process",
      description: "Agile methodology with regular updates and collaborative development."
    },
    {
      icon: Zap,
      title: "Faster Time-to-Market",
      description: "Rapid development cycles to get your product to market quickly."
    }
  ];

  const technologies = [
    "React", "Node.js", "Python", "TypeScript", "AWS", "Azure", "Docker", "Kubernetes"
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your vision, goals, and technical requirements"
    },
    {
      title: "Design",
      description: "Creating intuitive UX/UI and system architecture"
    },
    {
      title: "Development",
      description: "Building your solution with best practices and clean code"
    },
    {
      title: "Testing",
      description: "Comprehensive QA to ensure quality and reliability"
    },
    {
      title: "Deployment",
      description: "Smooth launch with ongoing support and maintenance"
    }
  ];

  return (
    <ServicePageLayout
      title="Custom Software Development"
      subtitle="Build powerful, scalable applications tailored to your business needs with our expert development team"
      seoDescription="Custom software development services using modern technologies like React, Node.js, Python, and cloud platforms. Expert full-stack development for your business."
    >
      {/* Overview Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Full-Stack Development Excellence</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From web applications to mobile apps and enterprise systems, we deliver custom software solutions 
            that drive business growth. Our experienced development team follows Agile methodologies to ensure 
            transparent collaboration, rapid iteration, and high-quality deliverables that meet your exact specifications.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Custom Development?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ServiceFeatureCard key={index} {...benefit} />
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Master</h2>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-secondary rounded-lg">
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary to-accent mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Code className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
              <p className="text-muted-foreground">
                Responsive, performant web apps built with modern frameworks like React, Next.js, and Vue.
              </p>
            </Card>
            <Card className="p-6">
              <Smartphone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </Card>
            <Card className="p-6">
              <Palette className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enterprise Systems</h3>
              <p className="text-muted-foreground">
                Complex business systems, CRMs, ERPs, and internal tools that streamline operations.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
};

export default CustomDevelopment;
