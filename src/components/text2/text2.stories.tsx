import type { Meta, StoryObj } from '@storybook/react'
import { Text2 } from './'

const meta: Meta<typeof Text2> = {
  component: Text2,
  title: 'Components/Text2',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text2>

export const Default: Story = {
  args: {
    children: 'Storybook',
    variant: 'default',
  },
}
