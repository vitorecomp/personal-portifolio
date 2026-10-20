#!/usr/bin/env node
/**
 * Syncs README.md files and repository metadata from github.com/vitorecomp
 * into Nextra 4 MDX pages under content/.
 *
 * Usage:
 *   node scripts/sync-github-projects.mjs
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT_DIR, 'content');

const GITHUB_USER = 'vitorecomp';
const USER_AGENT = 'vitorx86-portfolio-sync/1.0';

/**
 * Curated categories mapping GitHub repo names to portfolio sections.
 */
const CATEGORIES = [
  {
    slug: 'systems',
    title: '~/systems-and-cli',
    navTitle: 'Systems & CLI',
    command: 'ls ~/projects/systems',
    headline: 'Systems, Search & CLI',
    accent: 'teal',
    description:
      'High-performance engines, vector indexes, operating system primitives, and command-line tools written in Rust, Go, C++, and x86 Assembly.',
    repos: [
      {
        repo: 'turbovec',
        slug: 'turbovec',
        title: 'TurboVec',
        tags: ['rust', 'python', 'vector-index', 'simd'],
        summary:
          'A vector index built on TurboQuant, written in Rust with Python bindings and SIMD acceleration.',
        featured: true,
      },
      {
        repo: 'ruscene',
        slug: 'ruscene',
        title: 'Ruscene',
        tags: ['rust', 'search-engine', 'lucene'],
        summary:
          'A Lucene-style full-text search engine architecture implemented from scratch in Rust.',
        featured: true,
      },
      {
        repo: 'go-ls',
        slug: 'go-ls',
        title: 'go-ls',
        tags: ['go', 'cli', 'filesystem'],
        summary:
          'A complete ls command-line replacement written in Go — everything the original does, plus icons and extra features.',
        featured: true,
      },
      {
        repo: 'Nos-System',
        slug: 'nos-system',
        title: 'Nos-System',
        tags: ['c++', 'javascript', 'distributed'],
        summary:
          'A framework for controlling node-oriented distributed services, built around a super-node architecture.',
        featured: true,
      },
      {
        repo: 'personal-life-manager',
        slug: 'personal-life-manager',
        title: 'Personal Life Manager',
        tags: ['go', 'backend', 'productivity'],
        summary:
          'Go service and CLI utilities for managing personal workflows, tasks, and automation.',
        featured: false,
      },
      {
        repo: 'asm-steganography',
        slug: 'asm-steganography',
        title: 'ASM Steganography',
        tags: ['assembly', 'x86', 'steganography'],
        summary:
          'A steganography hidden-message extractor implemented directly in x86 Assembly.',
        featured: false,
      },
      {
        repo: 'learning-projects',
        slug: 'learning-projects',
        title: 'Rust Learning Projects',
        tags: ['rust', 'systems'],
        summary:
          'Hands-on systems programming experiments and data structures in Rust.',
        featured: false,
      },
    ],
  },
  {
    slug: 'ai',
    title: '~/ai-and-agents',
    navTitle: 'AI & Agents',
    command: 'git log --grep=ai --since=2012',
    headline: 'AI, OCR & Agentic Tools',
    accent: 'indigo',
    description:
      'More than a decade of AI projects — from genetic algorithms and advanced OCR to Model Context Protocol (MCP) servers and Gemini tooling.',
    repos: [
      {
        repo: 'ai-advanced-ocr',
        slug: 'ai-advanced-ocr',
        title: 'AI Advanced OCR',
        tags: ['python', 'ai', 'ocr', 'vision'],
        summary:
          'Experiments pushing document OCR beyond the basics with modern vision and AI models.',
        featured: true,
      },
      {
        repo: 'sei-mcp',
        slug: 'sei-mcp',
        title: 'SEI MCP Server (Python)',
        tags: ['python', 'mcp', 'agents', 'automation'],
        summary:
          'Full-featured Model Context Protocol (MCP) server for interacting with the SEI electronic information system.',
        featured: true,
      },
      {
        repo: 'sei-mcp-prodesp',
        slug: 'sei-mcp-prodesp',
        title: 'SEI MCP Server (TypeScript)',
        tags: ['typescript', 'mcp', 'playwright'],
        summary:
          'TypeScript Model Context Protocol (MCP) implementation tailored for SEI Prodesp workflows.',
        featured: false,
      },
      {
        repo: 'open-judy',
        slug: 'open-judy',
        title: 'Open Judy',
        tags: ['typescript', 'ai', 'legal-tech'],
        summary:
          'Open-source judiciary system template designed for AI-assisted document analysis and workflows.',
        featured: true,
      },
      {
        repo: 'gemini-enterprise-utils',
        slug: 'gemini-enterprise-utils',
        title: 'Gemini Enterprise Utils',
        tags: ['shell', 'gemini', 'gcp', 'cli'],
        summary:
          'CLI scripts and automation utilities for managing and testing Gemini Enterprise deployments on Google Cloud.',
        featured: false,
      },
      {
        repo: 'nanobanana-inspiration',
        slug: 'nanobanana-inspiration',
        title: 'NanoBanana Inspiration Arena',
        tags: ['ai', 'image-gen', 'prompts'],
        summary:
          'Interactive prompt builder and arena web app for generating and comparing Nano Banana images.',
        featured: false,
      },
      {
        repo: 'alissa-ai-racing-companion',
        slug: 'alissa-ai-racing-companion',
        title: 'Alissa — AI Racing Companion',
        tags: ['ai', 'telemetry', 'racing', 'obd'],
        summary:
          'Open-source AI racing pit-crew companion — OBD telemetry, tuning help, diagnostics, and lap insights.',
        featured: true,
      },
      {
        repo: 'genetic-training',
        slug: 'genetic-training',
        title: 'Genetic Training (C++)',
        tags: ['c++', 'genetic-algorithms', 'ai'],
        summary:
          'A fast genetic algorithm training implementation built from scratch in C++.',
        featured: false,
      },
    ],
  },
  {
    slug: 'hardware',
    title: '~/backyard-mech',
    navTitle: 'Hardware & Garage',
    command: 'ls /garage/hardware',
    headline: 'Embedded, Robotics & Garage Builds',
    accent: 'pink',
    description:
      'Close-to-the-metal firmware, ESP32 smartwatch OS builds, ROS robotics plugins, and open-source automotive ECU electronics for the Subaru GC8 race build.',
    repos: [
      {
        repo: 'esp32-watch-so',
        slug: 'esp32-watch-so',
        title: 'ESP32 Watch OS',
        tags: ['c++', 'esp32', 'embedded', 'rtos'],
        summary:
          'A lightweight operating system for ESP32-based smartwatches, written close to the metal in C++.',
        featured: true,
      },
      {
        repo: 'speeduino',
        slug: 'speeduino',
        title: 'Speeduino ECU (GC8 Build)',
        tags: ['c++', 'arduino', 'ecu', 'automotive'],
        summary:
          'Arduino-based open engine management system powering the restored Subaru GC8 racing build.',
        featured: true,
      },
      {
        repo: 'open-car',
        slug: 'open-car',
        title: 'Open Car',
        tags: ['automotive', 'open-hardware', 'ecu'],
        summary:
          'Umbrella project collecting repositories to build, wire, and repair a complete open-source car.',
        featured: false,
      },
      {
        repo: 'ros-blender',
        slug: 'ros-blender',
        title: 'ROS–Blender Integration',
        tags: ['python', 'ros', 'blender', 'robotics'],
        summary:
          'Plugin bridging Robot Operating System (ROS) simulation and visualization with Blender.',
        featured: false,
      },
      {
        repo: 'computer-companion',
        slug: 'computer-companion',
        title: 'Computer Companion',
        tags: ['c++', 'hardware', 'embedded'],
        summary:
          'C++ desktop/hardware companion daemon and microcontroller interface.',
        featured: false,
      },
      {
        repo: 'rover-rev-controller',
        slug: 'rover-rev-controller',
        title: 'Rover Rev Controller',
        tags: ['python', 'robotics', 'control'],
        summary:
          'Python control software for rover motor and telemetry management.',
        featured: false,
      },
    ],
  },
  {
    slug: 'cloud-devtools',
    title: '~/cloud-and-devtools',
    navTitle: 'Cloud, Web & DevTools',
    command: 'ls ~/projects/cloud-devtools',
    headline: 'Cloud, Microservices & Workstation',
    accent: 'teal',
    description:
      'Cloud infrastructure libraries, Quarkus & Node.js microservices benchmarks, API gateway clients, and Linux/Neovim/Sway workstation configs.',
    repos: [
      {
        repo: 'nobuffer-site',
        slug: 'nobuffer-site',
        title: 'vitorx86.dev (NoBuffer Site)',
        tags: ['pug', 'tailwind', 'threejs', 'gcp'],
        summary:
          'Source repository for vitorx86.dev — interactive 3D WebGL robot arm, constellation canvas, and terminal design system.',
        featured: false,
      },
      {
        repo: 'performace-com',
        slug: 'performace-com',
        title: 'Performance Benchmarks Catalog',
        tags: ['java', 'quarkus', 'benchmarks', 'load-test'],
        summary:
          'Catalog of applications across different stacks and edge-case scenarios to benchmark throughput and latency.',
        featured: false,
      },
      {
        repo: 'cloudform',
        slug: 'cloudform',
        title: 'Cloudform',
        tags: ['cloud', 'multi-cloud', 'iac'],
        summary:
          'Unified library for provisioning and managing cloud environments across multiple cloud providers.',
        featured: false,
      },
      {
        repo: 'kong-api-client',
        slug: 'kong-api-client',
        title: 'Kong API Client',
        tags: ['javascript', 'nodejs', 'api-gateway'],
        summary:
          'Complete Node.js library enabling programmatic integration with the Kong API Gateway management plane.',
        featured: false,
      },
      {
        repo: 'auth-test',
        slug: 'auth-test',
        title: 'Auth & Security Testbench',
        tags: ['security', 'oauth', 'containers'],
        summary:
          'End-to-end authentication and token validation testbench orchestrated via Makefiles and containers.',
        featured: false,
      },
      {
        repo: 'certification-reniew-pipeline-container',
        slug: 'certification-reniew-pipeline-container',
        title: 'ZeroSSL Certificate Renewal Container',
        tags: ['typescript', 'docker', 'zerossl', 'dns'],
        summary:
          'Containerized pipeline automating ZeroSSL certificate renewal and verification with Google Domains.',
        featured: false,
      },
      {
        repo: 'quarkus-microservices-social-net',
        slug: 'quarkus-microservices-social-net',
        title: 'Quarkus Microservices Social Net',
        tags: ['java', 'quarkus', 'microservices'],
        summary:
          'Distributed social network reference architecture built with Quarkus and MicroProfile.',
        featured: false,
      },
      {
        repo: 'green-credit',
        slug: 'green-credit',
        title: 'Green Credit (Serpro Hackathon)',
        tags: ['dart', 'flutter', 'hackathon'],
        summary:
          'Mobile application developed for the 2023 Serpro Hackathon focused on green credit incentives.',
        featured: false,
      },
      {
        repo: 'microgen',
        slug: 'microgen',
        title: 'Microgen',
        tags: ['typescript', 'webapp', 'management'],
        summary:
          'Association member management system built with TypeScript.',
        featured: false,
      },
      {
        repo: 'python-stack',
        slug: 'python-stack',
        title: 'GCP Server Stack',
        tags: ['typescript', 'python', 'gcp'],
        summary:
          'Lightweight server stack template configured for deployment on Google Cloud Platform.',
        featured: false,
      },
      {
        repo: 'sway-dotfiles-cloud-top',
        slug: 'sway-dotfiles-cloud-top',
        title: 'Sway Dotfiles (Cloudtop)',
        tags: ['sway', 'wayland', 'linux', 'dotfiles'],
        summary:
          'Minimalist, keyboard-driven Sway Window Manager dotfiles tailored for Linux and Cloudtop workstations.',
        featured: false,
      },
      {
        repo: 'Neovim-from-scratch',
        slug: 'neovim-from-scratch',
        title: 'Neovim From Scratch',
        tags: ['lua', 'neovim', 'editor'],
        summary:
          'Modular Lua Neovim configuration designed from scratch for clarity and speed.',
        featured: false,
      },
      {
        repo: 'linux-setup',
        slug: 'linux-setup',
        title: 'Linux Workstation Setup',
        tags: ['shell', 'linux', 'automation'],
        summary:
          'Automated shell provisioning scripts for bootstrapping a fresh Linux development environment.',
        featured: false,
      },
    ],
  },
];

