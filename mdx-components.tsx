import React from 'react'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import {
  TerminalEyebrow,
  TerminalHero,
  ProjectGrid,
  DirectoryExplorer,
  CyberTelemetryStrip,
  CategoryHub,
  EngineerDossier,
  ProjectHeader,
  TerminalCallout,
  TerminalMermaid,
  RepoOverviewFallback,
  RepoCatalogTable,
} from './components/portfolio'

const docsComponents = getDocsMDXComponents()
const DocsAnchor = docsComponents.a

function CleanAnchor(props: React.ComponentPropsWithoutRef<'a'>) {
  const children =
    typeof props.children === 'string'
      ? props.children.replace(/\s*↗$/u, '')
      : props.children
  if (DocsAnchor) {
    return <DocsAnchor {...props}>{children}</DocsAnchor>
  }
  return <a {...props}>{children}</a>
}

function OptimizedImage(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <img
      loading="lazy"
      decoding="async"
      {...props}
      alt={props.alt || 'Technical diagram'}
    />
  )
}

export function useMDXComponents(components?: Record<string, any>) {
  return {
    ...docsComponents,
    a: CleanAnchor,
    img: OptimizedImage,
    TerminalEyebrow,
    TerminalHero,
    ProjectGrid,
    DirectoryExplorer,
    CyberTelemetryStrip,
    CategoryHub,
    EngineerDossier,
    ProjectHeader,
    TerminalCallout,
    TerminalMermaid,
    RepoOverviewFallback,
    RepoCatalogTable,
    ...components,
  }
}
