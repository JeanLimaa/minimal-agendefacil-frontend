/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'api.woovi-sandbox.com', 
          },
        ]
    }
};

export default nextConfig;
