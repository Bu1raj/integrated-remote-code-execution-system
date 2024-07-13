/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        bodyParser: {
          sizeLimit: '1mb',
        },
      },
    
      // Example: Customizing API routes
      async rewrites() {
        return [
          {
            source: '/pages/:path*',
            destination: '/api/:path*',
          },
        ];
      },
};

export default nextConfig;
