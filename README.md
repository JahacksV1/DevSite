# DevSite - Enterprise Portfolio & Client Acquisition Platform

> **Mission:** Attract and convert $10k-50k custom software development clients through a professional, high-performance portfolio site.

---

## 🎯 Project Goal

Build a portfolio website that positions us as **full-stack architects** capable of complex, enterprise-level software development - NOT a "web design agency."

**Target Client:** Businesses needing custom SaaS, AI integrations, enterprise automation  
**Target Project Value:** $10,000 - $50,000+  
**Primary Conversion Goal:** Book $150 strategy call consultations

---

## 📚 Documentation

This repository contains comprehensive planning documents. **Read these before coding:**

### Core Specifications

1. **[COLOR_SCHEME.md](./COLOR_SCHEME.md)** - Complete color palette, contrast ratios, usage guidelines
2. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Spacing, typography, shadows, components, responsive rules
3. **[ANIMATION_SYSTEM.md](./ANIMATION_SYSTEM.md)** - Motion variants, timing, easing, performance guidelines
4. **[TECH_STACK.md](./TECH_STACK.md)** - Technology decisions, tooling, alternatives considered
5. **[POSITIONING_STRATEGY.md](./POSITIONING_STRATEGY.md)** - Marketing messaging, target clients, differentiation
6. **[ROADMAP.md](./ROADMAP.md)** - Development phases, timeline, success metrics

---

## 🏗️ Tech Stack

**Framework:** Next.js 14 (App Router) + TypeScript  
**Styling:** Tailwind CSS v3.3+  
**Animations:** Framer Motion v10+  
**Icons:** Lucide React  
**Forms:** React Hook Form + Zod  
**Email:** Resend API  
**Scheduling:** Cal.com  
**Payments:** Stripe Payment Links  
**Deployment:** Vercel  
**Code Quality:** ESLint + Prettier + Husky

**Why this stack?** See [TECH_STACK.md](./TECH_STACK.md) for detailed rationale.

---

## 🎨 Design Philosophy

### **Aesthetic: "Soft Sharp"**

