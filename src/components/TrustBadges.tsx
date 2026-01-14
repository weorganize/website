import { Shield, Lock, Award, CheckCircle, FileCheck, Globe } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Compliant",
  },
  {
    icon: Lock,
    title: "GDPR",
    description: "Compliant",
  },
  {
    icon: FileCheck,
    title: "CCPA",
    description: "Compliant",
  },
  {
    icon: Award,
    title: "ISO 27001",
    description: "Certified",
  },
  {
    icon: CheckCircle,
    title: "HIPAA",
    description: "Ready",
  },
  {
    icon: Globe,
    title: "99.9% Uptime",
    description: "SLA Guaranteed",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10">
                <badge.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TrustBadgesCompact = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-6">
      {badges.slice(0, 4).map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg"
        >
          <badge.icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium">{badge.title}</span>
        </div>
      ))}
    </div>
  );
};
