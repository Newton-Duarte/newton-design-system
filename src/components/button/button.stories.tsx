import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    variant: {
      options: ['default', 'outline', 'ghost', 'link'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}
