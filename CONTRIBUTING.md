# Adding New Components

## Required Files

### 1. Component Implementation

**Location:** `registry/new-york/ui/[component-name].tsx`

Your component code.

### 2. Documentation

**Location:** `content/docs/components/[component-name].mdx`

Required frontmatter:

```yaml
---
title: Component Name
description: Brief description
---
```

### 3. Site Navigation

**Location:** `config/site.ts`

Add to `sidebarNav` under "Components":

```typescript
{
  title: "Your Component",
  href: "/docs/components/your-component",
}
```

### 4. Registry Files

**a) `public/r/registry.json`**
Add to items array

**b) `public/r/[component-name].json`**
Standalone registry entry:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "component-name",
  "type": "registry:ui",
  "title": "Component Name",
  "description": "Brief description",
  "dependencies": ["package-name"],
  "files": [
    {
      "path": "registry/new-york/ui/component-name.tsx",
      "type": "registry:ui"
    }
  ]
}
```

### 5. MDX Components _(optional)_

**Location:** `mdx-components.tsx`

Import and export if needed globally in MDX (this is necessary so that the preview is properly rendered).

### 6. UI Dependencies _(optional)_

**Location:** `components/ui/[dependency].tsx`

Add any required base UI components.

### 7. Package Dependencies _(optional)_

**Locations:** `package.json` & `pnpm-lock.yaml`

Run `pnpm add [package]` if needed.

---

## Checklist

- [ ] `registry/new-york/ui/[component-name].tsx`
- [ ] `content/docs/components/[component-name].mdx`
- [ ] `config/site.ts`
- [ ] `public/r/registry.json`
- [ ] `public/r/[component-name].json`
- [ ] `mdx-components.tsx` _(if needed)_
- [ ] `components/ui/` _(if needed)_
- [ ] `package.json` _(if needed)_
