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
  const breadcrumb = useTree(pathname);
  const page = Object.values(PAGES).find(({ url }) => url === pathname);

  const languageAlternates: NextSeoProps["languageAlternates"] = (
    locales || []
  ).reduce(
    (metas, hrefLang) => [
      ...metas,
      {
        href: `${process.env.NEXT_PUBLIC_WEBISTE_URL!}/${hrefLang}${pathname}`,
        hrefLang,
      },
    ],
    [
      {
        href: `${process.env.NEXT_PUBLIC_WEBISTE_URL!}${pathname}`,
        hrefLang: "en",
      },
    ]
  );

  return (
    <>
      <Head>
        <meta itemProp="name" content={page?.title} />
        <meta itemProp="description" content={page?.description} />
        <meta property="og:locale" content={locale} />
      </Head>
      <NextSeo
        title={`${page?.title} | Pessastudio`}
        description={page?.description}
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
          item: b.absoluteUrl,
          name: b.title,
          position: index + 1,
        }))}
      />
    </>
  );
};

export default Seo;
