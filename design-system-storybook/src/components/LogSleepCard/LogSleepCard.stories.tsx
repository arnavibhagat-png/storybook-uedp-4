import type { Meta, StoryObj } from '@storybook/react'
import { LogSleepCard } from './LogSleepCard'

const meta: Meta<typeof LogSleepCard> = {
  title: 'Components/Card/Log Sleep Card',
  component: LogSleepCard,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      description: 'Figma variant state',
    },
    'Property 1': {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      description: 'Figma Property 1 alias',
    },
    statText: { control: 'text', description: 'Stat prefix text' },
    statHighlight: { control: 'text', description: 'Stat highlighted value' },
    statSuffix: { control: 'text', description: 'Stat suffix text' },
    heading: { control: 'text', description: 'Motivational heading' },
    buttonText: { control: 'text', description: 'CTA button label' },
    onButtonClick: { action: 'buttonClicked' },
    onClick: { action: 'cardClicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Log Sleep Card** (`Card`) from the UEDP-5 Figma Design System. Motivational sleep tracking card featuring sleep improvement metric, serif italic message, and pill button across `active` and `inactive` states.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    state: 'active',
    statText: 'Sleep improved by ',
    statHighlight: '15%',
    statSuffix: ' since April 10th',
    heading: 'You are doing amazing Mama!\nOne day at a time',
    buttonText: 'Log Sleep',
  },
}

export const Inactive: Story = {
  args: {
    state: 'inactive',
    statText: 'Sleep improved by ',
    statHighlight: '15%',
    statSuffix: ' since April 10th',
    heading: 'You are doing amazing Mama!\nOne day at a time',
    buttonText: 'Log Sleep',
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
            margin: '0 0 24px 0',
            letterSpacing: '-0.02em',
          }}
        >
          Card
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
          {/* Active */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 70,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              active
            </span>
            <LogSleepCard state='active' />
          </div>

          {/* Inactive */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 70,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              inactive
            </span>
            <LogSleepCard state='inactive' />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    state: 'active',
    statText: 'Sleep improved by ',
    statHighlight: '15%',
    statSuffix: ' since April 10th',
    heading: 'You are doing amazing Mama!\nOne day at a time',
    buttonText: 'Log Sleep',
  },
}
