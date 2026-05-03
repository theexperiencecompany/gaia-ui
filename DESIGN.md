---
name: GAIA UI
description: Open-source components for AI assistants and conversational interfaces.
colors:
  ink: "oklch(0.145 0 0)"
  ink-muted: "oklch(0.556 0 0)"
  surface: "oklch(1 0 0)"
  surface-raised: "oklch(0.97 0 0)"
  surface-border: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  electric-blue: "#00bbff"
  cta-blue: "#0080ff"
  destructive: "oklch(0.577 0.245 27.325)"
  ink-dark: "oklch(0.985 0 0)"
  surface-dark: "oklch(0.145 0 0)"
  surface-dark-raised: "oklch(0.205 0 0)"
  surface-dark-muted: "oklch(0.269 0 0)"
  border-dark: "oklch(1 0 0 / 0.1)"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  mono:
    fontFamily: "ui-monospace, Cascadia Code, Source Code Pro, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  bubble: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "oklch(0.205 0 0)"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-raised-blue:
    backgroundColor: "{colors.cta-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.xl}"
    padding: "10px 16px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
  badge-default:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
---

# Design System: GAIA UI

## 1. Overview

**Creative North Star: "The Considered Instrument"**

GAIA UI is built-in-production and shared without ceremony. The design system proves quality by example: the precision of the components makes the argument; the site doesn't state it. Every surface follows the logic of the things it showcases. If the library stands for reducing friction and eliminating visual noise, the documentation site must do the same.

