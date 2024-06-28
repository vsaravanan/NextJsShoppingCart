module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexts.saravanjs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
