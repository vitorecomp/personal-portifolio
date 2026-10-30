'use client'

import React from 'react'
import Link from 'next/link'
import styles from '../components/portfolio.module.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
          // ERR_500 // RUNTIME_FAULT_DETECTED
        </span>
        <h1 className={styles.domainTitle}>SYSTEM EXECUTION FAULT</h1>
        <p className={styles.domainDesc}>
          {error?.message ||
            'An unexpected client exception occurred while rendering this module.'}
        </p>
        <div className={styles.heroActions}>
          <button
            type="button"
            onClick={() => reset()}
            className={styles.brutalBtnPrimary}
          >
            <span>RETRY EXECUTION</span>
            <span className={styles.violetArrow} aria-hidden="true">
              &#8635;
            </span>
          </button>
          <Link href="/" className={styles.brutalBtnGhost}>
            <span>RETURN HOME</span>
            <span className={styles.bracketIcon} aria-hidden="true">
              [&#8599;]
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
