import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vitorx86.dev'),
  title: {
    default: 'Vitor Open Dev — Project Portfolio & Docs',
    template: '%s — vitorx86.dev/portfolio',
  },
  description:
    'Vitor (vitorx86) — Open-source engineering portfolio and GitHub documentation hub. Rust, Go, C++, AI/MCP, and embedded garage projects.',
  icons: {
    icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%23111827'/><text x='50' y='72' font-size='64' font-family='monospace' fill='%234ade80' text-anchor='middle'>~$</text></svg>",
  },
  openGraph: {
    title: 'Vitor Open Dev — Project Portfolio',
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
          fontWeight: 700,
          fontSize: '0.92rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
        }}
      >
        <span style={{ color: '#6b7280', fontWeight: 400 }}>~$</span>
        <span style={{ color: '#0d9488' }}>cd</span>
        <span>~/vitorx86/portfolio</span>
        <span
          style={{
            color: '#0d9488',
            marginLeft: '0.1rem',
          }}
          aria-hidden="true"
        >
          &#9612;
        </span>
      </span>
    }
    projectLink="https://github.com/vitorecomp"
  />
)

const footer = (
  <Footer>
    <div
      style={{
        width: '100%',
        fontFamily: 'var(--font-mono)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '0.85rem 1.15rem',
          borderRadius: '0.5rem',
          backgroundColor: '#111827',
          color: '#d1d5db',
          fontSize: '0.82rem',
        }}
      >
        <span style={{ color: '#9ca3af' }}>$ ls ./links</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a
            href="https://vitorx86.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ade80', textDecoration: 'none' }}
          >
            ./vitorx86.dev
          </a>
          <a
            href="https://github.com/vitorecomp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ade80', textDecoration: 'none' }}
          >
            ./github
          </a>
          <a
            href="https://www.linkedin.com/in/vieiravitor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ade80', textDecoration: 'none' }}
          >
            ./linkedin
          </a>
          <a
            href="https://www.instagram.com/vitorx86.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4ade80', textDecoration: 'none' }}
          >
            ./insta
          </a>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '0.75rem',
          fontSize: '0.8rem',
          color: '#6b7280',
        }}
      >
        <span>© {new Date().getFullYear()} Vieira Vitor. All rights reserved.</span>
        <span>
          <span style={{ color: '#0d9488' }}>~$&nbsp;</span>exit 0
        </span>
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
        <Layout
          navbar={navbar}
          search={<Search placeholder='$ grep -ri "project" ~/portfolio...' />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/vitorecomp/personal-portifolio/tree/main"
          editLink="$ ./edit_on_github.sh ↗"
          feedback={{ content: '$ ./open_issue.sh ↗' }}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ title: '~$ cat ./toc.txt' }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
