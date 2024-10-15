// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   trailingSlash: true,
//   output: 'export',
//   assetPrefix: './',
//   reactStrictMode: false,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/bookAnimation" : "",
  assetPrefix: isProd ? "/bookAnimation/" : "",
};

module.exports = nextConfig;
