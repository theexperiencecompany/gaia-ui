# Contributing to GAIA UI

Thank you for your interest in contributing to GAIA UI! This guide will help you understand how to add new components to the registry.

## Prerequisites

Before you start, make sure you have:

- Node.js 18+ installed
- pnpm package manager
- Familiarity with React, TypeScript, and Tailwind CSS
- Understanding of shadcn/ui component architecture

## Project Structure

```
gaia-ui/
├── registry/
│   └── new-york/
│       └── ui/           # Component source files
├── components/
│   └── previews/         # Component preview demos
├── content/
│   └── docs/
│       └── components/   # Component documentation (MDX)
└── registry.json         # Registry configuration
```

## Adding a New Component

### 1. Create Your Component

Create your component file in `registry/new-york/ui/`:

```bash
touch registry/new-york/ui/your-component.tsx
```

**Component Guidelines:**

- Use TypeScript with proper type definitions
- Follow existing component patterns in the registry
- Use Tailwind CSS v4 for styling
- Ensure accessibility (ARIA labels, keyboard navigation)
- Include proper error handling and edge cases
- Use `class-variance-authority` for variants when needed

**Example Component Structure:**

```tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface YourComponentProps {
  // Your props here
  className?: string;
}

export function YourComponent({ className, ...props }: YourComponentProps) {
  return (
    <div className={cn("your-base-classes", className)} {...props}>
      {/* Your component implementation */}
    </div>
  );
}
```

### 2. Update Registry Configuration

Add your component to `registry.json`:

```json
{
  "name": "your-component",
  "type": "registry:ui",
  "files": [
    {
      "path": "ui/your-component.tsx",
      "type": "registry:ui"
    }
  ],
  "dependencies": ["framer-motion", "other-deps"],
  "registryDependencies": ["button", "tooltip"]
}
```

**Registry Fields:**

- `name`: Component name (kebab-case)
- `type`: Always `"registry:ui"`
- `files`: Array of component files with paths relative to `registry/new-york/`
- `dependencies`: npm packages required by the component
- `registryDependencies`: Other shadcn/ui components needed

### 3. Create Component Preview

Add a preview demo in `components/previews/your-component/`:

```tsx
import { YourComponent } from "@/registry/new-york/ui/your-component";

export function YourComponentPreview() {
  return (
    <div className="flex items-center justify-center p-8">
      <YourComponent />
    </div>
  );
}
```

Export your preview in `components/previews/index.tsx`:

```tsx
export { YourComponentPreview } from "./your-component/preview";
```

### 4. Write Documentation

Create documentation in `content/docs/components/your-component.mdx`:

```mdx
---
title: "Your Component"
description: "Brief description of what your component does and when to use it"
---

# Your Component

A detailed description of your component's purpose and use cases.

## Installation

<ComponentInstall name="your-component" />

## Preview

<ComponentPreview name="your-component" />

## Usage

\`\`\`tsx
import { YourComponent } from "@/components/ui/your-component";

export function Example() {
  return <YourComponent />;
}
\`\`\`

## Props

<PropsTable component="YourComponent" />

## Examples

### Basic Example

Description of this example...

<ComponentPreview name="your-component-basic" />
```

### 5. Build and Test

Build the registry to generate component JSON files:

```bash
pnpm run registry:build
```

Test your component installation locally:

```bash
# Start dev server
pnpm run dev

# In another terminal, test installation
npx shadcn@latest add http://localhost:3000/r/your-component.json
```

### 6. Type Check and Lint

Ensure your code passes all checks:

```bash
# Type checking
pnpm run type

# Linting
pnpm run lint

# Auto-fix issues
pnpm run lint:fix

# Format code
pnpm run format
```

## Component Quality Standards

### Design Principles

- **Production-Ready**: Component should be battle-tested and handle edge cases
- **Accessible**: Follow WCAG guidelines and support keyboard navigation
- **Performant**: Optimize for rendering performance and bundle size
- **Flexible**: Support common use cases while allowing customization
- **Documented**: Include clear documentation with examples

### Code Quality

- **TypeScript**: Proper types for all props and internal functions
- **Error Handling**: Graceful handling of edge cases and errors
- **Testing**: Manually test across different browsers and devices
- **Responsive**: Works on mobile, tablet, and desktop
- **Theme Support**: Respects light/dark mode

### What We Don't Accept

❌ Generic components that duplicate existing shadcn/ui components  
❌ Components with excessive dependencies  
❌ Poorly documented or untested components  
❌ Components that don't follow existing patterns  
❌ Components without real-world use cases

## Submitting Your Contribution

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-component`
3. Follow the steps above to add your component
4. Commit your changes with clear messages
5. Push to your fork
6. Open a Pull Request with:
   - Clear description of the component
   - Screenshots/videos of the component in action
   - Use cases and examples
   - Any breaking changes or migration notes

## Need Help?

- Check existing components for reference patterns
- Read the [shadcn documentation](https://ui.shadcn.com)
- Open a [GitHub Discussion](https://github.com/theexperiencecompany/gaia-ui/discussions)
- Join our community channels

## Philosophy

We focus on **quality over quantity**. Each component should:

- Solve a real problem in modern web applications
- Be something we use in production at GAIA
- Handle edge cases and accessibility properly
- Be better than existing alternatives

If you're building something new and innovative that improves the developer experience, we want to see it!

---

Thank you for contributing to GAIA UI! 🎉
