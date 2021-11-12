import { withPrefix } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { Organization } from "schema-dts"

import { useStaticQuery, graphql } from "gatsby"
import { ITALIA, SEDE_OPERATIVA } from "src/pages/contatti"
import { SOCIALS } from "../Footer/Socials"

type Props = {
  title: string
  description: string
  keywords?: string[]
  fragments?: unknown[]
  meta?: { name: string; content: string }[]
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Seo: React.FC<Props> = ({ title, description, keywords, meta = [] }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(query)

  return (
    <Helmet
      script={[
        helmetJsonLdProp<Organization>({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SEDE_OPERATIVA.name,
          "url": siteUrl,
          "image": siteUrl + withPrefix("/generals/logo.jpg"),
          "address": {
            "@type": "PostalAddress",
            "addressLocality": SEDE_OPERATIVA.addressLocality,
            "addressRegion": SEDE_OPERATIVA.addressRegion,
            "streetAddress": SEDE_OPERATIVA.streetAddress,
          },
          "telephone": ITALIA.telephone,
          "sameAs": [SOCIALS.facebook, SOCIALS.instagram],
        }),
      ]}
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
}

export default Seo
