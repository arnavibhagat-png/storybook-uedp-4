import type { Meta, StoryObj } from '@storybook/react'
import { Component6 } from './Component6'

const meta: Meta<typeof Component6> = {
  title: 'Components/Component 6',
  component: Component6,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['default', 'pressed', 'disabled'],
      description: 'Figma variant property (Property 1)',
    },
    label: { control: 'text', description: 'CTA label text' },
    onClick: { action: 'clicked' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { property1: 'default', label: 'Quiz' },
}

export const Pressed: Story = {
  args: { property1: 'pressed', label: 'Quiz' },
}

export const Disabled: Story = {
  args: { property1: 'disabled', label: 'Quiz' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16 }}>
      <Component6 property1='default' label='Quiz' />
      <Component6 property1='pressed' label='Quiz' />
      <Component6 property1='disabled' label='Quiz' />
    </div>
  ),
}
