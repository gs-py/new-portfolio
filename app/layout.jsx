import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionRoot from "@/components/MotionRoot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { profile } from "@/lib/data";
import { GTM_ID, IS_PRODUCTION, SITE_DESCRIPTION, SITE_TITLE, SITE_URL, abs, ogImageUrl } from "@/lib/seo";
import { graph, personSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${profile.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: abs("/"),
    siteName: SITE_TITLE,
    locale: "en_US",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: ogImageUrl({ title: profile.name, subtitle: profile.tagline, eyebrow: profile.role }),
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl({ title: profile.name, subtitle: profile.tagline, eyebrow: profile.role })],
  },
  // Previews and the *.vercel.app mirror must never compete with the canonical host.
  robots: IS_PRODUCTION
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, nocache: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  themeColor: "#e9e9ee",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <JsonLd data={graph(personSchema, websiteSchema)} />
      </head>
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-screen">
        {/* GoogleTagManager only injects the script tag; the noscript frame is ours. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded-2xl focus:bg-surface focus:px-5 focus:py-3 focus:shadow-neu"
        >
          Skip to content
        </a>
        <MotionRoot>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionRoot>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
