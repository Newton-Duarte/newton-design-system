import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary', 'success', 'error'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Heading',
    variant: 'default',
    size: '2xl',
    as: 'h1',
  },
}
