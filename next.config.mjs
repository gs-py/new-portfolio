/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // /blog used to host all three case studies as #anchors.
  async redirects() {
    return [
      { source: "/blog/index", destination: "/blog", permanent: true },
      { source: "/writing", destination: "/blog", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/about", destination: "/resume", permanent: true },
    ];
  },
};

export default nextConfig;
