import type { Meta, StoryObj } from '@storybook/react'

import { fn } from '@storybook/test'
import { HeaderNavLinkButtonsContainer } from '@/components/layout/header/header-nav-link-buttons-container'
import { links } from '@/components/layout/header/links'

const meta = {
  title: 'website/Layout/Header/HeaderNavLinkButtonsContainer',
  component: HeaderNavLinkButtonsContainer,
  // this component will have an automatically generated autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['!autodocs'],
  parameters: {
    // more on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: { links, setMenuOpen: fn() },
} satisfies Meta<typeof HeaderNavLinkButtonsContainer>

export default meta

type story = StoryObj<typeof meta>

export const Default: story = {
}
