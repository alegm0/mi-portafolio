/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Agrega Sanity como dominio permitido
  },
};

export default nextConfig;
