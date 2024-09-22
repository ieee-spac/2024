import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/layout/header/header'
import { links } from '@/components/layout/header/links'

const logo = '/assets/ieee_spac_logo_vertical_no_year.svg'

const meta = {
  title: 'Website/Layout/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['!autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: { logo, links },
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { logo, links },
}
