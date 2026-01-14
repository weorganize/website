import { ReactNode } from "react";
import { PageLayout } from "./PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { SEO } from "@/components/SEO";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  seoDescription: string;
  seoKeywords?: string;
  serviceType?: string;
  children: ReactNode;
}

export const ServicePageLayout = ({
  title,
  subtitle,
  seoDescription,
  seoKeywords,
  serviceType,
  children,
}: ServicePageLayoutProps) => {
  // Generate canonical URL based on service title
  const serviceSlug = title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");

  return (
    <PageLayout>
      <SEO
        title={title}
        description={seoDescription}
        keywords={seoKeywords || `${title}, AI solutions, enterprise services, business automation, WeOrganize.ai`}
        type="service"
        canonical={`https://weorganize.ai/services/${serviceSlug}`}
        breadcrumbs={[
          { name: "Services", url: "/services" },
          { name: title, url: `/services/${serviceSlug}` },
        ]}
        service={{
          name: title,
          description: seoDescription,
          areaServed: "Worldwide",
        }}
      />
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: title, href: "#" },
        ]}
      />
      <div className="py-20">{children}</div>
      <ContactCTA />
    </PageLayout>
  );
};
