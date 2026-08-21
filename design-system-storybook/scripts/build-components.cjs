const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

function write(relPath, content) {
  const full = path.join(root, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.trim() + '\n', 'utf8');
  console.log('Saved:', relPath);
}

// 1. Component 6
write('src/components/Component6/Component6.tsx', import React from 'react'
import './Component6.css'

export type Component6Property1 = 'default' | 'pressed' | 'disabled'

export interface Component6Props {
  'Property 1'?: Component6Property1
  property1?: Component6Property1
  label?: string
  icon?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Component6: React.FC<Component6Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'default',
  label = 'Quiz',
  icon,
  onClick,
  className = '',
}) => {
  const isDisabled = property1 === 'disabled'

  return (
    <button
      id={component6- + property1}
      className={Component6 Component6-- + property1 +   + className}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type=button
    >
      <span className=Component6__icon>
        {icon || (
          <svg width=28 height=28 viewBox=0 0 28 28 fill=none>
            <path
              d=M14 4C8.48 4 4 8.48 4 14s4.48 10 10 10 10-4.48 10-10S19.52 4 14 4zm1 15h-2v-6h2v6zm0-8h-2V9h2v2z
              fill=currentColor
            />
          </svg>
        )}
      </span>
      <span className=Component6__label>{label}</span>
    </button>
  )
}

export default Component6
);

write('src/components/Component6/Component6.stories.tsx', import type { Meta, StoryObj } from '@storybook/react'
import { Component6 } from './Component6'

const meta: Meta<typeof Component6> = {
  title: 'Components/Component 6',
  component: Component6,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['default', 'pressed', 'disabled'],
      description: 'Figma variant property (Property 1). ComponentSet inside frame cta button (53:1090).',
      table: {
        type: { summary: 'default' | 'pressed' | 'disabled' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      control: 'text',
      description: 'CTA label text (Figma child text node Quiz)',
      table: { defaultValue: { summary: 'Quiz' } },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { property1: 'default', label: 'Quiz' },
}

export const Pressed: Story = {
  args: { property1: 'pressed', label: 'Quiz' },
}

export const Disabled: Story = {
  args: { property1: 'disabled', label: 'Quiz' },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16 }}>
      <Component6 property1=default label=Quiz />
      <Component6 property1=pressed label=Quiz />
      <Component6 property1=disabled label=Quiz />
    </div>
  ),
}
);

// 2. Component 7
write('src/components/Component7/Component7.tsx', import React from 'react'
import './Component7.css'

export type Component7Property1 = 'active' | 'inactive'

export interface Component7Props {
  'Property 1'?: Component7Property1
  property1?: Component7Property1
  heading?: string
  body?: string
  footer?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const Component7: React.FC<Component7Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'inactive',
  heading = 'Card Title',
  body = 'Card description text goes here.',
  footer,
  children,
  className = '',
}) => {
  const isActive = property1 === 'active'

  return (
    <div
      id={component7- + property1}
      className={Component7 Component7-- + property1 +   + className}
      role=article
      aria-selected={isActive}
    >
      <div className=Component7__content>
        {children || (
          <>
            <h3 className=Component7__heading>{heading}</h3>
            <p className=Component7__body>{body}</p>
          </>
        )}
        {footer}
      </div>
      {isActive && <div className=Component7__indicator aria-label=Active indicator />}
    </div>
  )
}

export default Component7
);

