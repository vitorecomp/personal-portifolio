import React from 'react'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import {
  CyberRightSidebarStats,
  CyberSysClock,
  SearchInitializer,
} from '../components/portfolio'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F8' },
    { media: '(prefers-color-scheme: dark)', color: '#09090D' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vitorx86.dev'),
  title: {
    default: 'VITORX86_ // Cyber-Brutalist Project Portfolio & Docs',
    template: '%s — VITORX86_',
  },
  description:
    'Vitor (vitorx86) — Open-source engineering portfolio and GitHub documentation hub. Rust, Go, C++, AI/MCP, and embedded garage projects.',
  icons: {
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'><rect width='640' height='640' rx='115' fill='%23111827'/><path fill='%234ade80' transform='translate(64,115) scale(0.8)' d='M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V368H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48H576V224h16z'/></svg>",
  },
  openGraph: {
    title: 'VITORX86_ — Engineering Portfolio & Docs',
    description:
      'Google developer who loves coding, tinkering with hardware, and everything open source. Rust, Go, C++, AI and embedded projects.',
    url: 'https://cases.vitorx86.dev',
    siteName: 'vitorx86.dev/portfolio',
    type: 'website',
  },
}

const navbar = (
  <Navbar
    logo={
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 800,
          fontSize: '0.95rem',
          letterSpacing: '0.04em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.55rem',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="6" height="6" />
          <rect x="10" y="2" width="6" height="6" />
          <rect x="6" y="8" width="6" height="6" />
          <rect x="14" y="8" width="6" height="6" />
          <rect x="2" y="14" width="6" height="6" />
          <rect x="10" y="14" width="6" height="6" />
        </svg>
        <span>VITORX86_</span>
        <span
          style={{
            color: 'var(--cybr-violet)',
            fontWeight: 400,
            marginLeft: '0.35rem',
          }}
          aria-hidden="true"
        >
          |
        </span>
      </span>
    }
    projectLink="https://github.com/vitorecomp"
  >
    <CyberSysClock />
  </Navbar>
)

const footer = (
  <Footer>
    <div
      style={{
        width: '100%',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
      }}
    >
      {/* Multi-Column Cyber-Brutalist Footer Matrix */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--cybr-grid)',
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.04em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <span>&#9638;</span>
            <span>VITORX86_</span>
          </div>
          <p
            style={{
              fontSize: '0.7rem',
              lineHeight: 1.6,
              color: 'var(--cybr-muted)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} VIEIRA VITOR.
            <br />
            ALL RIGHTS RESERVED.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.6rem',
            }}
          >
            NAVIGATION
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.74rem',
            }}
          >
            <Link
              href="/"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              Portfolio Hub
            </Link>
            <Link
              href="/repositories"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              All 93 Repositories
            </Link>
            <Link
              href="/about"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              Engineer Spec (/about)
            </Link>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.6rem',
            }}
          >
            DIRECTORIES
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.74rem',
            }}
          >
            <Link
              href="/systems"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              ~/systems-and-cli
            </Link>
            <Link
              href="/ai"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              ~/ai-and-agents
            </Link>
            <Link
              href="/hardware"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              ~/backyard-mech
            </Link>
            <Link
              href="/cloud-devtools"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              ~/cloud-and-devtools
            </Link>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.6rem',
            }}
          >
            ECOSYSTEM
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.74rem',
            }}
          >
            <a
              href="https://vitorx86.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              vitorx86.dev &#8599;
            </a>
            <a
              href="https://blog.vitorx86.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              blog.vitorx86.dev &#8599;
            </a>
            <a
              href="https://github.com/vitorecomp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              GitHub (@vitorecomp) &#8599;
            </a>
            <a
              href="https://www.linkedin.com/in/vieiravitor"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cybr-body)', textDecoration: 'none' }}
            >
              LinkedIn &#8599;
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.6rem',
            }}
          >
            GLOBAL NODE
          </div>
          <div
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: 'var(--cybr-ink)',
              marginBottom: '0.5rem',
            }}
          >
            SAO <span style={{ color: 'var(--cybr-violet)' }}>&bull;</span> SFO{' '}
            <span style={{ color: 'var(--cybr-muted)' }}>+</span> LON{' '}
            <span style={{ color: 'var(--cybr-muted)' }}>+</span> TYO
          </div>
          <div
            style={{
              fontSize: '0.66rem',
              color: 'var(--cybr-muted)',
              lineHeight: 1.5,
            }}
          >
            GCP GLOBAL HTTPS LB // CLOUD CDN
            <br />
            CASES.VITORX86.DEV
          </div>
        </div>
      </div>

      {/* Bottom Status Bar (> ACCESS GRANTED_) matching the reference image */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          border: '1px solid var(--cybr-grid)',
          backgroundColor: 'var(--cybr-surface)',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        <div
          style={{
            padding: '0.7rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: 'var(--cybr-ink)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              backgroundColor: '#84cc16',
              display: 'inline-block',
            }}
          />
          <span>CONNECTION SECURE</span>
        </div>

        <div
          style={{
            padding: '0.7rem 1rem',
            backgroundColor: 'var(--cybr-violet)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
          }}
        >
          <span>&gt; ACCESS GRANTED_</span>
        </div>

        <div
          style={{
            padding: '0.7rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'var(--cybr-ink)',
          }}
        >
          <span>SCN: 0093</span>
          <span>NODE: VITORX86_01</span>
          <span style={{ color: 'var(--cybr-muted)' }}>+</span>
        </div>
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SearchInitializer />
        <Layout
          navbar={navbar}
          search={<Search placeholder="SEARCH_INDEX // GREP -RI..." />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/vitorecomp/personal-portifolio/tree/main"
          editLink="EDIT_SOURCE_ON_GITHUB [↗]"
          feedback={{ content: 'OPEN_ISSUE [↗]' }}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{
            title: '// ON_THIS_PAGE',
            extraContent: <CyberRightSidebarStats />,
          }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
