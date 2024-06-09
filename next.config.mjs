// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*', // Apply these headers to all routes in your application.
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3000', // Modify according to your needs
          },
        ],
      },
    ];
  },
};

export default nextConfig;