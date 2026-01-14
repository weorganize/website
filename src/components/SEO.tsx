import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleData {
  headline?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  // Alternative format from BlogPost
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

interface ServiceData {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "service" | "product";
  canonical?: string;
  noindex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  article?: ArticleData;
  service?: ServiceData;
}

// Organization schema - constant for the company
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://weorganize.ai/#organization",
  name: "WeOrganize.ai",
  alternateName: "WeOrganize AI",
  url: "https://weorganize.ai",
  logo: {
    "@type": "ImageObject",
    url: "https://weorganize.ai/logos/weorganize-full-logo.png",
    width: 512,
    height: 512,
  },
  image: "https://weorganize.ai/og-image.png",
  description: "Enterprise AI consulting and automation solutions. Build intelligent, autonomous agents that optimize workflows, decisions, and performance.",
  email: "hello@weorganize.ai",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Kodandarao Kola",
      jobTitle: "Founder & CEO",
      sameAs: "https://www.linkedin.com/in/kodandarao-kola-989b1786/",
    },
  ],
  sameAs: [
    "https://linkedin.com/company/weorganize-ai",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@weorganize.ai",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    geoRadius: "10000",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Automation",
    "Enterprise Software",
    "Cloud Computing",
    "Data Analytics",
    "LLM Development",
    "AI Agents",
  ],
  slogan: "Reorganizing the Future with AI Agents",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 2,
    maxValue: 10,
  },
};

// Website schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://weorganize.ai/#website",
  url: "https://weorganize.ai",
  name: "WeOrganize.ai",
  description: "Enterprise AI consulting and automation solutions",
  publisher: {
    "@id": "https://weorganize.ai/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://weorganize.ai/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const SEO = ({
  title,
  description,
  keywords = "AI solutions, AI automation, enterprise AI, machine learning, AI consulting, AI agents, LLM development, business automation, data analytics, cloud transformation",
  image = "https://weorganize.ai/og-image.png",
  url,
  type = "website",
  canonical,
  noindex = false,
  breadcrumbs,
  faq,
  article,
  service,
}: SEOProps) => {
  useEffect(() => {
    const currentUrl = url || window.location.href;
    const canonicalUrl = canonical || currentUrl;
    const fullTitle = title.includes("weorganize") ? title : `${title} | WeOrganize.ai`;

    // Update title
    document.title = fullTitle;

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "WeOrganize.ai");
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMetaTag("googlebot", noindex ? "noindex, nofollow" : "index, follow");

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", image, "property");
    updateMetaTag("og:image:width", "1200", "property");
    updateMetaTag("og:image:height", "630", "property");
    updateMetaTag("og:image:alt", title, "property");
    updateMetaTag("og:url", canonicalUrl, "property");
    updateMetaTag("og:type", type === "article" ? "article" : "website", "property");
    updateMetaTag("og:site_name", "WeOrganize.ai", "property");
    updateMetaTag("og:locale", "en_US", "property");

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:site", "@weorganize_ai");
    updateMetaTag("twitter:creator", "@weorganize_ai");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:image:alt", title);

    // Article-specific meta tags
    if (article) {
      const pubDate = article.datePublished || article.publishedTime;
      const modDate = article.dateModified || article.modifiedTime;

      if (pubDate) {
        updateMetaTag("article:published_time", pubDate, "property");
      }
      if (modDate) {
        updateMetaTag("article:modified_time", modDate, "property");
      }
      if (article.author) {
        updateMetaTag("article:author", article.author, "property");
      }
      if (article.section) {
        updateMetaTag("article:section", article.section, "property");
      }
      if (article.tags && article.tags.length > 0) {
        article.tags.forEach(tag => {
          updateMetaTag("article:tag", tag, "property");
        });
      }
    }

    // Build and inject structured data
    const schemas: object[] = [organizationSchema, websiteSchema];

    // WebPage schema
    const webPageSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: fullTitle,
      description: description,
      isPartOf: { "@id": "https://weorganize.ai/#website" },
      publisher: { "@id": "https://weorganize.ai/#organization" },
      inLanguage: "en-US",
    };

    // Add breadcrumb to webpage
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://weorganize.ai",
          },
          ...breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: item.name,
            item: item.url.startsWith("http") ? item.url : `https://weorganize.ai${item.url}`,
          })),
        ],
      };
      schemas.push(breadcrumbSchema);
      webPageSchema.breadcrumb = { "@id": `${canonicalUrl}#breadcrumb` };
    }

    schemas.push(webPageSchema);

    // FAQ schema for AEO
    if (faq && faq.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
      schemas.push(faqSchema);
    }

    // Article schema
    if (article) {
      const pubDate = article.datePublished || article.publishedTime;
      const modDate = article.dateModified || article.modifiedTime || pubDate;

      const articleSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: article.headline || fullTitle,
        description: article.description || description,
        image: article.image || image,
        datePublished: pubDate,
        dateModified: modDate,
        author: {
          "@type": "Person",
          name: article.author || "WeOrganize.ai Team",
        },
        publisher: { "@id": "https://weorganize.ai/#organization" },
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
        inLanguage: "en-US",
      };

      if (article.section) {
        articleSchema.articleSection = article.section;
      }

      if (article.tags && article.tags.length > 0) {
        articleSchema.keywords = article.tags.join(", ");
      }

      schemas.push(articleSchema);
    }

    // Service schema
    if (service) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: service.name,
        description: service.description,
        provider: { "@id": "https://weorganize.ai/#organization" },
        areaServed: service.areaServed || "Worldwide",
        serviceType: "AI Consulting",
      };
      schemas.push(serviceSchema);
    }

    // Inject JSON-LD
    injectJsonLd(schemas);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById("seo-json-ld");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, keywords, image, url, type, canonical, noindex, breadcrumbs, faq, article, service]);

  return null;
};

// Helper functions
const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const injectJsonLd = (schemas: object[]) => {
  // Remove existing
  const existingScript = document.getElementById("seo-json-ld");
  if (existingScript) {
    existingScript.remove();
  }

  // Create new script
  const script = document.createElement("script");
  script.id = "seo-json-ld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schemas);
  document.head.appendChild(script);
};

// Export helper for FAQ data extraction
export const extractFAQFromAccordion = (items: Array<{ question: string; answer: string }>): FAQItem[] => {
  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
};
