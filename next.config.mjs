import createMDX from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkInstall, { Tabs: 'InstallTabs' }],
    ],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // TODO: Eliminate this workaround
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

export default withMDX(config)
