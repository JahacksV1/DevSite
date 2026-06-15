# Frontend Architecture Guide

> **This document extends the existing design system specifications with detailed component architecture, modular organization, and development patterns.**

---

## 🏗️ Modular Architecture Philosophy

### **Module-First Organization**

Each feature/page gets its own module containing everything needed for that feature:

```
src/modules/[feature]/
  ├── components/          # Feature-specific components
  ├── hooks/              # Feature-specific custom hooks
  ├── lib/                # Feature utilities, services, data
  └── index.ts            # Re-export the page component
```

### **Why This Structure:**

- **Co-location:** Related code stays together
- **Scalability:** Easy to add new features without conflicts
- **Team Collaboration:** Clear ownership boundaries
- **Tree Shaking:** Only import what you need
- **Testing:** Isolated, focused test suites

---

## 📁 Complete File Structure

```
src/
├── app/                    # Next.js App Router (routing only)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Re-export from modules/home
│   ├── projects/
│   │   ├── page.tsx       # Re-export from modules/projects
│   │   └── [slug]/
│   │       └── page.tsx   # Re-export from modules/projects/detail
│   ├── about/
│   │   └── page.tsx       # Re-export from modules/about
│   └── contact/
│       └── page.tsx       # Re-export from modules/contact
│
├── modules/                # Feature modules (main business logic)
│   ├── home/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProjectsPreview.tsx
│   │   │   └── CTASection.tsx
│   │   ├── hooks/
│   │   │   └── useHeroAnimations.ts
│   │   ├── lib/
│   │   │   └── heroData.ts
│   │   └── index.tsx      # HomePage component
│   │
│   ├── projects/
│   │   ├── components/
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilters.tsx
│   │   │   └── ProjectDetail.tsx
│   │   ├── hooks/
│   │   │   ├── useProjectFilters.ts
│   │   │   └── useProjectData.ts
│   │   ├── lib/
│   │   │   ├── projectsData.ts
│   │   │   └── filterLogic.ts
│   │   ├── index.tsx      # ProjectsPage component
│   │   └── detail.tsx     # ProjectDetailPage component
│   │
│   ├── about/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── index.tsx
│   │
│   └── contact/
│       ├── components/
│       ├── hooks/
│       ├── lib/
│       └── index.tsx
│
├── components/             # Shared/Global components
│   ├── ui/                # Atomic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   └── index.ts       # Barrel exports
│   │
│   ├── layout/            # Layout components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── PageWrapper.tsx
│   │
│   └── animations/        # Reusable animation components
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       ├── StaggerGrid.tsx
│       └── PageTransition.tsx
│
├── hooks/                 # Global custom hooks
│   ├── useScrollReveal.ts
│   ├── useBreakpoint.ts
│   └── useLocalStorage.ts
│
├── lib/                   # Global utilities & services
│   ├── utils.ts           # General utilities (cn, etc.)
│   ├── constants.ts       # Global constants
│   ├── validations.ts     # Zod schemas
│   └── services/          # External service integrations
│       ├── email.ts       # Resend API
│       └── analytics.ts   # Tracking
│
├── types/                 # TypeScript type definitions
│   ├── project.ts
│   ├── service.ts
│   └── global.ts
│
└── styles/
    └── globals.css        # Global styles + Tailwind
```

---

## 🧱 Component Architecture Principles

### **1. Atomic Design + 150 Line Rule**

**Component Hierarchy:**

```
Atoms (≤50 lines)     → Button, Badge, Input
Molecules (≤100 lines) → SearchBar, ProjectCard
Organisms (≤150 lines) → Navigation, HeroSection
Templates (≤150 lines) → PageLayout, GridLayout
```

**Enforcement Rules:**

- **No component over 150 lines**
- If approaching limit → extract sub-components
- Prefer composition over large monolithic components
- Use render props or children for flexibility

### **2. Component Naming Conventions**

```typescript
// ✅ GOOD - Descriptive, specific
export const ProjectFilterDropdown = () => {}
export const HeroGradientBackground = () => {}
export const ContactFormSubmitButton = () => {}

// ❌ BAD - Generic, unclear
export const Dropdown = () => {}
export const Background = () => {}
export const SubmitButton = () => {}
```

**Rules:**

- **PascalCase** for components
- **Descriptive names** that explain purpose
- **Prefix with context** when needed (Hero-, Project-, Contact-)
- **Suffix with type** when helpful (-Button, -Modal, -Card)

### **3. Component Structure Template**

