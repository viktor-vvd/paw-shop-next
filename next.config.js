/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dropshop.demka.online",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
