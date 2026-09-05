import type { Meta, StoryObj } from '@storybook/react'
import { CtaButton } from './CtaButton'

const meta: Meta<typeof CtaButton> = {
  title: 'Components/icon+text',
  component: CtaButton,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'pressed', 'disabled'],
      description: 'Figma variant property (Property 1). ComponentSet "Cta buttton" (icon+text).',
      table: {
        type: { summary: "'default' | 'pressed' | 'disabled'" },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Text label displayed below the icon.',
      table: { defaultValue: { summary: 'Quiz' } },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## icon+text (CTA Button)

**Figma Source:** ComponentSet "Cta buttton" — icon+text variant

A square CTA (call-to-action) button that stacks a centred icon above a short text label. Sized at **72×72px** with a **12px** corner radius.

### Geometry (from Figma)
| Property | Value | Token |
|---|---|---|
| Width | \`72px\` | \`--uedp-size-cta\` |
| Height | \`72px\` | \`--uedp-size-cta\` |
| Corner Radius | \`12px\` | \`--uedp-rounded-md\` |
| Icon Size | \`28×28px\` | — |

### Variants (Property 1)
| Variant | Background Token | Color Token | Variable ID |
|---|---|---|---|
| **default** | \`--uedp-white\` \`#ffffff\` | \`--uedp-black\` \`#000000\` | VariableID:1:4 / VariableID:1:3 |
| **pressed** | yellow tint \`#fffbea\` | \`--uedp-black\` \`#000000\` | — |
| **disabled** | \`--uedp-neutral-100\` \`#e5e6eb\` | \`--uedp-neutral-400\` \`#a1a3aa\` | VariableID:1:28 / VariableID:1:31 |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/* ── Figma Showcase ─────────────────────────────────────────────────────── */
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
        minWidth: '320px',
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
        Cta button
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '24px',
          border: '1.5px dashed #8b5cf6',
          borderRadius: '14px',
          padding: '24px 28px',
          alignItems: 'flex-start',
        }}
      >
        {/* Default */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: '#9ea3ae', fontWeight: 500 }}>Default</span>
          <CtaButton state="default" label="Quiz" />
        </div>

        {/* Pressed */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: '#9ea3ae', fontWeight: 500 }}>Press</span>
          <CtaButton state="pressed" label="Quiz" />
        </div>

        {/* Disabled */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '13px', color: '#9ea3ae', fontWeight: 500 }}>Disabled</span>
          <CtaButton state="disabled" label="Quiz" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exact Figma design showcase: Default (white), Pressed (yellow tint), and Disabled (grey) states.',
      },
    },
  },
}

/* ── Figma vertical layout (matches image) ──────────────────────────────── */
export const VerticalShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '48px 40px',
        background: '#f8f9fa',
        borderRadius: '20px',
        minWidth: '260px',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          border: '1.5px dashed #8b5cf6',
          borderRadius: '14px',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        {[
          { state: 'default' as const, rowLabel: 'Default' },
          { state: 'pressed' as const, rowLabel: 'Press' },
          { state: 'disabled' as const, rowLabel: 'Disabled' },
        ].map(({ state, rowLabel }) => (
          <div
            key={state}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span style={{ fontSize: '14px', color: '#131927', fontWeight: 500 }}>{rowLabel}</span>
            <CtaButton state={state} label="Quiz" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical layout matching the attached Figma image exactly.',
      },
    },
  },
}

/* ── Individual stories ─────────────────────────────────────────────────── */
export const Default: Story = {
  args: { state: 'default', label: 'Quiz' },
}

export const Pressed: Story = {
  args: { state: 'pressed', label: 'Quiz' },
}

export const Disabled: Story = {
  args: { state: 'disabled', label: 'Quiz' },
}

/* ── All states row ─────────────────────────────────────────────────────── */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, padding: 28, background: '#f8f9fa', borderRadius: 16 }}>
      <CtaButton state="default" label="Quiz" />
      <CtaButton state="pressed" label="Quiz" />
      <CtaButton state="disabled" label="Quiz" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three states side by side.',
      },
    },
  },
}
