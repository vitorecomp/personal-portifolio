'use client'

import React, { useEffect, useId, useMemo, useState } from 'react'
import Link from 'next/link'
import * as pagefindEngine from './search-index.generated.js'
import styles from './portfolio.module.css'

if (typeof window !== 'undefined') {
  ;(window as any).pagefind = pagefindEngine
}

export function SearchInitializer() {
  useEffect(() => {
    ;(window as any).pagefind = pagefindEngine
  }, [])
  return null
}

export interface ProjectItem {
  title: string
  repo: string
  path: string
  description: string
  tags: string[]
  docsHref: string
  githubHref: string
  language?: string
  featured?: boolean
}

export interface DirectoryItem {
  command: string
  path: string
  title: string
  description: string
  count: number
  tags: string[]
  href: string
  accent: 'teal' | 'indigo' | 'pink'
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
  subtitle = 'Documentation hub and repository index for Vitor (vitorx86) — pulling README.md architecture docs and source metadata directly from github.com/vitorecomp across Rust, Go, C++, AI/MCP, and embedded garage builds.',
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
          <span>./browse_all_repos.sh</span>
          <span className={styles.arrow} aria-hidden="true">
            &rarr;
          </span>
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
          href="https://blog.vitorx86.dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.terminalBtnSecondary}
        >
          <span className={styles.dollarPrefix}>$</span>
          <span>./open_blog.sh ↗</span>
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
  bento = false,
}: {
  projects: ProjectItem[]
  accent?: 'teal' | 'indigo' | 'pink'
  bento?: boolean
}) {
  const tagClass =
    accent === 'indigo'
      ? styles.tagIndigo
      : accent === 'pink'
      ? styles.tagPink
      : styles.tagTeal

  return (
    <div className={bento ? styles.gridBento : styles.grid}>
      {projects.map((project, idx) => {
        const isFeaturedSpan =
          bento && (project.featured || idx === 0 || idx === 3)
        const primaryLang = project.language || project.tags[0] || 'code'

        return (
          <article
            key={project.repo}
            className={`${styles.card} ${
              isFeaturedSpan ? styles.cardFeatured : ''
            }`}
          >
            <div className={styles.cardTitleBar}>
              <div className={styles.cardTitleLeft}>
                <span className={styles.dotRed} aria-hidden="true" />
                <span className={styles.dotYellow} aria-hidden="true" />
                <span className={styles.dotGreen} aria-hidden="true" />
                <span className={styles.cardPath}>{project.path}</span>
              </div>
              <span className={styles.cardLangBadge}>
                {isFeaturedSpan ? `★ ${primaryLang}` : primaryLang}
              </span>
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
                <Link
                  href={project.docsHref}
                  className={styles.cardActionPrimary}
                >
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
        )
      })}
    </div>
  )
}

