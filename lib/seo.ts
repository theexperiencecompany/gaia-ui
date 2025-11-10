import { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
}

/**
 * Generate comprehensive metadata for a page with optimal SEO
 */
export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords = [],
  noIndex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.name;
  const pageUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const canonicalUrl = canonical || pageUrl;

  const metadata: Metadata = {
    title: pageTitle,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "UI Components",
      "Component Library",
      "Design System",
      "Gaia UI",
      "Next.js",
      "Radix UI",
      "TypeScript",
      "Accessible Components",
      ...keywords,
    ],
    authors: authors?.map((name) => ({ name })) || [
      { name: "Gaia", url: "https://github.com/heygaia" },
    ],
    creator: "Gaia",
    publisher: "Gaia",
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
      creator: "@trygaia",
      site: "@trygaia",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
  };

  return metadata;
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.links.github],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: siteConfig.links.github,
    },
  };
}

/**
 * Generate JSON-LD structured data for website
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/docs?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate JSON-LD structured data for a documentation article
 */
export function generateArticleSchema({
  title,
  description,
  url,
  publishedTime,
  modifiedTime,
  authors = ["Gaia"],
  image = siteConfig.ogImage,
}: {
  title: string;
  description: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    image,
    datePublished: publishedTime || new Date().toISOString(),
    dateModified: modifiedTime || new Date().toISOString(),
    author: authors.map((name) => ({
      "@type": "Person",
      name,
    })),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for software
 */
export function generateSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Gaia",
    },
  };
}

/**
 * Generate JSON-LD structured data for breadcrumbs
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
