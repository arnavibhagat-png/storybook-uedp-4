import type { Meta, StoryObj } from '@storybook/react'
import { Component9 } from './Component9'

const meta: Meta<typeof Component9> = {
  title: 'Components/Component 9',
  component: Component9,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['Home', 'Community', 'Awareness', 'Specialist'],
      description: 'Active tab variant (Figma Property 1)',
    },
    onTabChange: { action: 'tabChanged' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = { args: { property1: 'Home' } }
export const Community: Story = { args: { property1: 'Community' } }
export const Awareness: Story = { args: { property1: 'Awareness' } }
export const Specialist: Story = { args: { property1: 'Specialist' } }
