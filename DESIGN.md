---
name: cases.vitorx86.dev (personal-portifolio)
description: Project documentation hub and engineering portfolio for vitorx86.dev — "The Hacker's Garage" applied to GitHub repository docs.
colors:
  terminal-ink: "#111827"
  panel-graphite: "#1f2937"
  midnight-garage: "#14142f"
  blueprint-line: "#3b3b78"
  snow-paper: "#FFFAFA"
  prompt-teal: "#0d9488"
  prompt-teal-dark: "#0f766e"
  prompt-teal-bright: "#2dd4bf"
  phosphor-green: "#4ade80"
  ink-body: "#374151"
  fog-body: "#d1d5db"
  steel-muted: "#6b7280"
  silver-muted: "#9ca3af"
  hairline-gray: "#e5e7eb"
  anime-indigo: "#a5b4fc"
  jacket-pink: "#f9a8d4"
typography:
  display:
    fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.75
---

# Design System: cases.vitorx86.dev (`personal-portifolio`)

## Overview

**Creative North Star: "The Hacker's Garage — Documentation Wing"**

This site is the project portfolio and documentation companion to [vitorx86.dev](https://vitorx86.dev). It pulls live `README.md` documentation and repository metadata from [`github.com/vitorecomp`](https://github.com/vitorecomp) and presents them inside a Nextra documentation shell styled with the exact visual DNA of `vitorx86.dev`:

- **The One Font Rule**: `JetBrains Mono` carries the entire hierarchy across navbar, sidebar, prose, terminal cards, and code blocks.
- **Terminal Grammar**: Sections open with `~$ <command>` prompt lockups, navigation uses `./slug` executable styling, and action buttons read like shell scripts (`$ ./open_repo.sh`, `$ ./read_docs.sh`).
- **Floating Terminal Objects**: Project cards and repository headers are dark `#111827` (`terminal-ink`) windows with traffic-light chrome (`#ef4444`, `#eab308`, `#22c55e`), `~/projects/<name>` paths, and `#4ade80` (`phosphor-green`) executable actions.
- **House & Section Accents**: Prompt Teal (`#0d9488` / `#0f766e` on light, `#2dd4bf` on dark) and Phosphor Green (`#4ade80`) are the house accents, with Anime Indigo (`#a5b4fc`) for AI projects and Jacket Pink (`#f9a8d4`) for hardware/garage projects.
