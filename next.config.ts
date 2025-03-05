import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/webrewrite",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
