import { t } from "@lingui/macro"
import { useStaticQuery } from "gatsby"
import { BreadcrumbList as BreadcrumbListType } from "hooks/useTree"
import { ITALIA, SEDE_OPERATIVA } from "pages/contatti"
import React from "react"
import Helmet from "react-helmet"
import { helmetJsonLdProp } from "react-schemaorg"
import { BreadcrumbList, Organization } from "schema-dts"
import { SOCIALS } from "../Footer/Socials"
import { graphql } from "gatsby"
import { usePages } from "hooks"

type Props = {
  title?: string
  keywords?: string[]
  description?: string
  fragments?: unknown[]
  breadcrumb: BreadcrumbListType
  meta?: { name: string; content: string }[]
}

export const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const Seo: React.FC<Props> = ({ title, description, keywords, meta = [], breadcrumb }) => {
  const siteUrl = useStaticQuery(seoQuery).site.siteMetadata.siteUrl
  const { PAGES } = usePages()

  return (
    <Helmet
      script={[
        helmetJsonLdProp<Organization>({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SEDE_OPERATIVA.name,
          "url": siteUrl,
          "logo": siteUrl + require("assets/generals/logo.jpg").default,
          "image": siteUrl + require("assets/products/tondini/gallery/tondino-10.jpg").default,
          "address": {
            "@type": "PostalAddress",
            "postalCode": SEDE_OPERATIVA.postalCode,
            "addressCountry": SEDE_OPERATIVA.country,
            "addressRegion": SEDE_OPERATIVA.addressRegion,
            "streetAddress": SEDE_OPERATIVA.streetAddress,
            "addressLocality": SEDE_OPERATIVA.addressLocality,
          },
          "description": PAGES.HOME.description,
          "telephone": ITALIA.telephone,
          "sameAs": [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.youtube],
          "email": ITALIA.email,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": ITALIA.telephone,
            "contactType": t`Supporto clienti`,
          },
          "founders": {
            "@type": "Person",
            "name": "Luciano Pessa",
            "gender": "Male",
            "nationality": "Italian",
          },
        }),
        helmetJsonLdProp<BreadcrumbList>({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumb.map((b, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": b.title,
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
