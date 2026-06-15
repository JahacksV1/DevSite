# Technology Stack & Tooling

## Framework & Core

### **Next.js 14 (App Router)** ✅ APPROVED

```
WHY:
✅ Server Components = faster initial loads
✅ Built-in image optimization (crucial for portfolio)
✅ File-based routing (no react-router needed)
✅ Static generation for marketing pages
✅ API routes for contact forms, webhooks
✅ Best-in-class SEO (vital for client discovery)
✅ Vercel deployment (free, zero-config CDN)
✅ TypeScript support out of the box
✅ Industry standard = easy to maintain/hire for

ALTERNATIVES CONSIDERED:
❌ Vite + React: Worse SEO, client-side routing slower
❌ Astro: Too minimal for future interactive features
❌ Remix: Smaller ecosystem, less tooling

VERDICT: Next.js 14 is the optimal choice for a professional
portfolio that needs speed, SEO, and future scalability.
```

---

## Styling

### **Tailwind CSS v3.3+**

```
WHY:
✅ Perfect for rapid iteration
✅ Consistent design system through config
✅ Purges unused CSS = tiny bundles
✅ Dark mode built-in
✅ Responsive utilities
✅ No CSS file management
✅ IntelliSense autocomplete

CONFIGURATION:
- Custom color palette (see COLOR_SCHEME.md)
- Custom spacing scale
- Custom font families
- Extended shadows for glows
- Animation utilities
```

### **PostCSS + Autoprefixer**

```
Included with Tailwind
- Automatic vendor prefixes
- CSS optimization
```

---

## Animation

### **Framer Motion v10+**

```
WHY:
✅ Best React animation library
✅ Declarative API (variants)
✅ Gesture support (drag, tap, hover)
✅ Layout animations
✅ Scroll-triggered animations
✅ SVG path animations
✅ Respect prefers-reduced-motion
✅ TypeScript support

ALTERNATIVES CONSIDERED:
❌ React Spring: Steeper learning curve
❌ CSS animations only: Limited control
❌ GSAP: Overkill for this project, paid license

USAGE:
See ANIMATION_SYSTEM.md for all variants & patterns
```

---

## Icons

### **Lucide React**

```
WHY:
✅ 1000+ beautiful icons
✅ Consistent design language
✅ Tree-shakable (only import what you use)
✅ Fully customizable (size, color, stroke)
✅ TypeScript support
✅ Better than Font Awesome (cleaner, lighter)

USAGE:
import { ArrowRight, Check, Menu } from 'lucide-react'
<ArrowRight className="w-5 h-5 text-primary" />
```

---

## Fonts

### **Inter (Variable Font)**

```
WHY:
✅ Designed for UI/screens
✅ Excellent readability at all sizes
✅ Variable font = one file for all weights
✅ Free & open source
✅ Professional, modern feel
✅ Used by GitHub, Vercel, Stripe

LOADING STRATEGY:
- Next.js font optimization
- font-display: swap
- Preload critical weights (400, 600, 700)
```

### **JetBrains Mono (Code)**

```
WHY:
✅ Optimized for code display
✅ Ligatures for programming symbols
✅ Clear distinction between similar characters

USAGE:
Tech stack badges, code snippets, terminal-style sections
```

---

## Type Safety

### **TypeScript v5+**

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

**WHY STRICT MODE:**

- Catch errors at compile time, not runtime
- Better autocomplete
- Self-documenting code
- Easier refactoring
- Professional standard

---

## Code Quality

### **ESLint**

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### **Prettier**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### **Husky + lint-staged**

```
Pre-commit hooks:
1. ESLint check
2. TypeScript type check
3. Prettier format
4. Run tests (if any)

Prevents bad code from being committed
```

---

## Forms (For Contact Page)

### **React Hook Form + Zod**

```
WHY:
✅ Minimal re-renders (performance)
✅ TypeScript-first
✅ Zod for schema validation
✅ Easy error handling
✅ Works great with Next.js

EXAMPLE:
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
})
```

---

## Email (Contact Form Backend)

### **Resend API** (Recommended)

```
WHY:
✅ Simple, developer-friendly API
✅ Built by Vercel team
✅ React email templates
✅ Great deliverability
✅ Free tier: 3,000 emails/month

ALTERNATIVE:
- SendGrid (more complex)
- Nodemailer + SMTP (manual setup)
- FormSpree (no backend needed, but less control)
```

---

## Scheduling Integration

### **Cal.com Embed** (Recommended)

```
WHY:
✅ Open source (good for brand)
✅ Free tier available
✅ Easy embed
✅ Stripe integration for paid calls
✅ Calendar sync (Google, Outlook)
✅ Timezone handling
✅ No backend needed

ALTERNATIVE:
- Calendly (closed source, but good UX)
- SavvyCal (indie, nice design)

IMPLEMENTATION:
<Cal
  calLink="yourname/30min-discovery"
  config={{ theme: 'dark' }}
/>
```

---

## Payments

### **Stripe Payment Links** (Phase 1)

