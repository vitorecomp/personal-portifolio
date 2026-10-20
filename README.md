# `~/vitorx86/portfolio` — Personal Portfolio & Project Docs

Project documentation hub and open-source repository index for **Vitor** ([vitorx86.dev](https://vitorx86.dev) / [`@vitorecomp`](https://github.com/vitorecomp)), built with **Node.js 24 LTS**, **Next.js 16** (App Router), **Nextra 4**, **React 19**, and **TypeScript 5.9**.

Designed in the **"Hacker's Garage"** terminal aesthetic of [`vitorx86.dev`](https://vitorx86.dev) (`JetBrains Mono`, `~$` command prompts, `#111827` terminal cards, `#0d9488` prompt teal, and `#4ade80` phosphor green actions) and automatically populated with `README.md` files from `github.com/vitorecomp`.

## Syncing Projects from GitHub

Run the sync script at any time to pull the latest `README.md` files and repository metadata from `github.com/vitorecomp`:

```bash
node scripts/sync-github-projects.mjs
# or via pnpm:
pnpm sync
```

Set `GITHUB_TOKEN` if you need higher GitHub API rate limits:

```bash
GITHUB_TOKEN=ghp_xxx pnpm sync
```

## Local Development

```bash
pnpm i
pnpm dev
```

Visit `http://localhost:3000`.

## Running with Docker & Docker Compose

```bash
# Production build & server (http://localhost:3000)
docker compose up --build -d

# Development server with hot-reload (http://localhost:3000)
docker compose --profile dev up --build dev

# Stop containers
docker compose --profile dev down
```

## Running with Podman & Podman Compose

```bash
# Production build & server (http://localhost:3000)
podman-compose -f podman-compose.yml up --build -d

# Development server with hot-reload and rootless keep-id (http://localhost:3000)
podman-compose -f podman-compose.yml --profile dev up --build dev

# Stop containers
podman-compose -f podman-compose.yml --profile dev down
```

## License

MIT
