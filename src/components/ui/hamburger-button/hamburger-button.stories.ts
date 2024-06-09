import type { Meta, StoryObj } from '@storybook/react';

import { HamburgerButton } from './hamburger-button';

const meta = {
  title: 'Website/Hamburger Button',
  component: HamburgerButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    menuOpen: false,
    setMenuOpen: () => {},
  },
} satisfies Meta<typeof HamburgerButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { menuOpen: false } };