async function fetchJson(url) {
  const headers = { 'User-Agent': USER_AGENT };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} fetching ${url}`);
  }
  return res.json();
}

async function fetchTextOrNull(url) {
  const headers = { 'User-Agent': USER_AGENT };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) return null;
  return res.text();
}

async function fetchRepoReadme(repoName, defaultBranch = 'main') {
  const filenames = ['README.md', 'readme.md', 'Readme.md'];
  const branches = Array.from(new Set([defaultBranch, 'main', 'master']));
  for (const branch of branches) {
    for (const fn of filenames) {
      const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${branch}/${fn}`;
      const text = await fetchTextOrNull(url);
      if (text !== null) {
        return { text, branch, filename: fn, rawUrl: url };
      }
    }
  }
  return null;
}

/**
 * Sanitizes raw GitHub Markdown into valid MDX v2 while preserving fenced code blocks
 * and rewriting relative URLs to GitHub raw / blob URLs.
 */
function sanitizeMarkdownForMdx(markdown, repoName, branch) {
  if (!markdown) return '';

  const rawBase = `https://raw.githubusercontent.com/${GITHUB_USER}/${repoName}/${branch}`;
  const blobBase = `https://github.com/${GITHUB_USER}/${repoName}/blob/${branch}`;

  // Normalize line endings
  let text = markdown.replace(/\r\n/g, '\n');

  // Split by fenced code blocks (``` or ~~~) so we never touch code inside fences
  const lines = text.split('\n');
  const outLines = [];
  let inFence = false;
  let fenceMarker = '';

  for (let line of lines) {
    const trimmed = line.trimStart();
    const fenceMatch = trimmed.match(/^(`{3,}|~{3,})/);
    if (fenceMatch) {
      if (!inFence) {
        inFence = true;
        fenceMarker = fenceMatch[1][0].repeat(fenceMatch[1].length);
        outLines.push(line);
        continue;
      } else if (trimmed.startsWith(fenceMarker[0].repeat(fenceMarker.length))) {
        inFence = false;
        fenceMarker = '';
        outLines.push(line);
        continue;
      }
    }

    if (inFence) {
      outLines.push(line);
      continue;
    }

    // Outside fenced code blocks:
    // 1. Remove HTML comments on a single line or convert multi-line markers
    line = line.replace(/<!--[\s\S]*?-->/g, '');
    line = line.replace(/<!--/g, '').replace(/-->/g, '');

    // 2. Rewrite relative Markdown image paths: ![alt](path)
    line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, urlPart) => {
      const cleanUrl = urlPart.trim().split(/\s+/)[0];
      if (
        cleanUrl.startsWith('http://') ||
        cleanUrl.startsWith('https://') ||
        cleanUrl.startsWith('data:') ||
        cleanUrl.startsWith('#')
      ) {
        return match;
      }
      const rel = cleanUrl.replace(/^\.?\//, '');
      return `![${alt}](${rawBase}/${rel})`;
    });

    // 3. Rewrite relative Markdown links: [label](path) (negative lookbehind for !)
    line = line.replace(/(?<!!)\[([^\]]+)\]\(([^)]+)\)/g, (match, label, urlPart) => {
      const cleanUrl = urlPart.trim().split(/\s+/)[0];
      if (
        cleanUrl.startsWith('http://') ||
        cleanUrl.startsWith('https://') ||
        cleanUrl.startsWith('mailto:') ||
        cleanUrl.startsWith('#')
      ) {
        return match;
      }
      const rel = cleanUrl.replace(/^\.?\//, '');
      return `[${label}](${blobBase}/${rel})`;
    });

    // 4. Convert HTML <img src="..."> to Markdown ![alt](src) (rewriting relative URLs)
    line = line.replace(/<img\s+([^>]*?)>/gi, (match, attrs) => {
      const srcMatch = attrs.match(/src=(["'])([^"']+)\1/i);
      if (!srcMatch) return '';
      let srcVal = srcMatch[2].trim();
      if (
        !srcVal.startsWith('http://') &&
        !srcVal.startsWith('https://') &&
        !srcVal.startsWith('data:')
      ) {
        const rel = srcVal.replace(/^\.?\//, '');
        srcVal = `${rawBase}/${rel}`;
      }
      const altMatch = attrs.match(/alt=(["'])([^"']*)\1/i);
      const altText = altMatch ? altMatch[2].replace(/[\[\]]/g, '') : '';
      return `![${altText}](${srcVal})`;
    });

    // 5. Convert HTML <a href="...">label</a> to Markdown links
    line = line.replace(
      /<a\s+[^>]*href=(["'])([^"']+)\1[^>]*>([\s\S]*?)<\/a>/gi,
      (_, _q, href, inner) => {
        const trimmed = inner.trim();
        return trimmed ? `[${trimmed}](${href})` : '';
      }
    );

    // 6. Convert single-line HTML headings <h1..h4>text</h1..h4>
    line = line.replace(
      /<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi,
      (_, inner) => `### ${inner.trim()}`
    );

    // 7. Strip common decorative HTML wrapper tags used in GitHub READMEs
    line = line.replace(
      /<\/?(?:p|div|span|picture|source|details|summary|center|b|i|strong|em|h[1-6]|a|sub|sup)(?:\s+[^>]*)?>/gi,
      ''
    );

    // 8. Protect inline code spans (`...`) while escaping MDX-unsafe tokens outside them
    const segments = line.split(/(`+[^`]*`+)/g);
    for (let i = 0; i < segments.length; i++) {
      if (i % 2 === 1) continue; // Inside inline code span
      let seg = segments[i];

      // Convert <https://...> autolinks to standard markdown links
      seg = seg.replace(/<(https?:\/\/[^\s>]+)>/g, '[$1]($1)');
      seg = seg.replace(
        /<([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})>/g,
        '[$1](mailto:$1)'
      );

      // Escape { and } for MDX
      seg = seg.replace(/\{/g, '\\{').replace(/\}/g, '\\}');

      // Convert void HTML tags to self-closing
      seg = seg.replace(/<br\s*\/?>/gi, '<br />');
      seg = seg.replace(/<hr\s*\/?>/gi, '<hr />');

      // Escape any remaining `<` that is NOT `<br />`, `<hr />`, `<kbd>`
      seg = seg.replace(
        /<(?!\/?(?:br|hr|kbd)\b)/gi,
        '&lt;'
      );

      segments[i] = seg;
    }
    line = segments.join('');

    outLines.push(line);
  }

  // Strip leading H1 if it duplicates the page header, or keep it cleanly
  return outLines.join('\n').trim();
}

async function main() {
  console.log(`~$ syncing projects from github.com/${GITHUB_USER}...`);

  let allRepos = [];
  try {
    allRepos = await fetchJson(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
    );
    console.log(`✓ fetched ${allRepos.length} repositories from GitHub API`);
  } catch (err) {
    console.warn(`! GitHub API rate-limited or unavailable (${err.message}), falling back to raw README fetch.`);
  }

  const repoMap = new Map(allRepos.map((r) => [r.name.toLowerCase(), r]));

  // Generate category folders and project MDX pages
  for (const category of CATEGORIES) {
    const categoryDir = path.join(CONTENT_DIR, category.slug);
    await fs.mkdir(categoryDir, { recursive: true });

    const categoryMeta = {
      index: `Overview (${category.navTitle})`,
    };

    for (const item of category.repos) {
      const apiRepo = repoMap.get(item.repo.toLowerCase());
      const defaultBranch = apiRepo?.default_branch || 'main';
      const language = apiRepo?.language || item.tags[0] || 'Code';
      const stars = apiRepo?.stargazers_count || 0;
      const isFork = Boolean(apiRepo?.fork);
      const repoUrl = `https://github.com/${GITHUB_USER}/${item.repo}`;

      const readmeResult = await fetchRepoReadme(item.repo, defaultBranch);
      const rawReadme = readmeResult?.text || '';
      const usedBranch = readmeResult?.branch || defaultBranch;
      const sanitizedReadme = sanitizeMarkdownForMdx(rawReadme, item.repo, usedBranch);

      const hasSubstantialReadme = sanitizedReadme.length > 60;

      const mdxContent = `import { ProjectHeader, TerminalCallout } from '../../components/portfolio'

# ${item.title}

<ProjectHeader
  name=${JSON.stringify(item.title)}
  repo=${JSON.stringify(item.repo)}
  branch=${JSON.stringify(usedBranch)}
  description=${JSON.stringify(item.summary)}
  language=${JSON.stringify(language)}
  tags={${JSON.stringify(item.tags)}}
  stars={${stars}}
  isFork={${isFork}}
  githubUrl=${JSON.stringify(repoUrl)}
/>

${
  hasSubstantialReadme
    ? sanitizedReadme
    : `<TerminalCallout command="cat ./README.md">
  This repository has a minimal README on GitHub. Inspect the source tree, commits, and implementation directly at <a href="${repoUrl}" target="_blank" rel="noopener noreferrer">github.com/${GITHUB_USER}/${item.repo}</a>.
</TerminalCallout>

${sanitizedReadme}`
}
`;

      const filePath = path.join(categoryDir, `${item.slug}.mdx`);
      await fs.writeFile(filePath, mdxContent, 'utf8');
      categoryMeta[item.slug] = item.title;
      console.log(
        `  ✓ synced ~/projects/${category.slug}/${item.slug}.mdx (${rawReadme.length} bytes from ${item.repo}@${usedBranch})`
      );
    }

    // Create category index.mdx
    const categoryIndexMdx = `import { TerminalEyebrow, ProjectGrid } from '../../components/portfolio'

<TerminalEyebrow command=${JSON.stringify(category.command)} />

# ${category.headline}

${category.description}

<ProjectGrid
  accent=${JSON.stringify(category.accent)}
  projects={${JSON.stringify(
    category.repos.map((r) => ({
      title: r.title,
      repo: r.repo,
      path: `~/projects/${r.slug}`,
      description: r.summary,
      tags: r.tags,
      docsHref: `/${category.slug}/${r.slug}`,
      githubHref: `https://github.com/${GITHUB_USER}/${r.repo}`,
    })),
    null,
    2
  )}}
