/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hotelassociationktm.org.np',
      },
    ],
  },
  trailingSlash: true,
  // Experimental flag to disable React Server Components
  experimental: {
    appDocumentPreloading: false,
  },
}

export default nextConfig