write('src/components/Component7/Component7.stories.tsx', import type { Meta, StoryObj } from '@storybook/react'
import { Component7 } from './Component7'

const meta: Meta<typeof Component7> = {
  title: 'Components/Component 7',
  component: Component7,
  tags: ['autodocs'],
  argTypes: {
    property1: {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      description: 'Figma variant (Property 1).',
      table: {
        type: { summary: 'active' | 'inactive' },
        defaultValue: { summary: 'inactive' },
      },
    },
    heading: { control: 'text', description: 'Card heading' },
    body: { control: 'text', description: 'Card body text' },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: { property1: 'active', heading: 'Awareness Module', body: 'Learn about environmental awareness.' },
}

export const Inactive: Story = {
  args: { property1: 'inactive', heading: 'Community Card', body: 'Connect with your local community.' },
}

export const CardGrid: Story = {
  name: 'Card Grid - Both Variants',
  render: () => (
    <div style={{ display: 'flex', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16, flexWrap: 'wrap' }}>
      <Component7 property1=active heading=Awareness body=Environmental awareness module />
      <Component7 property1=inactive heading=Community body=Connect with your community />
    </div>
  ),
}
);

// 3. Component 9
write('src/components/Component9/Component9.tsx', import React from 'react'
import './Component9.css'

export type Component9Property1 = 'Home' | 'Community' | 'Awareness' | 'Specialist'

export interface Component9Props {
  'Property 1'?: Component9Property1
  property1?: Component9Property1
  onTabChange?: (tab: Component9Property1) => void
  className?: string
}

const HomeIcon: React.FC = () => (
  <svg width=20 height=20 viewBox=0 0 20 20 fill=none>
    <path d=M10 2L2 8v10h5v-5h6v5h5V8L10 2z fill=currentColor />
  </svg>
)

const CommunityIcon: React.FC = () => (
  <svg width=20 height=20 viewBox=0 0 20 20 fill=none>
    <circle cx=7 cy=7 r=3 fill=currentColor />
    <circle cx=13 cy=7 r=3 fill=currentColor opacity=0.6 />
    <path d=M1 17c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6 stroke=currentColor strokeWidth=1.5 fill=none />
  </svg>
)

const AwarenessIcon: React.FC = () => (
  <svg width=20 height=20 viewBox=0 0 20 20 fill=none>
    <circle cx=10 cy=10 r=7 stroke=currentColor strokeWidth=1.5 fill=none />
    <path d=M10 6v4l3 3 stroke=currentColor strokeWidth=1.5 strokeLinecap=round />
  </svg>
)

const SpecialistIcon: React.FC = () => (
  <svg width=20 height=20 viewBox=0 0 20 20 fill=none>
    <path d=M10 2l2.4 5 5.6.8-4 3.9.9 5.3L10 14.5 5.1 17l.9-5.3L2 7.8l5.6-.8L10 2z fill=currentColor />
  </svg>
)

const NAV_ITEMS: { id: Component9Property1; label: string; icon: React.FC }[] = [
  { id: 'Home', label: 'Home', icon: HomeIcon },
  { id: 'Community', label: 'Community', icon: CommunityIcon },
  { id: 'Awareness', label: 'Awareness', icon: AwarenessIcon },
  { id: 'Specialist', label: 'Specialist', icon: SpecialistIcon },
]

export const Component9: React.FC<Component9Props> = ({
  'Property 1': rawProp1,
  property1 = rawProp1 || 'Home',
  onTabChange,
  className = '',
}) => {
  const [active, setActive] = React.useState<Component9Property1>(property1)

  React.useEffect(() => {
    setActive(property1)
  }, [property1])

  const handleClick = (tab: Component9Property1) => {
    setActive(tab)
    onTabChange?.(tab)
  }

  return (
    <nav
      id=component9-navbar
      className={Component9  + className}
      aria-label=Main navigation
    >
      <div className=Component9__items>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            id={component9-item- + id.toLowerCase()}
            className={Component9__item + (active === id ?  Component9__item--active : ")}
 onClick={() => handleClick(id)}
 aria-current={active === id ? 'page' : undefined}
 type=button
 >
 <span className=Component9__icon><Icon /></span>
 <span className=Component9__label>{label}</span>
 </button>
 ))}
 </div>
 </nav>
 )
}

export default Component9
);

write('src/components/Component9/Component9.stories.tsx', import type { Meta, StoryObj } from '@storybook/react'
import { Component9 } from './Component9'

const meta: Meta<typeof Component9> = {
 title: 'Components/Component 9',
 component: Component9,
 tags: ['autodocs'],
 argTypes: {
 property1: {
 control: { type: 'select' },
 options: ['Home', 'Community', 'Awareness', 'Specialist'],
 description: 'Active tab variant (Figma Property 1).',
 table: {
 type: { summary: 'Home' | 'Community' | 'Awareness' | 'Specialist' },
 defaultValue: { summary: 'Home' },
 },
 },
 onTabChange: { action: 'tabChanged' },
 },
 parameters: {
 layout: 'centered',
 backgrounds: { default: 'dark' },
 },
}

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = { args: { property1: 'Home' } }
export const Community: Story = { args: { property1: 'Community' } }
export const Awareness: Story = { args: { property1: 'Awareness' } }
export const Specialist: Story = { args: { property1: 'Specialist' } }

export const Interactive: Story = {
 name: 'Interactive',
 args: { property1: 'Home' },
}
);

// 4. Component 10
write('src/components/Component10/Component10.tsx', import React from 'react'
import './Component10.css'

export type Component10Property1 = 'Default' | 'Group 69' | 'Group 68'

export interface Component10Props {
 'Property 1'?: Component10Property1
 property1?: Component10Property1
 title?: string
 subtitle?: string
 imageSrc?: string
 imageAlt?: string
 className?: string
 onClick?: () => void
}

const ImagePlaceholder: React.FC = () => (
 <svg width=40 height=40 viewBox=0 0 40 40 fill=none>
 <rect width=40 height=40 rx=8 fill=#e5e6eb />
 <path d=M12 28l7-9 5 6 3-4 5 7H12z fill=#a1a3aa />
 <circle cx=27 cy=16 r=3 fill=#a1a3aa />
 </svg>
)

export const Component10: React.FC<Component10Props> = ({
 'Property 1': rawProp1,
 property1 = rawProp1 || 'Default',
 title = 'Card Title',
 subtitle = 'Subtitle',
 imageSrc,
 imageAlt = '',
 className = '',
 onClick,
}) => {
 const variantClass = Component10-- + property1.replace(/\\s+/g, '')

 return (
 <article
 id={component10- + property1.replace(/\\s+/g, '-')}
 className={Component10  + variantClass +   + className}
 onClick={onClick}
 role={onClick ? 'button' : 'article'}
 tabIndex={onClick ? 0 : undefined}
 onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
 >
 <div className=Component10__image>
 {imageSrc ? (
 <img src={imageSrc} alt={imageAlt} />
 ) : (
 <div className=Component10__image-placeholder>
 <ImagePlaceholder />
 </div>
 )}
 </div>
 <div className=Component10__info>
 <p className=Component10__title>{title}</p>
 <p className=Component10__subtitle>{subtitle}</p>
 </div>
 </article>
 )
}

export default Component10
);

