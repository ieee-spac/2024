import type { Meta, StoryObj } from '@storybook/react'

import { Patrons } from './patrons'

const meta = {
  title: 'Website/Sections/Patrons',
  component: Patrons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Patrons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
