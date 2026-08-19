import { IS_PRODUCTION, SITE_URL, abs } from "@/lib/seo";

export default function robots() {
  // Preview/branch deployments get a blanket disallow so they never index.
  if (!IS_PRODUCTION) return { rules: [{ userAgent: "*", disallow: "/" }] };

  return {
    rules: [
      // /og stays crawlable on purpose — Facebook and LinkedIn honour robots.txt
      // when fetching og:image, and blocking it would kill link previews.
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
    ],
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
