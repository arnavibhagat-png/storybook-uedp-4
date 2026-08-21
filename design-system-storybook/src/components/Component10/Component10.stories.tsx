import type { Meta, StoryObj } from '@storybook/react'
import { Component10 } from './Component10'

const meta: Meta<typeof Component10> = {
  title: 'Components/Component 10',
  component: Component10,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['Default', 'Group 69', 'Group 68'],
      description: 'Figma variant property (Property 1)',
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageSrc: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { property1: 'Default', title: 'Card Title', subtitle: 'Subtitle' },
}

export const AlternateGroup69: Story = {
  args: { property1: 'Group 69', title: 'Alternate Card', subtitle: 'Group 69 variant' },
}

export const DisabledGroup68: Story = {
  args: { property1: 'Group 68', title: 'Inactive Card', subtitle: 'Disabled state' },
}
