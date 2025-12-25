import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const TechStackPremium = () => {
  const technologies = [
    { name: "LangGraph", category: "AI Framework", logo: "/logos/tech/langgraph.png" },
    { name: "CrewAI", category: "AI Framework", logo: "/logos/crewai.png" },
    { name: "AWS", category: "Cloud", logo: "/logos/tech/aws.png" },
    { name: "Azure", category: "Cloud", logo: "/logos/tech/azure.png" },
    { name: "TensorFlow", category: "ML", logo: "/logos/tech/tensorflow.png" },
    { name: "PyTorch", category: "ML", logo: "/logos/tech/pytorch.png" },
    { name: "Kubernetes", category: "DevOps", logo: "/logos/tech/kubernetes.png" },
    { name: "Terraform", category: "IaC", logo: "/logos/tech/terraform.svg" },
    { name: "OpenAI", category: "AI", logo: "/logos/tech/openai.png" },
    { name: "Hugging Face", category: "ML", logo: "/logos/tech/huggingface.svg" },
    { name: "Docker", category: "DevOps", logo: "/logos/tech/docker.png" },
    { name: "Ansible", category: "Automation", logo: "/logos/tech/ansible.png" }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="relative py-16 sm:py-28 bg-secondary/20 overflow-hidden">
      {/* Gradient divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ScrollReveal>
        <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-16 relative z-10">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-5 tracking-tight text-foreground">
              Powered by <span className="font-semibold text-primary">Best-in-Class</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-light px-2 sm:px-0">
              Enterprise-grade technology stack built for reliability, scale, and innovation.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Horizontal scrolling strip */}
      <ScrollReveal delay={0.2}>
        <div className="relative">
          <div className="flex animate-scroll-horizontal hover:[animation-play-state:paused]">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[160px] sm:w-[220px] mx-3 sm:mx-5 group"
              >
                <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 p-4 sm:p-6 rounded-xl transition-all duration-300 hover:bg-card border border-transparent hover:border-border/40 hover:shadow-[var(--shadow-card)]">
                  {/* Logo */}
                  <div className="h-10 sm:h-14 w-auto flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  
                  {/* Name */}
                  <div className="text-sm sm:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors text-center">
                    {tech.name}
                  </div>
                  
                  {/* Category */}
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-light text-center">
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
