/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
trailingSlash: true,
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  basePath: "/demo/webstepnext",
  assetPrefix: "/demo/webstepnext/",
};

export default nextConfig;