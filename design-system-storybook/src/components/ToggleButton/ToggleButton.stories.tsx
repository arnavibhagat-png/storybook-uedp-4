import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ToggleButton } from './ToggleButton'

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Toggle Button',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['mama', 'baby'],
      description: 'Toggle button variant — determines the knob colour.',
      table: {
        type: { summary: "'mama' | 'baby'" },
        defaultValue: { summary: 'mama' },
      },
    },
    toggled: {
      control: { type: 'boolean' },
      description: 'Controlled on/off state.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    defaultToggled: {
      control: { type: 'boolean' },
      description: 'Default toggled value (uncontrolled).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text inside the toggle.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the toggle.',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Toggle Button

**Figma Source:** Toggle button ComponentSet

A pill-shaped toggle switch with a text label and a glossy metallic circular knob. Comes in two flavours that match the Figma design system palette.

### Variants
| Variant | Knob Colour | Track (on) | Label (on) |
|---|---|---|---|
| **mama** | Rose / coral pink metallic | \`#fee8e8\` tint | \`#c26060\` |
| **baby** | Yellow / gold metallic | \`#fef3c7\` tint | \`#92780a\` |

### States
| State | Description |
|---|---|
| **on** | Knob on the right, coloured track, coloured label |
| **off** | Knob on the left, neutral grey track, muted label |

### Behaviour
- Click to toggle; the knob slides with a spring animation (\`cubic-bezier(0.34, 1.56, 0.64, 1)\`)
- Supports both **controlled** (\`toggled\` prop) and **uncontrolled** (\`defaultToggled\`) usage
- Full keyboard and screen-reader accessibility via \`role="switch"\` and \`aria-checked\`
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/* ── Figma showcase ─────────────────────────────────────────────────────── */
export const FigmaShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '48px 40px',
        background: '#ffffff',
        borderRadius: '20px',
        minWidth: '340px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: '28px',
          fontWeight: 700,
          color: '#131927',
          letterSpacing: '-0.5px',
        }}
      >
        Toggle button
      </h2>

      <div
        style={{
          border: '1.5px dashed #8b5cf6',
          borderRadius: '14px',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Mama — ON */}
        <ToggleButton variant="mama" defaultToggled={true} />
        {/* Baby — ON */}
        <ToggleButton variant="baby" defaultToggled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exact Figma design showcase: Mama (pink knob) and Baby (gold knob) in ON state.',
      },
    },
  },
}

/* ── Individual stories ─────────────────────────────────────────────────── */
export const MamaOn: Story = {
  name: 'Mama — On',
  args: { variant: 'mama', toggled: true, label: 'Mama' },
}

export const MamaOff: Story = {
  name: 'Mama — Off',
  args: { variant: 'mama', toggled: false, label: 'Mama' },
}

export const BabyOn: Story = {
  name: 'Baby — On',
  args: { variant: 'baby', toggled: true, label: 'Baby' },
}

export const BabyOff: Story = {
  name: 'Baby — Off',
  args: { variant: 'baby', toggled: false, label: 'Baby' },
}

export const Disabled: Story = {
  args: { variant: 'mama', toggled: true, disabled: true },
}

/* ── Interactive pair (live click) ─────────────────────────────────────── */
export const InteractivePair: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mama, setMama] = useState(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [baby, setBaby] = useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <ToggleButton variant="mama" toggled={mama} onChange={setMama} />
        <ToggleButton variant="baby" toggled={baby} onChange={setBaby} />
        <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#9ea3ae', fontFamily: 'Inter, sans-serif' }}>
          Mama: <b>{mama ? 'ON' : 'OFF'}</b> · Baby: <b>{baby ? 'ON' : 'OFF'}</b>
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Click each toggle to switch between ON and OFF states. The knob slides with a spring animation.',
      },
    },
  },
}

/* ── All four state combinations ────────────────────────────────────────── */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        padding: '24px',
        background: '#f8f9fa',
        borderRadius: '16px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#9ea3ae' }}>Mama · ON</p>
        <ToggleButton variant="mama" toggled={true} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#9ea3ae' }}>Mama · OFF</p>
        <ToggleButton variant="mama" toggled={false} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#9ea3ae' }}>Baby · ON</p>
        <ToggleButton variant="baby" toggled={true} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#9ea3ae' }}>Baby · OFF</p>
        <ToggleButton variant="baby" toggled={false} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid showing all four variant × state combinations.',
      },
    },
  },
}
