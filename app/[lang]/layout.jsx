import { Footer, Layout, Navbar, LocaleSwitch } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from "nextra/page-map"
import "./styles.css"
import "./globals.css"
import "katex/dist/katex.min.css"
import { millionscope, Twitter } from '@/components/icons'
import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'

export const { viewport } = Head
// https://millionscope.com
export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  applicationName: 'millionscope',
  generator: 'millionscope',
  appleWebApp: {
    title: 'millionscope'
  },
  other: {
    'msapplication-TileImage': '/favicon/mstile-150x150.png',
    'msapplication-TileColor': '#fff'
  },
  title: {
    template: '%s - millionscope'
  },
  description: 'millionscope',
  openGraph: {
    title: 'Title website',
    description: 'This is the description',
    image: new URL('/favicon/mstile-150x150.png', 'http://localhost:3000').toString() // Absolute URL for Open Graph image
  },
  twitter: {
    card: 'summary_large_image',
    site: '@millionscope',
    title: 'Title website',
    description: 'This is the description',
    image: new URL('/favicon/mstile-150x150.png', 'http://localhost:3000').toString() // Absolute URL for Twitter image
  }
}

const TITLE = {
  en: 'Wonderful science in your hand',
  es: 'Mirinda scienco en via mano',
  ru: 'Чудесная наука в твоих руках'
}



export default async function RootLayout({ children, params }) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  let pageMap = await getPageMap(`/${lang}`)

  if (lang === 'en') {
    pageMap = [
      ...pageMap,
    ]
  }
  // const config = useConfig()
  // const { locale } = useRouter()
  // config.frontMatter.image ||
  const image = 'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'

  const footer = (
    <Footer className="x:flex-col x:items-start">
      <a
        className="x:focus-visible:nextra-focus x:flex x:items-center x:gap-1"
        target="_blank"
        rel="noreferrer"
        title="millionscope.com homepage"
        href="https://millionscope.com/about"
      >
        Powered by
        <millionscope />
      </a>
      <p className="x:mt-2 x:text-xs">
        © {new Date().getFullYear()} MillionScope Inc.
      </p>
    </Footer>
  )


  const navbar = (
    <Navbar
      // projectIcon={<SWRLogo className="h-10" />}
      projectLink={"https://github.com/millionscope/millionscope.github.io"}
      logo={
        <>
          <millionscope className="x:h-10" />
          <span
            className="x:max-md:hidden x:select-none x:font-bold x:ltr:ml-2 x:rtl:mr-2"
            title={`millionscope: ${TITLE["en"] || ''}`}
          >
            MillionScope
          </span>
        </>
      }
      // Next.js discord server
      chatIcon={<Twitter />}
      chatLink="https://x.com/millionscope"
    />
  )
  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta property="og:image" content="https://right-shift-pm2c6zqyo-artginzburg.vercel.app/opengraph-image.png?121e2b7355255853"></meta>
        {/* <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@millionscope" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="millionscope" /> */}
      </Head>
      <body>
        <Layout
          // banner={<Banner storageKey="Nextra 2">Nextra 2 Alpha</Banner>}
          navbar={navbar}
          footer={footer}
          editLink={null}
          docsRepositoryBase="https://github.com/millionscope/millionscope.github.io/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true, toggleButton: true }}
          toc={{
            float: true
          }}
          i18n={[
            { locale: "en", name: "English" },
            { locale: "es", "name": "Español" }
          ]}
          darkMode={true}
          pageMap={pageMap}

          feedback={{
            content: null
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}