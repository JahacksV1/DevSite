# Custom Hooks Guide

> **Patterns for organizing and building custom React hooks.**

---

## 📁 Hook Organization

### Global vs Feature Hooks

```
src/
├── hooks/                      # Global hooks (used across features)
│   ├── useScrollReveal.ts     # Animation triggers
│   ├── useBreakpoint.ts       # Responsive logic
│   ├── useLocalStorage.ts     # Browser APIs
│   ├── useDebounce.ts         # Utility hooks
│   └── index.ts               # Barrel exports
│
└── modules/
    ├── home/hooks/            # Home-specific hooks
    │   └── useHeroAnimations.ts
    ├── projects/hooks/        # Projects-specific hooks
    │   ├── useProjectFilters.ts
    │   └── useProjectData.ts
    └── contact/hooks/         # Contact-specific hooks
        └── useContactForm.ts
```

### When to Create a Global Hook

Put in `src/hooks/` when:

- Used by 2+ modules
- Provides general utility (debounce, throttle)
- Abstracts browser APIs
- Could be extracted to npm package

### When to Create a Feature Hook

Put in `modules/[feature]/hooks/` when:

- Only used within that module
- Contains feature-specific business logic
- Depends on feature-specific types/data

---

## 📐 Hook Structure Template

```typescript
// hooks/useExample.ts
import { useState, useEffect, useCallback, useMemo } from 'react'

// 1. Props interface (if hook takes arguments)
interface UseExampleProps {
  initialValue: string
  onSuccess?: (value: string) => void
}

// 2. Return type interface
interface UseExampleReturn {
  // State
  value: string
  isLoading: boolean
  error: Error | null

  // Actions
  setValue: (value: string) => void
  reset: () => void

  // Computed
  isEmpty: boolean
}

// 3. Hook implementation
export const useExample = ({
  initialValue,
  onSuccess,
}: UseExampleProps): UseExampleReturn => {
  // State
  const [value, setValue] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  // Memoized callbacks
  const reset = useCallback(() => {
    setValue(initialValue)
    setError(null)
  }, [initialValue])

  // Effects
  useEffect(() => {
    if (value && onSuccess) {
      onSuccess(value)
    }
  }, [value, onSuccess])

  // Computed values
  const isEmpty = useMemo(() => value.length === 0, [value])

  // Return organized object
  return {
    // State
    value,
    isLoading,
    error,

    // Actions
    setValue,
    reset,

    // Computed
    isEmpty,
  }
}
```

---

## 🏷️ Naming Conventions

### Hook Names

```typescript
// ✅ GOOD - Clear purpose, "use" prefix
useProjectFilters() // Manages project filter state
useScrollReveal() // Triggers animations on scroll
useContactForm() // Handles contact form logic
useDebounce() // Debounces a value
useLocalStorage() // Syncs with localStorage

// ❌ BAD - Unclear or missing prefix
projectFilters() // Missing "use" prefix
useData() // Too generic
useHandleStuff() // "handle" doesn't belong in name
```

### Return Value Naming

```typescript
// ✅ GOOD - Consistent patterns
const {
  // Boolean state: is/has prefix
  isLoading,
  isOpen,
  hasError,

  // Values: descriptive nouns
  selectedCategory,
  filteredProjects,
  formData,

  // Actions: verb prefix
  setCategory, // setState pattern
  handleSubmit, // event handlers
  clearFilters, // imperative actions
  toggleMenu, // toggle actions

  // Computed: descriptive
  isEmpty,
  totalCount,
  isValid,
} = useExample()

// ❌ BAD - Inconsistent naming
const {
  loading, // Should be isLoading
  category, // Conflicts with setter
  submit, // Should be handleSubmit
  count, // Not descriptive enough
} = useExample()
```

---

## 🎯 Common Hook Patterns

### 1. Data Fetching Hook

```typescript
// modules/projects/hooks/useProjectData.ts
import { useState, useEffect } from 'react'
import type { Project } from '@/types/project'
import { getProjects } from '../lib/projectsData'

interface UseProjectDataReturn {
  projects: Project[]
  isLoading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export const useProjectData = (): UseProjectDataReturn => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchProjects = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await getProjects()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch'))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    isLoading,
    error,
    refetch: fetchProjects,
  }
}
```

### 2. Filter/Selection Hook

