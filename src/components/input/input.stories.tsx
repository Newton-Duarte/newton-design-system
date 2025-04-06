import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
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
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    placeholder: 'John Doe',
    variant: 'default',
  },
}