export function DirectoryExplorer({
  directories,
}: {
  directories: DirectoryItem[]
}) {
  return (
    <div className={styles.dirExplorer}>
      <div className={styles.dirExplorerBar}>
        <div className={styles.cardTitleLeft}>
          <span className={styles.dotRed} aria-hidden="true" />
          <span className={styles.dotYellow} aria-hidden="true" />
          <span className={styles.dotGreen} aria-hidden="true" />
          <span className={styles.cardPath}>~/vitorx86/portfolio/directories</span>
        </div>
        <span className={styles.cardLangBadge}>$ tree -L 1 ~/projects</span>
      </div>
      <div className={styles.dirGrid}>
        {directories.map((dir) => {
          const tagClass =
            dir.accent === 'indigo'
              ? styles.tagIndigo
              : dir.accent === 'pink'
              ? styles.tagPink
              : styles.tagTeal

          return (
            <Link key={dir.path} href={dir.href} className={styles.dirRow}>
              <div className={styles.dirRowTop}>
                <span className={styles.dirPath}>
                  <span className={styles.dollarPrefix}>drwxr-xr-x&nbsp;</span>
                  {dir.path}/
                </span>
                <span className={styles.dirCount}>{dir.count} repos</span>
              </div>
              <h3 className={styles.dirTitle}>{dir.title}</h3>
              <p className={styles.dirDesc}>{dir.description}</p>
              <div className={styles.dirRowBottom}>
                <div className={styles.tagListCompact}>
                  {dir.tags.map((tag) => (
                    <span key={tag} className={tagClass}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={styles.dirCta}>
                  <span className={styles.dollarPrefix}>$&nbsp;</span>cd {dir.path}{' '}
                  <span className={styles.arrow} aria-hidden="true">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          )
        })}
      </div>
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

export function TerminalMermaid({
  chart,
  title = 'architecture.mmd',
}: {
  chart: string
  title?: string
}) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, '')
  const [svgHtml, setSvgHtml] = useState<string | null>(null)
  const [showSource, setShowSource] = useState(false)
  const [renderError, setRenderError] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function renderDiagram() {
      try {
        const mermaidUrl =
          'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs'
        const mod = await import(/* webpackIgnore: true */ mermaidUrl)
        const mermaid = mod.default || mod
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'loose',
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          themeVariables: {
            darkMode: true,
            background: '#111827',
            primaryColor: '#1f2937',
            primaryTextColor: '#f9fafb',
            primaryBorderColor: '#2dd4bf',
            lineColor: '#4ade80',
            secondaryColor: '#14142f',
            tertiaryColor: '#1f2937',
          },
        })
        const { svg } = await mermaid.render(`mmd-${reactId}`, chart.trim())
        if (!cancelled) {
          setSvgHtml(svg)
        }
      } catch {
        if (!cancelled) {
          setRenderError(true)
        }
      }
    }
    renderDiagram()
    return () => {
      cancelled = true
    }
  }, [chart, reactId])

  return (
    <div className={styles.mermaidWindow}>
      <div className={styles.mermaidBar}>
        <div className={styles.cardTitleLeft}>
          <span className={styles.dotRed} aria-hidden="true" />
          <span className={styles.dotYellow} aria-hidden="true" />
          <span className={styles.dotGreen} aria-hidden="true" />
          <span className={styles.cardPath}>~/diagrams/{title}</span>
        </div>
        <button
          type="button"
          onClick={() => setShowSource((prev) => !prev)}
          className={styles.mermaidToggleBtn}
        >
          {showSource || renderError
            ? '$ ./render_diagram.sh'
            : '$ cat ./source.mmd'}
        </button>
      </div>
      {!showSource && svgHtml && !renderError ? (
        <div
          className={styles.mermaidCanvas}
          dangerouslySetInnerHTML={{ __html: svgHtml }}
        />
      ) : (
        <pre className={styles.mermaidSource}>
          <code>{chart.trim()}</code>
        </pre>
      )}
    </div>
  )
}

