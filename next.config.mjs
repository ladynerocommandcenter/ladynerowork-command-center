/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/music',
        destination: 'https://open.spotify.com/artist/1Joa3ujqQrsho3YGeth7X8',
        permanent: false,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/artist/1Joa3ujqQrsho3YGeth7X8',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@ladynero_2tm',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/ladynero100',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/GeneralLadyNero',
        permanent: false,
      },
      {
        source: '/x',
        destination: 'https://x.com/GeneralLadyNero',
        permanent: false,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@lady.nero2',
        permanent: false,
      },
      {
        source: '/soundcloud',
        destination: 'https://soundcloud.com/ladynero/sets/lady-nero-strategic-takeover',
        permanent: false,
      },
      {
        source: '/apple',
        destination: 'https://music.apple.com/us/artist/lady-nero/1892912332',
        permanent: false,
      },
      {
        source: '/links',
        destination: 'https://linktr.ee/ladynero2TM',
        permanent: false,
      },
      {
        source: '/press',
        destination: '/booking#press-kit',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
