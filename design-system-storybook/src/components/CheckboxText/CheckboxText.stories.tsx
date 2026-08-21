import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxText } from './CheckboxText'

const meta: Meta<typeof CheckboxText> = {
  title: 'Components/Checkbox Text',
  component: CheckboxText,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['unchecked', 'checked', 'disabled'],
      description: 'Figma variant property (State). ComponentSet "Checkbox + Text" (22:73).',
      table: {
        type: { summary: "'unchecked' | 'checked' | 'disabled'" },
        defaultValue: { summary: 'unchecked' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to checkbox',
      table: { defaultValue: { summary: 'Checkbox label' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state (optional)',
      table: { defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Checkbox + Text

**Figma Source:** ComponentSet "Checkbox + Text" (ID: \`22:73\`)

A checkbox control with accompanying text label. Supports multiple states with full keyboard accessibility.

### Geometry (from Figma)
| Property | Value | Source |
|---|---|---|
| Checkbox Width | \`20px\` | Figma component |
| Checkbox Height | \`20px\` | Figma component |
| Corner Radius | \`5px\` | \`--uedp-rounded-sm\` |
| Gap (checkbox → label) | \`8px\` | spacing |

### Variants (State)
| Variant | Checkbox Fill | Checkbox Border | Label Color | Variable ID | Usage |
|---|---|---|---|---|---|
| unchecked | \`--uedp-white\` | \`--uedp-slate-900\` | \`--uedp-slate-900\` | VariableID:1:4 / 51a... | Default, unchecked state |
| checked | \`--uedp-slate-900\` | \`--uedp-slate-900\` | \`--uedp-slate-900\` | VariableID:51a... | Checked/selected state |
| disabled | \`--uedp-neutral-300\` | \`--uedp-neutral-300\` | \`--uedp-neutral-400\` | VariableID:1:30 / VariableID:1:31 | Disabled/inactive state |
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    state: 'unchecked',
    label: 'Checkbox label',
  },
}

export const Checked: Story = {
  args: {
    state: 'checked',
    label: 'Checkbox label',
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Disabled checkbox',
  },
}

export const LongLabel: Story = {
  args: {
    state: 'unchecked',
    label: 'I agree to the terms and conditions of this platform',
  },
}

export const Interactive: Story = {
  args: {
    state: 'unchecked',
    label: 'Click to toggle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox with onChange handler for interactive behavior. Click to toggle states.',
      },
    },
  },
}

export const CheckedDisabled: Story = {
  args: {
    state: 'disabled',
    label: 'Checked but disabled',
  },
}
