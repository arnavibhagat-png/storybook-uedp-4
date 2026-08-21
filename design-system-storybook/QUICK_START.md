# 🚀 Quick Start Guide — Review First 5 Components

## What Was Built

✅ **5 Complete React Components with Storybook Stories**

1. **Component 10** (Enhanced) — Image Card with variants
2. **ButtonCircleFloatingSecondary** — 50×50px FAB button  
3. **CheckboxText** — Checkbox with label
4. **PaginationItem** — Pagination control (numbers + arrows)
5. **RadioText** — Radio button with label

Each component includes:
- ✓ TypeScript component (`.tsx`)
- ✓ Component styles (`.css`) using design tokens
- ✓ Interactive Storybook stories (`.stories.tsx`) 
- ✓ Full documentation with Figma references
- ✓ Variant controls and props documentation
- ✓ Accessibility features (aria labels, keyboard support)

---

## 📂 File Structure

```
src/components/
├── Component10/
│   ├── Component10.tsx          ✓ (existing)
│   ├── Component10.css          ✓ (existing)
│   └── Component10.stories.tsx  ✓ NEW
│
├── ButtonCircleFloatingSecondary/
│   ├── ButtonCircleFloatingSecondary.tsx       ✓ NEW
│   ├── ButtonCircleFloatingSecondary.css       ✓ NEW
│   └── ButtonCircleFloatingSecondary.stories.tsx ✓ NEW
│
├── CheckboxText/
│   ├── CheckboxText.tsx         ✓ NEW
│   ├── CheckboxText.css         ✓ NEW
│   └── CheckboxText.stories.tsx ✓ NEW
│
├── PaginationItem/
│   ├── PaginationItem.tsx       ✓ NEW
│   ├── PaginationItem.css       ✓ NEW
│   └── PaginationItem.stories.tsx ✓ NEW
│
└── RadioText/
    ├── RadioText.tsx            ✓ NEW
    ├── RadioText.css            ✓ NEW
    └── RadioText.stories.tsx    ✓ NEW

src/index.ts                     ✓ UPDATED (barrel exports)
```

---

## 🏃 How to Review Locally

### Step 1: Install Dependencies (if not already done)
```bash
cd design-system-storybook
npm install
```

### Step 2: Start Storybook Dev Server
```bash
npm run storybook
```

This will:
- Start dev server on `http://localhost:6006`
- Watch for file changes automatically
- Build component documentation

### Step 3: Open Browser
Navigate to **http://localhost:6006** and you'll see:

```
Components/
├── Button Circle Floating Secondary
│   ├── Default
│   ├── With Custom Icon
│   ├── Pressed
│   ├── Disabled
│   └── Interactive
│
├── Checkbox Text
│   ├── Unchecked
│   ├── Checked
│   ├── Disabled
│   ├── Long Label
│   └── Interactive
│
├── Component 10
│   ├── Default
│   ├── With Image
│   ├── Alternate (Group69)
│   ├── Disabled (Group68)
│   └── Clickable
│
├── Pagination Item
│   ├── Default
│   ├── Active
│   ├── Disabled
│   ├── Previous
│   ├── Next
│   ├── Page Numbers (demo)
│   └── Interactive
│
└── Radio Text
    ├── Unselected
    ├── Selected
    ├── Disabled
    ├── Long Label
    ├── Radio Group (demo)
    └── Interactive
```

---

## 🎛️ Interactive Testing in Storybook

### For Each Component:

1. **View Story**: Click any story to see the component render
2. **Try Controls**: Use the "Controls" panel (right side) to:
   - Toggle between variants (state, default → checked → disabled)
   - Change text labels
   - Test interactive handlers
3. **Check Specs**: Open "Docs" tab to see:
   - Component description
   - Figma source reference
   - All variant configurations
   - Token mapping table
4. **Visual Inspection**: Compare with Figma design to verify:
   - Colors match (should use token variables)
   - Sizing is correct (px values from Figma)
   - Spacing is accurate (gaps, padding)
   - Border radius matches

---

## ✅ Verification Checklist

As you review, verify:

### Visual Design
- [ ] Component appearance matches Figma mockup
- [ ] Colors appear correct (tokens applied)
- [ ] Sizing matches Figma dimensions
- [ ] Border radius is accurate
- [ ] Spacing/padding looks right

### Variants & States
- [ ] All variant options appear in controls
- [ ] Variant switching updates component visually
- [ ] Disabled state looks appropriately grayed out
- [ ] Active/selected state is visually distinct

