import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
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
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    as: {
      options: ['p', 'span', 'label', 'a'],
      control: { type: 'inline-radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    children: 'This is a text',
    variant: 'default',
    size: 'md',
    as: 'p',
  },
}
