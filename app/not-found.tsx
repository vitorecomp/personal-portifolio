import React from 'react'
import Link from 'next/link'
import styles from '../components/portfolio.module.css'

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: '56rem',
        margin: '3rem auto',
        padding: '0 1.25rem',
      }}
    >
      <div className={styles.emptyCatalogState}>
        <span className={styles.sectionIndex}>
          // ERR_404 // ROUTE_NOT_INDEXED
        </span>
        <h1 className={styles.domainTitle}>404 // MODULE NOT FOUND</h1>
        <p className={styles.domainDesc}>
          The requested path does not exist in the synced portfolio index.
          Verify the repository slug or browse the complete catalog below.
        </p>
        <div className={styles.heroActions}>
          <Link href="/" className={styles.brutalBtnPrimary}>
            <span>RETURN TO PORTFOLIO</span>
            <span className={styles.violetArrow} aria-hidden="true">
              &#8599;
            </span>
          </Link>
          <Link href="/repositories" className={styles.brutalBtnGhost}>
            <span>ALL 93 REPOSITORIES</span>
            <span className={styles.bracketIcon} aria-hidden="true">
              [&#8599;]
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
