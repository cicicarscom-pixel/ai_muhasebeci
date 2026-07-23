/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: '/ledger',
  experimental: {
    serverActions: {
      allowedOrigins: ['www.workigom.com', 'workigom.com', 'ledger.workigom.com', 'localhost:3000', 'localhost:3001']
    }
  }
};

export default nextConfig;