write('src/components/Component10/Component10.stories.tsx', import type { Meta, StoryObj } from '@storybook/react'
import { Component10 } from './Component10'

const meta: Meta<typeof Component10> = {
 title: 'Components/Component 10',
 component: Component10,
 tags: ['autodocs'],
 argTypes: {
 property1: {
 control: { type: 'select' },
 options: ['Default', 'Group 69', 'Group 68'],
 description: 'Figma variant property (Property 1).',
 table: {
 type: { summary: 'Default' | 'Group 69' | 'Group 68' },
 defaultValue: { summary: 'Default' },
 },
 },
 title: { control: 'text' },
 subtitle: { control: 'text' },
 imageSrc: { control: 'text' },
 onClick: { action: 'clicked' },
 },
 parameters: {
 layout: 'centered',
 },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
 args: {
 property1: 'Default',
 title: 'Card Title',
 subtitle: 'Subtitle',
 },
}

export const AlternateGroup69: Story = {
 args: {
 property1: 'Group 69',
 title: 'Alternate Card',
 subtitle: 'Group 69 variant',
 },
}

export const DisabledGroup68: Story = {
 args: {
 property1: 'Group 68',
 title: 'Inactive Card',
 subtitle: 'Disabled state',
 },
}
);

// 5. Component 11
write('src/components/Component11/Component11.tsx', import React from 'react'
import './Component11.css'

export type Component11Property1 = 'default' | 'hover' | 'pressed' | 'disabled' | 'grp tired'

export interface Component11Props {
 'Property 1'?: Component11Property1
 property1?: Component11Property1
 label?: string
 icon?: React.ReactNode
 onClick?: () => void
 className?: string
}

export const Component11: React.FC<Component11Props> = ({
 'Property 1': rawProp1,
 property1 = rawProp1 || 'default',
 label = 'Button',
 icon,
 onClick,
 className = '',
}) => {
 const variantClass = Component11-- + (property1 === 'grp tired' ? 'grp-tired' : property1)
 const isDisabled = property1 === 'disabled'

 return (
 <button
 id={component11- + property1.replace(/\\s+/g, '-')}
 className={Component11  + variantClass +   + className}
 onClick={onClick}
 disabled={isDisabled}
 aria-disabled={isDisabled}
 type=button
 >
 {icon && <span className=Component11__icon>{icon}</span>}
 {label}
 </button>
 )
}

export default Component11
);

write('src/components/Component11/Component11.stories.tsx', import type { Meta, StoryObj } from '@storybook/react'
import { Component11 } from './Component11'

const meta: Meta<typeof Component11> = {
 title: 'Components/Component 11',
 component: Component11,
 tags: ['autodocs'],
 argTypes: {
 property1: {
 control: { type: 'select' },
 options: ['default', 'hover', 'pressed', 'disabled', 'grp tired'],
 description: 'Figma variant property - maps directly to Property 1 in the Figma component set (ID: 59:160)',
 table: {
 type: { summary: 'default' | 'hover' | 'pressed' | 'disabled' | 'grp tired' },
 defaultValue: { summary: 'default' },
 },
 },
 label: {
 control: 'text',
 description: 'Button label text',
 table: { defaultValue: { summary: 'Button' } },
 },
 onClick: { action: 'clicked' },
 },
 parameters: {
 layout: 'centered',
 },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
 args: { property1: 'default', label: 'Awareness' },
}

export const Hover: Story = {
 args: { property1: 'hover', label: 'Awareness' },
}

export const Pressed: Story = {
 args: { property1: 'pressed', label: 'Awareness' },
}

export const Disabled: Story = {
 args: { property1: 'disabled', label: 'Awareness' },
}

export const GrpTired: Story = {
 name: 'Grp Tired (Outline)',
 args: { property1: 'grp tired', label: 'Awareness' },
}

export const AllVariants: Story = {
 name: 'All Variants',
 render: () => (
 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, padding: 24, background: '#f8f9fa', borderRadius: 16 }}>
 {(['default', 'hover', 'pressed', 'disabled', 'grp tired'] as const).map(v => (
 <Component11 key={v} property1={v} label={v === 'grp tired' ? 'Grp Tired' : v.charAt(0).toUpperCase() + v.slice(1)} />
 ))}
 </div>
 ),
}
);

console.log('All files saved cleanly.');
