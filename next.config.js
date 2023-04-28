/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/out",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
