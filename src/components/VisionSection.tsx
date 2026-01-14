import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const VisionSection = () => {
  return (
    <section className="py-36 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(32_100%_44%_/_0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <ScrollReveal>
            <div className="inline-block px-5 py-2 border border-primary/20 rounded-full bg-primary/5 mb-6">
              <span className="text-sm font-medium text-primary tracking-wider">OUR VISION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              Building the <span className="font-semibold">Operating System</span>
              <br />for Intelligent Enterprises
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              We believe the future belongs to organizations that embrace autonomous intelligence. 
              Our mission is to empower enterprises with AI agents that don't just assist—they 
              transform how work gets done, decisions are made, and value is created.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 pt-12">What We're Building Toward</p>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-primary">Hours → Minutes</div>
                <div className="text-sm text-muted-foreground font-light">Process Acceleration</div>
              </div>
              <div className="space-y-3 border-l border-r border-border/40 px-8">
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-primary">Manual → Auto</div>
                <div className="text-sm text-muted-foreground font-light">Workflow Transformation</div>
              </div>
              <div className="space-y-3">
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-primary">24/7</div>
                <div className="text-sm text-muted-foreground font-light">AI Availability</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-8 font-light italic">
              These represent our goals, not claimed results. We'll share verified outcomes as our design partners complete engagements.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
