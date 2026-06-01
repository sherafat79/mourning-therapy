const apiUrl = new URL(
  process.env.API_URL || "https://api.sahraembodiment.com",
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.sahraembodiment.com",
      },
    ],
  },
};

module.exports = nextConfig;