```
WHY:
✅ Zero backend code needed
✅ Just a link: buy.stripe.com/...
✅ Handles everything (checkout, receipts, etc.)
✅ Perfect for paid consultations

EXAMPLE:
<Button href="https://buy.stripe.com/xyz123">
  Book $150 Strategy Call
</Button>
```

### **Stripe Checkout** (Phase 2, if needed)

```
For more customization:
- Next.js API route to create session
- Redirect to Stripe Checkout
- Webhook for fulfillment
```

---

## Image Optimization

### **Next.js Image Component**

```tsx
import Image from 'next/image'
;<Image
  src="/projects/crm-screenshot.png"
  alt="CRM Dashboard"
  width={1200}
  height={800}
  quality={90}
  placeholder="blur"
  className="rounded-lg"
/>
```

**BENEFITS:**

- Automatic WebP/AVIF conversion
- Lazy loading
- Responsive sizes
- Blur placeholder while loading
- CDN delivery

**IMAGE REQUIREMENTS:**

- Max 200KB per image
- Use PNG for screenshots
- Use JPG for photos
- Optimize before upload (use Squoosh.app)

---

## Deployment

### **Vercel** (Recommended)

```
WHY:
✅ Made by Next.js creators
✅ Zero-config deployment
✅ Free tier (generous)
✅ Global CDN
✅ Auto HTTPS
✅ Preview deployments for PRs
✅ Environment variables
✅ Analytics included

SETUP:
1. Connect GitHub repo
2. Auto-deploys on push to main
3. Preview URLs for branches
```

**ALTERNATIVES:**

- Netlify (similar, good option)
- AWS Amplify (more complex)
- Self-hosted (unnecessary for this)

---

## Analytics

### **Vercel Analytics** (Simple, Privacy-Friendly)

```
WHY:
✅ Built into Vercel
✅ No cookies (GDPR-friendly)
✅ Real user metrics
✅ Core Web Vitals

FREE TIER: 2,500 events/month
```

### **Plausible** (Alternative, More Detailed)

```
WHY:
✅ Privacy-focused (no cookies)
✅ Simple, clean UI
✅ GDPR compliant
✅ Lightweight script

COST: $9/month for 10k pageviews
```

---

## Development Tools

### **VS Code Extensions** (Recommended)

```
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript + JavaScript
- Auto Rename Tag
- Path IntelliSense
- GitLens
```

### **VS Code Settings**

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## Performance Targets

### **Lighthouse Scores** (Minimum)

```
Performance:  95+
Accessibility: 100
Best Practices: 100
SEO: 100
```

### **Core Web Vitals**

```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### **Bundle Size**

```
First Load JS: < 100KB (goal: ~80KB)
Page-specific JS: < 30KB per page
```

---

## Version Control

### **Git Workflow**

```
main:      Production (auto-deploys to yoursite.com)
develop:   Development (auto-deploys to dev.yoursite.com)
feature/*: Feature branches → PR to develop
```

### **.gitignore Essentials**

```
node_modules/
.next/
out/
.env*.local
.vercel
.DS_Store
*.log
```

---

## Environment Variables

```bash
# .env.local (never commit!)
RESEND_API_KEY=re_...
NEXT_PUBLIC_CAL_LINK=yourname/30min
STRIPE_PAYMENT_LINK=buy.stripe.com/...
```

---

## Package Management

### **npm** (Stick with Default)

```
WHY:
- Comes with Node.js
- Lock file for consistency
- Industry standard

AVOID: Mixing package managers (npm/yarn/pnpm)
```

---

## File Structure Philosophy

> You mentioned using **modules** instead of traditional structure.
> We'll collaborate on this separately, but the stack supports any structure.

**Principles:**

- Co-locate related files
- Clear separation of concerns
- Easy to find things
- Scales as project grows

---

## Dependencies Summary

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "eslint": "^8.54.0",
    "eslint-config-next": "^14.0.0",
    "eslint-config-prettier": "^9.0.0",
    "prettier": "^3.1.0",
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

**TOTAL SIZE:** ~400MB node_modules (typical for modern Next.js project)

---

## Why This Stack Wins

| Requirement  | Solution                 | Why                   |
| ------------ | ------------------------ | --------------------- |
| Speed        | Next.js SSG + Vercel CDN | 95+ Lighthouse score  |
| SEO          | Next.js metadata API     | Google-friendly       |
| DX           | TypeScript + ESLint      | Catch errors early    |
| Design speed | Tailwind                 | Rapid iteration       |
| Animations   | Framer Motion            | Smooth, professional  |
| Scalability  | Next.js App Router       | Add features easily   |
| Cost         | Free tier everything     | $0/month to start     |
| Maintenance  | Industry standard stack  | Easy to hire/maintain |

---

## Future Additions (Not Now)

**When you need them:**

- **Database:** Prisma + PostgreSQL (for blog/CMS)
- **Auth:** NextAuth.js (if building client portal)
- **CMS:** Sanity or Contentful (for marketing content)
- **Testing:** Playwright (E2E), Vitest (unit tests)
- **Monitoring:** Sentry (error tracking)

**Don't add until you need them.** Keep it lean.
