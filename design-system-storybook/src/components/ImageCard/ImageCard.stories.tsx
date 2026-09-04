import type { Meta, StoryObj } from '@storybook/react'
import { ImageCard } from './ImageCard'

const meta: Meta<typeof ImageCard> = {
  title: 'Components/Card/Image Card',
  component: ImageCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'Press', 'Disabled'],
      description: 'Figma variant state',
    },
    'Property 1': {
      control: { type: 'select' },
      options: ['Default', 'Press', 'Disabled'],
      description: 'Figma Property 1 alias',
    },
    title: {
      control: 'text',
      description: 'Card headline text',
    },
    meta: {
      control: 'text',
      description: 'Duration / meta label text',
    },
    watermark: {
      control: 'text',
      description: 'Image badge text',
    },
    imageSrc: {
      control: 'text',
      description: 'Image URL',
    },
    onClick: { action: 'cardClicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Image Card** (`image card`) from the UEDP-5 Figma Design System. Vertical card with rounded photo header, multi-line title, video duration badge, and 3 Figma states (`Default`, `Press`, `Disabled`).',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    state: 'Default',
    title: 'Postpartum Workout',
    meta: '1 min Watch',
  },
}

export const Press: Story = {
  args: {
    state: 'Press',
    title: 'Postpartum Workout',
    meta: '1 min Watch',
  },
}

export const Disabled: Story = {
  args: {
    state: 'Disabled',
    title: 'Postpartum Workout',
    meta: '1 min Watch',
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
            fontSize: 48,
            fontWeight: 800,
            color: '#131927',
            margin: '0 0 8px 0',
            letterSpacing: '-0.02em',
          }}
        >
          image card
        </h1>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 80,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Default
            </span>
            <ImageCard state='Default' />
          </div>

          {/* Press */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 80,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Press
            </span>
            <ImageCard state='Press' />
          </div>

          {/* Disabled */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 80,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Disabled
            </span>
            <ImageCard state='Disabled' />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    state: 'Default',
    title: 'Postpartum Workout',
    meta: '1 min Watch',
    watermark: 'Pelvic Floor\nScience, Simplified.',
  },
}
