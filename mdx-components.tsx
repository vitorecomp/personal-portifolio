import React from 'react'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import {
  TerminalEyebrow,
  TerminalHero,
  ProjectGrid,
  ProjectHeader,
  TerminalCallout,
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

export function useMDXComponents(components?: Record<string, any>) {
  return {
    ...docsComponents,
    a: CleanAnchor,
    TerminalEyebrow,
    TerminalHero,
    ProjectGrid,
    ProjectHeader,
    TerminalCallout,
    RepoCatalogTable,
    ...components,
  }
}
