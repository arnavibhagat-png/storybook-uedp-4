import type { Meta, StoryObj } from '@storybook/react'
import { RadioText } from './RadioText'

const meta: Meta<typeof RadioText> = {
  title: 'Components/Radio Text',
  component: RadioText,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['unselected', 'selected', 'disabled'],
      description: 'Figma variant property (State). ComponentSet "Radio + Text" (70:33).',
      table: {
        type: { summary: "'unselected' | 'selected' | 'disabled'" },
        defaultValue: { summary: 'unselected' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to radio button',
      table: { defaultValue: { summary: 'Radio label' } },
    },
    selected: {
      control: 'boolean',
      description: 'Controlled selected state (optional)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio button',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Radio + Text

**Figma Source:** ComponentSet "Radio + Text" (ID: \`70:33\`)

A radio button control with accompanying text label. Supports multiple states and integrates with native HTML radio groups for proper grouping behavior.

### Geometry (from Figma)
| Property | Value | Source |
|---|---|---|
| Radio Width | \`20px\` | Figma component |
| Radio Height | \`20px\` | Figma component |
| Border Radius | \`50%\` (full circle) | Native radio styling |
| Gap (radio → label) | \`8px\` | spacing |

### Variants (State)
| Variant | Radio Fill | Radio Border | Dot Color | Label Color | Variable ID | Usage |
|---|---|---|---|---|---|---|
| unselected | \`--uedp-white\` | \`--uedp-slate-900\` | N/A | \`--uedp-slate-900\` | VariableID:1:4 / 51a... | Default, unselected state |
| selected | \`--uedp-white\` | \`--uedp-slate-900\` | \`--uedp-slate-900\` | \`--uedp-slate-900\` | VariableID:1:4 / 51a... | Selected/checked state |
| disabled | \`--uedp-neutral-300\` | \`--uedp-neutral-300\` | \`--uedp-neutral-400\` | \`--uedp-neutral-400\` | VariableID:1:30 / 1:31 | Disabled/inactive state |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Unselected: Story = {
  args: {
    state: 'unselected',
    label: 'Radio label',
  },
}

export const Selected: Story = {
  args: {
    state: 'selected',
    label: 'Radio label',
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Disabled radio',
  },
}

export const LongLabel: Story = {
  args: {
    state: 'unselected',
    label: 'This is a longer radio button label with more descriptive text',
  },
}

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioText name="options" label="Option 1" state="selected" />
      <RadioText name="options" label="Option 2" state="unselected" />
      <RadioText name="options" label="Option 3" state="unselected" />
      <RadioText name="options" label="Option 4 (disabled)" state="disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example radio group showing multiple options with one selected',
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    state: 'unselected',
    label: 'Click to select',
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio button with onChange handler. Click to toggle selection.',
      },
    },
  },
}
