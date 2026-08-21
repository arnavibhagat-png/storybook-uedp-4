import type { Meta, StoryObj } from '@storybook/react'
import { ButtonCircleFloatingSecondary } from './ButtonCircleFloatingSecondary'

const meta: Meta<typeof ButtonCircleFloatingSecondary> = {
  title: 'Components/Button Circle Floating Secondary',
  component: ButtonCircleFloatingSecondary,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'pressed', 'disabled'],
      description: 'Figma variant property (State). ComponentSet "Button-circle-floating-secondary" (21:27).',
      table: {
        type: { summary: "'default' | 'pressed' | 'disabled'" },
        defaultValue: { summary: 'default' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the button',
      table: { defaultValue: { summary: 'Floating action button' } },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Button Circle Floating Secondary

**Figma Source:** ComponentSet "Button-circle-floating-secondary" (ID: \`21:27\`)

A 50×50px circular floating action button (FAB) with icon support. Secondary variant using yellow accent color.

### Geometry (from Figma absoluteBoundingBox)
| Property | Value | Source |
|---|---|---|
| Width | \`50px\` | \`--uedp-fab\` |
| Height | \`50px\` | \`--uedp-fab\` |
| Corner Radius | \`25px\` (full circle) | \`border-radius: 50%\` |

### Variants (State)
| Variant | Fill Token | Icon/Text Token | Variable ID | Usage |
|---|---|---|---|---|
| default | \`--uedp-yellow-400\` | \`--uedp-black\` | VariableID:1:86 / VariableID:1:3 | Primary FAB state |
| pressed | \`--uedp-yellow-400\` (scale-down) | \`--uedp-black\` | Same | Active/pressed state |
| disabled | \`--uedp-neutral-300\` | \`--uedp-neutral-400\` | VariableID:1:30 / VariableID:1:31 | Inactive button |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    state: 'default',
    ariaLabel: 'Add new item',
  },
}

export const WithCustomIcon: Story = {
  args: {
    state: 'default',
    ariaLabel: 'Search',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M14 14L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
}

export const Pressed: Story = {
  args: {
    state: 'pressed',
    ariaLabel: 'Add new item',
  },
  parameters: {
    docs: {
      description: {
        story: 'FAB in pressed/active state with scale-down animation',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    ariaLabel: 'Add new item (disabled)',
  },
}

export const Interactive: Story = {
  args: {
    state: 'default',
    ariaLabel: 'Open menu',
  },
  parameters: {
    docs: {
      description: {
        story: 'FAB with onClick handler for interactive behavior',
      },
    },
  },
}