```typescript
// modules/projects/hooks/useProjectFilters.ts
import { useState, useMemo, useCallback } from 'react'
import type { Project, ProjectCategory } from '@/types/project'

interface UseProjectFiltersProps {
  projects: Project[]
}

export const useProjectFilters = ({ projects }: UseProjectFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | 'all'
  >('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    return projects
      .filter(
        (p) => selectedCategory === 'all' || p.category === selectedCategory
      )
      .filter((p) => {
        if (!searchTerm) return true
        const search = searchTerm.toLowerCase()
        return (
          p.title.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
        )
      })
  }, [projects, selectedCategory, searchTerm])

  const handleCategoryChange = useCallback(
    (category: ProjectCategory | 'all') => {
      setSelectedCategory(category)
    },
    []
  )

  const handleSearchChange = useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const clearFilters = useCallback(() => {
    setSelectedCategory('all')
    setSearchTerm('')
  }, [])

  return {
    selectedCategory,
    searchTerm,
    filteredProjects,
    handleCategoryChange,
    handleSearchChange,
    clearFilters,
    hasActiveFilters: selectedCategory !== 'all' || searchTerm !== '',
  }
}
```

### 3. Form Hook (with React Hook Form)

```typescript
// modules/contact/hooks/useContactForm.ts
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  budget: z.enum(['10k-20k', '20k-40k', '40k+', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: 'flexible',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    submitStatus,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
```

### 4. Toggle/UI State Hook

```typescript
// hooks/useDisclosure.ts
import { useState, useCallback } from 'react'

interface UseDisclosureReturn {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

export const useDisclosure = (initialState = false): UseDisclosureReturn => {
  const [isOpen, setIsOpen] = useState(initialState)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, onOpen, onClose, onToggle }
}

// Usage
const { isOpen, onToggle, onClose } = useDisclosure()
```

### 5. Debounce Hook

```typescript
// hooks/useDebounce.ts
import { useState, useEffect } from 'react'

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Usage
const [searchTerm, setSearchTerm] = useState('')
const debouncedSearch = useDebounce(searchTerm, 300)

useEffect(() => {
  // This only runs when debouncedSearch changes (300ms after typing stops)
  performSearch(debouncedSearch)
}, [debouncedSearch])
```

### 6. Media Query Hook

```typescript
// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react'

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

type Breakpoint = keyof typeof breakpoints

export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = `(min-width: ${breakpoints[breakpoint]}px)`
    const media = window.matchMedia(query)

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)

    setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [breakpoint])

  return matches
}

// Usage
const isDesktop = useBreakpoint('lg')
const showSidebar = useBreakpoint('md')
```

### 7. Scroll-Triggered Animation Hook

```typescript
// hooks/useScrollReveal.ts
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseScrollRevealProps {
  threshold?: number
  once?: boolean
}

export const useScrollReveal = ({
  threshold = 0.3,
  once = true
}: UseScrollRevealProps = {}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once
  })

  return { ref, isInView }
}

// Usage
const { ref, isInView } = useScrollReveal()

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
>
  Content reveals on scroll
</motion.div>
```

---

## 🔧 Best Practices

### Do This ✅

```typescript
// ✅ Memoize callbacks that are passed as props
const handleClick = useCallback(() => {
  doSomething()
}, [dependency])

// ✅ Memoize expensive computations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name))
}, [items])

// ✅ Clean up effects
useEffect(() => {
  const subscription = subscribe()
  return () => subscription.unsubscribe()
}, [])

// ✅ Type return values explicitly
export const useData = (): UseDataReturn => { ... }

// ✅ Group related returns
return {
  // State
  data, isLoading, error,
  // Actions
  refetch, reset,
  // Computed
  isEmpty, isStale
}
```

### Don't Do This ❌

```typescript
// ❌ Missing dependencies
useEffect(() => {
  fetchData(id) // id should be in deps
}, [])

// ❌ Creating objects/arrays in render
<Component options={{ value: 1 }} />  // Creates new object every render

// ❌ Updating state during render
if (condition) {
  setSomething(value) // Can cause infinite loops
}

// ❌ Overusing useMemo/useCallback
const name = useMemo(() => 'John', [])  // Unnecessary

// ❌ Complex logic in hooks
// Instead, break into smaller hooks or utility functions
```

---

## 📦 Barrel Exports

```typescript
// hooks/index.ts
export { useScrollReveal } from './useScrollReveal'
export { useBreakpoint } from './useBreakpoint'
export { useLocalStorage } from './useLocalStorage'
export { useDebounce } from './useDebounce'
export { useDisclosure } from './useDisclosure'

// Usage
import { useDebounce, useBreakpoint } from '@/hooks'
```

---

## ✅ Hook Checklist

Before using a new hook:

- [ ] Named with `use` prefix
- [ ] Returns typed object (not array for complex hooks)
- [ ] Callbacks are memoized with useCallback
- [ ] Expensive computations use useMemo
- [ ] Effects have proper dependencies
- [ ] Effects clean up subscriptions/timers
- [ ] Placed in correct location (global vs feature)
- [ ] Added to barrel export

---

**Next:** See [CODING_STANDARDS.md](./CODING_STANDARDS.md) for TypeScript and linting rules.
