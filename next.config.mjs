/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net"
      }
    ],
  },
};

export default nextConfig;