```typescript
// components/ui/Button.tsx
import { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

// ✅ Types defined first
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

// ✅ Animation variants if needed
const buttonVariants: Variants = {
  hover: { y: -2, scale: 1.02 },
  tap: { y: 0, scale: 0.98 }
}

// ✅ Main component (keep under 150 lines)
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  disabled = false
}: ButtonProps) => {
  // ✅ Computed classes
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200'
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary to-primary-dim text-bg-primary',
    secondary: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
  }
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      variants={buttonVariants}
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </motion.button>
  )
}

// ✅ Default export for easier imports
export default Button
```

---

## 🔗 Hook Architecture

### **Hook Naming & Organization**

```typescript
// ✅ Global hooks (src/hooks/)
useScrollReveal() // Global scroll animations
useBreakpoint() // Responsive utilities
useLocalStorage() // Browser APIs
useDebounce() // General utilities

// ✅ Feature hooks (src/modules/[feature]/hooks/)
useProjectFilters() // Projects-specific logic
useContactForm() // Contact-specific logic
useHeroAnimations() // Home-specific logic
```

### **Hook Structure Template**

```typescript
// modules/projects/hooks/useProjectFilters.ts
import { useState, useMemo, useCallback } from 'react'
import type { Project, ProjectCategory } from '@/types/project'

interface UseProjectFiltersProps {
  projects: Project[]
  initialCategory?: ProjectCategory
}

export const useProjectFilters = ({
  projects,
  initialCategory = 'all',
}: UseProjectFiltersProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>(initialCategory)
  const [searchTerm, setSearchTerm] = useState('')

  // ✅ Memoize expensive computations
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        if (selectedCategory === 'all') return true
        return project.category === selectedCategory
      })
      .filter((project) => {
        if (!searchTerm) return true
        return (
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
  }, [projects, selectedCategory, searchTerm])

  // ✅ Memoize callbacks to prevent re-renders
  const handleCategoryChange = useCallback((category: ProjectCategory) => {
    setSelectedCategory(category)
  }, [])

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const clearFilters = useCallback(() => {
    setSelectedCategory('all')
    setSearchTerm('')
  }, [])

  // ✅ Return object with clear naming
  return {
    // State
    selectedCategory,
    searchTerm,
    filteredProjects,

    // Actions
    handleCategoryChange,
    handleSearchChange,
    clearFilters,

    // Computed
    totalCount: projects.length,
    filteredCount: filteredProjects.length,
    hasActiveFilters: selectedCategory !== 'all' || searchTerm !== '',
  }
}
```

---

## 📦 Module Organization Patterns

### **Re-Export Strategy**

```typescript
// app/page.tsx (Next.js App Router)
export { default } from '@/modules/home'

// app/projects/page.tsx
export { default } from '@/modules/projects'

// app/projects/[slug]/page.tsx
export { default, generateStaticParams } from '@/modules/projects/detail'
```

### **Module Index Pattern**

```typescript
// modules/home/index.tsx
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { ProjectsPreview } from './components/ProjectsPreview'
import { CTASection } from './components/CTASection'
import { PageTransition } from '@/components/animations'

const HomePage = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <ProjectsPreview />
      <CTASection />
    </PageTransition>
  )
}

export default HomePage
```

### **Barrel Exports for UI Components**

```typescript
// components/ui/index.ts
export { Button } from './Button'
export { Card } from './Card'
export { Badge } from './Badge'
export { Input } from './Input'
export type { ButtonProps } from './Button'
export type { CardProps } from './Card'

// Usage:
import { Button, Card, Badge } from '@/components/ui'
```

---

## 🎯 Performance Patterns

### **1. Smart Component Splitting**

```typescript
// ✅ Split large components by responsibility
// Instead of one 200-line HeroSection:

// HeroSection.tsx (orchestrator - ~50 lines)
import { HeroContent } from './HeroContent'
import { HeroBackground } from './HeroBackground'
import { HeroAnimations } from './HeroAnimations'

export const HeroSection = () => (
  <section className="relative min-h-screen">
    <HeroBackground />
    <HeroAnimations>
      <HeroContent />
    </HeroAnimations>
  </section>
)

// HeroContent.tsx (~80 lines)
// HeroBackground.tsx (~40 lines)
// HeroAnimations.tsx (~60 lines)
```

### **2. Lazy Loading Patterns**

```typescript
// Lazy load heavy components
const ProjectDetail = lazy(() => import('./ProjectDetail'))
const ContactForm = lazy(() => import('./ContactForm'))

// With loading state
const LazyProjectDetail = () => (
  <Suspense fallback={<ProjectDetailSkeleton />}>
    <ProjectDetail />
  </Suspense>
)
```

