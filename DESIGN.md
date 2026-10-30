---
name: cases.vitorx86.dev (personal-portifolio)
description: Cyber-Brutalist engineering portfolio and GitHub documentation hub for vitorx86.dev — structural orthographic grids, 0px geometry, Electric Violet, and Acid Lime telemetry.
colors:
  cybr-canvas-light: "#F5F5F8"
  cybr-surface-light: "#FFFFFF"
  cybr-ink-light: "#09090D"
  cybr-muted-light: "#525264"
  cybr-grid-light: "#DCDCE5"
  cybr-canvas-dark: "#09090D"
  cybr-surface-dark: "#111118"
  cybr-ink-dark: "#F5F5F8"
  cybr-muted-dark: "#9E9EB5"
  cybr-grid-dark: "#262636"
  cybr-violet: "#7C3AED"
  cybr-violet-bright: "#8B5CF6"
  cybr-lime: "#D9F99D"
  cybr-lime-bright: "#BEF264"
  cybr-lime-border: "#4ADE80"
  cybr-alert-red: "#EF4444"
typography:
  display:
    fontFamily: '"Space Grotesk", "JetBrains Mono", ui-monospace, monospace'
    fontSize: "clamp(2.6rem, 6.2vw, 4.9rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  heading-1:
    fontFamily: '"Space Grotesk", "JetBrains Mono", ui-monospace, monospace'
    fontSize: "clamp(1.75rem, 3.2vw, 2.55rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  heading-2:
    fontFamily: '"Space Grotesk", "JetBrains Mono", ui-monospace, monospace'
    fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.7
  telemetry:
    fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  xs: "0.35rem"
  sm: "0.65rem"
  md: "1.1rem"
  lg: "1.35rem"
  xl: "2.25rem"
  2xl: "3.25rem"
components:
  - name: TerminalHero
    description: Architectural blueprint hero split into a 7:5 asymmetric grid with 3D isometric orthographic schematic SVG, live telemetry strip, and brutalist action buttons.
    variants: ["default"]
  - name: CategoryHub
    description: Domain index hub (/systems, /ai, /hardware, /cloud-devtools) with domain-specific CAD SVG schematic, 3-cell module counter strip, and interactive #TAG chip filter bar.
    variants: ["systems", "ai", "hardware", "cloud-devtools"]
  - name: ProjectGrid
    description: Structural 1px-collapsed architectural index grid of project cards with /01..0N counters, category/language badges, and directional ↗ CTA bars.
    variants: ["teal", "indigo", "pink"]
  - name: ProjectHeader
    description: Unified single-banner architectural specification header with primary <h1>, 4-cell metadata bar, 1-click $ git clone copy bar, and direct GitHub actions.
    variants: ["default"]
  - name: EngineerDossier
    description: Personnel & Architecture Dossier (/about) featuring identity readout, 4-cell live telemetry counters, framed GitHub contribution matrix, and language distribution bars.
    variants: ["default"]
  - name: RepoCatalogTable
    description: Searchable, filterable, and sortable catalog of all public repositories with 4-cell telemetry header and [GRID ⊞] / [TABLE ≡] view mode switcher.
    variants: ["grid", "table"]
  - name: CyberRightSidebarStats
    description: Sticky right-hand telemetry panel (260px desktop rail) with live UTC clock and route-aware context links across all 5 surface types.
    variants: ["home", "category", "about", "repositories", "project"]
  - name: TerminalCallout
    description: Sharp 0px-radius technical callout block with left accent border and monospace header.
    variants: ["info", "tip", "warning"]
  - name: TerminalMermaid
    description: Client-rendered Mermaid diagram inside an architectural blueprint frame with dark/light theme synchronization and ASCII source fallback.
    variants: ["default"]
---

# Design System: cases.vitorx86.dev (`personal-portifolio`)

## 1. Overview & Creative North Star

**Creative North Star: `"CYBR_ // Cyber Brutalism for Systems & Open Source"`**

