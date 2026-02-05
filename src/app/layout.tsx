import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://diibhouse.com'),
  title: {
    default: 'Diib House | Şanlıurfa Old Town\'da Butik Otel',
    template: '%s | Diib House',
  },
  description: 'Şanlıurfa Old Town\'da, Balıklıgöl\'e 5 dakika yürüme mesafesinde. 200 yıllık Ermeni ustanın mimarisi, taş yapı, kubbe tavanlar ve butik konaklama deneyimi.',
  keywords: ['Şanlıurfa otel', 'Balıklıgöl otel', 'butik otel', 'taş ev', 'tarihi otel', 'Urfa konaklama'],
  authors: [{ name: 'Diib House' }],
  creator: 'Diib House',
  publisher: 'Diib House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    url: '/',
    siteName: 'Diib House',
    title: 'Diib House | Şanlıurfa Old Town\'da Butik Otel',
    description: 'Şanlıurfa Old Town\'da, Balıklıgöl\'e 5 dakika yürüme mesafesinde. 200 yıllık Ermeni ustanın mimarisi.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diib House - Şanlıurfa Butik Otel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diib House | Şanlıurfa Old Town\'da Butik Otel',
    description: 'Şanlıurfa Old Town\'da, Balıklıgöl\'e 5 dakika yürüme mesafesinde. 200 yıllık Ermeni ustanın mimarisi.',
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
      'en-US': '/en',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Diib House',
              description: 'Şanlıurfa Old Town\'da butik otel. 200 yıllık Ermeni ustanın mimarisi.',
              url: 'https://diibhouse.com',
              image: 'https://diibhouse.com/images/og-image.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Old Town',
                addressLocality: 'Şanlıurfa',
                addressRegion: 'Şanlıurfa',
                postalCode: '63000',
                addressCountry: 'TR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '37.1591',
                longitude: '38.7969',
              },
              telephone: '+90-XXX-XXX-XXXX',
              email: 'info@diibhouse.com',
              priceRange: '$$',
              starRating: {
                '@type': 'Rating',
                ratingValue: '4',
              },
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'WiFi' },
                { '@type': 'LocationFeatureSpecification', name: 'Breakfast' },
                { '@type': 'LocationFeatureSpecification', name: 'Garden' },
                { '@type': 'LocationFeatureSpecification', name: 'Pool' },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} stone-texture`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#292524',
              color: '#fff',
              borderRadius: '12px',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
