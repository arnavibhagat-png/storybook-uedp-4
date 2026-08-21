import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import '../../styles/figma-tokens.css'

// ─── Token Row ─────────────────────────────────────────────────────────────
interface TokenRowProps {
  name: string
  cssVar: string
  value: string
  preview?: React.ReactNode
}

const TokenRow: React.FC<TokenRowProps> = ({ name, cssVar, value, preview }) => (
  <tr id={`token-${name.replace(/[^a-zA-Z0-9]/g, '-')}`} style={{ borderBottom: '1px solid #e5e6eb' }}>
    <td style={{ padding: '10px 16px', fontFamily: 'Roboto, sans-serif', fontSize: 13, fontWeight: 700, color: '#131927' }}>{name}</td>
    <td style={{ padding: '10px 16px', fontFamily: 'monospace', fontSize: 11, color: '#7c3aed', background: '#faf5ff', borderRadius: 4 }}>
      <code>{cssVar}</code>
    </td>
    <td style={{ padding: '10px 16px', fontFamily: 'monospace', fontSize: 12, color: '#374151' }}>{value}</td>
    <td style={{ padding: '10px 16px' }}>{preview}</td>
  </tr>
)

// ─── Section Header ────────────────────────────────────────────────────────
const SectionHeader: React.FC<{ title: string; emoji: string }> = ({ title, emoji }) => (
  <tr>
    <td colSpan={4} style={{ padding: '20px 16px 8px', background: '#f8f9fa', borderTop: '2px solid #e5e6eb' }}>
      <span style={{ fontFamily: 'Poltawski Nowy, serif', fontSize: 18, fontWeight: 500, color: '#131927' }}>
        {emoji} {title}
      </span>
    </td>
  </tr>
)

// ─── Border Radius Preview ─────────────────────────────────────────────────
const RadiusPreview: React.FC<{ value: string }> = ({ value }) => (
  <div style={{
    width: 48, height: 24,
    background: '#fbbf24',
    borderRadius: `var(${value}, 4px)`,
    display: 'inline-block',
  }} />
)

// ─── Typography Preview ────────────────────────────────────────────────────
const TypoPreview: React.FC<{ family: string; size: string; weight: number }> = ({ family, size, weight }) => (
  <span style={{ fontFamily: family, fontSize: size, fontWeight: weight, color: '#131927' }}>Aa</span>
)

// ─── Spacing Preview ───────────────────────────────────────────────────────
const SpacingPreview: React.FC<{ value: string }> = ({ value }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
    <div style={{ width: value, height: 12, background: '#6366f1', borderRadius: 2, minWidth: 2 }} />
    <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#6b7280' }}>{value}</span>
  </div>
)

