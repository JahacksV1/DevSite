# Design System Specification

## Philosophy

**"Soft Sharp" aesthetic** - Modern, professional, tech-forward design with subtle rounded corners and depth through glow effects rather than heavy shadows.

---

## Spacing System

```css
/* Base: 4px scale */
--spacing-0: 0px --spacing-1: 4px --spacing-2: 8px --spacing-3: 12px
  --spacing-4: 16px --spacing-5: 20px --spacing-6: 24px --spacing-8: 32px
  --spacing-10: 40px --spacing-12: 48px --spacing-16: 64px --spacing-20: 80px
  --spacing-24: 96px --spacing-32: 128px;
```

**Usage Guidelines:**

- Component padding: 16-24px
- Section spacing: 80-128px (desktop), 48-64px (mobile)
- Card gaps in grids: 24-32px
- Inline spacing: 8-12px

---

## Border Radius

```css
--radius-none: 0px --radius-sm: 4px /* Small elements, badges */
  --radius-md: 8px /* Buttons, inputs, cards */ --radius-lg: 12px
  /* Larger cards, modals */ --radius-xl: 16px
  /* Hero sections, large containers */ --radius-2xl: 24px
  /* Special elements */ --radius-full: 9999px /* Pills, avatars */;
```

**Default Standard:** `8px` for most interactive elements

**Rules:**

- Use `radius-md (8px)` as default for consistency
- Reserve `radius-lg` and above for larger containers
- Never mix radius values on same component
- Buttons, inputs, cards: Always `8px`

---

## Shadows & Elevation

### Standard Shadows (for depth without color)

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
```

### Glow Shadows (for interactive elements)

See `COLOR_SCHEME.md` for cyan and purple glow definitions.

**Elevation Levels:**

1. **Level 0** (Flat): No shadow, subtle border
2. **Level 1** (Raised): `shadow-md` + subtle border
3. **Level 2** (Floating): `shadow-lg` + glow on hover
4. **Level 3** (Modal): `shadow-xl` + strong glow

**Usage:**

- Cards at rest: `shadow-md` or just border
- Cards on hover: `shadow-lg` + cyan glow
- CTAs: `shadow-lg` + glow
- Modals: `shadow-2xl`
- Dropdowns: `shadow-xl`

---

## Typography

### Font Families

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**Primary:** Inter (variable font)
**Code/Technical:** JetBrains Mono

### Font Sizes

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
--text-7xl: 4.5rem; /* 72px */
```

### Font Weights

```css
--font-normal: 400 --font-medium: 500 --font-semibold: 600 --font-bold: 700;
```

### Line Heights

```css
--leading-tight: 1.25 --leading-snug: 1.375 --leading-normal: 1.5
  --leading-relaxed: 1.625 --leading-loose: 2;
```

### Type Scale Usage

| Element    | Size               | Weight | Line Height |
| ---------- | ------------------ | ------ | ----------- |
| Hero H1    | `text-6xl` (60px)  | 700    | 1.1         |
| Page H1    | `text-5xl` (48px)  | 700    | 1.2         |
| H2         | `text-4xl` (36px)  | 700    | 1.25        |
| H3         | `text-3xl` (30px)  | 600    | 1.3         |
| H4         | `text-2xl` (24px)  | 600    | 1.4         |
| H5         | `text-xl` (20px)   | 600    | 1.5         |
| Body Large | `text-lg` (18px)   | 400    | 1.625       |
| Body       | `text-base` (16px) | 400    | 1.5         |
| Body Small | `text-sm` (14px)   | 400    | 1.5         |
| Caption    | `text-xs` (12px)   | 500    | 1.4         |

---

## Buttons

### Button Variants

#### Primary (CTA)

```tsx
// Gradient background with glow
className="
  px-8 py-3 rounded-lg
  bg-gradient-to-br from-primary to-primary-dim
  text-bg-primary font-semibold text-base
  shadow-lg hover:shadow-[0_0_30px_rgba(0,255,198,0.4)]
  hover:-translate-y-0.5
  active:translate-y-0
  transition-all duration-200
"
```

#### Secondary

```tsx
// Border with fill on hover
className="
  px-8 py-3 rounded-lg
  border-2 border-primary
  text-primary font-semibold text-base
  bg-transparent
  hover:bg-primary/10
  hover:shadow-[0_0_20px_rgba(0,255,198,0.2)]
  transition-all duration-200
"
```

#### Ghost

```tsx
// Minimal, background on hover
className="
  px-6 py-2 rounded-lg
  text-text-secondary font-medium text-base
  hover:bg-bg-tertiary hover:text-text-primary
  transition-all duration-200
"
```

#### Purple Accent (Secondary CTA)

