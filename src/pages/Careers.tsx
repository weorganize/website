import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Zap, GraduationCap, Coffee, Globe, TrendingUp, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours that fit your lifestyle."
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses, conferences, and professional development."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and a culture that respects your time."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths with mentorship and opportunities to lead projects."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Work with the latest AI, cloud, and development technologies."
    }
  ];

  const openings = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Build sophisticated multi-agent AI systems using LangGraph and CrewAI. Lead technical design and implementation of AI solutions.",
      requirements: ["5+ years Python", "LLM experience", "System design", "Client-facing skills"]
    },
    {
      title: "Full-Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "Develop modern web applications with React, Node.js, and cloud technologies. Collaborate with clients to deliver custom solutions.",
      requirements: ["3+ years React/Node.js", "TypeScript", "Cloud platforms", "Agile methodology"]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Design and maintain cloud infrastructure, implement CI/CD pipelines, and ensure system reliability and security.",
      requirements: ["Kubernetes/Docker", "Terraform/IaC", "AWS/Azure/GCP", "Monitoring tools"]
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      location: "Remote",
      description: "Build predictive models and analytics solutions. Transform client data into actionable insights and business value.",
      requirements: ["Python/R", "ML frameworks", "Statistical analysis", "Data visualization"]
    }
  ];

  const culture = [
    "Innovation-driven environment where your ideas matter",
    "Collaborative team that celebrates wins together",
    "Direct impact on client success and business outcomes",
    "Transparent communication and flat hierarchy",
    "Regular team events and knowledge sharing sessions",
    "Opportunity to work across diverse industries and projects"
  ];

  return (
    <PageLayout>
      <SEO 
        title="Careers"
        description="Join our team of AI engineers, developers, and data scientists building the future of intelligent business solutions. Remote-first culture with competitive benefits."
      />
      <PageHero
        title="Join Our Mission"
        subtitle="Build the future of AI-driven business transformation with a passionate team"
        breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Why Join Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Work at weorganize.ai?</h2>
          <p className="text-xl text-muted-foreground">
            We're not just building software—we're transforming how businesses operate with AI. 
            Join a team where your work directly impacts client success and shapes the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {culture.map((item, index) => (
                <Card key={index} className="p-4 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Open Positions</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Join our growing team and make an impact from day one
        </p>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {openings.map((job, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, reqIndex) => (
                      <span key={reqIndex} className="px-3 py-1 bg-secondary text-sm rounded-md">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="whitespace-nowrap">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Briefcase className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume and 
              let us know what role you're interested in.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
