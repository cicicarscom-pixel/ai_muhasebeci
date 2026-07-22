/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ledger/:path*",
          destination: "https://ledger.workigom.com/ledger/:path*",
        },
      ]
    };
  },
};
export default nextConfig;