/>
`;

    await fs.writeFile(path.join(categoryDir, 'index.mdx'), categoryIndexMdx, 'utf8');
    await fs.writeFile(
      path.join(categoryDir, '_meta.js'),
      `export default ${JSON.stringify(categoryMeta, null, 2)}\n`,
      'utf8'
    );
  }

  // Sync profile README into content/about.mdx
  const profileReadme = await fetchRepoReadme('vitorecomp', 'main');
  const sanitizedProfile = profileReadme
    ? sanitizeMarkdownForMdx(profileReadme.text, 'vitorecomp', profileReadme.branch)
    : '';

  const aboutMdx = `import { TerminalEyebrow, ProjectHeader } from '../components/portfolio'

<TerminalEyebrow command="whoami && cat ~/vitorecomp/README.md" />

# Hi, I'm Vitor

<ProjectHeader
  name="Vieira Vitor (vitorx86)"
  repo="vitorecomp"
  branch="main"
  description="Google developer who loves coding, tinkering with hardware, and everything open source. Rust, Go, C++, AI, embedded systems, and race cars."
  language="Rust / Go / C++ / Python"
  tags={['open-source', 'systems', 'ai', 'embedded', 'motorsport']}
  stars={0}
  isFork={false}
  githubUrl="https://github.com/vitorecomp"