- Dark mode only
- Mint-cyan (#00ffc6) + soft purple (#a78bfa) accents
- 8px border radius standard
- Glow effects on interactions
- Subtle, purposeful animations (200-400ms)
- Professional, not playful

### **Key Principles:**

1. **Speed matters** - Target 95+ Lighthouse scores
2. **Clarity over cleverness** - Clear value proposition
3. **Mobile-first** - 60%+ of traffic
4. **Conversion-focused** - Every element supports the goal
5. **Enterprise credibility** - No "startup vibes," we're professionals

---

## 📄 Site Structure

### **Pages:**

1. **Homepage** (/) - Conversion-optimized one-pager
   - Hero with value proposition
   - 6 service offerings
   - Featured projects preview
   - Process/credibility section
   - CTA with scheduling

2. **Projects** (/projects) - Filterable portfolio
   - Grid of all projects
   - Filter by: CRM, AI, Legal, Automation, etc.
   - Links to detailed case studies

3. **Project Detail** (/projects/[slug]) - Case studies
   - Challenge/Solution format
   - Tech stack showcase
   - Business results/metrics
   - Price range & timeline

4. **About** (/about) - Credibility page
   - Team/expertise
   - Full capabilities
   - Process & methodology
   - "Not a fit" section (filter leads)

5. **Contact** (/contact) - Multiple touchpoints
   - Contact form
   - Cal.com scheduling embed
   - Social links

---

## 🎯 Positioning Strategy

### **We ARE:**

- Full-stack software architects
- Enterprise application developers
- AI integration specialists
- Complex problem solvers
- $10k-50k project partners

### **We are NOT:**

- Web designers
- WordPress developers
- Template customizers
- $500 website builders
- Marketing agencies

### **Target Keywords:**

- Custom SaaS development
- Enterprise web applications
- AI integration developers
- Business process automation
- Custom CRM development

**See [POSITIONING_STRATEGY.md](./POSITIONING_STRATEGY.md) for complete messaging framework.**

---

## 🚀 Development Phases

### **Phase 1: Foundation** (Week 1-2)

- Project setup with tooling
- Design system implementation
- Homepage build (all sections)

### **Phase 2: Deep Dive Pages** (Week 2-3)

- Projects page + filtering
- Project detail pages (case studies)
- About page
- Contact page

### **Phase 3: Polish** (Week 3-4)

- Content writing
- SEO optimization
- Performance tuning
- Accessibility audit
- Responsive testing

### **Phase 4: Launch** (Week 4)

- Production deployment
- Analytics setup
- Submit to Google
- Promote on socials

**See [ROADMAP.md](./ROADMAP.md) for detailed task breakdown.**

---

## 📊 Success Metrics

### **Primary KPI:**

Strategy call bookings → Closed deals

### **Secondary Metrics:**

- Unique visitors per month
- Bounce rate (<50% target)
- Average session duration (>2 min)
- Contact form submissions
- Calendly link clicks
- Lead quality (budget >$10k)

### **SEO Goals (3-6 months):**

- Rank top 10 for "custom SaaS development [city]"
- 1000+ monthly organic impressions
- 5% click-through rate from search

---

## 🎨 Design System Quick Reference

### Colors

```css
/* Primary Accent */
--accent-primary: #00ffc6 /* Mint-cyan */ /* Secondary Accent */
  --accent-secondary: #a78bfa /* Soft purple */ /* Backgrounds */
  --bg-primary: #0a0a0f --bg-secondary: #111118 /* Text */
  --text-primary: #f4f4f5 --text-secondary: #a1a1aa;
```

### Spacing

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px
```

### Typography

```
Font: Inter (variable)
Sizes: 12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px, 60px
Weights: 400, 500, 600, 700
```

### Animation

```javascript
Duration: 200ms (hover), 300ms (transitions), 400ms (complex)
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

**Full details in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)**

---

## 💼 Content Guidelines

### **Tone of Voice:**

- Professional, not corporate
- Confident, not arrogant
- Technical, but accessible
- Results-focused, not feature-focused

### **Copy Principles:**

1. Lead with business value, not tech
2. Be specific (numbers, timelines, tech stack)
3. Show, don't just tell (case studies > claims)
4. Filter unqualified leads early
5. Clear calls-to-action

### **Example Hero Headlines:**

- "We Build Enterprise Software That Scales"
- "Custom SaaS Development for $10k-50k Projects"
- "Full-Stack Architects for Complex Problems"

---

## 🔧 Development Standards

### **Code Quality:**

- TypeScript strict mode (no `any`)
- ESLint + Prettier enforced
- Husky pre-commit hooks
- 100% type coverage
- Meaningful variable names
- Comments for complex logic only

### **Performance:**

- Lighthouse score 95+
- Images under 200KB
- First Load JS under 100KB
- LCP < 2.5s
- CLS < 0.1

### **Accessibility:**

- WCAG AAA color contrast
- Keyboard navigation support
- Screen reader tested
- `prefers-reduced-motion` respected
- Semantic HTML
- ARIA labels where needed

### **SEO:**

- Unique meta titles/descriptions
- OpenGraph images
- Structured data (JSON-LD)
- Sitemap + robots.txt
- Alt text for all images

---

## 📝 Pre-Build Decisions Needed

Before starting development, finalize:

1. **Company Name/Branding**
   - [ ] Legal entity name
   - [ ] Display name for site
   - [ ] Logo (or build without for now)

2. **Domain Name**
   - [ ] Purchase domain
   - [ ] Configure DNS

3. **Hero Messaging**
   - [ ] Main headline
   - [ ] Subheadline
   - [ ] Primary CTA text

4. **Project Showcase**
   - [ ] Select 3-6 projects to feature
   - [ ] Gather screenshots
   - [ ] Write case study details
   - [ ] List tech stacks

