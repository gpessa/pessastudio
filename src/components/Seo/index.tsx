import { t } from "@lingui/macro"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { BreadcrumbList, Organization } from "schema-dts"
import { BreadcrumbList as BreadcrumbListType } from "src/hooks/useTree"
import { ITALIA, SEDE_OPERATIVA } from "src/pages/contatti"
import { SOCIALS } from "../Footer/Socials"

type Props = {
  title?: string
  keywords?: string[]
  description?: string
  fragments?: unknown[]
  breadcrumb: BreadcrumbListType
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

const Seo: React.FC<Props> = ({ title, description, keywords, meta = [], breadcrumb }) => {
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
          "logo": siteUrl + require("src/assets/generals/logo.jpg").default,
          "address": {
            "@type": "PostalAddress",
            "postalCode": SEDE_OPERATIVA.postalCode,
            "addressCountry": SEDE_OPERATIVA.country,
            "addressRegion": SEDE_OPERATIVA.addressRegion,
            "streetAddress": SEDE_OPERATIVA.streetAddress,
            "addressLocality": SEDE_OPERATIVA.addressLocality,
          },
          "telephone": ITALIA.telephone,
          "sameAs": [SOCIALS.facebook, SOCIALS.instagram],
          "email": ITALIA.email,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": ITALIA.telephone,
            "contactType": t`Supporto clienti`,
          },
        }),
        helmetJsonLdProp<BreadcrumbList>({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumb.map((b, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": b.name,
            "item": b.absoluteUrl,
          })),
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