The palette is achromatic by decision, not default. Neutrals carry the full weight of hierarchy; the single vivid color (electric blue, #00bbff) appears only in contexts where it earns its presence: user-sent messages and primary CTAs. This is a restrained strategy applied with full conviction — the rarity of that blue is the point.

The typographic system uses Inter throughout: a single workhorse typeface managed through weight and scale contrast rather than family switching. Instrument Serif is available but reserved for expressive moments, not the documentation baseline.

**Key Characteristics:**
- Achromatic neutral base with one exact chromatic accent (electric blue)
- Flat surfaces at rest; tactile only where interaction demands it
- Inter at scale — hierarchy through weight and size, not decoration
- Generous but varied whitespace; spacing is the primary structural tool
- Dual-theme: light and dark both first-class, neither an afterthought

## 2. Colors: The Restrained Palette

One chromatic voice. Everything else is tone.

### Primary
- **Ink** (`oklch(0.145 0 0)`, near-black): Foreground text and the filled button background in light mode. The default state for anything that needs to read as an action.
- **Electric Blue** (`#00bbff`): The system's one chromatic note. Used on user-sent message bubbles and as a hover accent. Its rarity is structural — overuse dissolves the signal.
- **CTA Blue** (`#0080ff`): The primary call-to-action accent on raised buttons. Slightly deeper than electric blue; reads as intent.

### Neutral
- **Surface** (`oklch(1 0 0)`): Page background in light mode.
- **Surface Raised** (`oklch(0.97 0 0)`): Subtle elevation for secondary buttons, muted backgrounds, accent regions.
- **Surface Border** (`oklch(0.922 0 0)`): Borders and input strokes. Barely visible by design.
- **Ink Muted** (`oklch(0.556 0 0)`): Secondary text, placeholders, descriptive copy that should recede.
- **Ring** (`oklch(0.708 0 0)`): Focus rings. Present enough to pass WCAG; quiet enough to not interfere at rest.

### Dark Mode Counterparts
- **Surface Dark** (`oklch(0.145 0 0)`): The dark background — same lightness as light-mode ink, creating inversion symmetry.
- **Surface Dark Raised** (`oklch(0.205 0 0)`): Cards and elevated surfaces in dark mode.
- **Surface Dark Muted** (`oklch(0.269 0 0)`): Secondary surfaces, hover regions.

### Named Rules
**The One Voice Rule.** Electric blue (#00bbff) and CTA blue (#0080ff) are the only chromatic colors in the system. They appear on ≤5% of any given surface. If something else wants color, it doesn't get it — it gets weight or scale instead.

**The Zero Chroma Base Rule.** All neutral tokens carry chroma = 0. No tinted grays, no warm whites in the neutral stack. The achromatic base is intentional; it makes the blue sing when it appears.

## 3. Typography

**Body Font:** Inter (with `ui-sans-serif, system-ui, sans-serif` fallback)
**Display Font:** Inter — same family, differentiated by weight and scale
**Expressive Font:** Instrument Serif — available for editorial moments, not documentation baseline
**Mono Font:** System monospace stack (ui-monospace, Cascadia Code, Source Code Pro, Menlo)

**Character:** A single typeface system controlled by weight contrast. Inter at 600 reads as a distinct display voice; at 400 it disappears into readable prose. The gap between those states is the hierarchy.

### Hierarchy
- **Display** (600, clamp(1.875rem → 2.25rem), line-height 1.2, tracking −0.02em): Hero headings and section titles. Tight tracking at large sizes for density.
- **Headline** (600, 1.25rem, line-height 1.3): Sub-section headers, component names in the gallery.
- **Body** (400, 0.875rem, line-height 1.6): All prose, descriptions, documentation copy. Maximum 70ch line length.
- **Label** (500, 0.75rem, line-height 1.4, tracking +0.01em): Navigation items, badges, metadata, keyboard shortcuts.
- **Mono** (400, 0.8125rem, line-height 1.6): Code blocks, install commands, API references.

### Named Rules
**The Single Family Rule.** Resist the impulse to add a second display typeface. Inter's weight range (400–700) provides more than enough expressive range. A second family adds visual noise without adding hierarchy.

## 4. Elevation

This system is flat by default. Surfaces are distinguished by background tone, not shadow depth. Shadows appear in two specific contexts: the `shadow-sm` on cards (structural, separating card from page) and the pronounced shadow on `RaisedButton` (intentional tactility — this component is meant to feel pressable).

The RaisedButton's elevation is a deliberate exception: it uses `shadow-md`, a top-edge white gradient overlay, and a subtle border to create a physical affordance. It communicates "press me" in a way flat buttons don't. This exception exists because it serves the interaction model, not decoration.

### Shadow Vocabulary
- **Card ambient** (`box-shadow: 0 1px 3px oklch(0 0 0 / 0.08)`): Structural separation for card containers. Barely perceptible at rest.
- **Raised button** (`box-shadow: 0 4px 5px 0 rgba(r, g, b, 0.20)`): Color-matched to the button's background. Applied only to `RaisedButton`, never generic buttons.

### Named Rules
**The Flat-By-Default Rule.** If a surface doesn't need to communicate pressability or stacking, it has no shadow. Tonal differentiation (surface → surface-raised) handles layering for everything else.

## 5. Components

### Buttons
The system has two distinct button families with different philosophical roles.

**Standard Button** (`components/ui/button.tsx`)
- **Shape:** Gently rounded (8px, `rounded-md`)
- **Primary:** Ink background (`oklch(0.145 0 0)`), white text, 36px height, px-4 padding. Communicates default action without aggression.
- **Secondary:** Surface Raised background, ink text. Recedes; appropriate for paired actions where one should dominate.
- **Ghost:** Transparent background, ink text, Surface Raised on hover. Navigation and utility actions.
- **Outline:** Visible border, transparent background. Used when the action needs presence without fill.
- **Hover / Focus:** 90% opacity on filled variants. Focus ring: 3px ring in ring color (`oklch(0.708 0 0) / 50%`). `active:scale-95` on press.

**RaisedButton** (`registry/new-york/ui/raised-button.tsx`) — signature component
- **Shape:** Rounder than standard (14px, `rounded-xl`)
- **Primary (colored):** Accepts a `color` prop; computes contrast text automatically. Uses `shadow-md` + top white gradient overlay (`before:` pseudo-element) + border at 50% opacity. Tactile, physical affordance.
- **Dark mode:** Falls back to `bg-zinc-500` — consistent with the muted dark surface palette.
- **Press:** `active:scale-[0.96]`, 200ms ease-in-out transition.
- **When to use:** Primary CTAs on landing/marketing surfaces. Not for utility actions inside documentation or component previews.

### Inputs / Fields
- **Style:** Transparent background with `border-input` stroke (oklch(0.922 0 0)), `rounded-md` (8px), 36px height
- **Dark mode:** `dark:bg-input/30` — very subtle surface fill
- **Focus:** Border shifts to `ring` color, 3px focus ring at 50% opacity
- **Error:** `aria-invalid` triggers destructive-colored border and ring
- **Disabled:** 50% opacity, pointer-events removed

### Cards / Containers
- **Corner Style:** Rounded XL (14px, `rounded-xl`)
- **Background:** Card token — matches surface in light, slightly raised in dark
- **Shadow Strategy:** `shadow-sm` only. One level; no nested card elevation.
- **Border:** 1px border in border token color
- **Internal Padding:** px-6 py-6 (24px)

### Navigation
- **Style:** Sticky header, `bg-background` (no blur, no glass). Clean background-color separation only.
- **Nav links:** `text-foreground/60` at rest, `text-foreground` when active path matches. `text-sm font-medium`. Hover transition on color.
- **Search trigger:** Secondary button style with keyboard shortcut (⌘K) displayed as KBD elements.
- **Right rail:** GitHub star count, theme toggle, GAIA app link as a filled button.
- **Mobile:** Navigation links hidden below `md` breakpoint; search and actions remain.

### Badges / Chips
- **Shape:** Full pill (`rounded-full`), 12px height
- **Default:** Ink fill, white text — same authority as filled button
- **Outline:** Border only, ink text — metadata and secondary labels
- **Secondary:** Surface Raised fill, ink text — low-priority tags

### Message Bubble (Signature Component)
The system's most visually distinct component: iOS-style iMessage bubbles with tail geometry.
- **Received (AI):** Zinc-300 fill, black text, tail exits left. Conveys "received from elsewhere."
- **Sent (User):** Electric blue (#00bbff) fill, black text, tail exits right. The most prominent single use of the chromatic accent in the system.
- **Radius:** 20px base, morphing to 5px on grouped-message stacking sides.
- **Grouped messages:** Tails hidden on non-terminal bubbles; corner radii flatten on the stacking edge to suggest continuity.

## 6. Do's and Don'ts

### Do:
- **Do** use `oklch(0.145 0 0)` (Ink) as the default foreground and button fill in light mode. Don't swap it out for softer grays when you want something "less heavy" — use Ghost or Secondary variants instead.
- **Do** reserve electric blue (#00bbff) for user-sent message bubbles and hover accents. Reserve CTA blue (#0080ff) for primary RaisedButton CTAs. Use these two blues only in those roles.
- **Do** vary spacing to create rhythm. Use xs/sm/md/lg/xl/2xl deliberately — identical padding on every section is visual monotony.
- **Do** use `active:scale-95` (or `active:scale-[0.96]` for RaisedButton) on all interactive elements that benefit from tactile feedback.
- **Do** support both light and dark themes for every new component. Neither is optional.
- **Do** cap prose line length at 70ch. Documentation and marketing copy both.
- **Do** use weight contrast (400 vs 600) within Inter to create hierarchy before resorting to size changes.

### Don't:
- **Don't** use MUI or Chakra UI's visual language: heavy component borders, municipal color palettes, utility-first aesthetics where components feel assembled rather than designed.
- **Don't** use SaaS component library template patterns: gradient hero blobs, gradient-clipped text (`background-clip: text` + gradient), hero-metric blocks (big number, small label, gradient accent), identical feature-benefit card grids.
- **Don't** add chromatic colors beyond electric blue and CTA blue. If a new component needs a color, extend the achromatic system first.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, list items, or callouts. Use full borders, background tints, or leading icons instead.
- **Don't** use nested cards. Card inside card is always wrong.
- **Don't** use glassmorphism (`backdrop-filter: blur`) decoratively. The navbar has no blur; new surfaces shouldn't either.
- **Don't** animate layout properties (`width`, `height`, `padding`, `margin`). Animate `opacity` and `transform` only.
- **Don't** use bounce or elastic easing. Ease out with exponential curves (ease-out-quart or equivalent).
- **Don't** add shadows to components that don't communicate pressability or stacking. Flat-by-default.
