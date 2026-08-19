import { posts } from "@/lib/data";
import { SITE_URL, abs } from "@/lib/seo";

/** Rebuilt on every deploy, so build time is an honest lastModified. */
const buildDate = new Date();

export default function sitemap() {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    // ponytail: no image sitemap — next@14.2 drops the `images` field silently.
    // Google still finds them in the page HTML. Revisit on Next 15.
    { path: "/work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/resume", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articles = posts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...routes, ...articles];
}
