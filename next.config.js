/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  images: {
    domains: ["flowbite.com", "randomuser.me", "www.svgrepo.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
