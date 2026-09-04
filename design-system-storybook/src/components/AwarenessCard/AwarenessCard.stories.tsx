import type { Meta, StoryObj } from '@storybook/react'
import { AwarenessCard } from './AwarenessCard'

const meta: Meta<typeof AwarenessCard> = {
  title: 'Components/Card/Awareness Card',
  component: AwarenessCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'pressed', 'disabled'],
      description: 'Figma variant state',
    },
    'Property 1': {
      control: { type: 'select' },
      options: ['default', 'hover', 'pressed', 'disabled'],
      description: 'Figma Property 1 alias',
    },
    title: {
      control: 'text',
      description: 'Card headline',
    },
    buttonText: {
      control: 'text',
      description: 'CTA pill button text',
    },
    imageSrc: {
      control: 'text',
      description: 'Image URL for the right hero image',
    },
    onButtonClick: { action: 'buttonClicked' },
    onClick: { action: 'cardClicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Awareness Card** (`❖ awareness card`) from the UEDP-5 Figma Design System. Features an informational rich dark-brown card with bullet points, action CTA, and realistic hero imagery with four Figma interactive states (`default`, `hover`, `pressed`, `disabled`).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    state: 'default',
    title: 'Why am I always tired?',
    buttonText: 'Boost energy',
  },
}

export const Hover: Story = {
  args: {
    state: 'hover',
    title: 'Why am I always tired?',
    buttonText: 'Boost energy',
  },
}

export const Pressed: Story = {
  args: {
    state: 'pressed',
    title: 'Why am I always tired?',
    buttonText: 'Boost energy',
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    title: 'Why am I always tired?',
    buttonText: 'Boost energy',
  },
}

export const FigmaShowcase: Story = {
  name: '❖ Figma Canvas Matrix (All States)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '32px 24px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: '#1e2238',
            margin: '0 0 24px 0',
          }}
        >
          Card
        </h1>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: '#c084fc',
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          <span style={{ fontSize: 20 }}>❖</span> awareness card
        </div>
      </div>

      <div
        style={{
          display: 'inline-flex',
          border: '1.5px dashed #c084fc',
          borderRadius: 16,
          padding: '24px 28px',
          backgroundColor: '#ffffff',
          width: 'fit-content',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          {/* Default */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            <span
              style={{
                width: 90,
                fontSize: 15,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Default
            </span>
            <AwarenessCard state='default' />
          </div>

          {/* Hover */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            <span
              style={{
                width: 90,
                fontSize: 15,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              hover
            </span>
            <AwarenessCard state='hover' />
          </div>

          {/* Pressed */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            <span
              style={{
                width: 90,
                fontSize: 15,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              pressed
            </span>
            <AwarenessCard state='pressed' />
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
            <span
              style={{
                width: 90,
                fontSize: 15,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              disabled
            </span>
            <AwarenessCard state='disabled' />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    state: 'default',
    title: 'Why am I always tired?',
    buttonText: 'Boost energy',
    items: [
      { text: 'Postpartum fatigue causes' },
      { text: 'Energy recovery tips' },
      { text: 'Sleep patterns with newborn' },
    ],
  },
}
