import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export default async function sitemap() {
  const posts = await getBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: `${DATA.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: DATA.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${DATA.url}/card`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...routes, ...blogPosts];
}
