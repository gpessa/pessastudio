import { t } from "@lingui/macro";
// import { graphql, useStaticQuery } from "gatsby";
import { usePages, useTree } from "hooks";
// import { ITALIA, SEDE_OPERATIVA } from "pages/contatti";
import React from "react";
// import Helmet from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { BreadcrumbList, Organization } from "schema-dts";
import { ITALIA, SEDE_OPERATIVA, SOCIALS, WEBSITE } from "utils/constants";

import Head from "next/head";

import image from "assets/generals/image.jpg";
import logo from "assets/generals/logo.jpg";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  keywords?: string[];
  description?: string;
  fragments?: unknown[];
  // breadcrumb: BreadcrumbListType;
  meta?: { name: string; content: string }[];
};

const Seo: React.FC<Props> = ({
  title,
  description,
  keywords,
  meta = [],
  // breadcrumb,
}) => {
  const { PAGES } = usePages();
  const { pathname } = useRouter();
  const breadcrumb = useTree(pathname);
  const website = "";

  const jsonLdProps = [
    helmetJsonLdProp<Organization>({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SEDE_OPERATIVA.name,
      url: WEBSITE,
      // FIXME: Double check the tag is readed
      logo: logo.src,
      image: image.src,
      address: {
        "@type": "PostalAddress",
        postalCode: SEDE_OPERATIVA.postalCode,
        addressCountry: SEDE_OPERATIVA.country,
        addressRegion: SEDE_OPERATIVA.addressRegion,
        streetAddress: SEDE_OPERATIVA.streetAddress,
        addressLocality: SEDE_OPERATIVA.addressLocality,
      },
      description: PAGES.HOME.description,
      telephone: ITALIA.telephone,
      sameAs: [
        SOCIALS.facebook_1,
        SOCIALS.facebook_2,
        SOCIALS.instagram,
        SOCIALS.youtube,
      ],
      email: ITALIA.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: ITALIA.telephone,
        contactType: t`Supporto clienti`,
      },
      founders: {
        "@type": "Person",
        name: "Luciano Pessa",
        gender: "Male",
        nationality: "Italian",
      },
    }),
    helmetJsonLdProp<BreadcrumbList>({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((b, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: b.title,
        item: b.absoluteUrl,
      })),
    }),
  ];

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={website} />
        <meta name="twitter:card" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      </Head>

      {jsonLdProps.map(({ type, innerHTML }, index) => (
        <script
          type={type}
          key={`jsonLdProps__${index}`}
          dangerouslySetInnerHTML={{ __html: innerHTML }}
        />
      ))}
    </>
  );
};

export default Seo;
