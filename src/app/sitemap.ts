import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1.0 },
    { url: `${siteConfig.url}/about`, priority: 0.8 },
    { url: `${siteConfig.url}/projects`, priority: 0.9 },
    { url: `${siteConfig.url}/experiences`, priority: 0.7 },
    { url: `${siteConfig.url}/contact`, priority: 0.6 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
