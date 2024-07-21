import { DocsLayout } from 'fumadocs-ui/layout'
import { HomeLayout } from 'fumadocs-ui/home-layout'
import { RootProvider } from 'fumadocs-ui/provider'

import type { ReactNode } from 'react'
import { docsOptions, homeOptions } from './layout.config'

import './fumadocs.global.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <HomeLayout {...homeOptions}>
            <DocsLayout {...docsOptions}>{children}</DocsLayout>
          </HomeLayout>
        </RootProvider>
      </body>
    </html>
  )
}
