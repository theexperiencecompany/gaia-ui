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
- [Versioning & Releases](#versioning--releases)
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

### Changesets

Every PR that touches the published surface of `@heygaia/ui` must include a changeset — see the [Versioning & Releases](#versioning--releases) section for the full flow. The short version: run `pnpm changeset`, pick a bump type, write a one-line summary, commit the generated file alongside your code.

## Versioning & Releases

We use [Changesets](https://github.com/changesets/changesets) for versioning and [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC) for the actual `npm publish`. There is no manual `npm version` and no `NPM_TOKEN` — releases are gated on a single human merge.

### Why Changesets

Each PR ships with a small `.changeset/*.md` file describing what changed and how it should bump SemVer (patch / minor / major). Authors decide intent and write release notes themselves, instead of deriving them from commit messages. Multiple PRs accumulate into a single release PR with a clean, curated changelog.

### Contributor flow — adding a changeset to your PR

After making your changes, run:

```bash
pnpm changeset
```

The CLI asks:

1. **Which packages to bump.** This repo only publishes `@heygaia/ui`, so press space to select it.
2. **Bump type.** See [Choosing the bump type](#choosing-the-bump-type) below.
3. **Summary.** One sentence in past tense, written for users — it lands in the changelog. e.g. *"Fix focus ring on Composer when used inside a dialog."*

That writes `.changeset/<random-name>.md`. Commit it with the rest of your PR — the `Changeset Check` workflow blocks PRs that don't include one.

If your change has zero user-visible impact (CI tweaks, internal docs, dev-only refactors), apply the **`skip-changeset`** label to the PR instead. The check will pass without a changeset and no release will be triggered for that PR.

### Choosing the bump type

The package follows [Semantic Versioning](https://semver.org/). Use this guide:

| Bump | When | Examples |
|---|---|---|
| **patch** | Bug fix, dep bump, perf improvement, doc-only change in published files, anything internal | Fix a layout bug, upgrade a transitive dep, tighten an `aria-label` |
| **minor** | New component, new prop, new variant, anything additive that doesn't break existing usage | Add a new component to the registry, add a new optional prop |
| **major** | Breaking change to the published surface — removed/renamed components, changed required props, breaking visual changes | Rename a component, change default behavior of an existing prop, drop React 18 support |

When in doubt, prefer the smaller bump and call it out in PR review.

### Release flow — what happens after merge

The release flow has two human-merge gates and is otherwise automatic:

1. **You merge a feature PR** containing a changeset into `main`.
2. The **Release** workflow (`.github/workflows/publish.yml`) sees pending changesets and opens (or updates) a PR titled **"chore: release"**. This PR:
   - Bumps `package.json` version based on the highest pending bump type.
   - Consumes all pending `.changeset/*.md` files and writes their summaries into `CHANGELOG.md`.
   - Uses [`@changesets/changelog-github`](https://github.com/changesets/changesets/tree/main/packages/changelog-github) to enrich entries with PR/commit links.
3. **A maintainer merges the "chore: release" PR.** This is the moment of release.
4. The Release workflow runs again on the merge, runs `pnpm exec changeset publish`, which:
   - Calls `npm publish` for the bumped package.
   - Uses **OIDC Trusted Publishing** (no token in the repo) — npm verifies the GitHub Actions run is authorized.
   - Attaches build provenance automatically (npm 11+).
   - Creates a matching git tag and GitHub Release with the changelog entry.

Within ~1 minute the new version is live on npm.

### Releasing a hotfix

The same flow handles patch releases:

1. Open a PR with the fix and a `patch` changeset.
2. Merge to `main`.
3. Merge the release PR that pops up.

If a release PR is already open with queued changes, your hotfix joins that next release rather than going out separately. To force an immediate release of just the hotfix, merge the release PR before opening the hotfix PR (so it ships against a clean baseline).

### Maintainer setup (one-time)

For the Trusted Publishing flow to work, the package needs a configured trusted publisher on npmjs.com:

1. Go to **https://www.npmjs.com/package/@heygaia/ui/access** as a package maintainer.
2. Under **Trusted Publisher**, add:
   - Publisher: **GitHub Actions**
   - Organization or user: `theexperiencecompany`
   - Repository: `gaia-ui`
   - Workflow filename: `publish.yml`
   - Environment: *(leave blank)*

This only needs to happen once per package. After that, any merge into `main` from `theexperiencecompany/gaia-ui` running `publish.yml` is authorized to publish.

### Troubleshooting

- **`Changeset Check` fails on my PR.** You forgot to run `pnpm changeset`, or your changeset wasn't committed. If the change is genuinely internal, label the PR `skip-changeset`.
- **The release workflow runs but no release PR appears.** There are no pending `.changeset/*.md` files (other than `README.md`). Either every recent PR shipped without a changeset, or all changesets have already been consumed by a previous release.
- **`npm error code ENEEDAUTH` in the publish run.** Trusted Publishing isn't configured on npmjs.com — see [Maintainer setup](#maintainer-setup-one-time).
- **Release PR has the wrong version bump.** Edit the `.changeset/*.md` files on the PR branch, push, and the changesets bot will recompute. Or close the release PR — the workflow will reopen it on the next push to `main`.

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
- [ ] Added a changeset (`pnpm changeset`) describing the change

## Getting Help

- **Discord** — [discord.heygaia.io](https://discord.heygaia.io) — fastest way to ask questions
- **GitHub Issues** — [github.com/theexperiencecompany/gaia-ui/issues](https://github.com/theexperiencecompany/gaia-ui/issues) — bugs and feature requests
- **GitHub Discussions** — open-ended ideas and proposals

When in doubt, look at existing components — `tool-calls-section`, `composer`, and `weather-card` are good references for complex UI patterns.

Thanks again for contributing — keep it clean, accessible, and beautiful.
