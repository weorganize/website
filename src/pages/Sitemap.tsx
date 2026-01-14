import { PageLayout } from "@/components/layouts/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Briefcase, Building2, FileText, Users, Calculator, Mail } from "lucide-react";

const sitemapData = {
  main: [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Our Team", href: "/team", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
  ],
  services: [
    { name: "All Services", href: "/services" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
    { name: "Custom Development", href: "/services/custom-development" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "Cloud Transformation", href: "/services/cloud-transformation" },
  ],
  industries: [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance", href: "/industries/finance" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
  ],
  resources: [
    { name: "Case Studies", href: "/case-studies", icon: FileText },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "ROI Calculator", href: "/roi-calculator", icon: Calculator },
    { name: "Compare Solutions", href: "/compare", icon: Building2 },
    { name: "PoC Approach", href: "/poc-approach", icon: Briefcase },
    { name: "Pricing", href: "/pricing", icon: Calculator },
    { name: "Careers", href: "/careers", icon: Users },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "AI Ethics", href: "/ai-ethics" },
    { name: "Data Handling", href: "/data-handling" },
  ],
};

const SitemapSection = ({ title, links }: { title: string; links: { name: string; href: string; icon?: any }[] }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4 text-foreground">{title}</h2>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
            {link.icon && <link.icon className="w-4 h-4" />}
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Sitemap = () => {
  return (
    <PageLayout>
      <SEO
        title="Sitemap"
        description="Navigate WeOrganize.ai - Find all pages including services, industries, resources, and legal information."
        noIndex={false}
      />
      <PageHero
        title="Sitemap"
        subtitle="Navigate our complete website structure"
        breadcrumbs={[{ label: "Sitemap", href: "/sitemap" }]}
      />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <SitemapSection title="Main Pages" links={sitemapData.main} />
              <SitemapSection title="Legal & Policies" links={sitemapData.legal} />
            </div>
            <div>
              <SitemapSection title="Services" links={sitemapData.services} />
              <SitemapSection title="Industries" links={sitemapData.industries} />
            </div>
            <div>
              <SitemapSection title="Resources" links={sitemapData.resources} />
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border">
            <h3 className="font-semibold mb-2">Looking for something specific?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Can't find what you're looking for? Contact us and we'll help you find the information you need.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              XML Sitemap:{" "}
              <a
                href="/sitemap.xml"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                /sitemap.xml
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sitemap;
