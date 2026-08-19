import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const host = SITE_URL.replace(/^https?:\/\//, "");

/** Truncate on a word boundary — a card cut mid-word reads as broken. */
const clamp = (value, max) => {
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).trimEnd() || cut.trimEnd()}…`;
};

/**
 * Satori has no bundled bold face, so the headline font is fetched once per
 * lambda and cached. A failed fetch degrades to the default face rather than
 * returning a broken card to a crawler.
 */
let fontPromise;
const displayFont = () => {
  fontPromise ??= fetch("https://fonts.googleapis.com/css2?family=Sora:wght@700", {
    // Old UA so Google serves TrueType; satori cannot parse woff2.
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 Chrome/40 Safari/537.36" },
  })
    .then((res) => res.text())
    // Google emits one @font-face per unicode-range; the latin block is last.
    .then((css) => [...css.matchAll(/src:\s*url\((.+?)\)\s*format\('(?:truetype|opentype|woff)'\)/g)].at(-1)?.[1])
    .then((url) => (url ? fetch(url).then((res) => res.arrayBuffer()) : null))
    .catch(() => null);
  return fontPromise;
};

export async function GET(request) {
  const params = request.nextUrl.searchParams;
  const title = clamp(params.get("title") || profile.name, 84);
  const subtitle = clamp(params.get("subtitle") || profile.role, 128);
  const eyebrow = clamp(params.get("eyebrow") || profile.role, 42);
  const font = await displayFont();
  // Never emit `fontFamily: undefined` — satori calls .split() on it and throws.
  const display = font ? { fontFamily: "Sora" } : {};

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #eeeef2 0%, #e3e3e9 100%)",
          color: "#1e1f26",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "#e9e9ee",
              boxShadow: "9px 9px 18px #c6c7ce, -9px -9px 18px #ffffff",
              color: "#4c4fd4",
              fontSize: 28,
              ...display,
            }}
          >
            GS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, color: "#1e1f26", ...display }}>{profile.name}</div>
            <div style={{ fontSize: 20, color: "#666875" }}>{host}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", paddingTop: 24, paddingBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              background: "#e9e9ee",
              boxShadow: "inset 3px 3px 7px #cccdd4, inset -3px -3px 7px #ffffff",
              color: "#4c4fd4",
              fontSize: 20,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: title.length > 60 ? 54 : title.length > 40 ? 62 : 74,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              ...display,
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 22, fontSize: 25, lineHeight: 1.4, color: "#565863", maxWidth: 960 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          <div style={{ width: 84, height: 8, borderRadius: 999, background: "#4c4fd4" }} />
          <div style={{ fontSize: 22, color: "#666875" }}>React · Next.js · FastAPI · React Native · ML</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Sora", data: font, weight: 700, style: "normal" }] : undefined,
      headers: { "cache-control": "public, immutable, no-transform, max-age=31536000" },
    }
  );
}
