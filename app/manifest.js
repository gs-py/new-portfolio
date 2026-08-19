import { profile } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_TITLE, abs } from "@/lib/seo";

export default function manifest() {
  return {
    name: SITE_TITLE,
    short_name: profile.name.split(" ")[0],
    description: SITE_DESCRIPTION,
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#e9e9ee",
    theme_color: "#e9e9ee",
    lang: "en",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
