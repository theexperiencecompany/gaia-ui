import { MetadataRoute } from "next";
import { getAllDocSlugs } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

/**
 * Generate dynamic sitemap for all pages
 * This file is automatically crawled by search engines
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic documentation routes
  const docSlugs = getAllDocSlugs();

  for (const slug of docSlugs) {
    const path = slug.length === 0 ? "/docs" : `/docs/${slug.join("/")}`;
    routes.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "/docs" ? 0.9 : 0.8,
    });
  }

  return routes;
}
