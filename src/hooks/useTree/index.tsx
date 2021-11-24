import { graphql, useStaticQuery } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import usePages, { Page } from "hooks/usePages"

export type BreadcrumbList = (Page & { absoluteUrl: string })[]

const query = graphql`
  query SEOExtra {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const usTree = (path: string): BreadcrumbList => {
  const { defaultLang, prefixDefault, localizedPath, locale } = useLocalization()
  const siteUrl = useStaticQuery(query).site.siteMetadata.siteUrl
  const { PAGES } = usePages()
  const urls = [...path.split("/").filter(f => f != "")]

  const findPage = (url: string): Page => Object.values(PAGES).find(page => page.url === url)!

  const getAbsoluteUrl = (path: string) =>
    siteUrl +
    localizedPath({
      prefixDefault,
      defaultLang,
      locale,
      path,
    })

  const fragments = urls
    .reduce(
      (fragments, fragment) => {
        const last = fragments[fragments.length - 1]
        const url = `${last.url}${fragment}/`
        const page = findPage(url)
        return [...fragments, page]
      },
      [PAGES.HOME]
    )
    .map(page => ({
      absoluteUrl: getAbsoluteUrl(page.url),
      ...page,
    }))

  return fragments
}

export default usTree