5. **Service Offerings**
   - [ ] Finalize 6 service descriptions
   - [ ] Decide on transparent pricing vs. quote-based

6. **Integrations**
   - [ ] Cal.com account + link
   - [ ] Stripe payment link (for paid consultations)
   - [ ] Email address for contact form
   - [ ] Social media handles

---

## 🚦 Getting Started

### **Step 1: Review All Documentation**

Read all `.md` files in this repository before writing any code.

### **Step 2: Finalize Decisions**

Complete the "Pre-Build Decisions Needed" checklist above.

### **Step 3: Initialize Project**

```bash
npx create-next-app@latest devsite --typescript --tailwind --app --eslint
cd devsite
# Install additional dependencies (see TECH_STACK.md)
```

### **Step 4: Setup Tooling**

- Configure ESLint + Prettier
- Setup Husky + lint-staged
- Add Framer Motion, Lucide, React Hook Form, Zod

### **Step 5: Build Design System**

- Implement Tailwind config from COLOR_SCHEME.md
- Create reusable components (Button, Card, Badge, Input)
- Test all variants

### **Step 6: Build Homepage**

Follow ROADMAP.md Phase 1 task-by-task

---

## 📂 Recommended File Structure

> Note: Team prefers modular structure - to be discussed

**Suggested approach:**

```
app/
  layout.tsx
  page.tsx (homepage)
  projects/
    page.tsx
    [slug]/page.tsx
  about/page.tsx
  contact/page.tsx

components/
  layout/
  sections/
  ui/
  animations/

lib/
  utils.ts
  projects.ts (data)

public/
  projects/ (images)

styles/
  globals.css
```

---

## 🎯 Conversion Funnel

```
Traffic Sources
    ↓
Homepage Hero (3-5 second decision)
    ↓
Services Section (credibility)
    ↓
Featured Projects (proof)
    ↓
CTA Section
    ↓
Strategy Call Booking ($150) ← PRIMARY GOAL
    ↓
Project Proposal ($10k-50k)
    ↓
Client Onboarding
```

**Optimize every step for this funnel.**

---

## 🔄 Iteration Strategy

### **Post-Launch:**

1. Monitor analytics weekly
2. Track conversion rates
3. A/B test CTAs
4. Gather feedback from consultation calls
5. Add new case studies as projects complete
6. Optimize copy based on what questions clients ask
7. Improve SEO based on search data

### **Monthly Reviews:**

- Traffic sources
- Bounce rate by page
- CTA click-through rates
- Form abandonment
- Lead quality
- Revenue attributed to site

---

## 🤝 Collaboration Notes

- Two developers on this project
- Modular file structure preferred (to be finalized)
- Clean code is non-negotiable
- Mobile-first always
- Performance is a feature
- Launch fast, iterate faster

---

## 🎉 Definition of Done

Site is "done" when:

- [x] All documentation reviewed and approved
- [ ] All 5 pages built and responsive
- [ ] All animations smooth and purposeful
- [ ] Lighthouse score 95+ on all pages
- [ ] Accessibility audit passed
- [ ] SEO meta tags complete
- [ ] Contact form working (tested)
- [ ] Cal.com embed working
- [ ] Stripe payment links working
- [ ] Analytics tracking
- [ ] Deployed to production
- [ ] Custom domain connected
- [ ] SSL verified
- [ ] Submitted to Google Search Console
- [ ] First strategy call booked

---

## 📞 Support & Questions

For questions about:

- **Design decisions:** See DESIGN_SYSTEM.md, COLOR_SCHEME.md
- **Positioning/copy:** See POSITIONING_STRATEGY.md
- **Tech choices:** See TECH_STACK.md
- **Timeline/tasks:** See ROADMAP.md

**If something's not documented, document it first, then build it.**

---

## 🔥 Remember

> "This site's only job is to book qualified strategy calls with clients ready to spend $10k+. Every pixel, every word, every animation should support that goal."

---

**Let's build something that actually converts.** 🚀
