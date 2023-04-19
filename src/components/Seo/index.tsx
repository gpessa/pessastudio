import { usePages, useTree } from "hooks";
import React from "react";
import {
  ITALIA,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
  SOCIALS,
  WEBSITE,
} from "utils/constants";

import image from "assets/generals/image.jpg";
import {
  BreadcrumbJsonLd,
  NextSeo,
  NextSeoProps,
  OrganizationJsonLd,
} from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const Seo: React.FC = () => {
  const { PAGES } = usePages();
  const { pathname, locales, locale } = useRouter();
  const { title, description } = Object.values(PAGES).find(
    ({ url }) => url === pathname
  )!;
  const breadcrumb = useTree(pathname);

  const languageAlternates: NextSeoProps["languageAlternates"] = (
    locales || []
  ).reduce(
    (metas, hrefLang) => [
      ...metas,
      {
        hrefLang: `${process.env
          .NEXT_PUBLIC_WEBISTE_URL!}/${hrefLang}${pathname}`,
        href: hrefLang,
      },
    ],
    [
      {
        hrefLang: `${process.env.NEXT_PUBLIC_WEBISTE_URL!}${pathname}`,
        href: "en",
      },
    ]
  );

  return (
    <>
      <Head>
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta property="og:locale" content={locale} />
      </Head>
      <NextSeo
        title={`${title} | Pessastudio`}
        description={description}
        languageAlternates={languageAlternates}
      />
      <OrganizationJsonLd
        description={PAGES.HOME.description}
        telephone={ITALIA.telephone}
        email={ITALIA.email}
        type="Corporation"
        url={WEBSITE}
        logo={image.src}
        legalName={SEDE_LEGALE.name}
        name={SEDE_OPERATIVA.name}
        address={SEDE_OPERATIVA}
        sameAs={[
          SOCIALS.facebook_1,
          SOCIALS.facebook_2,
          SOCIALS.instagram,
          SOCIALS.youtube,
        ]}
        contactPoint={[
          {
            contactType: "customer service",
            ...ITALIA,
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={breadcrumb.map((b, index) => ({
          position: index + 1,
          name: b.title,
          item: b.absoluteUrl,
        }))}
      />
    </>
  );
};

export default Seo;
