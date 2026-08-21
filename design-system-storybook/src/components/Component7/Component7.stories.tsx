import type { Meta, StoryObj } from '@storybook/react'
import { Component7 } from './Component7'

const meta: Meta<typeof Component7> = {
  title: 'Components/Component 7',
  component: Component7,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      description: 'Figma variant (Property 1)',
    },
    heading: { control: 'text', description: 'Card heading' },
    body: { control: 'text', description: 'Card body text' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: { property1: 'active', heading: 'Awareness Module', body: 'Learn about environmental awareness.' },
}

export const Inactive: Story = {
  args: { property1: 'inactive', heading: 'Community Card', body: 'Connect with your local community.' },
}

export const CardGrid: Story = {
  name: 'Card Grid - Both Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16, flexWrap: 'wrap' }}>
      <Component7 property1='active' heading='Awareness' body='Environmental awareness module' />
      <Component7 property1='inactive' heading='Community' body='Connect with your community' />
    </div>
  ),
}
