import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MotionRoot from "@/components/MotionRoot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://gladwinsanthosh.dpdns.org"),
  title: {
    default: `${profile.name} — Full Stack Developer`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Full Stack Developer at LyfSkills, building production EdTech with React, Next.js, Node.js, FastAPI and machine learning.",
  openGraph: {
    title: `${profile.name} — Full Stack Developer`,
    description:
      "Full Stack Developer at LyfSkills, building production EdTech with React, Next.js, Node.js, FastAPI and machine learning.",
    type: "website",
    images: ["/assets/img1.png"],
  },
};

export const viewport = { themeColor: "#e9e9ee" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen">
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
