import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import '../../styles/figma-tokens.css'

// ─── Color Swatch Component ────────────────────────────────────────────────
interface SwatchProps {
  name: string
  cssVar: string
  hex: string
  variableId?: string
  description?: string
}

const Swatch: React.FC<SwatchProps> = ({ name, cssVar, hex, variableId, description }) => (
  <div
    id={`swatch-${name.replace(/[^a-zA-Z0-9]/g, '-')}`}
    style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(19,25,39,0.10)',
      background: '#fff',
      minWidth: 160,
      flex: '1 1 160px',
    }}
  >
    <div
      style={{
        height: 100,
        background: `var(${cssVar}, ${hex})`,
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    />
    <div style={{ padding: '12px 14px' }}>
      <div style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 700, fontSize: 13, color: '#131927', marginBottom: 2 }}>{name}</div>
      <div style={{ fontFamily: 'Roboto, monospace', fontSize: 11, color: '#6b7280', marginBottom: 4 }}>{cssVar}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#9ea3ae', background: '#f8f9fa', padding: '2px 6px', borderRadius: 4, display: 'inline-block' }}>{hex}</div>
      {variableId && (
        <div style={{ fontFamily: 'monospace', fontSize: 9, color: '#c4b5fd', marginTop: 4, wordBreak: 'break-all' }}>{variableId}</div>
      )}
      {description && (
        <div style={{ fontFamily: 'Roboto, sans-serif', fontSize: 10, color: '#6b7280', marginTop: 4 }}>{description}</div>
      )}
    </div>
  </div>
)

// ─── Palette Group ─────────────────────────────────────────────────────────
interface PaletteGroupProps {
  title: string
  swatches: SwatchProps[]
}

const PaletteGroup: React.FC<PaletteGroupProps> = ({ title, swatches }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontFamily: 'Poltawski Nowy, serif', fontWeight: 500, fontSize: 20, color: '#131927', marginBottom: 16 }}>{title}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {swatches.map(s => <Swatch key={s.cssVar} {...s} />)}
    </div>
  </div>
)

// ─── Full Palette Canvas ───────────────────────────────────────────────────
const ColorPaletteCanvas: React.FC = () => (
  <div style={{ padding: 32, fontFamily: 'Inter, sans-serif', background: '#f8f9fa', minHeight: '100vh' }}>
    <h1 style={{ fontFamily: 'Poltawski Nowy, serif', fontWeight: 400, fontSize: 32, color: '#131927', marginBottom: 8 }}>
      🎨 UEDP-5 Color Palette
    </h1>
    <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 40, maxWidth: 640 }}>
      Base palette tokens from <code>base-palette-tokens.json</code>. Each swatch shows its CSS custom property,
      hex value, and the original Figma <code>com.figma.variableId</code>.
    </p>

    <PaletteGroup title="Neutrals" swatches={[
      { name: 'White', cssVar: '--uedp-white', hex: '#FFFFFF', variableId: 'VariableID:1:4', description: 'Default surface, card background' },
      { name: 'Black', cssVar: '--uedp-black', hex: '#000000', variableId: 'VariableID:1:3', description: 'Icon/text on white' },
      { name: 'Neutral 50', cssVar: '--uedp-neutral-50', hex: '#F8F9FA', variableId: 'VariableID:1:5', description: 'Card/panel background (active)' },
      { name: 'Neutral 100', cssVar: '--uedp-neutral-100', hex: '#E5E6EB', variableId: 'VariableID:1:28', description: 'Disabled background' },
      { name: 'Neutral 200', cssVar: '--uedp-neutral-200', hex: '#D5D5DA', variableId: 'VariableID:1:29', description: 'Input disabled fill' },
      { name: 'Neutral 300', cssVar: '--uedp-neutral-300', hex: '#D4D5D8', variableId: 'VariableID:1:30', description: 'Button disabled fill' },
      { name: 'Neutral 400', cssVar: '--uedp-neutral-400', hex: '#A1A3AA', variableId: 'VariableID:1:31', description: 'Disabled icon/text' },
    ]} />

    <PaletteGroup title="Slate" swatches={[
      { name: 'Slate 900', cssVar: '--uedp-slate-900', hex: '#131927', variableId: 'VariableID:51a0118f0d23dac3d0f0311894a277ff1a4e6d68/404:40', description: 'Primary text color' },
    ]} />

    <PaletteGroup title="Blue" swatches={[
      { name: 'Blue 100', cssVar: '--uedp-blue-100', hex: '#E2E8F0', variableId: 'VariableID:1:7', description: 'Input hover fill' },
    ]} />

    <PaletteGroup title="Yellow" swatches={[
      { name: 'Yellow 400', cssVar: '--uedp-yellow-400', hex: '#FBBF24', variableId: 'VariableID:1:86', description: 'FAB button background' },
    ]} />

    <PaletteGroup title="Brown" swatches={[
      { name: 'Brown 900', cssVar: '--uedp-brown-900', hex: '#451A03', variableId: 'VariableID:1:92', description: 'Nav pill button fill' },
    ]} />

    <PaletteGroup title="Red" swatches={[
      { name: 'Red 100', cssVar: '--uedp-red-100', hex: '#FEE2E2', variableId: 'VariableID:1:61', description: 'Error state / progress track' },
      { name: 'Red 300', cssVar: '--uedp-red-300', hex: '#FCA5A5', variableId: 'VariableID:1:63', description: 'Progress fill (active segments)' },
    ]} />

    <PaletteGroup title="Muted" swatches={[
      { name: 'Muted Text', cssVar: '--uedp-muted-text', hex: '#9EA3AE', variableId: 'VariableID:ee45ccff0822fc9d63a2ea06bd5058bab93f053f/417:76', description: 'Disabled label text' },
    ]} />
  </div>
)

