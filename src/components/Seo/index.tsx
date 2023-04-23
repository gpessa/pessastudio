import { usePages, useTree } from "hooks";
import { BreadcrumbJsonLd, DefaultSeo, OrganizationJsonLd } from "next-seo";
import React from "react";
import {
  ITALIA,
  NAME,
  SEDE_LEGALE,
  SEDE_OPERATIVA,
  SOCIALS,
} from "utils/constants";

import image from "assets/generals/image.jpg";
import logo from "assets/generals/logo.jpg";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Seo: React.FC = () => {
  const { t } = useTranslation();
  const { PAGES } = usePages();
  const { pathname } = useRouter();
  const {
    postalCode,
    addressCountry,
    addressRegion,
    streetAddress,
    addressLocality,
  } = SEDE_OPERATIVA;
  const { email, telephone } = ITALIA;

  const breadcrumb = useTree(pathname);
  const current = Object.values(PAGES).find((page) => page.url === pathname)!;

  return (
    <>
      {current && (
        <DefaultSeo
          title={current.title + " | " + NAME}
          description={current.description || ""}
        />
      )}

      <OrganizationJsonLd
        id={SEDE_LEGALE.id}
        name={NAME}
        description={PAGES.HOME.description}
        url={process.env.NEXT_PUBLIC_WEBISTE_URL!}
        telephone={telephone}
        email={email}
        address={{
          postalCode,
          addressCountry,
          addressRegion,
          streetAddress,
          addressLocality,
        }}
        founders={{
          name: "Luciano Pessa",
          gender: "Male",
          nationality: "Italian",
        }}
        contactPoint={[
          {
            telephone: ITALIA.telephone,
            contactType: t("General.contacts.clientSupport", {
              defaultValue: `Supporto clienti`,
            }),
          },
        ]}
        geo={{
          latitude: "45.2206886",
          longitude: "11.4844121",
        }}
        logo={logo.src}
        images={[image.src]}
        sameAs={[
          SOCIALS.facebook_1,
          SOCIALS.facebook_2,
          SOCIALS.instagram,
          SOCIALS.youtube,
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
