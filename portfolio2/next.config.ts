import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**" },
    ],
    remotePatterns: [
      // Allow specific project domains
      { protocol: 'https', hostname: 'tune-in-theta.vercel.app' },
      { protocol: 'https', hostname: 'www.howardmotorco.net' },
      { protocol: 'https', hostname: 'www.spoilershield.xyz' },
      { protocol: 'https', hostname: 'skinstric-ai-mike-innella-internship.vercel.app' },
      { protocol: 'https', hostname: 'summarist-home-page-pied.vercel.app' },
      { protocol: 'https', hostname: 'www.shamanasher.com' },
      { protocol: 'https', hostname: 'nft-marketplace-m-ike-innell-git-40ec1a-mikes-projects-4896b1c6.vercel.app' },
      { protocol: 'https', hostname: 'mike-innella.github.io' },
      
      // Common CDN patterns
      { protocol: 'https', hostname: '*.vercel.app' },
      { protocol: 'https', hostname: '*.githubusercontent.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
      { protocol: 'https', hostname: '*.imgix.net' },
      { protocol: 'https', hostname: '*.netlify.app' },
      { protocol: 'https', hostname: '*.googleusercontent.com' },
      
      // Additional common image hosts
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
};

export default nextConfig;