// ─── Story Config ──────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Tokens/Color Palette',
  component: ColorPaletteCanvas,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## UEDP-5 Base Color Palette

This gallery documents all **base palette tokens** extracted from \`base-palette-tokens.json\`.

Each token is mapped to a Figma Variable ID discovered via the Figma REST API \`GET /v1/files/{file_key}/variables/local\`.

### Token Naming Convention
\`--uedp-{family}-{scale}\`

| CSS Variable | Hex | Figma Variable ID | Usage |
|---|---|---|---|
| \`--uedp-white\` | #FFFFFF | \`VariableID:1:4\` | Surface, card bg |
| \`--uedp-black\` | #000000 | \`VariableID:1:3\` | Icon/text on white |
| \`--uedp-neutral-50\` | #F8F9FA | \`VariableID:1:5\` | Active card panel |
| \`--uedp-neutral-100\` | #E5E6EB | \`VariableID:1:28\` | Disabled background |
| \`--uedp-neutral-200\` | #D5D5DA | \`VariableID:1:29\` | Input disabled |
| \`--uedp-neutral-300\` | #D4D5D8 | \`VariableID:1:30\` | Button disabled |
| \`--uedp-neutral-400\` | #A1A3AA | \`VariableID:1:31\` | Disabled icons |
| \`--uedp-slate-900\` | #131927 | \`VariableID:51a.../404:40\` | Primary text |
| \`--uedp-blue-100\` | #E2E8F0 | \`VariableID:1:7\` | Input hover |
| \`--uedp-yellow-400\` | #FBBF24 | \`VariableID:1:86\` | FAB button |
| \`--uedp-brown-900\` | #451A03 | \`VariableID:1:92\` | Nav pill |
| \`--uedp-red-100\` | #FEE2E2 | \`VariableID:1:61\` | Error/progress track |
| \`--uedp-red-300\` | #FCA5A5 | \`VariableID:1:63\` | Progress fill |
| \`--uedp-muted-text\` | #9EA3AE | \`VariableID:ee4.../417:76\` | Disabled text |
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllColors: Story = {
  name: 'All Color Tokens',
  render: () => <ColorPaletteCanvas />,
}
