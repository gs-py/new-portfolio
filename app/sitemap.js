import { navLinks } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gladwinsanthosh.dpdns.org";

export default function sitemap() {
  const now = new Date();
  return navLinks.map((link) => ({
    url: `${base}${link.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: link.path === "/" ? 1 : 0.7,
  }));
}
