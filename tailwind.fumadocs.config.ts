import type { Config } from 'tailwindcss'
import { createPreset } from 'fumadocs-ui/tailwind-plugin'

const config: Config = {
  darkMode: ['class'],
  prefix: '',
  content: [
    './src/app/docs/**/*.{ts,tsx}',
    './src/content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset({
    // preset: 'default',
    // preset: 'neutral',
    // preset: 'dusk',
    // preset: 'purple',
    preset: 'ocean',
    // preset: 'catppuccin',
  },
  )],
}

export default config
