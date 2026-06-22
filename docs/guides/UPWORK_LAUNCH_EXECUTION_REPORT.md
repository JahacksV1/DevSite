# Upwork Launch Execution Report

Date: 2026-06-22  
Scope: Route consolidation, positioning alignment, and conversion-oriented copy updates across portfolio, How We Build, and Pricing.

## 1) What Was Executed

### A. Route + global positioning updates

- Updated `/` to render the Upwork portfolio flow:
  - `src/app/page.tsx`
- Replaced enterprise-first root metadata with founder/full-stack positioning:
  - `src/app/layout.tsx`
- Updated `/upwork` metadata to match build/repair portfolio language:
  - `src/app/upwork/page.tsx`

### B. Navigation + footer hardening

- Changed nav labels and CTA to portfolio-first language:
  - `src/components/layout/Navigation.tsx`
  - `src/components/layout/MobileMenu.tsx`
- Reworked footer:
  - unified brand copy to Day One Devs
  - removed placeholder social defaults (only render if real links exist)
  - changed stack chips to match actual positioning (Next.js/TypeScript/Supabase/Vercel/Stripe)
  - replaced enterprise tagline
  - updated bottom-bar trust note for Upwork communication
  - `src/components/layout/Footer.tsx`

### C. Upwork portfolio improvements

- Kept `/upwork` as modular route and updated section ordering in:
  - `src/modules/upwork/index.tsx`
- Updated Upwork hero and section copy to reduce redundancy and improve conversion flow:
  - `src/modules/upwork/components/UpworkSections.tsx`
- Updated proof cards:
  - "What this proves" now prioritizes `results`
  - changed "Relevant for" -> "Good fit if you need"
  - fixed proof-tag logic so "Live Deploy" appears only for actually live demos
  - `src/modules/upwork/components/UpworkProjectGrid.tsx`

### D. Project status truthfulness fix

- Fixed `demoStatusBadges` and `demoStatusDetails` to stop labeling all projects as private:
  - `src/modules/projects/lib/demoStatus.ts`
- Live demos now display live/login-required badges correctly.

### E. How We Build rewrite

- Repositioned from "agent orchestra" framing to practical build/repair standards:
  - `src/modules/how-we-build/components/HeroSection.tsx`
  - `src/modules/how-we-build/components/MultiAgentSection.tsx`
  - `src/modules/how-we-build/components/ProcessSection.tsx`
- Replaced timeline hype and day-by-day claims with milestone + verification workflow language.

### F. Pricing rewrite

- Replaced fixed package-tier framing with engagement-mode framing:
  - `src/modules/pricing/components/PricingTiers.tsx`
- Reframed timeline breakdown around scope/stage/integration/verification realities:
  - `src/modules/pricing/components/TimelineBreakdown.tsx`
- Rewrote FAQs to align with build + stabilize positioning and milestone scoping:
  - `src/modules/pricing/components/FAQSection.tsx`

## 2) What Is Still Needed

1. **Brand unification cleanup (remaining references)**
   - There are still Day One Labs references outside this scope (for example, in some pre-qual/book-call flows).
   - Decide final external-facing brand string and align everywhere.

2. **Upwork profile CTA linking**
   - Current site uses internal CTAs (`#proof`, `/projects`, etc.).
   - Add direct external `Hire on Upwork` / `Message on Upwork` links once final Upwork profile URL is confirmed.

3. **Optional refactor for `UpworkSections.tsx`**
   - File currently exceeds lint max-lines warning.
   - Split into smaller section components to reduce future regression risk.

4. **Route strategy confirmation**
   - `/` now points to portfolio flow.
   - Confirm whether legacy "home module" should be moved to a secondary route (`/studio` or `/about`) or retired.

5. **Cross-route metadata polish**
   - Root and `/upwork` metadata updated.
   - Add page-specific metadata for `/pricing` and `/how-we-build` if desired.

## 3) Definition of Done Check

### Target DoD

- Portfolio page is default landing route.
- Messaging consistently says build + repair full-stack apps.
- Enterprise-heavy copy is removed from key funnel surfaces.
- Proof signals are accurate and trustworthy.
- How We Build and Pricing align with milestone-first, stage-aware positioning.
- No syntax/lint-blocking errors in touched files.

### Status

- **Default route to portfolio:** Complete
- **Messaging alignment (global + Upwork + HWB + Pricing):** Complete (first full pass)
- **Enterprise-heavy root copy removed:** Complete
- **Project status/proof badge integrity:** Complete
- **Syntax errors:** Complete (resolved)
- **Lint-blocking errors:** Complete
- **Lint warnings:** One remaining warning in `src/modules/upwork/components/UpworkSections.tsx` (max-lines only; non-blocking)

Overall DoD status: **Mostly complete for outreach use**, with non-blocking cleanup items listed above.

## 4) Files Modified in This Execution

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/upwork/page.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/layout/MobileMenu.tsx`
- `src/components/layout/Navigation.tsx`
- `src/modules/how-we-build/components/HeroSection.tsx`
- `src/modules/how-we-build/components/MultiAgentSection.tsx`
- `src/modules/how-we-build/components/ProcessSection.tsx`
- `src/modules/pricing/components/FAQSection.tsx`
- `src/modules/pricing/components/PricingTiers.tsx`
- `src/modules/pricing/components/TimelineBreakdown.tsx`
- `src/modules/projects/lib/demoStatus.ts`
- `src/modules/upwork/components/UpworkProjectGrid.tsx`
- `src/modules/upwork/components/UpworkSections.tsx`
- `src/modules/upwork/index.tsx`

## 5) Follow-up Fixes Added After Initial Pass

### A. Project card pill overlap fix

Issue: status/category pills were overlaying screenshots and covering important UI/title areas in preview images.

Executed:

- Moved status/category pills from screenshot overlay to content area beneath the image in:
  - `src/modules/upwork/components/UpworkProjectGrid.tsx`
  - `src/modules/projects/components/ProjectCard.tsx`

Result: pills no longer block screenshot content while still preserving status/category context.

### B. Intake form modernization (wording + structure)

Executed:

- Reframed `/book-call` page language from “Discovery Call” to “Milestone Intake”:
  - `src/modules/book-call/index.tsx`
- Updated form labels and CTA wording to milestone-first positioning:
  - `src/modules/book-call/components/PreQualForm.tsx`
  - `src/modules/book-call/components/ProjectDescription.tsx`
  - `src/modules/book-call/components/BudgetSelector.tsx`
  - `src/modules/book-call/components/TimelineSelector.tsx`
  - `src/modules/book-call/components/ContactFields.tsx`
- Added pricing model selection (Fixed / Hourly / Not sure):
  - `src/modules/book-call/components/PricingModelSelector.tsx` (new)
  - `src/modules/book-call/components/PreQualForm.tsx`
  - `src/modules/book-call/lib/formOptions.ts`
  - `src/types/preQual.ts`
- Updated qualification logic and messaging to remove old hard-threshold/legacy budget language:
  - `src/modules/book-call/lib/qualification.ts`
  - `src/modules/book-call/hooks/usePreQualForm.ts`
  - `src/modules/book-call/components/ResultActions.tsx`

Result: intake language now aligns with milestone scoping and stage-aware engagement rather than legacy tier-first framing.