### Interactivity
- [ ] Button clicks are registered (check Actions panel)
- [ ] Checkbox/Radio can be toggled
- [ ] Pagination arrows work
- [ ] Hover/focus states feel responsive

### Documentation
- [ ] Component has description (Docs tab)
- [ ] Figma source is referenced correctly
- [ ] Props documentation is complete
- [ ] Variant table is accurate

### Accessibility
- [ ] Tab through components (keyboard navigation)
- [ ] Buttons have aria-labels
- [ ] Radio groups work as expected
- [ ] Disabled state prevents interaction

---

## 🎨 Token Reference

All components use these CSS variables (from `src/styles/figma-tokens.css`):

### Color Tokens
```css
--uedp-white         /* #FFFFFF - VariableID:1:4 */
--uedp-black         /* #000000 - VariableID:1:3 */
--uedp-slate-900     /* #131927 - VariableID:51a... */
--uedp-yellow-400    /* #FBBF24 - VariableID:1:86 */
--uedp-neutral-50    /* #F8F9FA - VariableID:1:5 */
--uedp-neutral-100   /* #E5E6EB - VariableID:1:28 */
--uedp-neutral-200   /* #D5D5DA - VariableID:1:29 */
--uedp-neutral-300   /* #D4D5D8 - VariableID:1:30 */
--uedp-neutral-400   /* #A1A3AA - VariableID:1:31 */
```

### Sizing
```css
--uedp-fab                  /* 50px - Floating Action Button */
--uedp-rounded-sm           /* 5px  - Border Radius Small */
--uedp-rounded-md           /* 12px - Border Radius Medium */
--uedp-rounded-lg           /* 14px - Border Radius Large */
```

---

## 📋 Component Details

### 1. Component 10 — Image Card
**Location:** `src/components/Component10/`
- **Figma:** Frame "card with image" (53:1110)
- **Size:** 128×198px
- **States:** Default, Group 69, Group 68 (disabled)
- **Props:** title, subtitle, imageSrc, imageAlt

**To Test:**
- Try different titles/subtitles
- Upload image URL to see image rendering
- Switch between variants

---

### 2. Button Circle Floating Secondary  
**Location:** `src/components/ButtonCircleFloatingSecondary/`
- **Figma:** ComponentSet 21:27
- **Size:** 50×50px (circular)
- **States:** default, pressed, disabled
- **Props:** state, icon, ariaLabel, onClick

**To Test:**
- Toggle between states
- Click button to see action fired
- Replace icon with custom SVG
- Check hover/pressed animations

---

### 3. Checkbox + Text
**Location:** `src/components/CheckboxText/`
- **Figma:** ComponentSet 22:73
- **States:** unchecked, checked, disabled
- **Props:** state, label, checked, onChange

**To Test:**
- Click to toggle checked state
- Try different label lengths
- Verify disabled state prevents interaction
- Test keyboard (Tab + Space)

---

### 4. Pagination Item
**Location:** `src/components/PaginationItem/`
- **Figma:** ComponentSet 10:341
- **Size:** 32×32px
- **States:** default, active, disabled, previous, next
- **Props:** state, label, onClick

**To Test:**
- See all 5 states in controls
- Click to trigger action
- Check Page Numbers demo (multiple items)
- Verify arrow navigation buttons

---

### 5. Radio + Text
**Location:** `src/components/RadioText/`
- **Figma:** ComponentSet 70:33
- **States:** unselected, selected, disabled
- **Props:** state, label, name, selected, onChange

**To Test:**
- Toggle between states
- Try the "Radio Group" demo (multiple radios)
- Verify radio buttons are mutually exclusive in group
- Test keyboard (Tab + Arrow keys)

---

## 🐛 Troubleshooting

### Storybook won't start
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
npm run storybook
```

### Styles not showing
- Check `.storybook/preview.ts` imports `figma-tokens.css`
- Verify `src/styles/figma-tokens.css` exists and loads
- Open DevTools → check CSS variables in `:root` style

### Components not found
- Verify component files exist in correct locations
- Check Storybook config in `.storybook/main.ts`
- Look for .stories.tsx files matching pattern

### TypeScript errors
- Components have full type safety with interfaces
- All props are documented in JSDoc
- Storybook should show type hints in controls

---

## 📝 Next Steps After Review

Once you've verified the 5 components locally:

1. **Feedback:** Let me know any changes needed
2. **Corrections:** I'll update components based on feedback
3. **Next Batch:** I can then build the next 5 components

---

**Ready?** 🚀

Run: `npm run storybook` and check out http://localhost:6006

Let me know what you think!
