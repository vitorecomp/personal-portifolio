'use client'

import React, { useEffect, useId, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

export function CyberSysClock() {
  const [timeStr, setTimeStr] = useState('14:42:08')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const hh = String(now.getUTCHours()).padStart(2, '0')
      const mm = String(now.getUTCMinutes()).padStart(2, '0')
      const ss = String(now.getUTCSeconds()).padStart(2, '0')
      setTimeStr(`${hh}:${mm}:${ss}`)
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.navRightCluster}>
      <div className={styles.sysTimeBox} aria-label="System UTC Time">
        <span className={styles.sysTimeLabel}>SYS.TIME</span>
        <span className={styles.sysTimeValue}>{timeStr}</span>
        <span className={styles.sysTimeZone}>
          UTC+0 <span className={styles.sysTimeDot}>+</span>
        </span>
      </div>
      <Link href="/repositories" className={styles.navStartBtn}>
        <span>ALL REPOS</span>
        <span className={styles.violetArrow} aria-hidden="true">
          &#8599;
        </span>
      </Link>
    </div>
  )
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

export function TerminalEyebrow({
  command,
  index = '/01',
}: {
  command: string
  index?: string
}) {
  return (
    <div className={styles.sectionHeaderBar}>
      <span className={styles.sectionIndex}>{index}</span>
      <span className={styles.sectionHeaderTitle}>{command}</span>
    </div>
  )
}

export function TerminalHero({
  command = 'SYSTEMS & AI ARCHITECTURE',
  title = 'CYBER BRUTAL CODE',
  subtitle = 'Documentation hub and engineering index for Vitor (vitorx86). Raw systems programming, Rust SIMD vector engines, enterprise MCP servers, and bare-metal ESP32 / ECU garage builds.',
}: {
  command?: string
  title?: string
  subtitle?: string
}) {
  return (
    <section id="sec-01" className={styles.heroFrame}>
      {/* Left Vertical Technical Rail */}
      <div className={styles.heroLeftRail} aria-hidden="true">
        <span className={styles.railTick}>| | |</span>
        <span className={styles.railText}>{command}</span>
        <span className={styles.railYear}>2026</span>
      </div>

      {/* Left Main Content Cell */}
      <div className={styles.heroLeftCell}>
        <div className={styles.heroIndex}>/01</div>
        <h1 className={styles.heroDisplayTitle}>
          <span>SYSTEMS &amp;</span>
          <span>{title}</span>
        </h1>
        <p className={styles.heroTagline}>
          FUNCTIONAL. LOW-LEVEL. UNAPOLOGETIC.
        </p>
        <p className={styles.heroDescription}>{subtitle}</p>
      </div>

      {/* Right Voxel & Wireframe Blueprint Cell */}
      <div className={styles.heroRightCell}>
        <div className={styles.hudBadge}>
          <div>&bull; &gt; COMPILING_INDEX</div>
          <div>
            &bull; <strong>93 REPOS // SYNCED</strong>
          </div>
        </div>

        <div className={styles.globeBadge}>
          <Link href="/repositories" className={styles.brutalBtnPrimary}>
            <span>EXPLORE REPOS</span>
            <span className={styles.violetArrow} aria-hidden="true">
              &#8599;
            </span>
          </Link>
          <Link href="/about" className={styles.brutalBtnGhost}>
            <span>ENGINEER SPEC</span>
            <span className={styles.bracketIcon} aria-hidden="true">
              [ ]
            </span>
          </Link>
        </div>

        {/* Isometric Voxel Matrix SVG matching the reference artwork */}
        <div className={styles.voxelCanvas} aria-hidden="true">
          <svg
            viewBox="0 0 420 340"
            className={styles.voxelSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Orthographic construction lines */}
            <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1">
              <line x1="20" y1="280" x2="390" y2="280" />
              <line x1="20" y1="305" x2="320" y2="305" />
              <line x1="70" y1="40" x2="70" y2="320" />
              <line x1="120" y1="30" x2="120" y2="320" />
              <line x1="210" y1="20" x2="210" y2="320" />
              <line x1="300" y1="25" x2="300" y2="310" />
              <line x1="90" y1="75" x2="335" y2="25" />
              <line x1="70" y1="245" x2="355" y2="185" />
            </g>

            {/* Violet accent voxel blocks */}
            <rect x="64" y="128" width="26" height="44" fill="#8B5CF6" fillOpacity="0.85" />
            <rect x="82" y="156" width="38" height="24" fill="#A78BFA" fillOpacity="0.75" />
            <rect x="195" y="272" width="64" height="32" fill="#7C3AED" fillOpacity="0.85" />
            <rect x="292" y="182" width="32" height="58" fill="#8B5CF6" fillOpacity="0.8" />

            {/* Core Stark Brutalist Structural Tower Blocks */}
            <polygon
              points="130,95 255,55 255,265 130,285"
              fill="#181820"
              stroke="#09090D"
              strokeWidth="1.5"
            />
            <polygon
              points="255,55 340,105 340,245 255,265"
              fill="#272733"
              stroke="#09090D"
              strokeWidth="1.5"
            />
            <polygon
              points="105,155 215,120 215,275 105,290"
              fill="#09090D"
              fillOpacity="0.92"
            />

            {/* Internal Voxel Grid Subdivisions */}
            <g stroke="#F5F5F8" strokeOpacity="0.22" strokeWidth="1">
              <line x1="130" y1="140" x2="340" y2="140" />
              <line x1="130" y1="185" x2="340" y2="185" />
              <line x1="130" y1="230" x2="340" y2="230" />
              <line x1="175" y1="75" x2="175" y2="280" />
              <line x1="215" y1="65" x2="215" y2="275" />
              <line x1="295" y1="80" x2="295" y2="255" />
            </g>

            {/* Acid Lime Telemetry Voxels */}
            <rect x="78" y="218" width="22" height="28" fill="#BEF264" stroke="#09090D" strokeWidth="1.2" />
            <rect x="182" y="192" width="32" height="24" fill="#BEF264" fillOpacity="0.9" />
            <rect x="272" y="222" width="24" height="26" fill="#D9F99D" stroke="#09090D" strokeWidth="1.2" />
            <rect x="142" y="68" width="22" height="22" fill="#09090D" />

            {/* Registration Crosshairs (+) */}
            <g fill="#7C3AED" fontFamily="monospace" fontSize="14" fontWeight="700">
              <text x="115" y="75">+</text>
              <text x="296" y="45">+</text>
              <text x="58" y="212">+</text>
              <text x="242" y="318">+</text>
            </g>
          </svg>
        </div>

        {/* Acid Lime Coordinate Box overlapping right edge */}
        <div className={styles.coordBox}>
          <div>X_23.5505</div>
          <div>Y_-46.6333</div>
          <div>Z_93.0410</div>
        </div>

        <div className={styles.sceneTag}>//SCN_01</div>
      </div>
    </section>
  )
}

