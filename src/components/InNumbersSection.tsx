import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Clock, Users, RefreshCw, Shield } from "lucide-react";

const commitments = [
  {
    icon: Clock,
    value: "4-6",
    suffix: " Weeks",
    label: "Typical PoC Timeline",
  },
  {
    icon: Users,
    value: "Direct",
    suffix: "",
    label: "Founder Access",
  },
  {
    icon: RefreshCw,
    value: "Weekly",
    suffix: "",
    label: "Progress Updates",
  },
  {
    icon: Shield,
    value: "100%",
    suffix: "",
    label: "Your Data Ownership",
  },
];

export const InNumbersSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary-foreground/60 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3 sm:mb-4 block">Our Commitment</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary-foreground">
              What You Can Expect
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {commitments.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary-foreground/10 mb-4 sm:mb-6 group-hover:bg-primary-foreground/20 transition-colors">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-1 sm:mb-2">
                  {item.value}<span className="text-2xl sm:text-3xl md:text-4xl">{item.suffix}</span>
                </div>
                <div className="text-primary-foreground/70 uppercase tracking-wider text-xs sm:text-sm font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
