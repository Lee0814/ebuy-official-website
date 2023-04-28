/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ebuy-official-website/out",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
