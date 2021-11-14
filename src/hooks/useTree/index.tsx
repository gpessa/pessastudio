import { useLingui } from "@lingui/react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

export type BreadcrumbList = { name: string; url: string; absoluteUrl: string }[]

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
  const urls = [...path.split("/").filter(f => f != "")]
  const { i18n } = useLingui()
  const { defaultLang, prefixDefault, localizedPath, locale } = useLocalization()

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(query)

  const getUrl = (path: string) => {
    return (
      siteUrl +
      localizedPath({
        prefixDefault,
        defaultLang,
        locale,
        path,
      })
    )
  }

  const fragments = urls.reduce(
    (fragments, fragment) => {
      const last = fragments[fragments.length - 1]
      const url = `${last.url}${fragment}/`

      const absoluteUrl = getUrl(url)

      return [
        ...fragments,
        {
          name: i18n._(`${url}:title`),
          absoluteUrl,
          url,
        },
      ]
    },
    [
      {
        name: i18n._(`/:title`),
        url: "/",
        absoluteUrl: getUrl(""),
      },
    ]
  )

  return fragments
}

export default usTree
