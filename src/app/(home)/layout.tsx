import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Open_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IEEE SPAC 2024',
  description:
    'Official Website of the IEEE Student Professional Awareness Conference 2024, hosted in Ottawa, Ontario.',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={openSans.className} suppressHydrationWarning>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}
