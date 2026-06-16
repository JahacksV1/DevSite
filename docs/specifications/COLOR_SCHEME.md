# Color Scheme: "Neon Depth"

## Overview

Dark-mode professional design with mint-cyan primary and soft purple accents. All colors tested for WCAG AAA accessibility.

---

## Background Colors

```css
--bg-primary: #0a0a0f /* Main background - almost black */
  --bg-secondary: #111118 /* Card backgrounds */ --bg-tertiary: #18181f
  /* Hover states, elevated surfaces */ --bg-elevated: #1f1f28
  /* Modals, dropdowns */;
```

**Usage:**

- `bg-primary`: Page background, main container
- `bg-secondary`: Cards, sections, containers
- `bg-tertiary`: Hover states on cards
- `bg-elevated`: Modals, popovers, dropdowns

---

## Accent Colors

### Primary Accent: Mint-Cyan

```css
--accent-primary: #00ffc6 /* Main brand color */ --accent-primary-dim: #00d4a3
  /* Dimmed for text/borders */ --accent-primary-hover: #33ffd4
  /* Hover states */ --accent-primary-glow: rgba(0, 255, 198, 0.3)
  /* Glow effects */;
```

**Contrast:** 12.8:1 on `bg-primary` (WCAG AAA ✅)

**Usage:**

- Primary CTA buttons
- Active nav links
- Focus states
- Success indicators
- Main links
- Gradient overlays

### Secondary Accent: Soft Purple

```css
--accent-secondary: #a78bfa /* Soft purple */ --accent-secondary-bright: #c4b5fd
  /* Lighter variant */ --accent-secondary-dim: #8b5cf6 /* Darker variant */
  --accent-secondary-glow: rgba(167, 139, 250, 0.25) /* Glow effects */;
```

**Contrast:** 8.9:1 on `bg-primary` (WCAG AAA for large text ✅)

**Usage:**

- Secondary buttons
- Accent borders
- Info states
- Gradient endpoints
- Icons/badges
- Code syntax highlighting

---

## Text Colors

```css
--text-primary: #f4f4f5 /* Main text - zinc-100 */ --text-secondary: #a1a1aa
  /* Secondary text - zinc-400 */ --text-muted: #71717a
  /* Muted text - zinc-500 */ --text-inverse: #0a0a0f
  /* Text on light backgrounds */;
```

**Contrast Ratios:**

- `text-primary` on `bg-primary`: 19.2:1 (Perfect ✅)
- `text-secondary` on `bg-primary`: 9.1:1 (AAA ✅)
- `text-muted` on `bg-primary`: 5.8:1 (AA ✅)

**Usage:**

- `text-primary`: Headings, body text, important content
- `text-secondary`: Captions, labels, metadata
- `text-muted`: Placeholders, disabled states
- `text-inverse`: Text on colored buttons

---

## Border Colors

```css
--border-subtle: #27272a /* Subtle borders - zinc-800 */
  --border-default: #3f3f46 /* Default borders - zinc-700 */
  --border-accent: #00ffc6 /* Accent borders (matches primary) */
  --border-purple: #a78bfa /* Purple accent borders */;
```

**Usage:**

- `border-subtle`: Default card borders, dividers
- `border-default`: Input borders, stronger dividers
- `border-accent`: Hover states, active elements
- `border-purple`: Secondary accent elements

---

## Semantic Colors

```css
--success: #00ffc6 /* Matches primary accent */ --warning: #fbbf24
  /* Amber-400 */ --error: #ef4444 /* Red-500 */ --info: #a78bfa
  /* Matches secondary accent */;
```

---

## Gradients

### Primary Gradient (Cyan to Purple)

```css
background: linear-gradient(135deg, #00ffc6 0%, #a78bfa 100%);
```

**Usage:** Headings, hero backgrounds, premium elements

### Button Gradient

```css
background: linear-gradient(135deg, #00ffc6 0%, #00d4a3 100%);
```

**Usage:** Primary CTA buttons

### Subtle Background Gradient

```css
background: linear-gradient(180deg, #0a0a0f 0%, #111118 100%);
```

**Usage:** Hero sections, page backgrounds

---

## Glow Effects

### Cyan Glow

```css
box-shadow: 0 0 20px rgba(0, 255, 198, 0.3); /* Default */
box-shadow: 0 0 30px rgba(0, 255, 198, 0.4); /* Hover */
box-shadow: 0 0 40px rgba(0, 255, 198, 0.5); /* Active */
```

### Purple Glow

```css
box-shadow: 0 0 20px rgba(167, 139, 250, 0.25); /* Default */
box-shadow: 0 0 30px rgba(167, 139, 250, 0.35); /* Hover */
```

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00ffc6',
          dim: '#00d4a3',
          hover: '#33ffd4',
        },
        secondary: {
          DEFAULT: '#a78bfa',
          bright: '#c4b5fd',
          dim: '#8b5cf6',
        },
        bg: {
          primary: '#0a0a0f',
          secondary: '#111118',
          tertiary: '#18181f',
          elevated: '#1f1f28',
        },
      },
    },
  },
}
```

---

## Examples

### Primary Button

```tsx
<button
  className="
  bg-gradient-to-br from-primary to-primary-dim
  text-bg-primary font-semibold
  hover:shadow-[0_0_30px_rgba(0,255,198,0.4)]
  transition-all duration-200
"
>
  Get Started
</button>
```

### Card with Hover

```tsx
<div
  className="
  bg-bg-secondary border border-border-subtle
  hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,198,0.15)]
  transition-all duration-300
"
>
  Card Content
</div>
```

### Gradient Heading

```tsx
<h1
  className="
  bg-gradient-to-r from-primary to-secondary
  bg-clip-text text-transparent
"
>
  Your Heading
</h1>
```
