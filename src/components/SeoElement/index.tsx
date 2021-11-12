import React from "react"
import Helmet from "react-helmet"

type Props = {
  title: string
  description: string
  keywords?: string[]
  fragments?: unknown[]
  meta?: { name: string; content: string }[]
}

const Seo: React.FC<Props> = ({ title, description, keywords, meta = [] }) => (
  <Helmet
    title={title}
    titleTemplate={`%s | Pessastudio`}
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

export default Seo
