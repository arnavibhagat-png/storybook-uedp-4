import type { Meta, StoryObj } from '@storybook/react'
import { Component11 } from './Component11'

const meta: Meta<typeof Component11> = {
  title: 'Components/Component 11',
  component: Component11,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['default', 'hover', 'pressed', 'disabled', 'grp tired'],
      description: 'Figma variant property (Property 1)',
    },
    label: { control: 'text', description: 'Button label text' },
    onClick: { action: 'clicked' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { property1: 'default', label: 'Awareness' },
}

export const Hover: Story = {
  args: { property1: 'hover', label: 'Awareness' },
}

export const Pressed: Story = {
  args: { property1: 'pressed', label: 'Awareness' },
}

export const Disabled: Story = {
  args: { property1: 'disabled', label: 'Awareness' },
}

export const GrpTired: Story = {
  name: 'Grp Tired (Outline)',
  args: { property1: 'grp tired', label: 'Awareness' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16 }}>
      {(['default', 'hover', 'pressed', 'disabled', 'grp tired'] as const).map(v => (
        <Component11 key={v} property1={v} label={v === 'grp tired' ? 'Grp Tired' : v.charAt(0).toUpperCase() + v.slice(1)} />
      ))}
    </div>
  ),
}
