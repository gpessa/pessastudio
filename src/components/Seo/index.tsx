/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery, withPrefix } from "gatsby"
import PropTypes, { InferProps } from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import { useTree } from "@hooks"
import { useLocation } from "@reach/router"

function Seo({ description , lang, meta, keywords }: InferProps<typeof Seo.propTypes>) {
  const { fragments } = useTree()
  const { formatMessage } = useIntl()

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

  const title = formatMessage({ id: `NAVIGATION__${fragments[fragments.length - 1].id}` })

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = description || site.siteMetadata.siteUrl
  const location = useLocation()
  
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLanguage }: { languages: string[], language: string }) => (
        <Helmet
          title={title}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          htmlAttributes={{
            lang,
          }}
          link={languages
            .map(hrefLang => {
              const href = siteUrl + location.pathname.replace(`${currentLanguage}`, hrefLang);
              return {
                href,
                hrefLang,
                key: hrefLang,
                rel: "alternate",
              }
            })
          }
          meta={
            [{
              name: `description`,
              content: metaDescription,
            }, {
              property: `og:title`,
              content: title,
            }, {
              property: `og:description`,
              content: metaDescription,
            }, {
              property: `og:type`,
              content: `website`,
            }, {
              name: `twitter:card`,
              content: `summary`,
            }, {
              name: `twitter:title`,
              content: title,
            }, {
              name: `twitter:description`,
              content: metaDescription,
            }]
            .concat(
              keywords && keywords.length > 0
                ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
                : []
            )
            .concat(meta)
          }
        />
      )}
    </IntlContextConsumer>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
  fragments: [],
}

Seo.propTypes = {
  intl: PropTypes.any,
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string)
}

export default Seo
