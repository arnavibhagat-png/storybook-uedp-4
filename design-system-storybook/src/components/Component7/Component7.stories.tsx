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
    statText: { control: 'text', description: 'Stat prefix text' },
    statHighlight: { control: 'text', description: 'Stat highlight text' },
    statSuffix: { control: 'text', description: 'Stat suffix text' },
    heading: { control: 'text', description: 'Motivational heading' },
    buttonText: { control: 'text', description: 'CTA button label' },
  },
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    property1: 'active',
    statText: 'Sleep improved by ',
    statHighlight: '15%',
    statSuffix: ' since April 10th',
    heading: 'You are doing amazing Mama!\nOne day at a time',
    buttonText: 'Log Sleep',
  },
}

export const Inactive: Story = {
  args: {
    property1: 'inactive',
    statText: 'Sleep improved by ',
    statHighlight: '15%',
    statSuffix: ' since April 10th',
    heading: 'You are doing amazing Mama!\nOne day at a time',
    buttonText: 'Log Sleep',
  },
}
