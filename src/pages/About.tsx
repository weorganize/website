import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award, Heart, Rocket } from "lucide-react";
import { ContactCTA } from "@/components/ui/ContactCTA";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver transformative solutions."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building lasting partnerships through transparency, reliability, and consistent delivery."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every project, from code quality to client service."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients as partners to achieve shared success."
    }
  ];

  const timeline = [
    { year: "2020", event: "Founded with a vision to democratize AI for businesses" },
    { year: "2021", event: "Built first multi-agent AI prototypes using LangChain" },
    { year: "2022", event: "Expanded to full-stack development and cloud services" },
    { year: "2023", event: "Launched Proof of Concept program" },
    { year: "2024", event: "Adopted LangGraph and CrewAI for production-grade agents" }
  ];

  return (
    <PageLayout>
      <SEO 
        title="About Us"
        description="Learn about weorganize.ai - pioneering AI-driven business transformation with expertise in AI solutions, custom development, and cloud services."
      />
      <PageHero
        title="Pioneering AI-Driven Business Transformation"
        subtitle="We're on a mission to empower businesses with intelligent technology solutions that drive real results"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To bridge the gap between cutting-edge AI technology and practical business applications. 
            We believe that every organization, regardless of size, should have access to intelligent 
            automation and data-driven insights that transform their operations and accelerate growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  weorganize.ai was born from a simple observation: while AI technology was advancing 
                  rapidly, most businesses struggled to harness its potential. We saw organizations 
                  investing in tools they couldn't fully utilize, or avoiding AI altogether due to 
                  complexity and cost.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our founders, with backgrounds in AI research and enterprise software, decided to 
                  change that. We created a company focused on making AI accessible, practical, and 
                  results-driven through our unique Proof of Concept approach.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to work with organizations across multiple industries, helping 
                  them leverage AI, custom software, and cloud technologies to solve real business 
                  challenges and unlock new opportunities.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-20 flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Core Values</h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          The principles that guide everything we do
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                2020
              </div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-First
              </div>
              <div className="text-sm text-muted-foreground">Our Approach</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PoC
              </div>
              <div className="text-sm text-muted-foreground">Before Commitment</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                US-Based
              </div>
              <div className="text-sm text-muted-foreground">Team Location</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose weorganize.ai?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Rocket className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
              <p className="text-muted-foreground">
                Deep technical knowledge across AI, software development, data science, and cloud infrastructure.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Results-Focused</h3>
              <p className="text-muted-foreground">
                We measure success by your ROI and business impact, not just deliverables.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partnership Approach</h3>
              <p className="text-muted-foreground">
                We work as an extension of your team, invested in your long-term success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ContactCTA 
        title="Ready to Work Together?"
        description="Let's explore how we can help transform your business with intelligent technology solutions."
      />
    </PageLayout>
  );
};

export default About;
