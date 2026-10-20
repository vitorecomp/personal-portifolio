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

export function useMDXComponents(components?: Record<string, any>) {
  return {
    ...docsComponents,
    TerminalEyebrow,
    TerminalHero,
    ProjectGrid,
    ProjectHeader,
    TerminalCallout,
    RepoCatalogTable,
    ...components,
  }
}