```tsx
className="
  px-8 py-3 rounded-lg
  border-2 border-secondary
  text-secondary font-semibold text-base
  hover:bg-secondary/10
  hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]
  transition-all duration-200
"
```

### Button Sizes

- **Small:** `px-4 py-2 text-sm`
- **Medium:** `px-6 py-3 text-base` (default)
- **Large:** `px-8 py-4 text-lg`

---

## Cards

### Standard Card

```tsx
className="
  p-6 rounded-lg
  bg-bg-secondary border border-border-subtle
  hover:border-primary
  hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]
  transition-all duration-300
"
```

### Elevated Card (Interactive)

```tsx
className="
  p-8 rounded-xl
  bg-bg-secondary border border-border-default
  shadow-md
  hover:shadow-lg hover:border-primary
  hover:-translate-y-1
  hover:shadow-[0_0_30px_rgba(0,255,198,0.2)]
  transition-all duration-300
  cursor-pointer
"
```

### Card with Purple Accent

```tsx
className="
  p-6 rounded-lg
  bg-bg-secondary border border-border-subtle
  hover:border-secondary
  hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]
  transition-all duration-300
"
```

---

## Inputs

### Text Input

```tsx
className="
  w-full px-4 py-3 rounded-lg
  bg-bg-tertiary border border-border-default
  text-text-primary placeholder:text-text-muted
  focus:border-primary focus:outline-none
  focus:shadow-[0_0_20px_rgba(0,255,198,0.2)]
  transition-all duration-200
"
```

### Textarea

```tsx
className="
  w-full px-4 py-3 rounded-lg
  bg-bg-tertiary border border-border-default
  text-text-primary placeholder:text-text-muted
  focus:border-primary focus:outline-none
  focus:shadow-[0_0_20px_rgba(0,255,198,0.2)]
  transition-all duration-200
  resize-none
  min-h-[120px]
"
```

---

## Badges

### Tech Stack Badge

```tsx
className="
  inline-flex items-center gap-1.5
  px-3 py-1 rounded-full
  bg-bg-tertiary border border-border-subtle
  text-text-secondary text-xs font-medium
  hover:border-primary hover:text-primary
  transition-all duration-200
"
```

### Status Badge (Success)

```tsx
className="
  px-2.5 py-1 rounded-full
  bg-primary/10 border border-primary/30
  text-primary text-xs font-semibold
"
```

---

## Responsive Breakpoints

```javascript
const breakpoints = {
  sm: '640px', // Mobile landscape
  md: '768px', // Tablet
  lg: '1024px', // Laptop
  xl: '1280px', // Desktop
  '2xl': '1536px', // Large desktop
}
```

### Design Priorities

1. **Mobile-first:** Design for 375px (iPhone SE) as minimum
2. **Test breakpoints:** 375px, 768px, 1024px, 1440px
3. **Touch targets:** Minimum 44x44px on mobile
4. **Readable line length:** Max 65-75 characters

---

## Grid System

### Container

```tsx
className="
  max-w-7xl mx-auto
  px-6 sm:px-8 lg:px-12
"
```

### Grid Layouts

**3-Column Grid (Services, Projects)**

```tsx
className="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-6 lg:gap-8
"
```

**2-Column Grid (Features)**

```tsx
className="
  grid grid-cols-1 lg:grid-cols-2
  gap-8 lg:gap-12
"
```

---

## Z-Index Scale

```css
--z-base: 0 --z-dropdown: 10 --z-sticky: 20 --z-overlay: 30 --z-modal: 40
  --z-popover: 50 --z-tooltip: 60;
```

**Usage:**

- Navbar (sticky): `z-20`
- Dropdown menus: `z-10`
- Modal backdrop: `z-30`
- Modal content: `z-40`
- Tooltips: `z-60`

---

## Accessibility

### Focus States

All interactive elements MUST have visible focus states:

```tsx
focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-primary
```

### ARIA Labels

- All buttons without text need `aria-label`
- All form inputs need associated labels
- All interactive icons need `aria-label` or `aria-labelledby`

### Keyboard Navigation

- Tab order must be logical
- All interactive elements must be keyboard accessible
- Modals must trap focus
- Skip-to-content link for screen readers

---

## Performance Guidelines

1. **Images:**
   - Use Next.js `<Image>` component
   - WebP format with JPG fallback
   - Lazy load below-the-fold images
   - Optimize to <200KB per image

2. **Animations:**
   - Use `transform` and `opacity` only (GPU-accelerated)
   - Avoid animating `width`, `height`, `top`, `left`
   - Keep transitions under 400ms
   - Respect `prefers-reduced-motion`

3. **Fonts:**
   - Use `font-display: swap`
   - Subset fonts to required characters
   - Self-host don't use Google Fonts CDN

4. **Code Splitting:**
   - Lazy load heavy components
   - Dynamic imports for modals
   - Separate vendor chunks
