# Personal Portfolio (`personal-portifolio`) — Agent Guide

Project portfolio and GitHub documentation hub for Vitor (`vitorecomp/personal-portifolio`, planned for `cases.vitorx86.dev`), built with **Node.js 24 LTS** (`node:24-alpine`), **Next.js 16** (App Router), **Nextra 4** (`nextra-theme-docs`), **React 19**, and **TypeScript 5.9**.

The site pulls `README.md` files and repository metadata from [`github.com/vitorecomp`](https://github.com/vitorecomp) and renders them using the **"Hacker's Garage"** terminal design system of [`vitorx86.dev`](https://vitorx86.dev) (documented in [`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md)).

## Commands

Use **`pnpm`** (locked via `pnpm-lock.yaml` v9.0 / `pnpm@10.34.7`). Do not use `npm` or `yarn`.

- **Install dependencies**: `pnpm i`
- **Sync GitHub READMEs & catalog**: `pnpm sync` (runs `node scripts/sync-github-projects.mjs`)
- **Start dev server**: `pnpm dev` (runs `next dev --webpack` at `http://localhost:3000`)
- **Production build**: `pnpm build` (runs `next build --webpack`)
- **Static export build (for GCS / Cloud CDN)**: `pnpm run build:export` (runs `NEXT_EXPORT=true next build --webpack`, outputting static HTML to `out/` with `trailingSlash: true`; cloud deployment and Terraform live in `personal-infra/cloud/`)
- **Start production server**: `pnpm start` (runs `next start`)
- **Typecheck**: `pnpm tsc --noEmit`

### Container Workflows (Docker & Podman)

- **Docker Compose (prod / dev)**:
  - Production: `docker compose up --build -d` (`pnpm docker:up`)
  - Development (hot-reload): `docker compose --profile dev up --build dev` (`pnpm docker:dev`)
- **Podman Compose (prod / dev)**:
  - Production: `podman-compose -f podman-compose.yml up --build -d` (`pnpm podman:up`)
  - Development (hot-reload): `podman-compose -f podman-compose.yml --profile dev up --build dev` (`pnpm podman:dev`)
  - Always pass `-f podman-compose.yml` when running `podman-compose` so it does not auto-merge `docker-compose.yml` with `podman-compose.yml`.

## Architecture & Key Files

- [`DESIGN.md`](./DESIGN.md) & [`PRODUCT.md`](./PRODUCT.md): Canonical design tokens (`JetBrains Mono`, `#111827` terminal-ink, `#0d9488`/`#2dd4bf` prompt-teal, `#4ade80` phosphor-green, `#FFFAFA` snow-paper) and product principles shared with `vitorx86.dev`.
- [`scripts/sync-github-projects.mjs`](./scripts/sync-github-projects.mjs): Fetches repository metadata and `README.md` files from `github.com/vitorecomp`, rewrites relative image/link URLs to GitHub raw/blob URLs, sanitizes Markdown for MDX, and generates categorized `.mdx` pages and `_meta.js` files under `content/`.
- [`app/layout.tsx`](./app/layout.tsx) & [`app/[[...mdxPath]]/page.tsx`](./app/[[...mdxPath]]/page.tsx): Next.js 16 App Router root layout and catch-all MDX route powered by Nextra 4 (`Layout`, `Navbar`, `Footer`, `Head`, `Search`, `getPageMap`, `importPage`).
- [`mdx-components.tsx`](./mdx-components.tsx): Registers Nextra 4 docs MDX components alongside custom portfolio components (`TerminalEyebrow`, `TerminalHero`, `ProjectGrid`, `ProjectHeader`, `TerminalCallout`, `RepoCatalogTable`).
- [`styles/globals.css`](./styles/globals.css): Enforces the `vitorx86.dev` `JetBrains Mono` typography ("The One Font Rule"), geometric grid background, and dark terminal code/navbar styling.
- [`components/portfolio.tsx`](./components/portfolio.tsx) & [`components/portfolio.module.css`](./components/portfolio.module.css): Reusable terminal UI client components (`TerminalEyebrow`, `TerminalHero`, `ProjectGrid`, `ProjectHeader`, `TerminalCallout`, `RepoCatalogTable`).
- [`content/`](./content): Nextra 4 content directory:
  - [`content/_meta.js`](./content/_meta.js): Top-level navigation and external links (`./portfolio`, `~/systems-and-cli`, `~/ai-and-agents`, `~/backyard-mech`, `~/cloud-and-devtools`, `./all_repos`, `./about`).
  - [`content/systems/`](./content/systems), [`content/ai/`](./content/ai), [`content/hardware/`](./content/hardware), [`content/cloud-devtools/`](./content/cloud-devtools): Categorized project documentation pages synced from GitHub.
  - [`content/repositories.mdx`](./content/repositories.mdx): Searchable catalog of all public repositories on `github.com/vitorecomp`.
- [`Dockerfile`](./Dockerfile), [`docker-compose.yml`](./docker-compose.yml), [`podman-compose.yml`](./podman-compose.yml): Multi-stage container configuration (`dev` and `runner` targets on `node:24-alpine`).

## Conventions & Guardrails

- **Design System Fidelity (`DESIGN.md`)**: Follow the `vitorx86.dev` terminal grammar (`~$ <command>` eyebrows, `$ ./script.sh` CTAs, `./slug` links, `JetBrains Mono` as the sole typeface, and `#111827` floating terminal cards).
- **Routing (`app/` + `content/`)**: Uses Next.js 16 **App Router** with Nextra 4's `content/` directory convention. Whenever adding, renaming, or removing `.mdx` files or directories under `content/`, update the corresponding `_meta.js`. Do not include unsupported keys like `newWindow` in external link objects inside `_meta.js` (Nextra 4 uses strict Zod validation).
- **GitHub Sync Safety**: To add or refresh synced projects, update `CATEGORIES` in [`scripts/sync-github-projects.mjs`](./scripts/sync-github-projects.mjs) and run `pnpm sync` rather than hand-editing generated project `.mdx` files.
- **Verification**: Always verify changes with `pnpm build` (or `podman build --target runner .`) to catch MDX compilation and TypeScript errors.