// ─── Main Canvas ───────────────────────────────────────────────────────────
const FoundationalTokensCanvas: React.FC = () => (
  <div style={{ padding: 32, fontFamily: 'Inter, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
    <h1 style={{ fontFamily: 'Poltawski Nowy, serif', fontWeight: 400, fontSize: 32, color: '#131927', marginBottom: 8 }}>
      📐 UEDP-5 Foundational Tokens
    </h1>
    <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 32, maxWidth: 640 }}>
      Foundational tokens from <code>foundational-tokens.json</code> — typography, border radii, spacing, and geometry extracted from the Figma file.
    </p>

    <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(19,25,39,0.08)', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#131927', color: '#fff' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 600 }}>Token Name</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 600 }}>CSS Variable</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 600 }}>Value</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'Roboto, sans-serif', fontSize: 12, fontWeight: 600 }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          <SectionHeader title="Typography" emoji="🔤" />
          <TokenRow name="heading-1" cssVar="--uedp-type-heading-1-size" value="24px / Poltawski Nowy / 400" preview={<TypoPreview family="'Poltawski Nowy', serif" size="24px" weight={400} />} />
          <TokenRow name="subheading" cssVar="--uedp-type-subheading-size" value="20px / Poltawski Nowy / 500" preview={<TypoPreview family="'Poltawski Nowy', serif" size="20px" weight={500} />} />
          <TokenRow name="body-1" cssVar="--uedp-type-body-1-size" value="16px / Inter / 400" preview={<TypoPreview family="'Inter', sans-serif" size="16px" weight={400} />} />
          <TokenRow name="body-2" cssVar="--uedp-type-body-2-size" value="14px / Roboto / 500" preview={<TypoPreview family="'Roboto', sans-serif" size="14px" weight={500} />} />
          <TokenRow name="card-heading" cssVar="--uedp-type-card-heading-size" value="16px / Roboto / 700" preview={<TypoPreview family="'Roboto', sans-serif" size="16px" weight={700} />} />
          <TokenRow name="caption-1" cssVar="--uedp-type-caption-1-size" value="12px / Roboto / 400" preview={<TypoPreview family="'Roboto', sans-serif" size="12px" weight={400} />} />
          <TokenRow name="caption-2" cssVar="--uedp-type-caption-2-size" value="10px / Roboto / 400" preview={<TypoPreview family="'Roboto', sans-serif" size="10px" weight={400} />} />

          <SectionHeader title="Border Radius" emoji="⬛" />
          <TokenRow name="rounded-sm" cssVar="--uedp-rounded-sm" value="5px" preview={<RadiusPreview value="--uedp-rounded-sm" />} />
          <TokenRow name="rounded-md" cssVar="--uedp-rounded-md" value="12px" preview={<RadiusPreview value="--uedp-rounded-md" />} />
          <TokenRow name="rounded-lg" cssVar="--uedp-rounded-lg" value="14px" preview={<RadiusPreview value="--uedp-rounded-lg" />} />
          <TokenRow name="rounded-xl" cssVar="--uedp-rounded-xl" value="25px" preview={<RadiusPreview value="--uedp-rounded-xl" />} />
          <TokenRow name="rounded-2xl" cssVar="--uedp-rounded-2xl" value="28px" preview={<RadiusPreview value="--uedp-rounded-2xl" />} />
          <TokenRow name="rounded-full" cssVar="--uedp-rounded-full" value="50px" preview={<RadiusPreview value="--uedp-rounded-full" />} />
          <TokenRow name="rounded-button" cssVar="--uedp-rounded-button" value="27px" preview={<RadiusPreview value="--uedp-rounded-button" />} />

          <SectionHeader title="Spacing Scale" emoji="📏" />
          <TokenRow name="spacing-0" cssVar="--uedp-spacing-0" value="0px" preview={<SpacingPreview value="0px" />} />
          <TokenRow name="spacing-1" cssVar="--uedp-spacing-1" value="4px" preview={<SpacingPreview value="4px" />} />
          <TokenRow name="spacing-2" cssVar="--uedp-spacing-2" value="8px" preview={<SpacingPreview value="8px" />} />
          <TokenRow name="spacing-3" cssVar="--uedp-spacing-3" value="12px" preview={<SpacingPreview value="12px" />} />
          <TokenRow name="spacing-4" cssVar="--uedp-spacing-4" value="16px" preview={<SpacingPreview value="16px" />} />
          <TokenRow name="spacing-5" cssVar="--uedp-spacing-5" value="20px" preview={<SpacingPreview value="20px" />} />
          <TokenRow name="spacing-6" cssVar="--uedp-spacing-6" value="24px" preview={<SpacingPreview value="24px" />} />
          <TokenRow name="spacing-8" cssVar="--uedp-spacing-8" value="32px" preview={<SpacingPreview value="32px" />} />

          <SectionHeader title="Geometry / Sizing" emoji="📦" />
          <TokenRow name="size-fab" cssVar="--uedp-size-fab" value="50px" preview={<div style={{ width: 24, height: 24, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 4px 12px rgba(251,191,36,0.4)' }} />} />
          <TokenRow name="size-cta" cssVar="--uedp-size-cta" value="72px × 72px" preview={<div style={{ width: 32, height: 32, borderRadius: 6, background: '#fff', border: '1px solid #e5e6eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }} />} />
          <TokenRow name="size-card-width" cssVar="--uedp-size-card-width" value="346px" preview={<div style={{ width: 60, height: 12, background: '#6366f1', borderRadius: 2, opacity: 0.4 }} />} />
          <TokenRow name="size-card-height" cssVar="--uedp-size-card-height" value="192px" preview={<div style={{ width: 12, height: 30, background: '#6366f1', borderRadius: 2, opacity: 0.4 }} />} />
          <TokenRow name="size-card-img-w" cssVar="--uedp-size-card-img-w" value="128px" preview={<div style={{ width: 40, height: 12, background: '#f59e0b', borderRadius: 2, opacity: 0.5 }} />} />
          <TokenRow name="size-card-img-h" cssVar="--uedp-size-card-img-h" value="198px" preview={<div style={{ width: 12, height: 34, background: '#f59e0b', borderRadius: 2, opacity: 0.5 }} />} />
          <TokenRow name="size-progress-h" cssVar="--uedp-size-progress-h" value="8px" preview={<div style={{ width: 60, height: 8, background: '#fee2e2', borderRadius: 4, overflow: 'hidden' }}><div style={{ width: '60%', height: '100%', background: '#fca5a5' }} /></div>} />
          <TokenRow name="size-navbar-h" cssVar="--uedp-size-navbar-h" value="98px" preview={<div style={{ width: 60, height: 12, background: '#451a03', borderRadius: 4, opacity: 0.3 }} />} />
        </tbody>
      </table>
    </div>
  </div>
)

const meta: Meta = {
  title: 'Tokens/Foundational Tokens',
  component: FoundationalTokensCanvas,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## UEDP-5 Foundational Tokens

Extracted from \`foundational-tokens.json\` — covers **typography**, **border radii**, **spacing scale**, and **geometry tokens**.

All values are sourced directly from the Figma REST API (\`GET /v1/files/{key}/nodes\`) by inspecting component bounds, padding, and style properties.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllTokens: Story = {
  name: 'All Foundational Tokens',
  render: () => <FoundationalTokensCanvas />,
}
