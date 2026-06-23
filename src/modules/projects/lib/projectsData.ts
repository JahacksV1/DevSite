export interface TechDetail {
  name: string
  purpose: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  category:
    | 'SaaS'
    | 'AI'
    | 'Fintech'
    | 'Consumer'
    | 'Local Business'
    | 'Legal Tech'
    | 'Enterprise'
    | 'Internal Tool'
  description: string
  challenge: string
  solution: string[]
  techStack: string[]
  techDetails: TechDetail[]
  uniqueFeatures: string[]
  architectureHighlights: string[]
  relevantFor: string[]
  results: string
  demoStatus:
    | 'Live — Public'
    | 'Live — Auth Required'
    | 'Private — Case Study Only'
    | 'In Development'
  screenshots: string[]
  screenshotLayout?: 'desktop' | 'mobile'
  demoUrl?: string
  featured: boolean
  productionGrade: boolean
}

export const projects: Project[] = [
  {
    id: 'muniflow-platform',
    slug: 'muniflow-platform',
    title: 'MuniFlow Platform',
    subtitle: 'Municipal Bond Deal Execution Platform — An App Full of Apps',
    category: 'Enterprise',
    description:
      'A modular enterprise platform for managing municipal bond transactions end-to-end. Organized as a host app containing 22 feature modules — each a distinct workflow: deal creation, contacts and team management, collaborative term sheets with version history, closing document assembly, in-app messaging, a real-time notification system, a per-deal email inbox, and an interactive US issuers directory with geographic drill-down.',
    challenge:
      'Municipal bond deals involve dozens of parties — bond counsel, underwriters, trustees, fiscal agents, issuers — coordinating across fragmented email threads, Word documents, and spreadsheets. Each deal is legally distinct, requires versioned documentation, and involves sensitive financial data. The platform needed to feel like a product, not a collection of admin screens, while enforcing the strict access control and audit requirements of public finance.',
    solution: [
      'Home workspace with deal hierarchy grouped by issuer, type, or recency — with a 5-section progressive deal creation wizard',
      'Interactive US issuers map with national → state → county drill-down, search, and issuer group rooms',
      'Deal contacts with horizontal role-column kanban layout, shadow contacts (pending invitees visible before they join), and real-time sync',
      'Email-first invite system: admins enter an email, the platform detects new vs existing users and routes the experience appropriately',
      'Collaborative term sheets with nested drag-and-drop field reorder, inline typed editors, field-level comments, change request workflow, and side-by-side version diff',
      'Closing transcript assembly workspace with section/item reordering, document linking, and a register of closing events',
      'In-app 1:1 messaging between deal participants with Supabase realtime subscriptions',
      'Per-deal email inboxes via Postmark inbound webhooks for capturing deal-related correspondence',
      'Real-time notification center (global + deal-scoped) with bell dropdown in app chrome',
      'Lighthouse cross-app API bridge: OAuth-style tokens let satellite tools (Bond Generator, Muni Clerk) pull published term sheet data securely',
    ],
    techStack: [
      'Next.js 16',
      'React 18',
      'TypeScript',
      'MUI 7',
      'Tailwind',
      'TanStack Query',
      'Supabase',
      'OpenAI',
      'Resend',
      'Sentry',
      'Playwright',
    ],
    techDetails: [
      {
        name: 'Next.js 16 (Pages Router)',
        purpose:
          'Monolith host for ~107 API routes and 22 UI modules; feature flags in env control which surfaces are active',
      },
      {
        name: 'TanStack React Query 5',
        purpose:
          'All server state: deal data, contacts, term sheet fields, notifications — with 5-min stale time and user-scoped cache keys',
      },
      {
        name: 'Supabase (Postgres + Auth + Realtime + Storage)',
        purpose:
          '59-table schema for deals, memberships, contacts, term sheet versions, closing packets, messages, and notifications; realtime subscriptions for messaging and notification push',
      },
      {
        name: 'MUI 7 + @dnd-kit + react-beautiful-dnd',
        purpose:
          'Component library for dense data surfaces; dnd-kit powers 3-level term sheet reorder (sections → subsections → fields); react-beautiful-dnd for closing transcript section/item reorder',
      },
      {
        name: 'react-simple-maps + d3-geo + topojson-client',
        purpose:
          'Interactive US issuers map: TopoJSON FIPS-coded geography, state/county drill-down, zoomable SVG with issuer data overlay',
      },
      {
        name: 'Resend',
        purpose:
          'Invitation emails from invitations@muniflow.io — new user vs existing user routing with distinct call-to-action per path',
      },
      {
        name: 'OpenAI',
        purpose:
          'Document list parsing pipeline for closing indexes; fine-tuning pipeline for municipal-domain model improvements (feature-flagged, in development)',
      },
      {
        name: 'ESLint boundaries + Vitest + Playwright',
        purpose:
          'Enforced 5-layer module architecture (pages → components → hooks → services → db); unit tests for term sheet rules engine; E2E for critical deal flows',
      },
    ],
    uniqueFeatures: [
      'Shadow contacts: pending invitees appear in the deal contacts grid immediately — before they create an account — maintaining team visibility across the full deal lifecycle',
      'Deal context rules engine: a catalog of municipal finance "knobs" (financing type, rate mode, tax status, maturity structure) that deterministically activates the correct term sheet field set per deal family',
      'Lighthouse cross-app bridge: OAuth-style authorization codes let external tools (Bond Generator, Muni Clerk) fetch published term sheet data from the platform without sharing database credentials',
      'Term sheet version diff: side-by-side comparison of any two published versions with a "show only changes" toggle — modeled after code review for financial documents',
      'Feature passport system: each of 22 modules has a living passport.md tracking stage, maturity, API completeness, and known gaps — used to gate what ships per release',
    ],
    architectureHighlights: [
      'Modular monolith with ESLint boundaries enforcing a 5-layer clean architecture per feature — prevents components from reaching the database and hooks from bypassing service logic',
      'Dual Supabase client pattern: anon/JWT client for user-scoped reads, service role admin client for writes that need to bypass RLS; deal membership table is the authoritative ACL for all deal-scoped access',
      'API middleware stack: withRequestId → withApiAuth or withDealAuth — every deal route validates membership before the handler runs',
      '59-table Postgres schema with 110 foreign keys organized by domain: deal core, term sheet versioning, closing packets, messaging, notifications, issuers, compliance audit logs',
      'Bundle splitting by feature module: webpack splitChunks creates separate chunks for auth, deal pages, term sheet, closing assembly — public auth pages skip React Query and MUI for ~190KB savings',
    ],
    relevantFor: [
      'Enterprise SaaS and multi-tenant platform architecture',
      'Legal and financial document workflows',
      'Collaborative editing with versioning and audit trails',
      'Complex data modeling with enforced module boundaries',
      'Real-time features with Supabase subscriptions',
      'Multi-role invite and team management systems',
    ],
    results:
      'Production platform with 22 active feature modules, 107 API endpoints, and a 59-table schema supporting the full municipal bond deal lifecycle. Demonstrates full-stack enterprise architecture at a scale that most agency portfolios never reach.',
    demoStatus: 'Private — Case Study Only',
    screenshots: [
      '/projects/muniflow-01-home-dashboard.png',
      '/projects/muniflow-02-issuers-map.png',
      '/projects/muniflow-03-deal-creation.png',
      '/projects/muniflow-04-contacts-kanban.png',
      '/projects/muniflow-05-term-sheet-draft.png',
      '/projects/muniflow-06-term-sheet-diff.png',
      '/projects/muniflow-07-closing-transcript.png',
      '/projects/muniflow-08-deal-overview.png',
      '/projects/muniflow-09-messaging.png',
      '/projects/muniflow-10-team-invites.png',
    ],
    screenshotLayout: 'desktop',
    featured: true,
    productionGrade: true,
  },
  {
    id: 'home-service-demos',
    slug: 'home-service-demos',
    title: 'Home Service Demo Sites',
    subtitle: 'Modular Local Business Website System',
    category: 'Local Business',
    description:
      'Three production-ready local service business websites — plumbing, landscaping, and tree service — built from a single reusable component base. Each site has industry-specific copy, service pages, lead capture forms, customer reviews, FAQ sections, and mobile-optimized call-to-action flows.',
    challenge:
      'Local service businesses need professional websites quickly at prices that make sense for a plumber or landscaper. Most agencies charge too much or deliver template-looking results. This proves production-quality local business sites can be built rapidly and replicated across verticals.',
    solution: [
      'Three distinct industry themes: plumbing, landscaping, and tree service',
      'Hero sections with professional imagery and prominent mobile CTAs',
      'Service detail pages with scope descriptions and trust signals',
      'Lead capture forms with server-side validation',
      'Customer review sections with star ratings and testimonials',
      'FAQ sections with structured data markup for SEO',
      'Mobile-first layouts with sticky call buttons for local customer behavior',
      'Reusable component architecture — swap business details, keep the structure',
    ],
    techStack: ['Next.js 16', 'React 19', 'Tailwind', 'TypeScript'],
    techDetails: [
      {
        name: 'Next.js 16',
        purpose:
          'Static generation for fast load times; API routes for lead form submission handling',
      },
      {
        name: 'React 19',
        purpose:
          'Server Components for SEO content, Client Components for interactive lead forms',
      },
      {
        name: 'Tailwind',
        purpose:
          'Distinct brand color systems per vertical while sharing the same component primitives',
      },
      {
        name: 'TypeScript',
        purpose:
          'Typed component props for clean business-detail swapping across service verticals',
      },
    ],
    uniqueFeatures: [
      'Three verticals in one repo — demonstrates modular architecture over copy-paste development',
      'Lead forms structured to connect to any CRM, Zapier, or email service without code changes',
      'Each site has a distinct visual identity despite sharing the same component base',
      'Mobile CTAs optimized for the actual behavior of local business customers: tap to call, tap to text',
    ],
    architectureHighlights: [
      'Single component base with vertical-specific config objects — adding a new industry takes hours, not days',
      'Static generation for all public pages ensures near-instant load times without a server',
      'Form validation runs on both client (UX) and server (security) layers',
    ],
    relevantFor: [
      'Local business and SMB websites',
      'Agency or franchise website systems',
      'Lead generation landing pages',
      'Multi-location or multi-brand site systems',
      'Fast-turnaround business sites',
    ],
    results:
      'Live portfolio at home-service-demos.vercel.app. Used as proof-of-concept for client pitches in local business verticals. Demonstrates ability to deliver professional sites quickly across multiple industries.',
    demoStatus: 'Live — Public',
    screenshots: [
      '/projects/home-service-01-hub.png',
      '/projects/home-service-02-plumbing-hero.png',
      '/projects/home-service-03-plumbing-services.png',
      '/projects/home-service-04-plumbing-contact.png',
      '/projects/home-service-05-landscaping-hero.png',
      '/projects/home-service-06-landscaping-projects.png',
      '/projects/home-service-07-landscaping-services.png',
      '/projects/home-service-08-tree-hero.png',
      '/projects/home-service-09-tree-emergency.png',
      '/projects/home-service-10-tree-services.png',
      '/projects/home-service-11-tree-process.png',
    ],
    demoUrl: 'https://home-service-demos.vercel.app',
    featured: false,
    productionGrade: false,
  },
  {
    id: 'muni-clerk',
    slug: 'muni-clerk',
    title: 'Muni Clerk',
    subtitle: 'AI Document Processing for Municipal Bond Resolutions',
    category: 'Internal Tool',
    description:
      'A specialized document intelligence tool that processes municipal bond resolution documents, detects every variable that needs updating for a new deal, and walks the user through confirming replacements with a full audit trail. Eliminates hours of error-prone manual find-and-replace in legal documents.',
    challenge:
      'Bond counsel reuse resolution templates across deals, manually updating dozens of fields — dates, amounts, party names, bond series — in Word documents. One missed field creates a compliance problem. The process was entirely manual with no verification layer.',
    solution: [
      '.docx upload with server-side parsing via eigenpal/docx-js-editor',
      'Deterministic regex-based variable detection across 20+ field categories',
      'ProseMirror-powered workspace for in-document replacement review',
      'Occurrence preview — see every instance of a variable before confirming a replacement',
      'Change log tracking confirmed vs. skipped replacements per session',
      'Saved documents and folder organization via Supabase',
      'Anonymous session support — no signup required for first use',
      'Lighthouse API bridge for pulling deal data directly into detected fields',
    ],
    techStack: ['Next.js 15', 'ProseMirror', 'Supabase', 'Tailwind', 'Zod'],
    techDetails: [
      {
        name: 'Next.js 15',
        purpose:
          'App Router and Server Actions for the document upload and processing pipeline',
      },
      {
        name: 'ProseMirror',
        purpose:
          'Rich document editor for in-context variable review and confirmed replacements',
      },
      {
        name: '@eigenpal/docx-js-editor',
        purpose:
          'Server-side DOCX parsing and structured text extraction by paragraph and run',
      },
      {
        name: 'Supabase',
        purpose:
          'Document storage, anonymous session auth, folder organization, and change log persistence',
      },
      {
        name: 'Zod',
        purpose:
          'Schema validation for pattern definitions and replacement payloads',
      },
      {
        name: 'Tailwind',
        purpose:
          'Distinct visual states for detected (yellow), confirmed (green), and skipped (gray) fields',
      },
    ],
    uniqueFeatures: [
      'ProseMirror workspace shows replacements inside the actual document — not a separate list view',
      'Pattern library covers municipal bond terminology: CUSIP, trustee, fiscal agent, bond counsel, escrow agent',
      'Anonymous session model lets users demo the tool before creating an account',
      'Change log is audit-ready — every confirmed replacement is tracked with the replacement value',
    ],
    architectureHighlights: [
      'Server-side DOCX parsing pipeline — no client-side file processing means consistent extraction across browsers',
      'ProseMirror schema extended with custom marks for variable highlighting and confirmation state',
      'Anonymous-first auth model using Supabase anonymous sessions that can be upgraded to full accounts',
      'Regex pattern registry is additive — new field patterns are added without code changes to the detection engine',
    ],
    relevantFor: [
      'Legal document automation',
      'Law firm internal tools',
      'Document review workflows',
      'Compliance and audit tooling',
      'AI-assisted document processing',
    ],
    results:
      'Reduces resolution document prep time from hours to under 15 minutes, with an audit-ready change log for every confirmed replacement.',
    demoStatus: 'Private — Case Study Only',
    screenshots: [
      '/projects/muni-clerk-01-guest-upload.png',
      '/projects/muni-clerk-02-upload.png',
      '/projects/muni-clerk-05-summary.png',
      '/projects/muni-clerk-04-review.png',
      '/projects/muni-clerk-03-documents.png',
    ],
    featured: true,
    productionGrade: true,
  },
  {
    id: 'bond-generator',
    slug: 'bond-generator',
    title: 'Bond Generator',
    subtitle: 'Municipal Bond Certificate Generation SaaS',
    category: 'Fintech',
    description:
      'A SaaS tool that generates official municipal bond certificates from uploaded DOCX templates, maturity schedules, and CUSIP data. Turns a multi-day manual assembly process into a structured, auditable workflow with subscription billing.',
    challenge:
      'Bond certificate generation requires merging complex financial data — maturity schedules, CUSIP numbers, interest rates, legal party names — into legal DOCX templates. One error invalidates the entire certificate series. Teams were doing this manually in Word, one certificate at a time.',
    solution: [
      'DOCX template upload with tag-based field detection',
      'Maturity schedule parser handling Excel and CSV formats via the xlsx library',
      'CUSIP data parsing with field validation',
      'Editable data preview table before certificate generation',
      'Certificate assembly engine merging verified data into the template',
      'Draft save system for in-progress certificate jobs',
      'Stripe subscription billing with trial period and webhook-confirmed access control',
      'Trial expiration email notifications',
    ],
    techStack: [
      'Next.js 15',
      'Supabase',
      'Stripe',
      'xlsx',
      'DOCX',
      'MUI',
      'Zod',
      'Sentry',
    ],
    techDetails: [
      {
        name: 'Next.js 15',
        purpose:
          'App Router with file upload API routes and streaming certificate generation responses',
      },
      {
        name: 'Supabase',
        purpose:
          'Auth, DOCX template storage, draft persistence, and subscription state tracking',
      },
      {
        name: 'Stripe',
        purpose:
          'Subscription management, trial periods, webhook-driven access control on certificate jobs',
      },
      {
        name: 'xlsx',
        purpose:
          'Parses maturity schedule spreadsheets from any bond counsel into structured maturity records',
      },
      {
        name: 'DOCX tooling',
        purpose:
          'Tag-based template detection and data-merged certificate output generation',
      },
      {
        name: 'MUI',
        purpose:
          'Data grid UI for reviewing and editing parsed maturity and CUSIP records before generation',
      },
      {
        name: 'Zod',
        purpose:
          'Strict schema validation for maturity schedule formats and CUSIP input structures',
      },
      {
        name: 'Sentry',
        purpose:
          'Error tracking with certificate job context for debugging generation failures',
      },
    ],
    uniqueFeatures: [
      'Tag-based DOCX template system — any template can be onboarded without code changes to the generation engine',
      'Maturity schedule parser handles format variations from different bond counsel offices',
      'Stripe webhook access gates — subscription lapses cut off certificate generation immediately',
      'Draft system preserves parsed data across sessions without re-uploading the schedule',
    ],
    architectureHighlights: [
      'Webhook-first Stripe integration — access control decisions are made server-side from verified webhook events',
      'Template tag registry decouples template onboarding from the core generation engine',
      'Streaming generation response allows the UI to show progress on large bond series',
      'Supabase storage with per-user bucket policies for template and output isolation',
    ],
    relevantFor: [
      'Fintech and financial document tools',
      'SaaS with Stripe billing and subscriptions',
      'Document generation and assembly systems',
      'Legal and compliance software',
      'Data-to-document workflows',
    ],
    results:
      'Live SaaS with active Stripe subscription billing. Handles certificate generation for bond series that previously required days of manual document assembly.',
    demoStatus: 'Live — Public',
    screenshots: [
      '/projects/bond-generator-01-upload.png',
      '/projects/bond-generator-02-tag.png',
      '/projects/bond-generator-03-validate.png',
      '/projects/bond-generator-04-review.png',
      '/projects/bond-generator-05-generate.png',
      '/projects/bond-generator-06-success.png',
    ],
    demoUrl: 'https://bond-generator.vercel.app',
    featured: true,
    productionGrade: true,
  },
  {
    id: 'immigration-app',
    slug: 'immigration-app',
    title: 'Immigration Letter Generator',
    subtitle: 'AI Document Generation with Stripe Paywall and PDF Delivery',
    category: 'Legal Tech',
    description:
      'A SaaS app that generates immigration support letters using AI from a structured multi-step intake form. Users fill in their situation, preview a generated letter, pay via Stripe to unlock the full document, and receive a professionally formatted PDF by email.',
    challenge:
      "Immigration applicants need professionally worded support letters but cannot always afford attorney fees for every document. Generic templates don't account for individual circumstances. This automates the personalization layer while maintaining a clear disclaimer about tool vs. legal advice.",
    solution: [
      'Multi-step intake form with situation-specific questions per letter type',
      'AI letter generation via OpenAI from structured form input',
      'Letter preview with paywall gating — see the format before paying to unlock',
      'Stripe Checkout for one-time purchase per letter',
      'PDF generation with jsPDF — formatted and print-ready output',
      'Resend email delivery of the completed letter PDF',
      'Disclaimer system clearly distinguishing the tool from legal advice',
      'Vercel Analytics for conversion funnel tracking',
    ],
    techStack: [
      'Next.js 14',
      'OpenAI',
      'Stripe',
      'jsPDF',
      'Resend',
      'Tailwind',
      'Zod',
    ],
    techDetails: [
      {
        name: 'Next.js 14',
        purpose:
          'App Router with API routes for AI generation and Stripe webhook handling',
      },
      {
        name: 'OpenAI',
        purpose:
          'Letter generation from structured form data with immigration-context system prompts',
      },
      {
        name: 'Stripe',
        purpose:
          'One-time checkout per letter type; webhook-confirmed access unlock',
      },
      {
        name: 'jsPDF',
        purpose:
          'Client-side PDF formatting and generation with proper letter layout',
      },
      {
        name: 'Resend',
        purpose:
          "Transactional email delivery of the completed PDF to the user's inbox",
      },
      {
        name: 'Zod',
        purpose:
          'Per-letter-type form validation schemas with field-level error messages',
      },
      {
        name: 'Vercel Analytics',
        purpose:
          'Funnel tracking from form entry to Stripe checkout completion',
      },
    ],
    uniqueFeatures: [
      'Paywall preview model — users see letter structure and quality before committing to purchase',
      'Per-letter-type form schemas — questions adapt based on which document the user needs',
      'jsPDF output produces a print-ready document, not raw text',
      'Full Stripe + email loop: one payment triggers generation, formatting, and delivery automatically',
    ],
    architectureHighlights: [
      'Webhook-confirmed Stripe access — letter unlock happens only after server-side payment verification',
      'Dynamic form schemas mean adding a new letter type requires only a schema definition, not new UI code',
      'PDF generation runs client-side to avoid cold start latency on the generation step',
    ],
    relevantFor: [
      'Legal and document automation tools',
      'AI content generation with paywalls',
      'SaaS with Stripe one-time payments',
      'PDF generation and delivery workflows',
      'Law firm or legal services software',
    ],
    results:
      'Live at immigration-app-sigma.vercel.app with a complete end-to-end purchase flow: AI generation, Stripe payment, PDF formatting, and email delivery.',
    demoStatus: 'Live — Public',
    screenshots: [
      '/projects/immigration-01-landing.png',
      '/projects/immigration-02-about-you.png',
      '/projects/immigration-03-application.png',
      '/projects/immigration-04-explanation.png',
      '/projects/immigration-05-tone.png',
      '/projects/immigration-06-contact.png',
      '/projects/immigration-07-preview.png',
      '/projects/immigration-08-unlock.png',
    ],
    demoUrl: 'https://immigration-app-sigma.vercel.app',
    featured: false,
    productionGrade: false,
  },
  {
    id: 'social-q',
    slug: 'social-q',
    title: 'Social Q',
    subtitle: 'AI-Powered Social Communication Coach',
    category: 'Consumer',
    description:
      'A mobile-first AI app that analyzes conversation context — typed messages, screenshots, or voice — and gives situation-aware communication guidance. A "Situation Intelligence" routing layer adjusts response depth to match context quality, producing advice that fits the actual moment rather than generic AI output.',
    challenge:
      'Generic AI writing tools return the same output regardless of social context. Users needed something that understood conversation nuance — connection level, timing, tone, intent — and adjusted its analysis accordingly.',
    solution: [
      'Situation Intelligence routing layer that classifies context depth before triggering full analysis',
      'Omni-bouncer system routing inputs across clarification, analysis, and meta-reply modes',
      'Per-intent accent theming — UI color shifts dynamically based on selected goal',
      'Screenshot-to-text extraction for analyzing conversation images',
      'Voice input via Deepgram speech-to-text',
      'Threaded conversation history with optimistic UI updates',
      'Send options panel with compact and detailed response variants',
      'Supabase anonymous sessions for first-use without account creation',
    ],
    techStack: [
      'Next.js 16',
      'OpenAI',
      'Deepgram',
      'Supabase',
      'Tailwind',
      'React 19',
      'Turbopack',
    ],
    techDetails: [
      {
        name: 'Next.js 16',
        purpose:
          'App Router with Turbopack, Server Actions for AI pipeline orchestration',
      },
      {
        name: 'OpenAI',
        purpose:
          'Structured outputs for situation classification, response generation, and meta-reply routing',
      },
      {
        name: 'Deepgram',
        purpose:
          'Real-time speech-to-text for voice input on the message composer',
      },
      {
        name: 'Supabase',
        purpose:
          'Auth (including anonymous sessions), thread history, and user profile storage',
      },
      {
        name: 'React 19',
        purpose:
          'Concurrent features and optimistic state for instant thread submission UX',
      },
      {
        name: 'Tailwind + CSS custom properties',
        purpose:
          'Dynamic per-intent accent theming using CSS color-mix and design tokens',
      },
    ],
    uniqueFeatures: [
      'Situation Intelligence router — skips clarification for clear inputs, adds depth for ambiguous ones',
      "Dynamic intent theming — the entire UI accent color shifts based on the user's selected communication goal",
      'Three input modalities in a single composer: voice, screenshot, and text',
      'Optimistic thread submission with a pending overlay so responses feel instant on mobile',
    ],
    architectureHighlights: [
      'Multi-level routing pipeline: context classification → bouncer → analysis → response generation',
      'OpenAI structured outputs enforce consistent JSON schema across all analysis modes',
      'Anonymous-first session model upgrades to authenticated profile on demand',
      'Turbopack build pipeline for fast HMR during active feature development',
    ],
    relevantFor: [
      'Consumer AI applications',
      'Social and dating app features',
      'Mobile-first product development',
      'AI workflow systems with multi-step routing',
      'Voice-enabled applications',
    ],
    results:
      'Live at socialq.chat with an active feature development roadmap. Demonstrates full consumer AI product architecture including multi-modal input, session management, and dynamic UI theming.',
    demoStatus: 'Live — Auth Required',
    screenshots: [
      '/projects/social-q-01-composer.png',
      '/projects/social-q-02-read.png',
      '/projects/social-q-03-send-options.png',
      '/projects/social-q-04-send-options.png',
    ],
    demoUrl: 'https://socialq.chat',
    featured: true,
    productionGrade: true,
  }
]

export const categories = [
  'All',
  'Enterprise',
  'Fintech',
  'AI',
  'Consumer',
  'Internal Tool',
  'Legal Tech',
  'Local Business',
] as const

export const timelineFilters = [
  'All Projects',
  'Production-Grade',
  'With Live Demo',
  'Private Projects',
] as const

export type Category = (typeof categories)[number]
export type TimelineFilter = (typeof timelineFilters)[number]
