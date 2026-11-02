import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS into ./out,
// ready for any static hosting (nginx, Apache, shared hosting, S3, Netlify…).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /catalog/ -> out/catalog/index.html, works without rewrites
  images: { unoptimized: true },
};

export default nextConfig;
