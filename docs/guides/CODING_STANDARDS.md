# Coding Standards

> **TypeScript, linting, and code quality standards for the DevSite project.**

---

## 🎯 Core Philosophy

1. **TypeScript strict mode** - No `any`, full type coverage
2. **ESLint + Prettier** - Consistent formatting, catch errors early
3. **150-line limit** - Keep components small and focused
4. **Mobile-first** - Design for smallest screen first
5. **Performance-aware** - Every byte and millisecond matters

---

## 📜 TypeScript Rules

### Strict Mode Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Type Patterns

```typescript
// ✅ GOOD - Explicit types
interface Project {
  id: string
  title: string
  category: ProjectCategory
  techStack: string[]
}

// ✅ GOOD - Union types for variants
type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

// ✅ GOOD - Generic types when needed
interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

// ❌ BAD - Using any
const handleData = (data: any) => {}

// ❌ BAD - Implicit any
function processItem(item) {} // item is implicitly any

// ❌ BAD - Type assertions without validation
const user = response as User // Could fail at runtime
```

### Null Safety

```typescript
// ✅ GOOD - Handle nullability
interface Props {
  user?: User
  onSelect: (id: string) => void
}

const Component = ({ user, onSelect }: Props) => {
  // Optional chaining
  const name = user?.name ?? 'Guest'

  // Type guard
  if (!user) return <LoginPrompt />

  return <UserCard user={user} />
}

// ❌ BAD - Ignoring null possibility
const name = user.name  // Could crash if user is undefined
```

### Utility Types

```typescript
// types/global.ts
import { ReactNode } from 'react'

// Common component prop patterns
export type WithClassName<T = object> = T & { className?: string }
export type WithChildren<T = object> = T & { children: ReactNode }

// Make specific properties optional
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Make all properties required
export type RequiredAll<T> = { [K in keyof T]-?: T[K] }

// Extract component props
export type ComponentProps<T> =
  T extends React.ComponentType<infer P> ? P : never
```

---

## 📏 ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],

    // React
    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Code quality
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'no-var': 'error',
    eqeqeq: ['error', 'always'],

    // File size (150 line rule)
    'max-lines': [
      'error',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // Complexity
    complexity: ['warn', 10],
    'max-depth': ['warn', 3],
  },
}
```

---

## ✨ Prettier Configuration

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": false
}
```

### Prettier vs ESLint

- **Prettier** handles: formatting, whitespace, line breaks
- **ESLint** handles: logic errors, best practices, patterns

They work together via `eslint-config-prettier`.

---

## 🎣 Git Hooks (Husky + lint-staged)

```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

### Pre-commit Checks

1. ESLint (auto-fix where possible)
2. Prettier formatting
3. TypeScript type check
4. Tests (if applicable)

---

## 📁 Import Organization

```typescript
// Order: external → internal → types → styles
// Separate with blank lines

// 1. React/Next.js
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// 2. External libraries
import { motion } from 'framer-motion'
import { z } from 'zod'

// 3. Internal - absolute imports
import { Button, Card } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useProjectFilters } from '@/modules/projects/hooks'

// 4. Relative imports (same module)
import { ProjectCard } from './ProjectCard'
import { filterLogic } from '../lib/filterLogic'

// 5. Types (use type imports)
import type { Project, ProjectCategory } from '@/types/project'

// 6. Styles (if any CSS modules)
import styles from './Component.module.css'
```

---

## 🏷️ Naming Conventions

### Files & Directories

```
components/          # lowercase directories
  ui/
    Button.tsx       # PascalCase components
    Card.tsx
    index.ts         # lowercase barrel

hooks/
  useDebounce.ts     # camelCase with 'use' prefix

lib/
  utils.ts           # lowercase utilities
  projectsData.ts    # camelCase

types/
  project.ts         # lowercase type files
```

### Variables & Functions

```typescript
// Constants: SCREAMING_SNAKE_CASE
const MAX_RETRY_COUNT = 3
const API_BASE_URL = 'https://api.example.com'

// Variables: camelCase
const projectData = fetchProjects()
let currentIndex = 0

// Functions: camelCase, verb prefix for actions
function calculateTotal(items: Item[]) {}
function handleSubmit(event: FormEvent) {}
function formatDate(date: Date) {}

