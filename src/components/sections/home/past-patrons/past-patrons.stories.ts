import type { Meta, StoryObj } from '@storybook/react'

import { PastPatrons } from './past-patrons'

const meta = {
  title: 'Website/Sections/Past Patrons',
  component: PastPatrons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof PastPatrons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
