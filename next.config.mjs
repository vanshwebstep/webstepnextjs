/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', 
  images: {
    unoptimized: true,
  },
  basePath: '/demo/webstepnext',
  assetPrefix: '/demo/webstepnext/',
};

export default nextConfig;