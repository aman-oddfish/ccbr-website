const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.cdn.thewebconsole.com', 'randomuser.me', 'images.unsplash.com'],
    unoptimized: true, // Disable image optimization for now
  },
  // Ensure static files are properly served
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  // Add font optimization
  optimizeFonts: true,
  // Add proper static file handling
  staticPageGenerationTimeout: 1000,
  // Add proper asset prefix
  assetPrefix: process.env.NODE_ENV === 'production' ? '/_next' : '',
  
  // Configure webpack to handle Quill's CSS
  webpack(config) {
    return config;
  },
  
  // Configure Content Security Policy to allow Quill styles
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig; 