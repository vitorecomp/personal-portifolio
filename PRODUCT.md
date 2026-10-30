# Product

<!-- impeccable:product-schema 1 -->

## Platform

Web — **Next.js 16** (App Router) + **Nextra 4** (`nextra-theme-docs`), **React 19**, **TypeScript 5.9**, and **Node.js 24 LTS** (`node:24-alpine`).

## Users

Recruiters, hiring managers, staff engineers, and open-source collaborators visiting from [vitorx86.dev](https://vitorx86.dev) (`cases.vitorx86.dev`) to evaluate Vitor Vieira's (`@vitorecomp`) systems engineering depth, AI/MCP architectures, embedded motorsport hardware, and 93+ public GitHub repositories.

## Product Purpose

Serve as the unified **Cyber-Brutalist** engineering portfolio and live GitHub documentation hub for Vitor Vieira (`vitorx86`), combining high-signal architectural case studies with live-synced repository specifications and interactive catalog filtering.

## Core Surfaces & Capabilities

- **Main Portfolio Hub (`/`)**:
  - `/01` Split Cyber-Brutalist Hero with isometric system-bus blueprint, coordinate callout (`X/Y/Z`), and top-right quick-action buttons (`EXPLORE REPOS ↗`, `ENGINEER SPEC [ ]`).
  - `/02` 4-Column Engineering Domains Matrix (`Systems & CLI`, `AI, Agents & MCP`, `Backyard Mech`, `Cloud & DevTools`).
  - `/03` Selected Flagship Work bento grid (`TurboVec`, `SEI-MCP`, `Ruscene`, `Open-Judy`, `go-ls`, `ESP32 Watch OS`).
  - `/04`–`/06` System Telemetry & Signal Search strip, paired with a live Right Sidebar (`//SYS.STATS [LIVE]`).
- **Domain Hub Pages (`/systems`, `/ai`, `/hardware`, `/cloud-devtools`)**:
  - Powered by `CategoryHub` with `//DOM.01`–`//DOM.04` split headers, custom domain CAD schematics, module counters, interactive `#TAG` filter pills, and domain-specific right-sidebar navigation.
- **Engineer Spec Dossier (`/about`)**:
  - Powered by `EngineerDossier` with live GitHub telemetry counters, framed 365-day contribution heatmap, language allocation progress bars, and direct external channels.
- **All Repositories Catalog (`/repositories`)**:
  - Powered by `RepoCatalogTable` indexing all 93+ public repositories with a 4-cell telemetry header, `--WITH-DOCS` / `--SOURCE-ONLY` CLI flags, language chips, sort controls (`UPDATED ↓`, `DOCS FIRST`, `NAME A-Z`), and a `GRID [⊞]` / `TABLE [≡]` view toggle.
- **Individual Project Specs (`/<category>/<slug>`)**:
  - Unified `ProjectHeader` with `<h1>` display title, 1-click copy `$ git clone` bar, client-side Mermaid v11 diagram rendering (`TerminalMermaid`), stub-README fallback cards (`RepoOverviewFallback`), and contextual right-sidebar links.

## Technical & Deployment Constraints

- **Automated GitHub Sync**: `scripts/sync-github-projects.mjs` (`pnpm sync`) fetches live metadata and `README.md` files from `github.com/vitorecomp`, sanitizes Markdown into MDX v2, strips duplicate leading headings, and converts Mermaid fences into `<TerminalMermaid />`.
- **Offline-Resilient Search**: `scripts/generate-search-index.mjs` pre-builds a 41-page Pagefind-compatible index prior to `next build`.
- **Container & Cloud Delivery**: Multi-stage `Dockerfile` (`node:24-alpine`), `docker-compose.yml`, and `podman-compose.yml` (port `23000` via `PORT_PAD=2`), plus static export (`pnpm run build:export` -> `out/`) for Google Cloud Storage + Cloud CDN.
