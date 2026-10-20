import { notFound } from 'next/navigation'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

function isIgnoredProbePath(mdxPath?: string[]) {
  if (!mdxPath || mdxPath.length === 0) return false
  const first = mdxPath[0]
  return (
    first.startsWith('.') ||
    first.startsWith('_') ||
    first === 'favicon.ico'
  )
}

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  if (isIgnoredProbePath(params.mdxPath)) {
    return {}
  }
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const params = await props.params
  if (isIgnoredProbePath(params.mdxPath)) {
    notFound()
  }
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
