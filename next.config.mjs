const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ✅ Skips ESLint during Vercel build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',  // ✅ Allows Cloudinary images
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // ✅ Allows GitHub raw image links
        pathname: '**',
      },
    ],
  },
};
