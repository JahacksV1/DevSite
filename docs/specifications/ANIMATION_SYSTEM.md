# Animation System

## Philosophy

**Subtle, smooth, purposeful.** Animations should enhance UX, not distract. Every animation serves a purpose: feedback, guidance, or delight.

---

## Timing & Easing

### Duration Standards

```javascript
const duration = {
  instant: 100, // Tooltip, dropdown show
  fast: 200, // Hover states, small movements
  normal: 300, // Page transitions, cards
  slow: 400, // Complex animations, reveals
  slower: 600, // Hero animations, scroll reveals
}
```

### Easing Functions

```javascript
const easing = {
  // Default for most animations
  default: [0.4, 0, 0.2, 1], // cubic-bezier - smooth acceleration/deceleration

  // Specific use cases
  easeOut: [0, 0, 0.2, 1], // Entering animations
  easeIn: [0.4, 0, 1, 1], // Exiting animations
  easeInOut: [0.4, 0, 0.2, 1], // Both

  // Special effects
  spring: { type: 'spring', stiffness: 300, damping: 30 }, // Bouncy interactions
  bounce: [0.68, -0.55, 0.265, 1.55], // Playful elements
}
```

**Default:** Use `[0.4, 0, 0.2, 1]` for 95% of animations

---

## Framer Motion Variants

### Page Transitions

```typescript
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
}

// Usage:
<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {children}
</motion.div>
```

### Hover & Tap (Buttons, Cards)

```typescript
export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)'
  },
  hover: {
    y: -4,
    scale: 1.02,
    boxShadow: '0 0 30px rgba(0, 255, 198, 0.4)',
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  tap: {
    y: 0,
    scale: 0.98,
    transition: { duration: 0.1 }
  }
}

// Usage:
<motion.button
  variants={hoverLift}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
>
  Click Me
</motion.button>
```

### Scroll Reveal (Sections, Cards)

```typescript
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

// Usage with Intersection Observer:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={scrollReveal}
>
  {content}
</motion.div>
```

### Stagger Children (Grids, Lists)

```typescript
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

// Usage:
<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Fade In/Out

```typescript
export const fade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}
```

### Scale In (Modals, Popovers)

```typescript
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
}
```

---

## Hero Animations

### Typewriter Effect

```typescript
export const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
}

export const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.05 },
  },
}

// Component implementation needed
```

### Gradient Text Reveal

```typescript
export const gradientTextReveal = {
  hidden: {
    opacity: 0,
    backgroundPosition: '200% center',
  },
  visible: {
    opacity: 1,
    backgroundPosition: '0% center',
    transition: {
      duration: 1.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// CSS:
// background: linear-gradient(135deg, #00ffc6 0%, #a78bfa 100%);
// background-size: 200% auto;
// -webkit-background-clip: text;
// color: transparent;
```

### Floating Orbs (Background)

```typescript
export const floatingOrb = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Usage:
<motion.div
  className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl"
  variants={floatingOrb}
  animate="animate"
/>
```

---

## Scroll Animations

### Parallax Effect

```typescript
import { useScroll, useTransform } from 'framer-motion'

const ParallaxSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <motion.div style={{ y }}>
      {content}
    </motion.div>
  )
}
```

### Progress Indicators

```typescript
export const progressBar = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Apply to element with transform-origin-left
```

---

## Loading States

### Skeleton Loader (NO SPINNERS)

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-bg-tertiary rounded w-3/4"></div>
  <div className="h-4 bg-bg-tertiary rounded w-1/2"></div>
  <div className="h-32 bg-bg-tertiary rounded"></div>
</div>
```

### Shimmer Effect

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  background: linear-gradient(90deg, #111118 0%, #18181f 50%, #111118 100%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## Micro-interactions

### Glow on Hover

```typescript
export const glowHover = {
  rest: {
    boxShadow: '0 0 0 rgba(0, 255, 198, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(0, 255, 198, 0.4)',
    transition: { duration: 0.2 },
  },
}
```

### Border Draw (for Cards)

```css
/* CSS Animation */
@keyframes border-draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.border-draw {
  stroke-dasharray: 1000;
  animation: border-draw 2s ease-out forwards;
}
```

### Button Ripple Effect

```typescript
// Implement with framer-motion + absolute positioned span
// On click, spawn animated circle that expands and fades
```

---

## Accessibility

### Respect User Preferences

```typescript
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

const variants = shouldReduceMotion
  ? {
      /* No animations */
    }
  : {
      /* Full animations */
    }
```

### Never Animate These Properties

❌ `width`, `height` - causes reflow
❌ `top`, `left`, `right`, `bottom` - causes reflow
❌ `margin`, `padding` - causes reflow

✅ `transform` - GPU accelerated
✅ `opacity` - GPU accelerated
✅ `filter` - GPU accelerated (use sparingly)

---

## Performance Best Practices

1. **Use `will-change` sparingly:**

```css
.animated-element:hover {
  will-change: transform;
}
```

2. **Batch animations:**

```typescript
// Bad: Multiple separate animations
// Good: One animation with multiple properties
```

3. **Clean up animations:**

```typescript
useEffect(() => {
  const animation = controls.start(...)
  return () => animation.stop()
}, [])
```

4. **Debounce scroll events:**

```typescript
import { useScroll } from 'framer-motion'
// Framer Motion already optimizes this
```

---

## Component Animation Library

### Create reusable animation components:

```typescript
// components/animations/FadeIn.tsx
export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

// components/animations/HoverCard.tsx
export const HoverCard = ({ children, className }) => (
  <motion.div
    className={className}
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
)
```

---

## Animation Timing Reference

| Element         | Duration  | Easing      | Notes                  |
| --------------- | --------- | ----------- | ---------------------- |
| Button hover    | 200ms     | default     | Quick feedback         |
| Card hover      | 300ms     | default     | Smooth lift            |
| Page transition | 400ms     | easeOut     | Not too slow           |
| Modal open      | 200ms     | default     | Fast but smooth        |
| Scroll reveal   | 600ms     | easeOut     | Noticeable but natural |
| Typewriter      | 30ms/char | linear      | Per character          |
| Tooltip         | 100ms     | default     | Instant feel           |
| Dropdown        | 200ms     | easeOut     | Quick expansion        |
| Skeleton pulse  | 1500ms    | ease-in-out | Subtle loop            |
