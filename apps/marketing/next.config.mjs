/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ledger/:path*",
          destination: "https://cicicarscom-pixel-ai-muhasebeci.vercel.app/ledger/:path*",
        },
      ]
    };
  },
};
export default nextConfig;
