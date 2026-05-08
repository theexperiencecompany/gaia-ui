# Contributing to GAIA UI

Thanks for your interest in contributing! GAIA UI is a registry of production-ready components for AI assistants and chat interfaces, built on [shadcn/ui](https://ui.shadcn.com/). This guide covers everything you need to add components, fix bugs, or improve documentation.

For deeper design and architectural guidance, see [AGENTS.md](./AGENTS.md).

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding a New Component](#adding-a-new-component)
- [Design Principles](#design-principles)
- [Accessibility Requirements](#accessibility-requirements)
- [Commit & Pull Request Guidelines](#commit--pull-request-guidelines)
- [Component Checklist](#component-checklist)
- [Getting Help](#getting-help)

## Code of Conduct

Be kind, be constructive, assume good intent. Harassment, discrimination, or disrespectful behavior is not tolerated. Disagreements are fine — make them about the work, not the person.

## Ways to Contribute

- **Report bugs** — Open an issue with reproduction steps, expected vs. actual behavior, and your environment.
- **Suggest components** — Open a discussion or issue describing the use case before building. We're selective about what ships (see [Philosophy](#philosophy)).
- **Improve docs** — Typos, clarifications, better examples — all welcome.
- **Submit components** — Follow the [Adding a New Component](#adding-a-new-component) flow.
- **Fix bugs** — Pick up an open issue, comment to claim it, then send a PR.

### Philosophy

We focus on **quality over quantity**. Every component should:

- Solve a real problem in conversational/AI UIs
- Be production-tested or production-ready
- Improve on existing alternatives (don't duplicate generic shadcn components)
- Be accessible, responsive, and themeable

If you're unsure whether a component fits, open an issue first.

## Development Setup

### Prerequisites

- **Node.js** 20+
- **pnpm** 9+ (this repo uses pnpm; don't mix with npm/yarn)

### Local setup

```bash
# 1. Fork & clone
git clone https://github.com/<your-username>/gaia-ui.git
cd gaia-ui

# 2. Install dependencies
pnpm install

# 3. Start the dev server (docs site at http://localhost:3000)
pnpm run dev

# 4. Build the registry whenever you change registry.json or component files
pnpm run registry:build
```

### Useful scripts

| Command | What it does |
|---|---|
| `pnpm run dev` | Run the Next.js docs site locally |
| `pnpm run build` | Production build |
| `pnpm run registry:build` | Rebuild the shadcn registry JSON files |
| `pnpm run type` | TypeScript type-check |
| `pnpm run lint` | Run Biome linter |
| `pnpm run lint:fix` | Auto-fix lint issues |
| `pnpm run format` | Format with Biome |

Run `pnpm run type` and `pnpm run lint` before pushing.

## Project Structure

```
gaia-ui/
├── app/                          # Next.js docs app (App Router)
├── components/                   # Internal components for the docs site
│   └── previews/                 # Component preview demos (per component)
├── content/
│   └── docs/components/          # MDX docs for each component
├── registry/
│   └── new-york/ui/              # The actual published components
├── lib/                          # Shared utilities, navigation, helpers
├── public/r/                     # Generated registry JSON (build output)
├── registry.json                 # Registry manifest — every component listed here
├── components.json               # shadcn config
└── AGENTS.md                     # Design philosophy & component patterns
```

## Adding a New Component

There are five places to touch when adding a component. Use an existing component (e.g. `tool-calls-section`, `composer`, `weather-card`) as a reference.

### 1. Create the component

Add the component file at `registry/new-york/ui/<component-name>.tsx`:

```tsx
import { cn } from "@/lib/utils";

export interface YourComponentProps {
  /** Short description of this prop. */
  variant?: "default" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export function YourComponent({ variant = "default", className, children }: YourComponentProps) {
  return (
    <div className={cn("base-classes", variant === "outline" && "outline-classes", className)}>
      {children}
    </div>
  );
}
```

Keep one component per file (or one compound family per file). Co-locate CSS as `your-component.css` only when Tailwind isn't enough.

### 2. Register it

Add an entry to `registry.json`:

```json
{
  "name": "your-component",
  "type": "registry:ui",
  "title": "Your Component",
  "description": "Brief, compelling description of what it does.",
  "dependencies": ["any-npm-deps"],
  "registryDependencies": ["icons"],
  "files": [
    {
      "path": "registry/new-york/ui/your-component.tsx",
      "type": "registry:ui"
    }
  ]
}
```

Then run:

```bash
pnpm run registry:build
```

### 3. Build previews

Create demo files under `components/previews/your-component/`:

```
components/previews/your-component/
├── default.tsx          # Basic usage
├── with-variants.tsx    # Variant showcase
└── custom-example.tsx   # Optional advanced demo
```

Each preview is a small standalone component imported by the docs page.

### 4. Write the docs

Add `content/docs/components/your-component.mdx`:

```mdx
---
title: Your Component
description: What it does and why someone would use it.
---

<ComponentPreview name="your-component/default" />

## Usage

\`\`\`tsx
import { YourComponent } from "@/components/ui/your-component";

<YourComponent variant="default">Hello</YourComponent>
\`\`\`

## Installation

<Tabs defaultValue="automatic">
  {/* Automatic (CLI) and Manual install tabs */}
</Tabs>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "outline"` | `"default"` | Visual variant. |
| `className` | `string` | — | Extra classes. |
```

### 5. Update navigation (if needed)

If your component starts a new category or needs custom placement, edit `lib/navigation.ts`.

### 6. Test locally

```bash
pnpm run dev
```

In a separate test project:

```bash
npx shadcn@latest add http://localhost:3000/r/your-component.json
```

Verify the component installs cleanly, renders, and behaves correctly.

## Design Principles

Full details in [AGENTS.md](./AGENTS.md). The short version:

- **Flat, no heavy borders.** Use subtle backgrounds, soft shadows, and whitespace for hierarchy.
- **Theme-aware colors.** Use CSS variables (`bg-background`, `text-foreground`, `text-muted-foreground`) — never hardcoded `bg-white`/`text-black`.
- **Generous spacing.** Cards `p-4` minimum, `p-6` ideal. Touch targets ≥ 44×44px.
- **Restrained motion.** 150–300ms for most transitions, never beyond 500ms. Animate `opacity` and `transform`, not `width`/`height`.
- **Consistent icons.** Use the bundled `Icons` component (Hugeicons) at `size-4`, `size-5`, or `size-6`.
- **`cn()` for classes.** Always merge with `cn` from `@/lib/utils` so consumers can override.

## Accessibility Requirements

Non-negotiable. Every component must:

- Be **fully keyboard navigable** with logical tab order and visible focus styles.
- Use **semantic HTML** (`<button>`, not `<div onClick>`). If you must use a non-semantic element, add `role`, `tabIndex`, and keyboard handlers.
- Provide **ARIA labels** for icon-only controls and dynamic regions.
- Maintain **WCAG AA contrast** (4.5:1 for body text, 3:1 for large text) in both themes.
- Respect **`prefers-reduced-motion`** for animations.
- Work in **both light and dark modes**.

## Commit & Pull Request Guidelines

### Commits

- Use clear, imperative messages: `feat: add holo-card component`, `fix: handle empty state in composer`.
- Conventional Commits style is preferred (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- Keep commits focused — one logical change per commit.

### Pull requests

1. Fork the repo and create a branch off `main`: `git checkout -b feat/your-component`.
2. Make your changes following the structure above.
3. Run `pnpm run type`, `pnpm run lint`, and `pnpm run registry:build` — all must pass.
4. Test the component end-to-end with `npx shadcn@latest add` against your local dev server.
5. Push and open a PR with:
   - **What** the change does and **why**.
   - Screenshots or screen recordings for any visual change (light + dark mode).
   - Notes on accessibility (keyboard nav, screen reader labels).
   - Linked issue if applicable.

PRs should be small and focused. Large, sprawling PRs are hard to review and slow to merge.

## Component Checklist

Before you mark a PR ready for review:

- [ ] Component lives at `registry/new-york/ui/<name>.tsx`
- [ ] Entry added to `registry.json`
- [ ] `pnpm run registry:build` succeeded
- [ ] Preview demos in `components/previews/<name>/`
- [ ] MDX docs in `content/docs/components/<name>.mdx` with props table
- [ ] Works in light and dark mode
- [ ] Fully keyboard accessible with proper ARIA labels
- [ ] Respects `prefers-reduced-motion`
- [ ] No hardcoded colors — uses CSS variables
- [ ] Types are exported
- [ ] `pnpm run type` and `pnpm run lint` pass
- [ ] Tested via `npx shadcn@latest add http://localhost:3000/r/<name>.json`

## Getting Help

- **Discord** — [discord.heygaia.io](https://discord.heygaia.io) — fastest way to ask questions
- **GitHub Issues** — [github.com/theexperiencecompany/gaia-ui/issues](https://github.com/theexperiencecompany/gaia-ui/issues) — bugs and feature requests
- **GitHub Discussions** — open-ended ideas and proposals

When in doubt, look at existing components — `tool-calls-section`, `composer`, and `weather-card` are good references for complex UI patterns.

Thanks again for contributing — keep it clean, accessible, and beautiful.
