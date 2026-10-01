import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for shared hosting (Hostinger). `next build` writes the site to `out/`.
  output: "export",
  // Emit /about/index.html instead of /about.html so Apache serves clean URLs without rewrites.
  trailingSlash: true,
  images: {
    // The default image optimizer needs a Node server, which a static export doesn't have.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
