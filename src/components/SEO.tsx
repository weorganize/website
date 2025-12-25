import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords = "AI solutions, software development, data analytics, cloud transformation",
  image = "/logos/weorganize-full-logo.png",
  url = window.location.href
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | weorganize.ai`;
    
    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    
    // Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", image, "property");
    updateMetaTag("og:url", url, "property");
    updateMetaTag("og:type", "website", "property");
    
    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
  }, [title, description, keywords, image, url]);

  const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  return null;
};
