const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gladwinsanthosh.dpdns.org";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
