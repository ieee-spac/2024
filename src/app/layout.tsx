import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPAC 2024',

  description:
    'Official Website of the IEEE Student Professional Awareness Conference 2024, hosted in Ottawa, Ontario.',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {' '}
      <body className={openSans.className}>{children}</body>{' '}
    </html>
  );
}
