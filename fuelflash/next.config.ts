import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this for clean URLs
  trailingSlash: false,
  // Image optimization
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
export default nextConfig;


