import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { StoreProvider } from '@/lib/store-context'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'ElectroHub - Everything Electronics in One Place',
  description: 'Premium electronics components, robotics kits, and IoT modules for engineering students, hobbyists, and innovators. Shop Arduino, Raspberry Pi, sensors, and more at student-friendly prices.',
  keywords: ['electronics', 'arduino', 'raspberry pi', 'sensors', 'iot', 'robotics', 'diy kits', 'engineering', 'components'],
  authors: [{ name: 'ElectroHub' }],
  openGraph: {
    title: 'ElectroHub - Everything Electronics in One Place',
    description: 'Premium electronics components for students and makers',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1a365d' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <StoreProvider>
          {children}
        </StoreProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
