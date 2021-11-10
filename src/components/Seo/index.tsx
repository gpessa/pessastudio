/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useLingui } from "@lingui/react"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import React from "react"
import Helmet from "react-helmet"

type Props = {
  meta?: { name: string; content: string }[]
  keywords?: string[]
  fragments: unknown[]
}

const Seo: React.FC<Props> = ({ keywords, meta = [] }) => {
  const { locale } = useLocalization()
  const { pathname } = useLocation()
  const path = pathname.replace(`/${locale}`, "")
  const { i18n } = useLingui()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  )

  const title = i18n._(`${path}:title`)
  const description = i18n._(`${path}:description`)

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default Seo