/>

${sanitizedProfile}
`;
  await fs.writeFile(path.join(CONTENT_DIR, 'about.mdx'), aboutMdx, 'utf8');
  console.log('  ✓ synced content/about.mdx from github.com/vitorecomp/vitorecomp');

  // Generate content/repositories.mdx with all public repos from GitHub
  if (allRepos.length > 0) {
    const curatedMap = new Map();
    for (const cat of CATEGORIES) {
      for (const r of cat.repos) {
        curatedMap.set(r.repo.toLowerCase(), `/${cat.slug}/${r.slug}`);
      }
    }

    const catalogData = allRepos
      .filter((r) => !r.archived)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .map((r) => ({
        name: r.name,
        description: r.description || 'Open-source repository on github.com/vitorecomp',
        language: r.language || 'Misc',
        fork: Boolean(r.fork),
        stars: r.stargazers_count || 0,
        url: r.html_url,
        docsHref: curatedMap.get(r.name.toLowerCase()) || null,
        updatedAt: r.pushed_at ? r.pushed_at.slice(0, 10) : '',
      }));

    const reposPageMdx = `import { TerminalEyebrow, RepoCatalogTable } from '../components/portfolio'

<TerminalEyebrow command="gh repo list vitorecomp --limit 100" />

# All GitHub Repositories

Complete index of public repositories under [github.com/vitorecomp](https://github.com/vitorecomp). Featured projects include full synced documentation pages right here in the portfolio; every row links directly to the source repository.

<RepoCatalogTable repos={${JSON.stringify(catalogData, null, 2)}} />
`;
    await fs.writeFile(path.join(CONTENT_DIR, 'repositories.mdx'), reposPageMdx, 'utf8');
    console.log(`  ✓ generated content/repositories.mdx (${catalogData.length} repositories)`);
  }

  console.log('~$ sync completed successfully (exit 0)');
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