export function DirectoryExplorer({
  directories,
}: {
  directories: DirectoryItem[]
}) {
  const icons = [
    // 0: Isometric Cube (Systems & CLI)
    <svg key="cube" viewBox="0 0 40 40" width="38" height="38" fill="none">
      <polygon
        points="20,4 35,12 35,28 20,36 5,28 5,12"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <polyline
        points="5,12 20,20 35,12"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="36"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>,
    // 1: Target Grid Matrix (AI & Agents)
    <svg key="grid" viewBox="0 0 40 40" width="38" height="38" fill="none">
      <rect
        x="6"
        y="6"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="13"
        y="13"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.2" />
    </svg>,
    // 2: Hardware Reticle (Backyard Mech)
    <svg key="mech" viewBox="0 0 40 40" width="38" height="38" fill="none">
      <circle
        cx="20"
        cy="20"
        r="11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="4 3"
      />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <line x1="20" y1="3" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="30" x2="20" y2="37" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="20" x2="37" y2="20" stroke="currentColor" strokeWidth="1.5" />
    </svg>,
    // 3: Modular Pixel Cluster (Cloud & DevTools)
    <svg key="cloud" viewBox="0 0 40 40" width="38" height="38" fill="none">
      <rect x="6" y="8" width="10" height="10" fill="currentColor" />
      <rect x="20" y="8" width="12" height="10" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="22" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
      <rect x="26" y="22" width="8" height="8" fill="currentColor" />
    </svg>,
  ]

  return (
    <section id="sec-02" className={styles.principlesSection}>
      <div className={styles.sectionHeaderBar}>
        <span className={styles.sectionIndex}>/02</span>
        <span className={styles.sectionHeaderTitle}>
          ENGINEERING DOMAINS // DIRECTORY MATRIX
        </span>
      </div>

      <div className={styles.principlesGrid}>
        {directories.map((dir, idx) => (
          <Link key={dir.path} href={dir.href} className={styles.principleCell}>
            <div className={styles.principleTopRow}>
              <div className={styles.principleIcon}>
                {icons[idx % icons.length]}
              </div>
              <span className={styles.principleCross}>+</span>
            </div>
            <div className={styles.principleContent}>
              <div className={styles.principleTitle}>
                {dir.title.toUpperCase()}
              </div>
              <p className={styles.principleDesc}>{dir.description}</p>
              <div className={styles.principleFooter}>
                <span className={styles.principlePath}>
                  {dir.path} [{dir.count}]
                </span>
                <span className={styles.violetArrow} aria-hidden="true">
                  &#8599;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function ProjectGrid({
  projects,
  bento = false,
  sectionIndex = '/03',
  sectionTitle = 'SELECTED WORK // OPEN SOURCE REPOSITORIES',
}: {
  projects: ProjectItem[]
  accent?: 'teal' | 'indigo' | 'pink'
  bento?: boolean
  sectionIndex?: string
  sectionTitle?: string
}) {
  return (
    <section id="sec-03" className={styles.workSection}>
      <div className={styles.sectionHeaderBar}>
        <span className={styles.sectionIndex}>{sectionIndex}</span>
        <span className={styles.sectionHeaderTitle}>{sectionTitle}</span>
      </div>

      <div className={bento ? styles.gridBento : styles.grid}>
        {projects.map((project, idx) => {
          const isFeaturedSpan =
            bento && (project.featured || idx === 0 || idx === 3)
          const primaryLang = (
            project.language ||
            project.tags[0] ||
            'CODE'
          ).toUpperCase()
          const brutalTitle = project.title
            .toUpperCase()
            .replace(/\s+/g, '_')

          return (
            <article
              key={project.repo}
              className={`${styles.card} ${
                isFeaturedSpan ? styles.cardFeatured : ''
              }`}
            >
              {/* Top Brutalist Technical Schematic Preview */}
              <div className={styles.cardVisualPreview}>
                <div
                  className={
                    idx % 3 === 0
                      ? styles.previewAccentLime
                      : idx % 3 === 1
                      ? styles.previewAccentViolet
                      : styles.previewAccentDark
                  }
                >
                  <span className={styles.previewIndex}>
                    //0{idx + 1}
                  </span>
                  <span className={styles.previewLang}>{primaryLang}</span>
                </div>
                <div className={styles.previewSchematic}>
                  <div className={styles.previewPath}>{project.path}</div>
                  <div className={styles.previewTagRow}>
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className={styles.previewTag}>
                        {t.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stark Brutalist Spec Panel */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardHeading}>{brutalTitle}</h3>
                <p className={styles.cardSubtitle}>
                  {project.tags.join(' / ').toUpperCase()}
                </p>
                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardFooter}>
                  <Link
                    href={project.docsHref}
                    className={styles.cardActionPrimary}
                  >
                    <span>READ_DOCS</span>
                    <span className={styles.violetArrow} aria-hidden="true">
                      &#8599;
                    </span>
                  </Link>
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardActionSecondary}
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    SOURCE [&#8599;]
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function CyberTelemetryStrip() {
  return (
    <section id="sec-04" className={styles.telemetryGrid}>
      {/* /04 OPEN SOURCE MANIFESTO */}
      <div className={styles.telemetryCell}>
        <div className={styles.sectionIndex}>/04</div>
        <h3 className={styles.telemetryHeading}>
          RAW SYSTEMS.
          <br />
          OPEN SOURCE.
        </h3>
        <p className={styles.telemetryText}>
          Every project in this hub is synced directly from{' '}
          <code>github.com/vitorecomp</code> — from SIMD vector engines and
          distributed super-nodes to Subaru GC8 ECU firmware.
        </p>
        <a
          href="https://github.com/vitorecomp"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.brutalBtnPrimary}
        >
          <span>GITHUB PROFILE</span>
          <span className={styles.violetArrow} aria-hidden="true">
            &#8599;
          </span>
        </a>
      </div>

      {/* /05 SYSTEM STATUS */}
      <div className={styles.telemetryCell}>
        <div className={styles.sectionIndex}>/05</div>
        <h3 className={styles.telemetryHeading}>SYSTEM STATUS</h3>
        <div className={styles.statusRows}>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>SIMD_VECTOR_CORE</span>
            <span className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '88%' }}
              />
            </span>
            <span className={styles.statusVal}>AVX512</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>MCP_AGENT_TOOLS</span>
            <span className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '92%' }}
              />
            </span>
            <span className={styles.statusVal}>72 TOOLS</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>PUBLIC_REPOS</span>
            <span className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '78%' }}
              />
            </span>
            <span className={styles.statusVal}>93 REPOS</span>
          </div>
          <div className={styles.statusRow}>
            <span className={styles.statusLabel}>SYNC_PIPELINE</span>
            <span className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '100%' }}
              />
            </span>
            <span className={styles.statusVal}>SECURE</span>
          </div>
        </div>
        <div className={styles.operationalBanner}>
          <span>ALL SYSTEMS OPERATIONAL</span>
          <span className={styles.operationalDot} aria-hidden="true" />
        </div>
      </div>

      {/* /06 SYNC PIPELINE */}
      <div className={styles.telemetryCell}>
        <div className={styles.sectionIndex}>/06</div>
        <h3 className={styles.telemetryHeading}>SEARCH THE SIGNAL</h3>
        <p className={styles.telemetryText}>
          Filter all 93 public repositories by language, synced documentation
          availability, or architecture domain.
        </p>
        <div className={styles.signalBox}>
          <div className={styles.signalInputFake}>$ grep -ri ~/vitorecomp</div>
          <Link href="/repositories" className={styles.signalBtnViolet}>
            <span>INDEX</span>
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
        <div className={styles.hazardStripe} aria-hidden="true">
          ////////////////////////////////////
        </div>
      </div>
    </section>
  )
}

const DOMAIN_META: Record<
  string,
  {
    code: string
    label: string
    stack: string
    modules: { slug: string; title: string }[]
  }
