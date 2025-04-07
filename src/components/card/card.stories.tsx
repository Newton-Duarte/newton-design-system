import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Card from './'
import Text from '../text'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
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
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: <Text>Card Default</Text>,
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    children: <Text className="nds-text-white">Card Primary</Text>,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: <Text className="nds-text-white">Card Secondary</Text>,
    variant: 'secondary',
  },
}

export const Success: Story = {
  args: {
    children: <Text className="nds-text-white">Card Success</Text>,
    variant: 'success',
  },
}

export const Error: Story = {
  args: {
    children: <Text className="nds-text-white">Card Error</Text>,
    variant: 'error',
  },
}
