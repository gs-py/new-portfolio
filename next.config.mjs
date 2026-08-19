/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // /blog used to host all three case studies as #anchors.
  async redirects() {
    return [
      // www served a full 200 alongside the apex — two crawlable copies of every
      // page. Canonical tags alone leave the duplicate host reachable.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gladwinsanthosh.dpdns.org" }],
        destination: "https://gladwinsanthosh.dpdns.org/:path*",
        permanent: true,
      },
      { source: "/blog/index", destination: "/blog", permanent: true },
      { source: "/writing", destination: "/blog", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/about", destination: "/resume", permanent: true },
    ];
  },
};

export default nextConfig;