### **3. Memoization Strategy**

```typescript
// ✅ Memo expensive components
export const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectContent {...project} />
    </Card>
  )
})

// ✅ Memo with custom comparison
export const ProjectGrid = memo(
  ({ projects, filters }: ProjectGridProps) => {
    // Component logic
  },
  (prevProps, nextProps) => {
    return prevProps.projects.length === nextProps.projects.length &&
           prevProps.filters.category === nextProps.filters.category
  }
)
```

---

## 🏷️ TypeScript Patterns

### **1. Strict Type Definitions**

```typescript
// types/project.ts
export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  techStack: TechStack[]
  image: string
  slug: string
  featured: boolean
  completedAt: Date
  client?: Client
  results?: ProjectResults
}

export type ProjectCategory =
  | 'saas'
  | 'ai'
  | 'automation'
  | 'integration'
  | 'video'
  | 'legal'

export interface ProjectResults {
  metrics: ProjectMetric[]
  testimonial?: Testimonial
  caseStudyUrl?: string
}

// ✅ Use const assertions for better DX
export const PROJECT_CATEGORIES = [
  'saas',
  'ai',
  'automation',
  'integration',
  'video',
  'legal',
] as const
```

### **2. Utility Types**

```typescript
// types/global.ts
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type WithClassName<T = {}> = T & { className?: string }
export type WithChildren<T = {}> = T & { children: ReactNode }
export type AnimatedComponent<T = {}> = T & { animate?: boolean }

// Usage:
interface ButtonProps extends WithClassName {
  variant: 'primary' | 'secondary'
  // className is automatically optional
}
```

---

## 🛠️ Development Workflow

### **1. Component Development Process**

```bash
# 1. Create component file
touch src/components/ui/NewComponent.tsx

# 2. Write types first
interface NewComponentProps {}

# 3. Implement component (< 150 lines)
export const NewComponent = () => {}

# 4. Add to barrel export
echo "export { NewComponent } from './NewComponent'" >> src/components/ui/index.ts

# 5. Add Storybook story (if using)
touch src/components/ui/NewComponent.stories.tsx
```

### **2. Module Development Process**

```bash
# 1. Create module structure
mkdir -p src/modules/new-feature/{components,hooks,lib}

# 2. Create main component
touch src/modules/new-feature/index.tsx

# 3. Create page route
touch src/app/new-feature/page.tsx
# Add: export { default } from '@/modules/new-feature'

# 4. Implement feature-specific components
touch src/modules/new-feature/components/FeatureComponent.tsx

# 5. Add custom hooks if needed
touch src/modules/new-feature/hooks/useFeatureLogic.ts
```

### **3. Quality Gates**

```typescript
// .eslintrc.js - Custom rules for architecture
module.exports = {
  rules: {
    // Enforce 150 line limit
    'max-lines': [
      'error',
      { max: 150, skipBlankLines: true, skipComments: true },
    ],

    // Enforce hook naming
    'react-hooks/rules-of-hooks': 'error',

    // Enforce component naming
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['PascalCase'],
        filter: { regex: '^use[A-Z]', match: false },
      },
    ],
  },
}
```

---

## 📚 Best Practices Checklist

### **Component Quality**

- [ ] Component under 150 lines
- [ ] Single responsibility principle
- [ ] Proper TypeScript types
- [ ] Memoized when appropriate
- [ ] Accessible (ARIA labels, keyboard nav)
- [ ] Responsive design
- [ ] Animation respects `prefers-reduced-motion`

### **Module Quality**

- [ ] Clear module boundaries
- [ ] No circular dependencies
- [ ] Feature-specific code co-located
- [ ] Proper barrel exports
- [ ] Tests for complex logic

### **Performance**

- [ ] Lazy load below-fold components
- [ ] Optimize images with Next.js Image
- [ ] Minimize bundle size
- [ ] Use React.memo strategically
- [ ] Debounce expensive operations

### **Developer Experience**

- [ ] Clear naming conventions
- [ ] Comprehensive TypeScript types
- [ ] JSDoc for complex functions
- [ ] Consistent file structure
- [ ] Good error boundaries

---

## 🔄 Migration Strategy

When converting existing components to this architecture:

1. **Audit current components** - Identify >150 line components
2. **Extract sub-components** - Break down large components
3. **Move to modules** - Relocate feature-specific code
4. **Add TypeScript** - Strengthen type safety
5. **Optimize performance** - Add memoization where needed
6. **Test thoroughly** - Ensure no regressions

---

**Remember:** This architecture should feel natural and productive. If it's fighting you, adjust the patterns to fit your team's workflow.
