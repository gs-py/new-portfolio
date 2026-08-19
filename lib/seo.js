import { profile } from "@/lib/data";

/**
 * Single source of truth for the canonical origin. Everything that emits a URL
 * — canonicals, OG tags, sitemap, robots, JSON-LD — reads from here.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gladwinsanthosh.dpdns.org").replace(/\/+$/, "");

export const SITE_NAME = profile.name;
export const SITE_TITLE = `${profile.name} — ${profile.role}`;
export const SITE_DESCRIPTION =
  "Full Stack Developer at LyfSkills, building production EdTech with React, Next.js, Node.js, FastAPI and machine learning.";

/** Only the production deployment is indexable. Previews must never rank. */
export const IS_PRODUCTION = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-MCQKG8PT";

export const abs = (path = "/") => new URL(path, SITE_URL).toString();

/** Dynamic OG card. Same image serves og:image and twitter:image. */
export const ogImageUrl = ({ title, subtitle, eyebrow }) => {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  if (eyebrow) params.set("eyebrow", eyebrow);
  return abs(`/og?${params.toString()}`);
};

/**
 * Builds a complete, self-canonicalising metadata object for one route.
 * `title` stays short so the layout template (`%s · Gladwin Santhosh`) can wrap
 * it; social titles are spelled out in full because templates don't apply there.
 */
export function pageMeta({
  title,
  description,
  path,
  eyebrow,
  socialTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
  image,
}) {
  const url = abs(path);
  const fullTitle = socialTitle ?? (path === "/" ? SITE_TITLE : `${title} · ${profile.name}`);
  const ogImage =
    image ?? ogImageUrl({ title: title === "Home" ? profile.name : title, subtitle: description, eyebrow });

  return {
    // The layout template ("%s · Gladwin Santhosh") must not double up on home.
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_TITLE,
      locale: "en_US",
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle, type: "image/png" }],
      ...(type === "article"
        ? { publishedTime, modifiedTime: modifiedTime ?? publishedTime, authors: [abs("/resume")], tags }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
