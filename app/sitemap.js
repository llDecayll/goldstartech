import { posts } from "@/lib/posts";

const BASE = "https://www.goldstartech.com";

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/products",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const blogPages = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
