'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './portfolio.module.css'

export interface ProjectItem {
  title: string
  repo: string
  path: string
  description: string
  tags: string[]
  docsHref: string
  githubHref: string
}

export function TerminalEyebrow({ command }: { command: string }) {
  return (
    <p className={styles.eyebrow}>
      <span className={styles.eyebrowPrefix}>~$&nbsp;</span>
      {command}
    </p>
  )
}

export function TerminalHero({
  command = 'ls -la ~/projects',
  title = 'Project Portfolio & Docs',
  subtitle = 'Documentation hub and repository index for Vitor (vitorx86) — pulling README.md files directly from github.com/vitorecomp across Rust, Go, C++, AI/MCP, and embedded garage builds.',
}: {
  command?: string
  title?: string
  subtitle?: string
}) {
  return (
    <section className={styles.hero}>
      <TerminalEyebrow command={command} />
      <h1 className={styles.heroTitle}>
        {title}
        <span className={styles.cursor} aria-hidden="true">
          &#9612;
        </span>
      </h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <div className={styles.ctaGroup}>
        <Link href="/repositories" className={styles.terminalBtn}>
          <span className={styles.dollarPrefix}>$</span>
          <span>./view_all_repos.sh</span>
        </Link>
        <a
          href="https://vitorx86.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.terminalBtnSecondary}
        >
          <span className={styles.dollarPrefix}>$</span>
          <span>./open_vitorx86.sh ↗</span>
        </a>
        <a
          href="https://github.com/vitorecomp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.terminalBtnSecondary}
        >
          <span className={styles.dollarPrefix}>$</span>
          <span>./open_github.sh ↗</span>
        </a>
      </div>
    </section>
  )
}

export function ProjectGrid({
  projects,
  accent = 'teal',
}: {
  projects: ProjectItem[]
  accent?: 'teal' | 'indigo' | 'pink'
}) {
  const tagClass =
    accent === 'indigo'
      ? styles.tagIndigo
      : accent === 'pink'
      ? styles.tagPink
      : styles.tagTeal

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <article key={project.repo} className={styles.card}>
          <div className={styles.cardTitleBar}>
            <span className={styles.dotRed} aria-hidden="true" />
            <span className={styles.dotYellow} aria-hidden="true" />
            <span className={styles.dotGreen} aria-hidden="true" />
            <span className={styles.cardPath}>{project.path}</span>
          </div>
          <div className={styles.cardBody}>
            <h3 className={styles.cardHeading}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <div className={styles.tagList}>
              {project.tags.map((tag) => (
                <span key={tag} className={tagClass}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <Link href={project.docsHref} className={styles.cardActionPrimary}>
                <span className={styles.dollarPrefix}>$&nbsp;</span>
                <span>./read_docs.sh</span>
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </Link>
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardActionSecondary}
                aria-label={`Open ${project.title} on GitHub`}
              >
                ./github ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export function ProjectHeader({
  name,
  repo,
  branch = 'main',
  description,
  language,
  tags = [],
  stars = 0,
  isFork = false,
  githubUrl,
}: {
  name: string
  repo: string
  branch?: string
  description: string
  language?: string
  tags?: string[]
  stars?: number
  isFork?: boolean
  githubUrl: string
}) {
  const rawReadmeUrl = `${githubUrl}/blob/${branch}/README.md`

  return (
    <div className={styles.projectHeader}>
      <div className={styles.projectHeaderBar}>
        <div className={styles.projectHeaderDots}>
          <span className={styles.dotRed} aria-hidden="true" />
          <span className={styles.dotYellow} aria-hidden="true" />
          <span className={styles.dotGreen} aria-hidden="true" />
          <span className={styles.cardPath}>
            ~/vitorecomp/{repo} ({branch})
          </span>
        </div>
        <span className={styles.projectHeaderMeta}>
          {language ? `[${language}]` : ''}
          {stars > 0 ? ` ★ ${stars}` : ''}
          {isFork ? ' (fork)' : ''}
        </span>
      </div>
      <div className={styles.projectHeaderBody}>
        <p className={styles.projectHeaderDesc}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tagList}>
            {tags.map((t) => (
              <span key={t} className={styles.tagTeal}>
                {t}
              </span>
            ))}
          </div>
        )}
        <div className={styles.projectHeaderActions}>
          <div className={styles.ctaGroup}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.terminalBtn}
            >
              <span className={styles.dollarPrefix}>$</span>
              <span>./open_github_repo.sh ↗</span>
            </a>
            <a
              href={rawReadmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.terminalBtnSecondary}
            >
              <span className={styles.dollarPrefix}>$</span>
              <span>./view_source_md.sh ↗</span>
            </a>
          </div>
          <span className={styles.projectHeaderComment}>
            # synced from github.com/vitorecomp/{repo}
          </span>
        </div>
      </div>
    </div>
  )
}

export function TerminalCallout({
  command = 'cat ./NOTE.txt',
  children,
}: {
  command?: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.callout}>
      <div className={styles.calloutCmd}>
        <span className={styles.dollarPrefix}>~$&nbsp;</span>
        {command}
      </div>
      <div>{children}</div>
    </div>
  )
}

export interface CatalogRepoItem {
  name: string
  description: string
  language: string
  fork: boolean
  stars: number
  url: string
  docsHref: string | null
  updatedAt: string
}

export function RepoCatalogTable({ repos }: { repos: CatalogRepoItem[] }) {
  const [query, setQuery] = useState('')

  const filtered = repos.filter((r) => {
    if (!query.trim()) return true
    const q = query.toLowerCase()
    return (
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.language.toLowerCase().includes(q)
    )
  })

  return (
    <div className={styles.catalogWrapper}>
      <div className={styles.filterBar}>
        <label htmlFor="repo-filter-input" className={styles.filterPrompt}>
          $ grep -i
        </label>
        <input
          id="repo-filter-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by repo name, language (Rust, Go, C++, Python), or topic..."
          className={styles.filterInput}
        />
        <span className={styles.filterCount}>
          {filtered.length} / {repos.length} repos
        </span>
      </div>

      <div className={styles.repoList}>
        {filtered.map((repo) => (
          <div key={repo.name} className={styles.repoRow}>
            <div>
              <div className={styles.repoRowHeader}>
                <span className={styles.repoRowName}>./{repo.name}</span>
                <span className={styles.tagTeal}>{repo.language}</span>
              </div>
              <p className={styles.repoRowDesc}>{repo.description}</p>
            </div>
            <div className={styles.repoRowFooter}>
              {repo.docsHref ? (
                <Link href={repo.docsHref} className={styles.cardActionPrimary}>
                  <span className={styles.dollarPrefix}>$&nbsp;</span>
                  <span>./read_docs.sh &rarr;</span>
                </Link>
              ) : (
                <span className={styles.projectHeaderComment}>
                  updated {repo.updatedAt}
                </span>
              )}
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardActionSecondary}
              >
                $ ./open_repo.sh ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
