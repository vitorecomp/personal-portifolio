# Product

<!-- impeccable:product-schema 1 -->

## Platform

web (Next.js 13 + Nextra 2 documentation & portfolio site)

## Users

Recruiters, hiring managers, and fellow engineers visiting from [vitorx86.dev](https://vitorx86.dev) (`./portfolio` / `cases.vitorx86.dev`) to inspect Vitor's open-source projects, architecture docs, and GitHub repositories in depth.

## Product Purpose

Centralize all of Vitor's (`vitorecomp`) GitHub projects and their `README.md` documentation in a fast, searchable Nextra site that preserves the exact terminal/garage aesthetic of `vitorx86.dev`.

## Capabilities and Constraints

- Syncs `README.md` files and repository metadata from `github.com/vitorecomp` via `scripts/sync-github-projects.mjs` (`pnpm sync`).
- Categorizes projects into **Systems & CLI**, **AI & Agents**, **Hardware & Garage**, and **Cloud, Web & DevTools**, plus a full searchable **All Repositories** catalog.
- Containerized for local development with both Docker (`Dockerfile`, `docker-compose.yml`) and Podman (`podman-compose.yml`).
- Deployed as a static export (`pnpm run build:export` -> `out/`) to Google Cloud Storage + Cloud CDN behind the shared Global HTTPS Load Balancer managed in `personal-infra/cloud/`.
