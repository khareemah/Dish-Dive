/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["media.istockphoto.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;
