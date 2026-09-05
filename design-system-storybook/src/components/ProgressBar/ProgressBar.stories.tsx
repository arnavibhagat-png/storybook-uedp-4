import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['disabled', '10%', '50%', '80%', '100%'],
      description: 'Figma variant property (State).',
      table: {
        type: { summary: "'disabled' | '10%' | '50%' | '80%' | '100%'" },
        defaultValue: { summary: '10%' },
      },
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0 - 100). Used when state is not explicitly set.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    totalSegments: {
      control: { type: 'number', min: 2, max: 10 },
      description: 'Number of dash segments in the progress bar (default: 4).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the progress bar and turns all segments neutral grey.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Progress Bar

**Figma Source:** Progress Bar ComponentSet

A segmented progress indicator featuring 4 pill-shaped dashes that fill sequentially from left to right as progress increases.

### Geometry (from Figma)
| Property | Value | Token |
|---|---|---|
| Segment Height | \`6px\` | \`--uedp-size-progress-seg-h\` |
| Segment Radius | \`50px\` (pill) | \`--uedp-rounded-full\` |
| Segment Gap | \`8px\` | \`--uedp-spacing-2\` |
| Total Segments | \`4\` | Default 4 segments |

### Tokens & Color Mapping
| State | Filled Segments | Fill Color Token | Track Color Token | Variable ID |
|---|---|---|---|---|
| **Disabled** | 0 / 4 | \`--uedp-neutral-100\` (\`#e5e6eb\`) | \`--uedp-neutral-100\` (\`#e5e6eb\`) | VariableID:1:28 |
| **10%** | 1 / 4 | \`--uedp-red-300\` (\`#fca5a5\`) | \`--uedp-red-100\` (\`#fee2e2\`) | VariableID:1:63 / VariableID:1:61 |
| **50%** | 2 / 4 | \`--uedp-red-300\` (\`#fca5a5\`) | \`--uedp-red-100\` (\`#fee2e2\`) | VariableID:1:63 / VariableID:1:61 |
| **80%** | 3 / 4 | \`--uedp-red-300\` (\`#fca5a5\`) | \`--uedp-red-100\` (\`#fee2e2\`) | VariableID:1:63 / VariableID:1:61 |
| **100%** | 4 / 4 | \`--uedp-red-300\` (\`#fca5a5\`) | \`--uedp-red-100\` (\`#fee2e2\`) | VariableID:1:63 / VariableID:1:61 |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Exact Figma component matrix showcase matching the design specification.
 */
export const FigmaShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        background: '#ffffff',
        borderRadius: '16px',
        minWidth: '420px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          border: '1.5px dashed #8b5cf6',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>Disabled</span>
          <ProgressBar state="disabled" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>10%</span>
          <ProgressBar state="10%" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>50%</span>
          <ProgressBar state="50%" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>80%</span>
          <ProgressBar state="80%" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>100%</span>
          <ProgressBar state="100%" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase reproducing the exact Figma design system layout with all 5 progress bar variants.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
}

export const TenPercent: Story = {
  name: '10%',
  args: {
    state: '10%',
  },
}

export const FiftyPercent: Story = {
  name: '50%',
  args: {
    state: '50%',
  },
}

export const EightyPercent: Story = {
  name: '80%',
  args: {
    state: '80%',
  },
}

export const HundredPercent: Story = {
  name: '100%',
  args: {
    state: '100%',
  },
}

export const InteractiveValue: Story = {
  args: {
    value: 50,
    totalSegments: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the Storybook controls slider to dynamically adjust the progress value from 0% to 100%.',
      },
    },
  },
}