> = {
  systems: {
    code: 'DOM.01',
    label: 'SYSTEMS & CLI',
    stack: 'RUST / GO / C++ / ASM',
    modules: [
      { slug: 'turbovec', title: 'TurboVec' },
      { slug: 'ruscene', title: 'Ruscene' },
      { slug: 'go-ls', title: 'go-ls' },
      { slug: 'nos-system', title: 'Nos-System' },
      { slug: 'personal-life-manager', title: 'Personal Life Manager' },
      { slug: 'asm-steganography', title: 'ASM Steganography' },
      { slug: 'learning-projects', title: 'Rust Learning Projects' },
    ],
  },
  ai: {
    code: 'DOM.02',
    label: 'AI, AGENTS & MCP',
    stack: 'PYTHON / GEMINI / MCP',
    modules: [
      { slug: 'sei-mcp', title: 'SEI-MCP Server' },
      { slug: 'sei-mcp-prodesp', title: 'SEI-MCP Prodesp' },
      { slug: 'open-judy', title: 'Open-Judy' },
      { slug: 'alissa-ai-racing-companion', title: 'Alissa Racing AI' },
      { slug: 'computer-companion', title: 'Computer Companion' },
      { slug: 'deep-research-agent', title: 'Deep Research Agent' },
      { slug: 'agent-skills', title: 'Agent Skills' },
      { slug: 'ai-advanced-ocr', title: 'AI Advanced OCR' },
      { slug: 'nn-c', title: 'Neural Network in C' },
    ],
  },
  hardware: {
    code: 'DOM.03',
    label: 'BACKYARD MECH',
    stack: 'ESP32 / C / CAN-BUS / CAD',
    modules: [
      { slug: 'esp32-watch-so', title: 'ESP32 Watch OS' },
      { slug: 'esp32-car-sensor-hub', title: 'ESP32 Car Sensor Hub' },
      { slug: 'esp32-obd2-emulator', title: 'ESP32 OBD2 Emulator' },
      { slug: 'open-car-telemetry', title: 'Open Car Telemetry' },
      { slug: 'open-ecu-simulator', title: 'Open ECU Simulator' },
      { slug: 'car-telemetry- viewer', title: 'Car Telemetry Viewer' },
      { slug: 'my3d-printer', title: 'Klipper 3D Printer' },
      { slug: 'controller-tools', title: 'Controller Tools' },
    ],
  },
  'cloud-devtools': {
    code: 'DOM.04',
    label: 'CLOUD & DEVTOOLS',
    stack: 'GCP / TERRAFORM / SWAY / LUA',
    modules: [
      { slug: 'nobuffer-site', title: 'vitorx86.dev (NoBuffer)' },
      { slug: 'zerossl-google-domains-renewal', title: 'ZeroSSL Renewal' },
      { slug: 'quarkus-microservices-social-net', title: 'Quarkus Social Net' },
      { slug: 'sway-dotfiles-cloud-top', title: 'Sway Dotfiles' },
      { slug: 'neovim-from-scratch', title: 'Neovim From Scratch' },
      { slug: 'linux-setup', title: 'Linux Workstation' },
    ],
  },
}