export function RepoOverviewFallback({
  repo,
  branch = 'main',
  summary,
  readmeSnippet,
  language = 'Code',
  tags = [],
  githubUrl,
}: {
  repo: string
  branch?: string
  summary: string
  readmeSnippet?: string
  language?: string
  tags?: string[]
  githubUrl: string
}) {
  const [copied, setCopied] = useState(false)
  const cloneCmd = `git clone ${githubUrl}.git && cd ${repo}`

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cloneCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div className={styles.fallbackCard}>
      <div className={styles.fallbackHeader}>
        <span className={styles.calloutCmd}>
          <span className={styles.dollarPrefix}>~$&nbsp;</span>
          stat ~/vitorecomp/{repo}
        </span>
        <span className={styles.cardLangBadge}>branch: {branch}</span>
      </div>
      <p className={styles.fallbackDesc}>{summary}</p>
      {readmeSnippet &&
        readmeSnippet.trim().toLowerCase() !== summary.trim().toLowerCase() && (
          <blockquote className={styles.fallbackQuote}>
            {readmeSnippet}
          </blockquote>
        )}
      <div className={styles.fallbackCloneBox}>
        <code className={styles.fallbackCloneCode}>
          <span className={styles.dollarPrefix}>$&nbsp;</span>
          {cloneCmd}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className={styles.mermaidToggleBtn}
        >
          {copied ? '✓ copied' : 'copy'}
        </button>
      </div>
      <div className={styles.fallbackLinks}>
        <a
          href={`${githubUrl}/tree/${branch}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionPrimary}
        >
          <span className={styles.dollarPrefix}>$&nbsp;</span>
          <span>./browse_source_tree.sh ↗</span>
        </a>
        <a
          href={`${githubUrl}/commits/${branch}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionSecondary}
        >
          ./commit_log ↗
        </a>
        <a
          href={`${githubUrl}/issues`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionSecondary}
        >
          ./issues (lang: {language}) ↗
        </a>
      </div>
      {tags.length > 0 && (
        <div className={styles.tagList} style={{ marginTop: '0.85rem' }}>
          {tags.map((t) => (
            <span key={t} className={styles.tagTeal}>
              {t}
            </span>
          ))}
        </div>
      )}
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
  const [onlyWithDocs, setOnlyWithDocs] = useState(false)
  const [hideForks, setHideForks] = useState(false)
  const [selectedLang, setSelectedLang] = useState<string>('ALL')

  const topLanguages = useMemo(() => {
    const counts = new Map<string, number>()
    for (const r of repos) {
      const lang = r.language || 'Misc'
      counts.set(lang, (counts.get(lang) || 0) + 1)
    }
    return Array.from(counts.entries())
      .filter(([lang]) => lang !== 'Misc')
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
  }, [repos])

  const docsCount = useMemo(
    () => repos.filter((r) => Boolean(r.docsHref)).length,
    [repos]
  )

  const filtered = useMemo(() => {
    return repos.filter((r) => {
      if (onlyWithDocs && !r.docsHref) return false
      if (hideForks && r.fork) return false
      if (
        selectedLang !== 'ALL' &&
        r.language.toLowerCase() !== selectedLang.toLowerCase()
      ) {
        return false
      }
      if (!query.trim()) return true
      const q = query.toLowerCase()
      return (
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.language.toLowerCase().includes(q)
      )
    })
  }, [repos, query, onlyWithDocs, hideForks, selectedLang])

  return (
    <div className={styles.catalogWrapper}>
      <div className={styles.filterPanel}>
        <div className={styles.filterBar}>
          <label htmlFor="repo-filter-input" className={styles.filterPrompt}>
            $ grep -i
          </label>
          <input
            id="repo-filter-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by repository name, language (Rust, Go, C++, Python), or topic..."
            className={styles.filterInput}
          />
          <span className={styles.filterCount}>
            {filtered.length} / {repos.length} repos
          </span>
        </div>

        <div className={styles.filterControlsRow}>
          <div className={styles.filterFlags}>
            <button
              type="button"
              onClick={() => setOnlyWithDocs((v) => !v)}
              className={
                onlyWithDocs ? styles.flagChipActive : styles.flagChip
              }
            >
              --with-docs ({docsCount})
            </button>
            <button
              type="button"
              onClick={() => setHideForks((v) => !v)}
              className={hideForks ? styles.flagChipActive : styles.flagChip}
            >
              --source-only
            </button>
            {(onlyWithDocs || hideForks || selectedLang !== 'ALL' || query) && (
              <button
                type="button"
                onClick={() => {
                  setOnlyWithDocs(false)
                  setHideForks(false)
                  setSelectedLang('ALL')
                  setQuery('')
                }}
                className={styles.flagChipReset}
              >
                $ reset
              </button>
            )}
          </div>

          <div className={styles.langChipGroup}>
            <button
              type="button"
              onClick={() => setSelectedLang('ALL')}
              className={
                selectedLang === 'ALL' ? styles.langChipActive : styles.langChip
              }
            >
              All
            </button>
            {topLanguages.map(([lang, count]) => (
              <button
                key={lang}
                type="button"
                onClick={() =>
                  setSelectedLang((prev) => (prev === lang ? 'ALL' : lang))
                }
                className={
                  selectedLang === lang
                    ? styles.langChipActive
                    : styles.langChip
                }
              >
                {lang} <span className={styles.langChipCount}>{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.repoList}>
        {filtered.map((repo) => {
          const isPlaceholderDesc =
            repo.description ===
            'Open-source repository on github.com/vitorecomp'
          const cleanDesc = isPlaceholderDesc
            ? `${repo.language} repository under github.com/vitorecomp/${repo.name}.`
            : repo.description

          return (
            <div
              key={repo.name}
              id={`repo-${repo.name}`}
              className={`${styles.repoRow} ${
                repo.docsHref ? styles.repoRowHasDocs : ''
              }`}
            >
              <div>
                <div className={styles.repoRowHeader}>
                  <span className={styles.repoRowName}>
                    ./{repo.name}
                    {repo.fork && (
                      <span className={styles.forkBadge}>fork</span>
                    )}
                  </span>
                  <div className={styles.repoRowBadges}>
                    {repo.docsHref && (
                      <span className={styles.docsBadge}>DOCS</span>
                    )}
                    <span className={styles.tagTeal}>{repo.language}</span>
                  </div>
                </div>
                <p className={styles.repoRowDesc}>{cleanDesc}</p>
              </div>
              <div className={styles.repoRowFooter}>
                {repo.docsHref ? (
                  <Link
                    href={repo.docsHref}
                    className={styles.cardActionPrimary}
                  >
                    <span className={styles.dollarPrefix}>$&nbsp;</span>
                    <span>./read_docs.sh</span>
                    <span className={styles.arrow} aria-hidden="true">
                      &rarr;
                    </span>
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
          )
        })}
      </div>
    </div>
  )
}
