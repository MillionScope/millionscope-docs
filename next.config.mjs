import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  // contentDirBasePath: '/docs'
  contentDirBasePath: '/'
})

export default withNextra({
  reactStrictMode: true,
  // output: 'export',
  // images: {
  //   unoptimized: true // mandatory, otherwise won't export
  // },
  distDir: "build",
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
})
