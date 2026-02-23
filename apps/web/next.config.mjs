import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  turbopack: {},
  transpilePackages: ['@uncbci/core', '@uncbci/ui'],
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@uncbci/core': path.resolve(__dirname, '../../packages/core'),
      '@uncbci/ui': path.resolve(__dirname, '../../packages/ui/src'),
    };
    return config;
  },
};

export default nextConfig;
