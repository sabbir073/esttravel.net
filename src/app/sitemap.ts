import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { getAllPublishedSlugs } from "@/lib/posts";

const BASE_URL = "https://www.esttravel.net";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/cheap-flights-to-africa/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cheap-flights-to-central-america/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nigerian-visa/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/booking/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about-us/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacts/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/hotel-packages/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/safari-packages-html/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/nigeria-e-visa/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Destination pages — Nigeria destinations get higher priority
  const destinationPages: MetadataRoute.Sitemap = destinations.map((dest) => ({
    url: `${BASE_URL}/${dest.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: dest.country === "Nigeria" ? 0.9 : 0.8,
  }));

  // Blog post pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllPublishedSlugs();
    blogPages = slugs.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: post.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // DB might not be available during build
  }

  return [...staticPages, ...destinationPages, ...blogPages];
}
