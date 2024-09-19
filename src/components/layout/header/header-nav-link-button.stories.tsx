import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'
import { HeaderNavLinkButton } from './header-nav-link-button'

const meta = {
  title: 'Website/Layout/Header/HeaderNavLinkButton',
  component: HeaderNavLinkButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderNavLinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Home: Story = {
  args: { name: 'Home', path: '#home', onCloseMenu: fn() },
}

export const About: Story = {
  args: { name: 'About', path: '#about', onCloseMenu: fn() },
}

export const Patronage: Story = {
  args: { name: 'Patronage', path: '#patronage', onCloseMenu: fn() },
}

export const Contact: Story = {
  args: { name: 'Contact', path: '#contact', onCloseMenu: fn() },
}
