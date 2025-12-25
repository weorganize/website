import { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { SEO } from "@/components/SEO";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  seoDescription: string;
  children: ReactNode;
}

export const ServicePageLayout = ({ 
  title, 
  subtitle, 
  seoDescription,
  children 
}: ServicePageLayoutProps) => {
  return (
    <PageLayout>
      <SEO 
        title={title}
        description={seoDescription}
      />
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: title, href: "#" }
        ]}
      />
      <div className="py-20">
        {children}
      </div>
      <ContactCTA />
    </PageLayout>
  );
};
