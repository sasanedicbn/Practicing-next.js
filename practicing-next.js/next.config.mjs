/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.univerzalno.com",
        port: "",
        pathname: "/uploads/images/**",
      },
      {
        protocol: "https",
        hostname: "www.thecocktaildb.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
