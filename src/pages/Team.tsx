import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Building2, Calendar } from "lucide-react";

const founder = {
  name: "Kodandarao Kola",
  role: "Founder & CEO",
  image: "https://media.licdn.com/dms/image/v2/C4E03AQGQE8HqJwZPSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517455029233?e=1741824000&v=beta&t=placeholder",
  linkedin: "https://www.linkedin.com/in/kodandarao-kola-989b1786/",
  bio: "16+ years of enterprise technology experience spanning AI, cloud infrastructure, and data analytics at Fortune 500 companies. Passionate about bringing enterprise-grade AI solutions to mid-market businesses.",
  highlights: [
    "Azure Cloud & OpenAI Expert",
    "Led teams of 20+ engineers",
    "Enterprise AI Architecture",
    "Cloud Migration Specialist",
  ],
  experience: [
    {
      company: "ADP",
      role: "Azure Cloud & OpenAI Support Engineer",
      period: "2023 - 2024",
      description: "Integrated Azure AI Services into enterprise applications. Designed and deployed AI solutions using Azure OpenAI, including LLM implementations for language, vision, and decision-making systems.",
    },
    {
      company: "AT&T",
      role: "Cloud Engineer",
      period: "2019 - 2023",
      description: "Led cloud migration initiatives, trained teams of 10+ on architecture design and automation. Designed disaster recovery solutions and migrated traditional infrastructure to Azure.",
    },
    {
      company: "Barclays",
      role: "Cloud Infrastructure Engineer",
      period: "2018 - 2019",
      description: "Architected Azure IaaS/PaaS solutions for cheque image processing. Implemented security controls, compliance frameworks, and high-availability systems.",
    },
    {
      company: "Bank of America",
      role: "Cloud QA & Infrastructure Lead",
      period: "2010 - 2018",
      description: "8+ years leading cloud infrastructure and data analytics teams. Managed 22 team members across credit risk analysis, trading systems, and regulatory compliance.",
    },
  ],
  skills: [
    "Azure OpenAI", "Microsoft Azure", "AWS", "Python", "LangChain",
    "DevOps", "Kubernetes", "Terraform", "SQL", "Data Analytics"
  ],
};

const coreTeam = [
  {
    name: "Manvendra Kumar",
    role: "Head of Automation",
    initials: "MK",
    linkedin: "#", // Add your LinkedIn URL
    bio: "Automation specialist focused on building intelligent workflows and AI-powered systems that eliminate manual processes and drive operational efficiency.",
    skills: ["AI Automation", "Workflow Design", "Process Optimization", "Integration"],
  },
];

const teamMembers = [
  {
    name: "Open Position",
    role: "Head of AI Engineering",
    image: "",
    bio: "We're looking for an experienced AI/ML engineer to lead our technical team. If you're passionate about building production AI systems, let's talk.",
    isHiring: true,
  },
  {
    name: "Open Position",
    role: "Solutions Architect",
    image: "",
    bio: "Join us as a solutions architect to design and implement AI solutions for our enterprise clients.",
    isHiring: true,
  },
];

const advisors = [
  {
    name: "Advisory Board",
    role: "Coming Soon",
    company: "Building our network",
    image: "",
    description: "We're assembling an advisory board of industry experts in AI, enterprise software, and business strategy.",
  },
];

const Team = () => {
  return (
    <PageLayout>
      <SEO
        title="Our Team"
        description="Meet the founder of WeOrganize.ai. 16+ years of enterprise experience at ADP, AT&T, Barclays, and Bank of America."
      />
      <PageHero
        title="Meet Our Team"
        subtitle="Enterprise experience meets startup agility. We've built AI systems at the world's largest companies - now we're making that expertise accessible to you."
        breadcrumbs={[{ label: "Team", href: "/team" }]}
      />

      {/* Founder Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Founder</Badge>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Led by <span className="font-semibold">Enterprise Veterans</span>
            </h2>
          </div>

          <Card className="p-6 sm:p-10 bg-card border border-border/40">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Photo & Basic Info */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <div className="w-40 h-40 mx-auto lg:mx-0 rounded-2xl overflow-hidden mb-6 ring-4 ring-primary/20 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">KK</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
                <p className="text-primary font-medium mb-4">{founder.role}</p>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>

                <div className="mt-6 pt-6 border-t border-border/40">
                  <p className="text-sm text-muted-foreground font-medium mb-3">Core Skills</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {founder.skills.slice(0, 6).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio & Experience */}
              <div className="lg:col-span-2">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {founder.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Experience Timeline */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    Career Highlights
                  </h4>
                  <div className="space-y-4">
                    {founder.experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-border/60 hover:border-primary/50 transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-primary font-medium mb-1">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Core Team</Badge>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              The <span className="font-semibold">Team</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreTeam.map((member, index) => (
              <Card key={index} className="p-6 bg-card border border-border/40 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 ring-4 ring-primary/10">
                    <span className="text-2xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {member.linkedin && member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We're Hiring Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="default" className="mb-4 bg-green-600">We're Hiring</Badge>
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Join Our <span className="font-semibold">Growing Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building the team that will define the future of enterprise AI. Looking for exceptional people who want to make an impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 bg-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">+</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <a
                    href="/careers"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Position
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light mb-4">
              Why <span className="font-semibold">Work With Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real Impact",
                description: "Work on AI solutions that transform how businesses operate. See your work deployed and making a difference.",
              },
              {
                title: "Learn & Grow",
                description: "Work directly with experienced engineers who've built systems at Fortune 500 companies.",
              },
              {
                title: "Remote-First",
                description: "Work from anywhere. We value output over hours, and trust our team to deliver.",
              },
              {
                title: "Cutting Edge",
                description: "Work with the latest AI technologies - LLMs, agents, RAG systems, and more.",
              },
              {
                title: "Equity Options",
                description: "Share in our success. Early team members receive meaningful equity stakes.",
              },
              {
                title: "No Red Tape",
                description: "Startup agility with enterprise experience. Make decisions fast and ship often.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-5 bg-card border border-border/40 hover:border-primary/30 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View All Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Want to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're looking to join our team or explore how we can help your business, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Call
              </a>
              <a
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                View Careers
              </a>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;
