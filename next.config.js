/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mangadex.org',
            },
        ],
    },
}

async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://cors.zenno.moe/:path*',
          },
        ]
      },

module.exports = nextConfig
