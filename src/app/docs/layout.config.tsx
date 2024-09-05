import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout'
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle'
import { House } from 'lucide-react'
import { pageTree, pages } from '@/app/docs/source'

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      // Doesn't work without the fragment
      // eslint-disable-next-line react/no-useless-fragment
      <>
        <span className="text-lg font-bold">IEEE SPAC Dev Docs</span>
      </>
    ),
    url: '/docs',
  },
  githubUrl: 'https://github.com/SPAC-2024/2024-ieee-spac-website',
  links: [
    {
      text: '2024 Website',
      url: '/',
      icon: <House />,
      active: 'nested-url',
    },
  ],
}

// home layout configuration
export const homeOptions: BaseLayoutProps = {
  ...baseOptions,
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  sidebar: {
    banner: (
      <RootToggle
        options={pages.map(page => ({
          title: page.title,
          description: page.description,
          url: `/docs/${page.url}`,
          icon: (
            <page.icon
              className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
              style={{
                backgroundColor: `hsl(var(--primary)/.3)`,
                color: `hsl(var(--accent-foreground))`,
              }}
            />
          ),
        }))}
      />
    ),
  },
  tree: pageTree,
}
