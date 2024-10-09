import type { Meta, StoryObj } from '@storybook/react'

import { Team } from './team'

const meta = {
  title: 'Website/Sections/Team',
  component: Team,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Team>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}
