import type { Meta, StoryObj } from '@storybook/react'
import { NavigationBar } from './NavigationBar'

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/Navigation/Navigation Bar',
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: { type: 'select' },
      options: ['Home', 'Community', 'Awareness', 'Specialist'],
      description: 'Currently active tab',
    },
    'Property 1': {
      control: { type: 'select' },
      options: ['Home', 'Community', 'Awareness', 'Specialist'],
      description: 'Figma Property 1 alias',
    },
    onTabChange: { action: 'tabChanged' },
    onCenterButtonClick: { action: 'centerMicButtonClicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '**Navigation Bar** (`Navigation bar` / `Component 9`) from the UEDP-5 Figma Design System. Sleek dark pill navigation bar with raised dome arch, coral pink voice mic button, and glowing active selection across 4 tabs: `Home`, `Community`, `Awareness`, `Specialist`.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {
  args: {
    activeTab: 'Home',
  },
}

export const Community: Story = {
  args: {
    activeTab: 'Community',
  },
}

export const Awareness: Story = {
  args: {
    activeTab: 'Awareness',
  },
}

export const Specialist: Story = {
  args: {
    activeTab: 'Specialist',
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
          Navigation bar
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
          {/* Home */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 90,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Home
            </span>
            <NavigationBar activeTab='Home' />
          </div>

          {/* Community */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 90,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Community
            </span>
            <NavigationBar activeTab='Community' />
          </div>

          {/* Awareness */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 90,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Awareness
            </span>
            <NavigationBar activeTab='Awareness' />
          </div>

          {/* Specialist */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
            <span
              style={{
                width: 90,
                fontSize: 16,
                fontWeight: 500,
                color: '#111827',
                textAlign: 'left',
              }}
            >
              Specialist
            </span>
            <NavigationBar activeTab='Specialist' />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    activeTab: 'Home',
  },
}