`cases.vitorx86.dev` (`personal-portifolio`) is the architectural project index and live GitHub documentation hub for [vitorx86.dev](https://vitorx86.dev). Built on **Next.js 16 (App Router)**, **Nextra 4**, **React 19**, and **TypeScript 5.9**, it pulls real-time `README.md` specifications and repository telemetry from [`github.com/vitorecomp`](https://github.com/vitorecomp) and renders them inside an uncompromising **Cyber-Brutalist** architectural shell.

### Core Design Pillars
1. **Exposed Orthographic Grids & Strict `0px` Geometry**: Every card, header, badge, input, and button sits inside an exposed `1px solid` structural grid (`--cybr-grid`) with `border-radius: 0px`. Never use rounded pills (`9999px`) or soft SaaS card shadows.
2. **Towering Geometric Display + Razor Monospace**: Condensed uppercase geometric headlines (`Space Grotesk`, `font-weight: 800`, `-0.04em` tracking) command visual hierarchy, while `JetBrains Mono` carries all technical prose, code blocks, coordinate callouts (`X/Y/Z`), and tabular counters (`font-variant-numeric: tabular-nums`).
3. **High-Contrast Adaptive Polarity**:
   - **Light Mode ("Drafting Paper")**: Cool alabaster canvas (`#F5F5F8`) with crisp white structural cells (`#FFFFFF`), stark black ink (`#09090D`), and `#DCDCE5` blueprint rules.
   - **Dark Mode ("Obsidian Void")**: Deep carbon canvas (`#09090D`) with `#111118` structural surfaces, `#F5F5F8` primary ink, and `#262636` grid hairlines.
4. **Functional Telemetry, Zero Decorative Bloat**: Every coordinate readout, counter, and sidebar link reflects actual build-time or client-side repository state (`36 PUBLIC REPOS`, `26 DOCS INDEXED`, `4 ARCH DOMAINS`, live `UTC` clock, and 1-click `$ git clone` clipboard copy).

---

## 2. Color & Surface Architecture (`styles/globals.css`)

All colors are defined as semantic CSS custom properties on `:root` and `.dark` in [`styles/globals.css`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/styles/globals.css). Never hardcode raw hex strings in component JSX or inline styles.

### Semantic Token Palette

| CSS Custom Property | Light Mode (`:root`) | Dark Mode (`.dark`) | Role & Usage |
| :--- | :--- | :--- | :--- |
| `--cybr-canvas` | `#F5F5F8` | `#09090D` | Root page background alongside the `48px × 48px` orthographic grid overlay |
| `--cybr-surface` | `#FFFFFF` | `#111118` | Primary structural cell and card surface |
| `--cybr-surface-elevated` | `#EEEEF4` | `#181824` | Secondary header bars, filter toolbars, and inactive control cells |
| `--cybr-ink` | `#09090D` | `#F5F5F8` | Primary display typography, borders on active controls, and primary CTAs |
| `--cybr-muted` | `#525264` | `#9E9EB5` | WCAG AA compliant secondary prose, metadata labels, and telemetry captions |
| `--cybr-grid` | `#DCDCE5` | `#262636` | `1px solid` structural grid hairlines and collapsed table borders |
| `--cybr-grid-strong` | `#09090D` | `#F5F5F8` | High-contrast outer frame borders and active card outlines |
| `--cybr-violet` | `#7C3AED` | `#8B5CF6` | Primary interactive accent (`//SCN_01`, active filter tags, hover states, focus rings) |
| `--cybr-violet-bright` | `#8B5CF6` | `#A78BFA` | Secondary gradient/schematic accent and dark-mode link highlight |
| `--cybr-lime` | `#D9F99D` | `#D9F99D` | High-visibility status fills and primary dark-mode CTA hover surface |
| `--cybr-lime-bright` | `#BEF264` | `#BEF264` | Acid Lime highlight for featured badges, active hovers, and schematic nodes |
| `--cybr-lime-border` | `#4ADE80` | `#4ADE80` | Operational status indicator (`ALL SYSTEMS OPERATIONAL`) and robot icon stroke |

### Background Blueprint Grid
The `body` element renders a subtle `48px × 48px` orthographic drafting grid over `--cybr-canvas` using `linear-gradient(to right, ...)` and `linear-gradient(to bottom, ...)`, reinforcing the architectural schematic metaphor without competing with long-form MDX documentation.

---

## 3. Typography & Scannable Hierarchy

Typography is governed by two font families loaded via `next/font/google` in [`app/layout.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/app/layout.tsx):
- **`--font-space` (`Space Grotesk`)**: Used exclusively for structural display titles, hero headlines, `<h1>`–`<h3>` headings, and large numeric counters.
- **`--font-mono` (`JetBrains Mono`)**: Used for all body prose, navigation links, telemetry strips, tables, badges, and code blocks.

### Typographic Scale & Rules

| Role | Font Family | Size | Weight | Line Height | Tracking | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** (`.heroTitle`) | `--font-display` | `clamp(2.6rem, 6.2vw, 4.9rem)` | `800` | `0.94` | `-0.04em` | Uppercase, `text-wrap: balance` |
| **Page / Spec `<h1>`** (`.projectHeaderTitle`, `.categoryHubTitle`) | `--font-display` | `clamp(1.75rem, 3.2vw, 2.55rem)` | `800` | `1.02` | `-0.03em` | Single `<h1>` per page; `overflow-wrap: anywhere` |
| **Section `<h2>`** (`article.nextra-body-typesetting-default h2`) | `--font-display` | `clamp(1.4rem, 2.4vw, 1.85rem)` | `700` | `1.15` | `-0.02em` | Uppercase with `1px solid var(--cybr-grid)` bottom rule |
| **Card Title `<h3>`** (`.cardTitle`) | `--font-display` | `1.22rem` | `700` | `1.2` | `-0.02em` | Uppercase with `text-wrap: balance` |
| **Body Prose** (`body`, `article p`) | `--font-mono` | `0.92rem` | `400` | `1.7` | `0` | Constrained to `65ch–72ch` measure (`text-wrap: pretty`) |
| **Telemetry / Eyebrow** (`.eyebrow`, `.heroTopBar`) | `--font-mono` | `0.70rem–0.75rem` | `700` | `1.4` | `0.08em` | Uppercase with `font-variant-numeric: tabular-nums` |

---

## 4. Layout, Spatial Architecture & Functional Focal Points

### 3-Column Documentation & Telemetry Shell
The Nextra 4 shell is customized in [`styles/globals.css`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/styles/globals.css) and [`app/layout.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/app/layout.tsx):
1. **Top Navigation Bar (`height: 64px`)**: Sticky `1px solid var(--cybr-grid)` header featuring the `CYBR_ // VITORX86.DEV` brand block, domain navigation links, Pagefind search input (`caret-color: var(--cybr-violet)`), and `ALL SYSTEMS OPERATIONAL` status pill.
2. **Left Navigation Rail**: Collapsible Nextra directory tree styled with sharp `0px` active indicators (`border-left: 3px solid var(--cybr-violet)`).
3. **Primary Content Viewport**: Fluid central container (`min-width: 0`) housing custom portfolio surfaces and long-form MDX documentation.
4. **Right Telemetry Rail (`width: 260px` on `>= 1024px`)**: Sticky right-hand `<aside class="cybr-right-rail">` hosting [`CyberRightSidebarStats`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/components/portfolio.tsx) above Nextra's Table of Contents (`TOC`).

### Exposed Grid Collapse Pattern
Multi-card layouts (`.grid`, `.categoryHubStatsBar`, `.catalogStatsHeader`, `.dossierMetricsGrid`, `.metaGrid`) use CSS Grid with `gap: 1px` on a `background: var(--cybr-grid)` container and `border: 1px solid var(--cybr-grid)`. Each child cell sets `background: var(--cybr-surface)`, creating razor-sharp `1px` shared structural walls with zero double-border artifacts.

---

## 5. Component Specifications (`components/portfolio.tsx`)

All portfolio components live in [`components/portfolio.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/components/portfolio.tsx) and [`components/portfolio.module.css`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/components/portfolio.module.css), and are registered globally in [`mdx-components.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/mdx-components.tsx).

### 5.1 `TerminalHero` (Landing Page `/`)
- **Structure**: Top telemetry bar (`SYS.MODE: CYBER_BRUTALIST_V2`, `LOC: CASES.VITORX86.DEV`, `STATUS: ONLINE`) + `7fr / 5fr` main split + 3-column bottom coordinate footer.
- **Right Visual Schematic**: Interactive 3D isometric orthographic cube SVG (`viewBox="0 0 320 320"`) with floating Acid Lime and Electric Violet telemetry badges.

### 5.2 `CategoryHub` (`/systems`, `/ai`, `/hardware`, `/cloud-devtools`)
- **Structure**: Domain-specific architectural blueprint header (`2fr / 1fr` split) featuring a bespoke CAD vector schematic (`DomainSchematicSvg` with variants for `systems`, `ai`, `hardware`, and `cloud-devtools`), a 3-cell module counter strip (`INDEXED MODULES`, `PRIMARY STACK`, `SYNC SOURCE`), and an interactive `#TAG` filter bar (`aria-pressed`, `aria-live="polite"`) that filters the underlying `ProjectGrid` in real time.

### 5.3 `ProjectHeader` (`/<category>/<slug>`)
- **Single-H1 Specification Banner**: Renders the sole `<h1>` on project pages (the build-time sync script [`scripts/sync-github-projects.mjs`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/scripts/sync-github-projects.mjs) strips the duplicate `# Title` from synced GitHub READMEs).
- **1-Click `$ git clone` Bar**: Displays `$ git clone https://github.com/vitorecomp/<slug>.git` alongside a keyboard-accessible `[COPY CMD]` button with `navigator.clipboard` + HTTP fallback (`copied` state turns Acid Lime for `1800ms`).
- **4-Cell Metadata Strip**: Displays `REPOSITORY`, `PRIMARY STACK`, `STARS`, and `LAST PUSH` in tabular monospace.

### 5.4 `EngineerDossier` (`/about`)
- **Structure**: Personnel & Architecture Dossier (`//PERSONNEL_FILE // VITOR_VIEIRA`) with 4-cell live repository telemetry (`36` Public Repos, `26` Docs Indexed, `4` Arch Domains, `C / PY / TS / GO` Core Stack), a framed GitHub contribution matrix (`ghchart.rshah.org/7C3AED/vitorecomp`) with an automatic offline fallback readout, and proportional language distribution bars.

### 5.5 `RepoCatalogTable` (`/repositories`)
- **4-Cell Telemetry Header**: Displays `TOTAL PUBLIC REPOS`, `DOCUMENTED IN HUB`, `ACTIVE LANGUAGES`, and `FILTERED MATCHES`.
- **Interactive Control Strip**: Full-text search input, language filter pills, sort mode selector (`UPDATED ↓`, `DOCS FIRST`, `NAME A-Z`), and view mode switcher (`GRID [⊞]` vs `TABLE [≡]`).
- **Zero-Results State**: `.emptyCatalogState` renders an interactive `[RESET ALL FILTERS ↺]` button whenever a query returns zero matches.

### 5.6 `CyberRightSidebarStats` (Contextual Right Rail)
- Adapts its bottom `QUICK_JUMP` panel dynamically based on `usePathname()`:
  - `/`: Domain jump links (`01 // SYSTEMS`, `02 // AI`, `03 // HARDWARE`, `04 // CLOUD`).
  - `/systems`, `/ai`, `/hardware`, `/cloud-devtools`: Sibling domain switcher + `ALL REPOS CATALOG`.
  - `/<category>/<slug>`: Direct links to `GH // <SLUG> SOURCE ↗`, `ISSUES // BUG TRACKER ↗`, `PARENT // <CATEGORY> HUB`, and `INDEX // ALL REPOS`.
  - `/about` & `/repositories`: External profile links (`VITORX86.DEV`, `GITHUB`, `LINKEDIN`) and domain hubs.

---

## 6. Interaction, Accessibility & Craft Floor Guardrails

Every surface and component is verified against `/impeccable audit --strict` (**20.0 / 20** across `components/`, `styles/`, and `app/`):

1. **Strict `0px` Border Radius**: Never introduce `border-radius` values above `0px` (including status dots, checkboxes, or tags).
2. **44px Minimum Touch Targets**: All interactive buttons, filter chips, sort controls, and action links maintain `min-height: 44px` (or `36px–44px` compact toolbar controls with generous horizontal padding) for mobile ergonomics.
3. **Mechanical Micro-Interactions**:
   - Hover & border transitions use `180ms cubic-bezier(0.16, 1, 0.3, 1)`.
   - Active button presses apply `transform: translateY(1px)` for tactile mechanical feedback.
   - Respects `@media (prefers-reduced-motion: reduce)` globally in [`styles/globals.css`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/styles/globals.css).
4. **WCAG AA Contrast & Focus**:
   - Secondary text `--cybr-muted` is calibrated to `#525264` on `#F5F5F8` (light) and `#9E9EB5` on `#09090D` (dark), exceeding 4.5:1 contrast.
   - All interactive elements expose `:focus-visible` with `outline: 2px solid var(--cybr-violet)` and `outline-offset: 2px`.
5. **Resilient Error & Edge Boundaries**:
   - Missing routes render [`app/not-found.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/app/not-found.tsx) (`ERR_CODE: 0x00000404 // ROUTE_NOT_INDEXED`).
   - Runtime exceptions render [`app/error.tsx`](file:///usr/local/google/home/vieiravitor/workspace/personal/personal-portifolio/app/error.tsx) (`ERR_CODE: 0x00000500 // RUNTIME_TRAP`) with a `[RETRY RENDER ↺]` recovery trigger.
