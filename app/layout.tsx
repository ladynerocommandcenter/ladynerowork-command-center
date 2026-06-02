import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400'],
  variable: '--font-montserrat'
})

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ladynerowork.gd'),
  title: {
    default: 'Lady Nero | Luxury Military-Grade Entertainment Empire',
    template: '%s | Lady Nero',
  },
  description: 'Luxury military-grade entertainment empire. Music. Fashion. Literature. Leadership. Built in Atlanta. Respected worldwide. 2 Tight Militia. #TeamGreyAndBlue',
  keywords: ['Lady Nero', 'Atlanta Music', '2 Tight Militia', 'TeamGreyAndBlue', 'Hip Hop', 'Fashion', 'Entertainment', 'RECLAIMED', 'BC100', 'GreyGlyde Transit'],
  authors: [{ name: 'Lady Nero' }],
  creator: 'Lady Nero',
  publisher: 'Lady Nero Empire',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ladynerowork.gd',
    siteName: 'Lady Nero Empire',
    title: 'Lady Nero | Luxury Military-Grade Entertainment Empire',
    description: 'Luxury military-grade entertainment empire. Music. Fashion. Literature. Leadership. Built in Atlanta. Respected worldwide.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lady Nero - Command Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lady Nero | Luxury Military-Grade Entertainment Empire',
    description: 'Music. Fashion. Literature. Leadership. Built in Atlanta. Respected worldwide.',
    creator: '@GeneralLadyNero',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-[#111]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