// Boolean: is/has/should prefix
const isLoading = true
const hasError = false
const shouldFetch = true

// Event handlers: handle prefix
const handleClick = () => {}
const handleInputChange = () => {}
```

### Components & Types

```typescript
// Components: PascalCase
const ProjectCard = () => {}
const HeroSection = () => {}

// Types/Interfaces: PascalCase
interface ProjectData {}
type ButtonVariant = 'primary' | 'secondary'

// Props interfaces: ComponentNameProps
interface ButtonProps {}
interface ProjectCardProps {}
```

---

## 📝 Comments & Documentation

### When to Comment

```typescript
// ✅ GOOD - Explain WHY, not WHAT

// Using 300ms delay to prevent excessive API calls during rapid typing
const debouncedSearch = useDebounce(searchTerm, 300)

// WCAG AAA requires 7:1 contrast - this color passes at 8.2:1
const textColor = '#f4f4f5'

// ❌ BAD - Obvious comments
// Set loading to true
setIsLoading(true)

// Loop through items
items.forEach((item) => {})
```

### JSDoc for Complex Functions

```typescript
/**
 * Filters projects based on category and search term.
 *
 * @param projects - Array of projects to filter
 * @param category - Category to filter by, or 'all'
 * @param searchTerm - Text to search in title and description
 * @returns Filtered array of projects
 *
 * @example
 * const filtered = filterProjects(projects, 'saas', 'CRM')
 */
export function filterProjects(
  projects: Project[],
  category: ProjectCategory | 'all',
  searchTerm: string
): Project[] {
  // Implementation
}
```

### TODO Comments

```typescript
// TODO: Implement pagination when project count exceeds 20
// FIXME: Memory leak in useEffect cleanup
// HACK: Workaround for Safari flexbox bug (remove when fixed)
// NOTE: This is intentionally different from design spec
```

---

## 🚫 Code Smells to Avoid

### 1. Magic Numbers/Strings

```typescript
// ❌ BAD
if (items.length > 10) {
}
const delay = 300

// ✅ GOOD
const MAX_VISIBLE_ITEMS = 10
const DEBOUNCE_DELAY_MS = 300

if (items.length > MAX_VISIBLE_ITEMS) {
}
```

### 2. Nested Ternaries

```typescript
// ❌ BAD
const status = isLoading ? 'loading' : hasError ? 'error' : 'success'

// ✅ GOOD
function getStatus(isLoading: boolean, hasError: boolean) {
  if (isLoading) return 'loading'
  if (hasError) return 'error'
  return 'success'
}
```

### 3. Large Functions

```typescript
// ❌ BAD - 50+ line function
function processData(data) {
  // ... 50 lines of logic
}

// ✅ GOOD - Small, focused functions
function validateData(data) {
  /* 10 lines */
}
function transformData(data) {
  /* 10 lines */
}
function saveData(data) {
  /* 10 lines */
}

function processData(data) {
  const validated = validateData(data)
  const transformed = transformData(validated)
  return saveData(transformed)
}
```

### 4. Prop Drilling

```typescript
// ❌ BAD - Passing props through many levels
<Parent user={user}>
  <Child user={user}>
    <GrandChild user={user}>
      <GreatGrandChild user={user} />  // Only this needs it
    </GrandChild>
  </Child>
</Parent>

// ✅ GOOD - Use context or composition
<UserProvider>
  <Parent>
    <Child>
      <GreatGrandChild />  // Gets user from context
    </Child>
  </Parent>
</UserProvider>
```

---

## ✅ Code Quality Checklist

Before committing:

### TypeScript

- [ ] No `any` types
- [ ] All functions have return types
- [ ] Props interfaces defined
- [ ] Null/undefined handled

### Style

- [ ] Imports organized
- [ ] Consistent naming
- [ ] No magic numbers
- [ ] Comments explain WHY

### Components

- [ ] Under 150 lines
- [ ] Single responsibility
- [ ] Props validated
- [ ] Accessible

### Performance

- [ ] useCallback for handlers passed as props
- [ ] useMemo for expensive calculations
- [ ] No unnecessary re-renders
- [ ] Images optimized

---

**Pro tip:** Run `npm run type-check && npm run lint` before committing to catch issues early.
