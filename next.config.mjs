import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
})

const isStaticExport = process.env.NEXT_EXPORT === 'true'

export default withNextra({
  ...(isStaticExport ? { output: 'export', trailingSlash: true } : {}),
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
})
