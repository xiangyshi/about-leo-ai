import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development optimizations
  ...(process.env.NODE_ENV === 'development' && {
    // Faster builds in development
    swcMinify: true,
    // Skip type checking during build (use IDE for type checking)
    typescript: {
      ignoreBuildErrors: true,
    },
    // Skip ESLint during build
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
};

export default nextConfig;
