# MuniFlow Portfolio Screenshots — Capture Guide

## Overview

MuniFlow is publicly findable by name but parts of it are in active development and the data inside is sensitive. The goal is to show the **engineering depth and UI quality** without exposing real deal names, financial figures, party names, or anything that reads as internal company data.

**Strategy:**
- Use the seeded sample deal ("City of Springfield (Sample)") wherever possible
- Blur or replace any real names, emails, dollar amounts, or legal references with placeholder text before saving
- Capture UI in a state that emphasizes architecture and layout over content
- No need to hide that it's MuniFlow — the platform name is fine. What we protect is the *data inside it*.

---

## Skills MuniFlow Demonstrates

These are the skills a potential client should walk away understanding:

| Skill | Where It Shows |
|---|---|
| Enterprise-scale architecture | 22 modules, enforced layer boundaries, 59-table schema |
| Complex state management | TanStack Query across deal, contacts, term sheet, notifications |
| Real-time features | Supabase realtime on messaging and notifications |
| Multi-role auth + permissions | Deal membership ACL, invite system, shadow contacts |
| Collaborative document editing | Term sheet with nested DnD, inline editors, field comments |
| Version control for data | Term sheet publish/diff — GitHub-style for financial docs |
| Geospatial visualization | US issuers map with TopoJSON drill-down |
| Complex CRM-style UI | Contacts kanban, modal orchestration, multi-entity relationships |
| Legal/workflow domain modeling | Closing transcript assembly, document linking, register |
| Email integration | Resend invitations, Postmark inbound deal email |
| Multi-step progressive forms | 5-section deal creation wizard |
| Cross-app API design | Lighthouse OAuth bridge for satellite tools |

---

## Screenshots — Priority Order

### 1. `muniflow-01-home-dashboard.png`
**Route:** `/home`
**What to show:** Deal list in "By Issuer" grouping with the sidebar visible. At least one deal group expanded with a deal card showing. Activity feed panel on the right if layout allows.
**Why first:** Establishes the platform scope immediately — this is a workspace, not a form.
**Skills shown:** Dashboard design, multi-dimensional data grouping, product onboarding polish.
**Anonymize:** Replace real deal or issuer names with sample data. Hide any user display name in the header avatar/greeting.

---

### 2. `muniflow-02-issuers-map.png`
**Route:** `/issuers`
**What to show:** US map with state-level highlighting active. Ideally one state is hovered showing a tooltip with issuer count. The search bar and filter chips visible below.
**Why second:** Most visually distinctive screenshot in the whole app — nothing else in a typical portfolio looks like this.
**Skills shown:** Geospatial visualization, TopoJSON/FIPS mapping, interactive SVG drill-down, data-driven UI.
**Anonymize:** No sensitive data on this page — public municipal data. Safe to show as-is.

---

### 3. `muniflow-03-deal-creation.png`
**Route:** `/home` → open "Start New Deal"
**What to show:** The 5-section expanded create deal modal, ideally with Section 1 complete and Section 2 open showing the issuer/project fields. Show the section progress indicators.
**Why here:** Shows sophisticated form architecture — progressive disclosure, conditional fields, API-driven selects.
**Skills shown:** Multi-step form design, conditional field visibility, domain-aware onboarding.
**Anonymize:** Use fictional project name ("Sample Infrastructure Project") and leave issuer as sample data.

---

### 4. `muniflow-04-contacts-kanban.png`
**Route:** `/deals/[id]/contacts` (Roles view)
**What to show:** Horizontal scrolling role columns with at least 3-4 columns visible and a few people placed in roles. Show the scroll indicator to communicate it continues.
**Why here:** The layout pattern itself is the selling point — most clients have never seen a CRM-style kanban for deal team management.
**Skills shown:** Complex CRM UI, multi-entity relationship modeling (roles ↔ companies ↔ people), realtime sync, modal orchestration.
**Anonymize:** **High sensitivity.** Replace all names, emails, company names with generic placeholders before screenshotting. Use the sample deal's blank contacts if possible.

---

