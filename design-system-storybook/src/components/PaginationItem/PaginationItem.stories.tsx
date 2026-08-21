import type { Meta, StoryObj } from '@storybook/react'
import { PaginationItem } from './PaginationItem'

const meta: Meta<typeof PaginationItem> = {
  title: 'Components/Pagination Item',
  component: PaginationItem,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'active', 'disabled', 'previous', 'next'],
      description: 'Figma variant property (State). ComponentSet "Pagination (Item)" (10:341).',
      table: {
        type: { summary: "'default' | 'active' | 'disabled' | 'previous' | 'next'" },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Page number or label (ignored for arrow variants)',
      table: { defaultValue: { summary: '1' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the pagination item',
      table: { defaultValue: { summary: 'false' } },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Pagination Item

**Figma Source:** ComponentSet "Pagination (Item)" (ID: \`10:341\`)

A single pagination control item supporting multiple states for page navigation. Includes numeric pages and arrow navigation buttons.

### Geometry (from Figma)
| Property | Value | Source |
|---|---|---|
| Width | \`32px\` | Figma component |
| Height | \`32px\` | Figma component |
| Corner Radius | \`5px\` | \`--uedp-rounded-sm\` |

### Variants (State)
| Variant | Fill Token | Text/Icon Token | Border | Variable ID | Usage |
|---|---|---|---|---|---|
| default | \`--uedp-white\` | \`--uedp-slate-900\` | \`--uedp-neutral-200\` | VariableID:1:4 / 51a... / 1:29 | Unselected page |
| active | \`--uedp-slate-900\` | \`--uedp-white\` | \`--uedp-slate-900\` | VariableID:51a... / 1:4 | Currently selected page |
| disabled | \`--uedp-neutral-100\` | \`--uedp-neutral-400\` | \`--uedp-neutral-200\` | VariableID:1:28 / 1:31 / 1:29 | Disabled/unavailable page |
| previous | \`--uedp-white\` | \`--uedp-slate-900\` | \`--uedp-neutral-200\` | VariableID:1:4 / 51a... / 1:29 | Previous page arrow |
| next | \`--uedp-white\` | \`--uedp-slate-900\` | \`--uedp-neutral-200\` | VariableID:1:4 / 51a... / 1:29 | Next page arrow |
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
    label: '1',
  },
}

export const Active: Story = {
  args: {
    state: 'active',
    label: '5',
  },
}

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: '...',
  },
}

export const Previous: Story = {
  args: {
    state: 'previous',
  },
}

export const Next: Story = {
  args: {
    state: 'next',
  },
}

export const PageNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <PaginationItem state="previous" />
      <PaginationItem state="default" label="1" />
      <PaginationItem state="active" label="2" />
      <PaginationItem state="default" label="3" />
      <PaginationItem state="default" label="4" />
      <PaginationItem state="next" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example pagination control showing multiple items together',
      },
    },
  },
}

export const Interactive: Story = {
  args: {
    state: 'default',
    label: '2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination item with onClick handler for page navigation',
      },
    },
  },
}
