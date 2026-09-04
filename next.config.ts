import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger shared/webhosting draait geen Node.js-server, dus we exporteren
  // de site als statische bestanden (out/) die daar direct geserveerd kunnen worden.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
