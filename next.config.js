/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    domains: ["dropshop.demka.online"],
    /* remotePatterns: [
      {
        protocol: "https",
        hostname: "dropshop.demka.online",
        port: "",
        pathname: "/**",
      },
    ], */
  },
};

module.exports = nextConfig;