export function CyberRightSidebarStats() {
  const pathname = usePathname() || '/'
  const cleanPath =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname
  const segments = cleanPath.split('/').filter(Boolean)

  // 1. Category Hub Right Sidebar (/systems, /ai, /hardware, /cloud-devtools)
  if (segments.length === 1 && DOMAIN_META[segments[0]]) {
    const domKey = segments[0]
    const dom = DOMAIN_META[domKey]
    return (
      <div className={styles.rightStatsPanel}>
        <div className={styles.rightStatsHeader}>
          <span className={styles.sectionIndex}>//{dom.code}</span>
          <span className={styles.limeChip}>{dom.label}</span>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>00 // DOMAIN_MODULES</div>
          <nav className={styles.rightJumpList} aria-label="Domain modules">
            {dom.modules.map((m) => (
              <Link
                key={m.slug}
                href={`/${domKey}/${m.slug}`}
                className={styles.rightJumpLink}
              >
                <span>./{m.slug}</span>
                <span>&#8599;</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>01 // OTHER_DOMAINS</div>
          <nav className={styles.rightJumpList} aria-label="Other domains">
            {Object.entries(DOMAIN_META)
              .filter(([k]) => k !== domKey)
              .map(([k, v]) => (
                <Link key={k} href={`/${k}`} className={styles.rightJumpLink}>
                  <span>
                    {v.code} // {v.label}
                  </span>
                  <span>&#8599;</span>
                </Link>
              ))}
            <Link href="/" className={styles.rightJumpLink}>
              <span>← BACK TO ./PORTFOLIO</span>
              <span>&#8599;</span>
            </Link>
          </nav>
        </div>

        <div className={styles.rightStatsBanner}>
          <span>STACK: {dom.stack}</span>
          <span className={styles.operationalDot} aria-hidden="true" />
        </div>
      </div>
    )
  }

  // 2. Engineer Spec (/about) Right Sidebar
  if (cleanPath === '/about') {
    return (
      <div className={styles.rightStatsPanel}>
        <div className={styles.rightStatsHeader}>
          <span className={styles.sectionIndex}>//DOSSIER</span>
          <span className={styles.limeChip}>VITORX86_</span>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>00 // SPEC_SECTIONS</div>
          <nav className={styles.rightJumpList} aria-label="Dossier sections">
            <a href="#dossier-01" className={styles.rightJumpLink}>
              <span>/01 ENGINEER_BIO</span>
              <span>&#8599;</span>
            </a>
            <a href="#dossier-02" className={styles.rightJumpLink}>
              <span>/02 GITHUB_TELEMETRY</span>
              <span>&#8599;</span>
            </a>
            <a href="#dossier-03" className={styles.rightJumpLink}>
              <span>/03 STACK_ALLOCATION</span>
              <span>&#8599;</span>
            </a>
          </nav>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>01 // EXTERNAL_NODES</div>
          <nav className={styles.rightJumpList} aria-label="External profiles">
            <a
              href="https://github.com/vitorecomp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rightJumpLink}
            >
              <span>GITHUB.COM/VITORECOMP</span>
              <span>&#8599;</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vieiravitor/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rightJumpLink}
            >
              <span>LINKEDIN // VIEIRAVITOR</span>
              <span>&#8599;</span>
            </a>
            <a
              href="https://vitorx86.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.rightJumpLink}
            >
              <span>VITORX86.DEV [MAIN]</span>
              <span>&#8599;</span>
            </a>
          </nav>
        </div>

        <div className={styles.rightStatsBanner}>
          <span>CLEARANCE: PUBLIC_SPEC</span>
          <span className={styles.operationalDot} aria-hidden="true" />
        </div>
      </div>
    )
  }

  // 3. All Repositories (/repositories) Right Sidebar
  if (cleanPath === '/repositories') {
    return (
      <div className={styles.rightStatsPanel}>
        <div className={styles.rightStatsHeader}>
          <span className={styles.sectionIndex}>//INDEX.DB</span>
          <span className={styles.limeChip}>93_REPOS</span>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>00 // CATALOG_METRICS</div>
          <div className={styles.rightMetricGrid}>
            <div className={styles.rightMetricCell}>
              <span className={styles.rightMetricVal}>93</span>
              <span className={styles.rightMetricLbl}>PUBLIC</span>
            </div>
            <div className={styles.rightMetricCell}>
              <span className={styles.rightMetricVal}>34</span>
              <span className={styles.rightMetricLbl}>SYNCED_DOCS</span>
            </div>
          </div>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>01 // DOMAIN_SHORTCUTS</div>
          <nav className={styles.rightJumpList} aria-label="Domain shortcuts">
            <Link href="/systems" className={styles.rightJumpLink}>
              <span>~/SYSTEMS-AND-CLI</span>
              <span>&#8599;</span>
            </Link>
            <Link href="/ai" className={styles.rightJumpLink}>
              <span>~/AI-AND-AGENTS</span>
              <span>&#8599;</span>
            </Link>
            <Link href="/hardware" className={styles.rightJumpLink}>
              <span>~/BACKYARD-MECH</span>
              <span>&#8599;</span>
            </Link>
            <Link href="/cloud-devtools" className={styles.rightJumpLink}>
              <span>~/CLOUD-AND-DEVTOOLS</span>
              <span>&#8599;</span>
            </Link>
          </nav>
        </div>

        <div className={styles.rightStatsBanner}>
          <span>SOURCE: GITHUB_API_V3</span>
          <span className={styles.operationalDot} aria-hidden="true" />
        </div>
      </div>
    )
  }

  // 4. Individual Project Page Right Sidebar (/<category>/<slug>) — rendered below TOC
  if (segments.length === 2 && DOMAIN_META[segments[0]]) {
    const domKey = segments[0]
    const slug = segments[1]
    const dom = DOMAIN_META[domKey]
    return (
      <div
        className={`${styles.rightStatsPanel} ${styles.rightStatsPanelBelow}`}
      >
        <div className={styles.rightStatsHeader}>
          <span className={styles.sectionIndex}>//MODULE.NAV</span>
          <span className={styles.limeChip}>{dom.code}</span>
        </div>

        <div className={styles.rightStatsBlock}>
          <div className={styles.rightStatsSubhead}>00 // MODULE_CONTEXT</div>
          <nav className={styles.rightJumpList} aria-label="Module context">
            <Link href={`/${domKey}`} className={styles.rightJumpLink}>
              <span>← ALL {dom.label}</span>
              <span>&#8599;</span>
            </Link>
            <Link href="/repositories" className={styles.rightJumpLink}>
              <span>./ALL_REPOS_INDEX</span>
              <span>&#8599;</span>
            </Link>
            <Link href="/" className={styles.rightJumpLink}>
              <span>./PORTFOLIO_HOME</span>
              <span>&#8599;</span>
            </Link>
          </nav>
        </div>

        <div className={styles.rightStatsBanner}>
          <span>SPEC: /{slug.toUpperCase().slice(0, 16)}</span>
          <span className={styles.operationalDot} aria-hidden="true" />
        </div>
      </div>
    )
  }

  // 5. Default Main Page (/) Right Sidebar
  return (
    <div className={styles.rightStatsPanel}>
      <div className={styles.rightStatsHeader}>
        <span className={styles.sectionIndex}>//SYS.STATS</span>
        <span className={styles.limeChip}>LIVE</span>
      </div>

      {/* Quick Section Index */}
      <div className={styles.rightStatsBlock}>
        <div className={styles.rightStatsSubhead}>00 // SECTION_INDEX</div>
        <nav className={styles.rightJumpList} aria-label="Main page sections">
          <a href="#sec-01" className={styles.rightJumpLink}>
            <span>/01 HERO_OVERVIEW</span>
            <span>&#8599;</span>
          </a>
          <a href="#sec-02" className={styles.rightJumpLink}>
            <span>/02 DOMAINS_MATRIX</span>
            <span>&#8599;</span>
          </a>
          <a href="#sec-03" className={styles.rightJumpLink}>
            <span>/03 SELECTED_WORK</span>
            <span>&#8599;</span>
          </a>
          <a href="#sec-04" className={styles.rightJumpLink}>
            <span>/04 SYSTEM_STATUS</span>
            <span>&#8599;</span>
          </a>
        </nav>
      </div>

      {/* Site & GitHub Telemetry Counters */}
      <div className={styles.rightStatsBlock}>
        <div className={styles.rightStatsSubhead}>01 // PORTFOLIO_METRICS</div>
        <div className={styles.rightMetricGrid}>
          <div className={styles.rightMetricCell}>
            <span className={styles.rightMetricVal}>93</span>
            <span className={styles.rightMetricLbl}>REPOS</span>
          </div>
          <div className={styles.rightMetricCell}>
            <span className={styles.rightMetricVal}>34</span>
            <span className={styles.rightMetricLbl}>DOC_PAGES</span>
          </div>
          <div className={styles.rightMetricCell}>
            <span className={styles.rightMetricVal}>858</span>
            <span className={styles.rightMetricLbl}>YR_COMMITS</span>
          </div>
          <div className={styles.rightMetricCell}>
            <span className={styles.rightMetricVal}>72</span>
            <span className={styles.rightMetricLbl}>MCP_TOOLS</span>
          </div>
        </div>
      </div>

      {/* Stack Distribution */}
      <div className={styles.rightStatsBlock}>
        <div className={styles.rightStatsSubhead}>02 // STACK_SHARE</div>
        <div className={styles.rightStackList}>
          <div className={styles.rightStackRow}>
            <div className={styles.rightStackTop}>
              <span>RUST / C / C++</span>
              <span>24.2%</span>
            </div>
            <div className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '78%' }}
              />
            </div>
          </div>
          <div className={styles.rightStackRow}>
            <div className={styles.rightStackTop}>
              <span>PYTHON / AI</span>
              <span>21.9%</span>
            </div>
            <div className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '70%' }}
              />
            </div>
          </div>
          <div className={styles.rightStackRow}>
            <div className={styles.rightStackTop}>
              <span>TS / NODE.JS</span>
              <span>16.4%</span>
            </div>
            <div className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '54%' }}
              />
            </div>
          </div>
          <div className={styles.rightStackRow}>
            <div className={styles.rightStackTop}>
              <span>GO / JAVA</span>
              <span>12.7%</span>
            </div>
            <div className={styles.statusBarTrack}>
              <span
                className={styles.statusBarFill}
                style={{ width: '42%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure & Runtime */}
      <div className={styles.rightStatsBlock}>
        <div className={styles.rightStatsSubhead}>03 // NODE_TELEMETRY</div>
        <div className={styles.rightKvList}>
          <div className={styles.rightKvRow}>
            <span>RUNTIME</span>
            <strong>NODE_24_LTS</strong>
          </div>
          <div className={styles.rightKvRow}>
            <span>ENGINE</span>
            <strong>NEXT_16 // NEXTRA_4</strong>
          </div>
          <div className={styles.rightKvRow}>
            <span>SEARCH</span>
            <strong>41_INDEXED</strong>
          </div>
          <div className={styles.rightKvRow}>
            <span>EDGE</span>
            <strong>GCP_CLOUD_CDN</strong>
          </div>
        </div>
      </div>

      <div className={styles.rightStatsBanner}>
        <span>SYNC_PIPELINE: OK</span>
        <span className={styles.operationalDot} aria-hidden="true" />
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
  const [copied, setCopied] = useState(false)
  const rawReadmeUrl = `${githubUrl}/blob/${branch}/README.md`
  const cloneCmd = `git clone ${githubUrl}.git`

  function handleCopyClone() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(cloneCmd).catch(() => {})
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className={styles.projectHeader}>
      <div className={styles.projectHeaderBar}>
        <div className={styles.projectHeaderDots}>
          <span className={styles.sectionIndex}>//SPEC</span>
          <span className={styles.cardPath}>
            ~/vitorecomp/{repo} [{branch.toUpperCase()}]
          </span>
        </div>
        <div className={styles.projectHeaderBadges}>
          {language && (
            <span className={styles.limeChip}>{language.toUpperCase()}</span>
          )}
          {stars > 0 && <span className={styles.violetChip}>★ {stars}</span>}
          {isFork && <span className={styles.forkBadge}>FORK</span>}
        </div>
      </div>
      <div className={styles.projectHeaderBody}>
        <h1 className={styles.projectHeaderTitle}>{name}</h1>
        <p className={styles.projectHeaderDesc}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.tagList}>
            {tags.map((t) => (
              <span key={t} className={styles.tagBrutal}>
                #{t.toUpperCase()}
              </span>
            ))}
          </div>
        )}
        <div className={styles.projectCloneBar}>
          <code className={styles.projectCloneCmd}>$ {cloneCmd}</code>
          <button
            type="button"
            onClick={handleCopyClone}
            className={styles.projectCloneBtn}
          >
            {copied ? 'COPIED [✓]' : 'COPY_CLONE [+]'}
          </button>
        </div>
        <div className={styles.projectHeaderActions}>
          <div className={styles.heroActions}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnPrimary}
            >
              <span>OPEN GITHUB REPO</span>
              <span className={styles.violetArrow} aria-hidden="true">
                &#8599;
              </span>
            </a>
            <a
              href={rawReadmeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnGhost}
            >
              <span>RAW README.MD</span>
              <span className={styles.bracketIcon} aria-hidden="true">
                [&#8599;]
              </span>
            </a>
          </div>
          <span className={styles.projectHeaderComment}>
            // SYNCED: GITHUB.COM/VITORECOMP/{repo.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  )
}

