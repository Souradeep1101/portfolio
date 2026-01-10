import { MetadataRoute } from "next";
import { getPosts } from "@/lib/mdx"; // Import your blog fetcher

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getPosts();
  const baseUrl = "https://souradeep.dev";

  // 1. Static Routes
  const routes = [
    "",
    "/blog",
    "/resume",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  // 2. Dynamic Blog Routes
  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...posts];
}