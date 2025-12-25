import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceFeatureCard = ({ icon: Icon, title, description }: ServiceFeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};
