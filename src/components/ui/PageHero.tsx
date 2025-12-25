import { ReactNode } from "react";
import { BreadcrumbNav } from "./BreadcrumbNav";

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
  children?: ReactNode;
  gradient?: string;
}

export const PageHero = ({ 
  title, 
  subtitle, 
  breadcrumbs,
  children,
  gradient = "from-primary to-accent" 
}: PageHeroProps) => {
  return (
    <section className={`relative py-20 md:py-32 bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {breadcrumbs && <BreadcrumbNav items={breadcrumbs} />}
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};