### 5. `muniflow-05-term-sheet-draft.png`
**Route:** `/deals/[id]/term-sheet` (Draft tab)
**What to show:** Draft view with 2-3 sections visible, at least one subsection expanded showing field rows with their typed value editors and drag handles. Field comment button visible on hover.
**Why here:** This is the deepest engineering surface in the app — collaborative editing, nested drag-and-drop, typed fields, permissions, optimistic UI all in one view.
**Skills shown:** Collaborative document editing, nested DnD (3 levels), optimistic UI, field-level permissioning.
**Anonymize:** **High sensitivity.** Replace all financial figures, field labels referencing specific bond terms, and any party-identifying text. Consider showing a field name like "Principal Amount" with the value redacted as "●●●●●".

---

### 6. `muniflow-06-term-sheet-diff.png`
**Route:** `/deals/[id]/term-sheet` → History → Compare two versions
**What to show:** Side-by-side diff with at least a couple of "changed" fields highlighted in red/green. The version selectors at the top and "show only changes" toggle visible.
**Why here:** Version control for financial documents is rare and technically impressive. Communicates domain maturity.
**Skills shown:** Version control UX, structured data diffing, audit-trail thinking.
**Anonymize:** Blur the actual changed values — the diff colors and structure are what we're showing, not the content.

---

### 7. `muniflow-07-closing-transcript.png`
**Route:** `/deals/[id]/closing-transcript`
**What to show:** Transcript tab open with a couple of numbered sections listed, each with sub-items. The 3-tab header (Transcript / Documents / Register) visible at the top with the stats summary row.
**Why here:** Shows legal/closing workflow domain expertise — something very few developers can demonstrate.
**Skills shown:** Legal document workflow, nested drag-and-drop, multi-tab orchestration, document linking.
**Anonymize:** Replace closing document titles with generic names ("Closing Certificate," "Opinion of Bond Counsel"). No party names or dates.

---

### 8. `muniflow-08-deal-overview.png`
**Route:** `/deals/[id]/overview`
**What to show:** Full overview page with the deal identity hero block at top and the core snapshot grid below. Deal sidebar nav visible on the left so the full app chrome is in frame.
**Why here:** Shows clean information architecture and the overall app shell. Good "executive summary" of what a deal workspace looks like.
**Skills shown:** Information architecture, responsive grid layout, read-only data presentation, app shell design.
**Anonymize:** Replace deal name with "Sample Bond Series 2025." Blank out the official offering name and any dollar figures in the snapshot.

---

### 9. `muniflow-09-messaging.png`
**Route:** `/deals/[id]/messages?conversationId=...` (from a Contacts "Message" action)
**What to show:** Conversation list on the left, open message thread on the right with a few bubbles visible.
**Why here:** Real-time messaging inside a financial platform is a strong signal — it shows you can build communication features, not just data forms.
**Skills shown:** Messaging UX, realtime subscriptions, conversation state management, optimistic send.
**Anonymize:** **Maximum sensitivity.** Blur all message content and all participant names/avatars. The bubble layout and UI chrome are what we're showing.

---

### 10. `muniflow-10-team-invites.png`
**Route:** `/requests` (Received/Sent tabs) or `/deals/[id]/team`
**What to show:** The pending invites table with a row or two showing status badges (Pending, Accepted). The "Send Invitation" section visible with the email input.
**Why here:** The invite system is technically sophisticated (email routing, new vs existing user detection, join codes). The UI is the proof.
**Skills shown:** Email-first auth flows, invite lifecycle management, team onboarding UX.
**Anonymize:** Replace email addresses with `user@example.com` format. Replace names with "Team Member."

---

## Capture Checklist

Before saving any screenshot:

- [ ] No real email addresses visible
- [ ] No real personal names (first or last)
- [ ] No real company or firm names
- [ ] No real financial figures (dollar amounts, rates, percentages)
- [ ] No real deal names or project locations
- [ ] No internal reference codes or IDs that could identify a real deal
- [ ] Sample data or placeholder text used throughout
- [ ] Browser dev tools closed, no error overlays
- [ ] Window at 1440px wide minimum for desktop screenshots
- [ ] No browser bookmarks bar visible in the frame

## File naming

Save to: `DevSite/public/projects/`

Prefix all files with `muniflow-` and use the numbering from this guide so they slot into the `projectsData.ts` entry in the correct order.

---

## What We're NOT Showing

To keep this clean and honest:

- **Bond Generator** — already its own standalone portfolio entry
- **Documents page** — feature-flagged off, not user-facing yet
- **Tasks / Timeline** — not wired to pages yet
- **AI Assistant** — placeholder only, marked "not built yet"
- **Closing Binder** — feature-flagged off

These are in development and will have their own moment when they ship.