export function TerminalCallout({
  command = 'SYS.NOTE',
  children,
}: {
  command?: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.callout}>
      <div className={styles.calloutCmd}>
        <span className={styles.sectionIndex}>//</span> {command.toUpperCase()}
      </div>
      <div>{children}</div>
    </div>
  )
}

export function TerminalMermaid({
  chart,
  title = 'ARCHITECTURE.MMD',
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
            background: '#09090D',
            primaryColor: '#181824',
            primaryTextColor: '#F5F5F8',
            primaryBorderColor: '#8B5CF6',
            lineColor: '#BEF264',
            secondaryColor: '#111118',
            tertiaryColor: '#181824',
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
        <div className={styles.projectHeaderDots}>
          <span className={styles.sectionIndex}>//SCHEMATIC</span>
          <span className={styles.cardPath}>{title}</span>
        </div>
        <button
          type="button"
          onClick={() => setShowSource((prev) => !prev)}
          className={styles.mermaidToggleBtn}
        >
          {showSource || renderError ? 'RENDER_SVG [↗]' : 'VIEW_SOURCE [ ]'}
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
          // REPOSITORY_SPEC: {repo.toUpperCase()}
        </span>
        <span className={styles.limeChip}>BRANCH: {branch.toUpperCase()}</span>
      </div>
      <p className={styles.fallbackDesc}>{summary}</p>
      {readmeSnippet &&
        readmeSnippet.trim().toLowerCase() !== summary.trim().toLowerCase() && (
          <blockquote className={styles.fallbackQuote}>
            {readmeSnippet}
          </blockquote>
        )}
      <div className={styles.fallbackCloneBox}>
        <code className={styles.fallbackCloneCode}>$ {cloneCmd}</code>
        <button
          type="button"
          onClick={handleCopy}
          className={styles.mermaidToggleBtn}
        >
          {copied ? 'COPIED ✓' : 'COPY [ ]'}
        </button>
      </div>
      <div className={styles.fallbackLinks}>
        <a
          href={`${githubUrl}/tree/${branch}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionPrimary}
        >
          <span>BROWSE_SOURCE_TREE</span>
          <span className={styles.violetArrow} aria-hidden="true">
            &#8599;
          </span>
        </a>
        <a
          href={`${githubUrl}/commits/${branch}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionSecondary}
        >
          COMMIT_LOG [&#8599;]
        </a>
        <a
          href={`${githubUrl}/issues`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardActionSecondary}
        >
          ISSUES ({language.toUpperCase()}) [&#8599;]
        </a>
      </div>
      {tags.length > 0 && (
        <div className={styles.tagList} style={{ marginTop: '0.9rem' }}>
          {tags.map((t) => (
            <span key={t} className={styles.tagBrutal}>
              #{t.toUpperCase()}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function DomainSchematicSvg({ slug }: { slug: string }) {
  if (slug === 'systems') {
    return (
      <svg
        viewBox="0 0 260 150"
        fill="none"
        className={styles.domainSchematicSvg}
        aria-hidden="true"
      >
        <rect
          x="12"
          y="16"
          width="74"
          height="46"
          stroke="#BEF264"
          strokeWidth="1.5"
        />
        <text
          x="20"
          y="36"
          fill="#BEF264"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SIMD_AVX2
        </text>
        <text x="20" y="50" fill="#a1a1b5" fontSize="8" fontFamily="monospace">
          TURBOQUANT
        </text>
        <rect
          x="170"
          y="16"
          width="78"
          height="46"
          stroke="#7C3AED"
          strokeWidth="1.5"
        />
        <text
          x="178"
          y="36"
          fill="#F5F5F8"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          INVERTED_IDX
        </text>
        <text x="178" y="50" fill="#a1a1b5" fontSize="8" fontFamily="monospace">
          RUSCENE_BM25
        </text>
        <rect
          x="84"
          y="88"
          width="92"
          height="46"
          fill="#7C3AED"
          fillOpacity="0.2"
          stroke="#F5F5F8"
          strokeWidth="1.5"
        />
        <text
          x="94"
          y="108"
          fill="#BEF264"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          KERNEL_VFS
        </text>
        <text x="94" y="122" fill="#F5F5F8" fontSize="8" fontFamily="monospace">
          RUST / GO / ASM
        </text>
        <path
          d="M86 39 H170 M49 62 V111 H84 M209 62 V111 H176"
          stroke="#BEF264"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
      </svg>
    )
  }

  if (slug === 'ai') {
    return (
      <svg
        viewBox="0 0 260 150"
        fill="none"
        className={styles.domainSchematicSvg}
        aria-hidden="true"
      >
        <rect
          x="10"
          y="48"
          width="68"
          height="52"
          stroke="#BEF264"
          strokeWidth="1.5"
        />
        <text
          x="18"
          y="71"
          fill="#BEF264"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          GEMINI_ENT
        </text>
        <text x="18" y="86" fill="#a1a1b5" fontSize="8" fontFamily="monospace">
          OAUTH2_SSE
        </text>
        <rect
          x="102"
          y="32"
          width="66"
          height="84"
          fill="#7C3AED"
          fillOpacity="0.22"
          stroke="#7C3AED"
          strokeWidth="1.5"
        />
        <text
          x="110"
          y="68"
          fill="#F5F5F8"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          MCP_BUS
        </text>
        <text
          x="110"
          y="84"
          fill="#BEF264"
          fontSize="8"
          fontFamily="monospace"
        >
          72_TOOLS
        </text>
        <rect
          x="192"
          y="18"
          width="58"
          height="44"
          stroke="#F5F5F8"
          strokeWidth="1.2"
        />
        <text x="200" y="44" fill="#F5F5F8" fontSize="8" fontFamily="monospace">
          SEI_SOAP
        </text>
        <rect
          x="192"
          y="86"
          width="58"
          height="44"
          stroke="#F5F5F8"
          strokeWidth="1.2"
        />
        <text x="200" y="112" fill="#F5F5F8" fontSize="8" fontFamily="monospace">
          RAG_JUDGE
        </text>
        <path
          d="M78 74 H102 M168 54 H192 M168 96 H192"
          stroke="#BEF264"
          strokeWidth="1.4"
        />
      </svg>
    )
  }

  if (slug === 'hardware') {
    return (
      <svg
        viewBox="0 0 260 150"
        fill="none"
        className={styles.domainSchematicSvg}
        aria-hidden="true"
      >
        <polygon
          points="130,14 210,50 210,112 130,140 50,112 50,50"
          stroke="#7C3AED"
          strokeWidth="1.5"
          fill="#7C3AED"
          fillOpacity="0.14"
        />
        <circle
          cx="130"
          cy="77"
          r="28"
          stroke="#BEF264"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M24 77 H236 M130 14 V140"
          stroke="#F5F5F8"
          strokeWidth="0.9"
          strokeOpacity="0.5"
        />
        <text
          x="96"
          y="80"
          fill="#BEF264"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ESP32_CAN
        </text>
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 260 150"
      fill="none"
      className={styles.domainSchematicSvg}
      aria-hidden="true"
    >
      <rect
        x="18"
        y="22"
        width="224"
        height="106"
        stroke="#F5F5F8"
        strokeWidth="1.3"
      />
      <line
        x1="18"
        y1="46"
        x2="242"
        y2="46"
        stroke="#7C3AED"
        strokeWidth="1.3"
      />
      <rect x="28" y="30" width="8" height="8" fill="#BEF264" />
      <rect x="42" y="30" width="8" height="8" fill="#7C3AED" />
      <text
        x="60"
        y="38"
        fill="#F5F5F8"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="bold"
      >
        CLOUD_RUN // TERRAFORM // SWAY_WM
      </text>
      <rect
        x="32"
        y="60"
        width="90"
        height="54"
        stroke="#BEF264"
        strokeWidth="1.2"
      />
      <text x="42" y="90" fill="#BEF264" fontSize="9" fontFamily="monospace">
        CDN_STATIC
      </text>
      <rect
        x="136"
        y="60"
        width="90"
        height="54"
        stroke="#7C3AED"
        strokeWidth="1.2"
      />
      <text x="146" y="90" fill="#F5F5F8" fontSize="9" fontFamily="monospace">
        DOTFILES_OS
      </text>
    </svg>
  )
}

export function CategoryHub({
  code = 'DOM.01',
  slug,
  headline,
  description,
  accent = 'teal',
  projects,
}: {
  code?: string
  slug: string
  headline: string
  description: string
  accent?: 'teal' | 'green' | 'amber' | 'violet'
  projects: ProjectCardItem[]
}) {
  const [selectedTag, setSelectedTag] = useState<string>('ALL')

  const tagCounts = useMemo(() => {
    const map = new Map<string, number>()
    for (const p of projects) {
      for (const t of p.tags || []) {
        map.set(t, (map.get(t) || 0) + 1)
      }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'ALL') return projects
    return projects.filter((p) =>
      (p.tags || []).some((t) => t.toLowerCase() === selectedTag.toLowerCase())
    )
  }, [projects, selectedTag])

  const featuredCount = useMemo(
    () => projects.filter((p) => p.featured).length,
    [projects]
  )

  const primaryStack = useMemo(
    () =>
      tagCounts
        .slice(0, 3)
        .map(([t]) => t.toUpperCase())
        .join(' / ') || 'MULTI-STACK',
    [tagCounts]
  )

  return (
    <div className={styles.domainHubWrapper}>
      <section className={styles.domainHero}>
        <div className={styles.heroRail} aria-hidden="true">
          <span className={styles.railCode}>//{code}</span>
          <span className={styles.railVerticalText}>
            DOMAIN // {slug.toUpperCase()}
          </span>
          <span className={styles.railBottomDot}>■</span>
        </div>

        <div className={styles.domainMainCell}>
          <div>
            <div className={styles.domainTopBar}>
              <span className={styles.cardPath}>
                ~/vitorecomp/domains/{slug}
              </span>
              <span className={styles.limeChip}>ACTIVE_DOMAIN // {code}</span>
            </div>
            <h1 className={styles.domainTitle}>{headline}</h1>
            <p className={styles.domainDesc}>{description}</p>
          </div>

          <div className={styles.domainStatsRow}>
            <div className={styles.domainStatCell}>
              <span className={styles.domainStatVal}>{projects.length}</span>
              <span className={styles.domainStatLbl}>SYNCED_MODULES</span>
            </div>
            <div className={styles.domainStatCell}>
              <span className={styles.domainStatVal}>{featuredCount}</span>
              <span className={styles.domainStatLbl}>FLAGSHIP_SPECS</span>
            </div>
            <div className={styles.domainStatCell}>
              <span
                className={styles.domainStatVal}
                style={{ fontSize: '1.05rem', lineHeight: 1.2 }}
              >
                {primaryStack}
              </span>
              <span className={styles.domainStatLbl}>CORE_STACK</span>
            </div>
          </div>
        </div>

        <div className={styles.domainSchematicCell}>
          <div className={styles.domainSchematicTop}>
            <span>// SCHEMATIC: {slug.toUpperCase()}.CAD</span>
            <span>[1:1]</span>
          </div>
          <div className={styles.domainSchematicCanvas}>
            <DomainSchematicSvg slug={slug} />
          </div>
          <div className={styles.domainSchematicFoot}>
            <span>STATUS: ONLINE ●</span>
            <span>MODULES: 0{projects.length}</span>
          </div>
        </div>
      </section>

      <div className={styles.domainFilterBar}>
        <div className={styles.domainFilterLeft}>
          <span className={styles.filterPrompt}>// FILTER_BY_TAG:</span>
          <button
            type="button"
            onClick={() => setSelectedTag('ALL')}
            className={
              selectedTag === 'ALL' ? styles.flagChipActive : styles.flagChip
            }
          >
            ALL [{projects.length}]
          </button>
          {tagCounts.map(([tag, count]) => (
            <button
              key={tag}
              type="button"
              onClick={() =>
                setSelectedTag((prev) => (prev === tag ? 'ALL' : tag))
              }
              className={
                selectedTag === tag ? styles.langChipActive : styles.langChip
              }
            >
              #{tag.toUpperCase()}{' '}
              <span className={styles.langChipCount}>({count})</span>
            </button>
          ))}
        </div>
        <span className={styles.filterCount}>
          [{filteredProjects.length} / {projects.length} SHOWN]
        </span>
      </div>

      <ProjectGrid
        accent={accent}
        bento={true}
        projects={filteredProjects}
      />
    </div>
  )
}

export interface DossierLanguageItem {
  name: string
  share: number
}

export function EngineerDossier({
  repoCount = 93,
  starsCount = 15,
  forksCount = 4,
  followersCount = 17,
  prsCount = 7,
  contributionsCount = 858,
  contributionGraphUrl = 'https://raw.githubusercontent.com/vitorecomp/vitorecomp/main/contribution-graph.svg',
  languages = [
    { name: 'Python', share: 22.0 },
    { name: 'JavaScript', share: 15.6 },
    { name: 'C', share: 12.1 },
    { name: 'HTML', share: 10.7 },
    { name: 'C++', share: 10.3 },
    { name: 'Jupyter Notebook', share: 7.2 },
    { name: 'Java', share: 5.5 },
    { name: 'TypeScript', share: 4.9 },
  ],
  topics = [
    'Rust',
    'Go',
    'C++',
    'Assembly',
    'MCP',
    'Gemini Enterprise',
    'Agentic AI',
    'System Design',
    'Vector Search',
    'ESP32',
    'CAN-Bus',
    'Robotics',
    'OpenCV',
    'LangChain',
    'Cloud Run',
    'Terraform',
  ],
  lastUpdated = 'LIVE_SYNC',
}: {
  repoCount?: number
  starsCount?: number
  forksCount?: number
  followersCount?: number
  prsCount?: number
  contributionsCount?: number
  contributionGraphUrl?: string
  languages?: DossierLanguageItem[]
  topics?: string[]
  lastUpdated?: string
}) {
  return (
    <div className={styles.dossierWrapper}>
      {/* /01 ENGINEER BIO & IDENTITY */}
      <section className={styles.dossierHero} id="dossier-01">
        <div className={styles.heroRail} aria-hidden="true">
          <span className={styles.railCode}>/01</span>
          <span className={styles.railVerticalText}>
            DOSSIER // VITORX86_
          </span>
          <span className={styles.railBottomDot}>■</span>
        </div>

        <div className={styles.dossierMain}>
          <div className={styles.domainTopBar}>
            <span className={styles.cardPath}>
              ~/vitorecomp/engineer_spec.mdx
            </span>
            <span className={styles.limeChip}>VERIFIED_ARCHITECT</span>
          </div>

          <h1 className={styles.domainTitle}>VITOR VIEIRA // VITORX86_</h1>

          <div className={styles.dossierRoleRow}>
            <span className={styles.violetChip}>
              SOFTWARE ENGINEER @ GOOGLE
            </span>
            <span className={styles.tagBrutal}>SYSTEMS &amp; AI ARCHITECT</span>
            <span className={styles.tagBrutal}>OPEN_SOURCE_BUILDER</span>
          </div>

          <p className={styles.dossierBio}>
            Senior Software Engineer and Architect with a proven track record of
            driving digital transformation for large-scale enterprises.
            Currently an Engineer at <strong>Google</strong>, specializing in
            scaling cloud-native ecosystems and implementing high-impact AI
            solutions — bridging enterprise SOAP/REST platforms with modern
            GenAI &amp; Model Context Protocol (MCP) stacks, high-performance
            Rust/Go search engines, and embedded automotive telemetry.
          </p>

          <div className={styles.dossierChannelRow}>
            <a
              href="https://github.com/vitorecomp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnPrimary}
            >
              <span>GITHUB // VITORECOMP</span>
              <span className={styles.violetArrow} aria-hidden="true">
                &#8599;
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/vieiravitor/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnGhost}
            >
              <span>LINKEDIN</span>
              <span className={styles.bracketIcon} aria-hidden="true">
                [&#8599;]
              </span>
            </a>
            <a
              href="https://medium.com/@vitorx86"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnGhost}
            >
              <span>MEDIUM</span>
              <span className={styles.bracketIcon} aria-hidden="true">
                [&#8599;]
              </span>
            </a>
            <a
              href="https://www.instagram.com/vitorx86.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnGhost}
            >
              <span>INSTAGRAM</span>
              <span className={styles.bracketIcon} aria-hidden="true">
                [&#8599;]
              </span>
            </a>
            <a
              href="https://vitorx86.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brutalBtnGhost}
            >
              <span>VITORX86.DEV</span>
              <span className={styles.bracketIcon} aria-hidden="true">
                [&#8599;]
              </span>
            </a>
          </div>
        </div>

        <div className={styles.dossierIdCard}>
          <div className={styles.domainSchematicTop}>
            <span>// SYS.IDENTITY_CARD</span>
            <span>[ACTIVE]</span>
          </div>

          <div className={styles.dossierKvTable}>
            <div className={styles.dossierKvItem}>
              <span>HANDLE</span>
              <strong>@VITORECOMP // VITORX86</strong>
            </div>
            <div className={styles.dossierKvItem}>
              <span>ORGANIZATION</span>
              <strong>GOOGLE CLOUD</strong>
            </div>
            <div className={styles.dossierKvItem}>
              <span>CORE_SYSTEMS</span>
              <strong>RUST / GO / C++ / ASM</strong>
            </div>
            <div className={styles.dossierKvItem}>
              <span>AI_RUNTIME</span>
              <strong>GEMINI / MCP / PYTHON</strong>
            </div>
            <div className={styles.dossierKvItem}>
              <span>GARAGE_LAB</span>
              <strong>ESP32 / CAN-BUS / KLIPPER</strong>
            </div>
            <div className={styles.dossierKvItem}>
              <span>WORKSTATION</span>
              <strong>LINUX // SWAY_WM // NVIM</strong>
            </div>
          </div>

          <div className={styles.domainSchematicFoot}>
            <span>SYNC: {lastUpdated}</span>
            <span>STATUS: ONLINE ●</span>
          </div>
        </div>
      </section>

      {/* /02 GITHUB TELEMETRY & COMMIT MATRIX */}
      <section className={styles.dossierSection} id="dossier-02">
        <div className={styles.dossierSectionBar}>
          <h2 className={styles.dossierSectionTitle}>
            /02 // GITHUB TELEMETRY &amp; COMMIT MATRIX
          </h2>
          <span className={styles.limeChip}>
            {contributionsCount} CONTRIBUTIONS (LAST 365D)
          </span>
        </div>

        <div className={styles.dossierMetricMatrix}>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>{repoCount}</span>
            <span className={styles.dossierMetricSub}>PUBLIC_REPOS</span>
          </div>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>
              {contributionsCount}
            </span>
            <span className={styles.dossierMetricSub}>YR_CONTRIBUTIONS</span>
          </div>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>{starsCount}</span>
            <span className={styles.dossierMetricSub}>STARS_EARNED</span>
          </div>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>{followersCount}</span>
            <span className={styles.dossierMetricSub}>FOLLOWERS</span>
          </div>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>{prsCount}</span>
            <span className={styles.dossierMetricSub}>PULL_REQUESTS</span>
          </div>
          <div className={styles.dossierMetricBox}>
            <span className={styles.dossierMetricBig}>{forksCount}</span>
            <span className={styles.dossierMetricSub}>REPO_FORKS</span>
          </div>
        </div>

        <div className={styles.dossierGraphFrame}>
          <div className={styles.dossierGraphHeader}>
            <span>// COMMIT_FREQUENCY_HEATMAP [GITHUB.COM/VITORECOMP]</span>
            <span>DAILY_ACTIONS_SYNC ●</span>
          </div>
          <img
            src={contributionGraphUrl}
            alt="GitHub contribution graph for vitorecomp"
            className={styles.dossierGraphImg}
          />
        </div>
      </section>

      {/* /03 LANGUAGE ALLOCATION & ARCHITECTURE TOPICS */}
      <section className={styles.dossierSection} id="dossier-03">
        <div className={styles.dossierSectionBar}>
          <h2 className={styles.dossierSectionTitle}>
            /03 // LANGUAGE ALLOCATION &amp; CAPABILITY MATRIX
          </h2>
          <span className={styles.violetChip}>MULTI-PARADIGM STACK</span>
        </div>

        <div className={styles.dossierSplitGrid}>
          <div className={styles.dossierSplitCol}>
            <div className={styles.rightStatsSubhead}>
              03.A // REPOSITORY_LANGUAGE_DISTRIBUTION
            </div>
            <div className={styles.dossierLangList}>
              {languages.map((lang) => {
                const scaledWidth = Math.min(
                  100,
                  Math.max(14, Math.round(lang.share * 3.8))
                )
                return (
                  <div key={lang.name} className={styles.dossierLangRow}>
                    <div className={styles.dossierLangMeta}>
                      <span>{lang.name.toUpperCase()}</span>
                      <span>{lang.share.toFixed(1)}%</span>
                    </div>
                    <div className={styles.statusBarTrack}>
                      <span
                        className={styles.statusBarFill}
                        style={{ width: `${scaledWidth}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.dossierSplitCol}>
            <div className={styles.rightStatsSubhead}>
              03.B // CORE_DOMAINS &amp; TECHNICAL_TOPICS
            </div>
            <p className={styles.dossierBio} style={{ marginBottom: '1rem' }}>
              Production and research focus spanning SIMD vector indexing,
              enterprise Model Context Protocol (MCP) servers, autonomous
              multi-agent workflows, and custom ESP32 / CAN-Bus telemetry.
            </p>
            <div className={styles.tagList}>
              {topics.map((t) => (
                <span key={t} className={styles.tagBrutal}>
                  #{t.toUpperCase()}
                </span>
              ))}
            </div>
            <div
              className={styles.dossierChannelRow}
              style={{ marginTop: '1.35rem' }}
            >
              <Link href="/repositories" className={styles.brutalBtnPrimary}>
                <span>BROWSE ALL {repoCount} REPOS</span>
                <span className={styles.violetArrow} aria-hidden="true">
                  &#8599;
                </span>
              </Link>
              <Link href="/" className={styles.brutalBtnGhost}>
                <span>PORTFOLIO OVERVIEW</span>
                <span className={styles.bracketIcon} aria-hidden="true">
                  [&#8599;]
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
  const [sortBy, setSortBy] = useState<'updated' | 'name' | 'docs'>('updated')
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid')

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

  const sourceOnlyCount = useMemo(
    () => repos.filter((r) => !r.fork).length,
    [repos]
  )

  const filtered = useMemo(() => {
    const list = repos.filter((r) => {
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

    return [...list].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      if (sortBy === 'docs') {
        const aDoc = a.docsHref ? 1 : 0
        const bDoc = b.docsHref ? 1 : 0
        if (bDoc !== aDoc) return bDoc - aDoc
      }
      return (b.updatedAt || '').localeCompare(a.updatedAt || '')
    })
  }, [repos, query, onlyWithDocs, hideForks, selectedLang, sortBy])

  return (
    <div className={styles.catalogWrapper}>
      {/* Cyber-Brutalist Catalog Header */}
      <section className={styles.catalogHero}>
        <div className={styles.catalogHeroTop}>
          <div className={styles.domainTopBar}>
            <span className={styles.cardPath}>
              ~/vitorecomp/repositories.index
            </span>
            <span className={styles.limeChip}>GITHUB_API_SYNC // LIVE</span>
          </div>
          <h1 className={styles.domainTitle}>ALL GITHUB REPOSITORIES</h1>
          <p className={styles.domainDesc} style={{ marginBottom: 0 }}>
            Complete index of public repositories under{' '}
            <a
              href="https://github.com/vitorecomp"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/vitorecomp
            </a>
            . Filter by synced documentation specs, primary language, sort
            order, or switch between Brutalist Grid and Compact Table views.
          </p>
        </div>

        <div className={styles.catalogStatsStrip}>
          <div className={styles.catalogStatBox}>
            <span className={styles.dossierMetricBig}>{repos.length}</span>
            <span className={styles.dossierMetricSub}>INDEXED_REPOS</span>
          </div>
          <div className={styles.catalogStatBox}>
            <span className={styles.dossierMetricBig}>{docsCount}</span>
            <span className={styles.dossierMetricSub}>DOCUMENTED_SPECS</span>
          </div>
          <div className={styles.catalogStatBox}>
            <span className={styles.dossierMetricBig}>{sourceOnlyCount}</span>
            <span className={styles.dossierMetricSub}>ORIGINAL_SOURCES</span>
          </div>
          <div className={styles.catalogStatBox}>
            <span className={styles.dossierMetricBig}>
              {topLanguages.length}
            </span>
            <span className={styles.dossierMetricSub}>CORE_LANGUAGES</span>
          </div>
        </div>
      </section>

      <div className={styles.filterPanel}>
        <div className={styles.filterBar}>
          <label htmlFor="repo-filter-input" className={styles.filterPrompt}>
            // FILTER_QUERY:
          </label>
          <input
            id="repo-filter-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH BY REPO NAME, LANGUAGE (RUST, GO, C++, PYTHON), OR TOPIC..."
            className={styles.filterInput}
          />
          <span className={styles.filterCount}>
            [{filtered.length} / {repos.length} REPOS]
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
              --WITH-DOCS [{docsCount}]
            </button>
            <button
              type="button"
              onClick={() => setHideForks((v) => !v)}
              className={hideForks ? styles.flagChipActive : styles.flagChip}
            >
              --SOURCE-ONLY
            </button>
            <button
              type="button"
              onClick={() =>
                setSortBy((prev) =>
                  prev === 'updated'
                    ? 'docs'
                    : prev === 'docs'
                      ? 'name'
                      : 'updated'
                )
              }
              className={styles.flagChip}
              title="Cycle sort order"
            >
              SORT:{' '}
              {sortBy === 'updated'
                ? 'UPDATED ↓'
                : sortBy === 'docs'
                  ? 'DOCS FIRST'
                  : 'NAME A-Z'}
            </button>
            <button
              type="button"
              onClick={() =>
                setViewMode((prev) => (prev === 'grid' ? 'table' : 'grid'))
              }
              className={
                viewMode === 'table' ? styles.flagChipActive : styles.flagChip
              }
            >
              VIEW: {viewMode === 'grid' ? 'GRID [⊞]' : 'TABLE [≡]'}
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
                RESET [X]
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
              ALL
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
                {lang.toUpperCase()}{' '}
                <span className={styles.langChipCount}>({count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className={styles.catalogTableWrap}>
          <table className={styles.catalogTable}>
            <thead>
              <tr>
                <th>REPOSITORY</th>
                <th>LANGUAGE</th>
                <th>DESCRIPTION</th>
                <th>UPDATED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((repo) => {
                const isPlaceholderDesc =
                  repo.description ===
                  'Open-source repository on github.com/vitorecomp'
                const cleanDesc = isPlaceholderDesc
                  ? `${repo.language} engineering repository under github.com/vitorecomp/${repo.name}.`
                  : repo.description
                return (
                  <tr key={repo.name}>
                    <td>
                      <strong style={{ color: 'var(--cybr-ink)' }}>
                        {repo.name.toUpperCase()}
                      </strong>
                      {repo.docsHref && (
                        <span
                          className={styles.limeChip}
                          style={{ marginLeft: '0.45rem' }}
                        >
                          DOCS
                        </span>
                      )}
                    </td>
                    <td>
                      <span className={styles.violetChip}>
                        {repo.language.toUpperCase()}
                      </span>
                    </td>
                    <td>{cleanDesc}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{repo.updatedAt}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      {repo.docsHref ? (
                        <Link
                          href={repo.docsHref}
                          className={styles.cardActionPrimary}
                          style={{ marginRight: '0.6rem' }}
                        >
                          <span>SPEC</span>
                          <span aria-hidden="true">&#8599;</span>
                        </Link>
                      ) : null}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardActionSecondary}
                      >
                        REPO [&#8599;]
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.repoList}>
          {filtered.map((repo) => {
            const isPlaceholderDesc =
              repo.description ===
              'Open-source repository on github.com/vitorecomp'
            const cleanDesc = isPlaceholderDesc
              ? `${repo.language} engineering repository under github.com/vitorecomp/${repo.name}.`
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
                      {repo.name.toUpperCase()}
                      {repo.fork && (
                        <span className={styles.forkBadge}>FORK</span>
                      )}
                    </span>
                    <div className={styles.repoRowBadges}>
                      {repo.docsHref && (
                        <span className={styles.limeChip}>DOCS</span>
                      )}
                      <span className={styles.violetChip}>
                        {repo.language.toUpperCase()}
                      </span>
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
                      <span>READ_DOCS</span>
                      <span className={styles.violetArrow} aria-hidden="true">
                        &#8599;
                      </span>
                    </Link>
                  ) : (
                    <span className={styles.projectHeaderComment}>
                      SYNCED {repo.updatedAt}
                    </span>
                  )}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardActionSecondary}
                  >
                    OPEN_REPO [&#8599;]
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
