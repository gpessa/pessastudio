import { useLingui } from "@lingui/react/macro";

export type Page = {
  url: string;
  title: string;
};

export const PAGES_URL = {
  CONTATTI: "/contatti",
  COOKIE_POLICY: "/cookie-policy",
  DRESSAGE: "/dressage",
  GIOSTRE: "/giostre",
  GIOSTRE_IPPOWALKER: "/giostre/ippowalker",
  GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO:
    "/giostre/ippowalker/istruzioni-montaggio",
  GIOSTRE_TECNOEXERCISER: "/giostre/tecnoexerciser",
  GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO:
    "/giostre/tecnoexerciser/istruzioni-montaggio",
  HOME: ``,
  OSTACOLI: "/ostacoli",
  PAGE_404: "/404",
  PAGE_500: "/500",
  RECINTI: "/recinti",
  RECINTI_COME_PREPARARE_IL_FONDO: "/recinti/come-preparare-il-fondo",
  TONDINI: "/tondini",
  TONDINI_COME_PREPARARE_IL_FONDO: "/tondini/come-preparare-il-fondo",
};

const usePages = () => {
  const {
    t,
    i18n: { locale },
  } = useLingui();

  const OSTACOLI: Page = {
    title: t`Ostacoli`,
    url: `/${locale}${PAGES_URL.OSTACOLI}`,
  };

  const RECINTI: Page = {
    title: t`Recinti`,
    url: `/${locale}${PAGES_URL.RECINTI}`,
  };

  const TONDINI: Page = {
    title: t`Tondini`,
    url: `/${locale}${PAGES_URL.TONDINI}`,
  };

  const GIOSTRE: Page = {
    title: t`Giostre`,
    url: `/${locale}${PAGES_URL.GIOSTRE}`,
  };

  const DRESSAGE: Page = {
    title: t`Dressage`,
    url: `/${locale}${PAGES_URL.DRESSAGE}`,
  };

  const CONTATTI: Page = {
    title: t`Contatti`,
    url: `/${locale}${PAGES_URL.CONTATTI}`,
  };

  const PAGE_404: Page = {
    title: t`Pagina non trovata`,
    url: `/${locale}${PAGES_URL.PAGE_404}`,
  };

  const PAGE_500: Page = {
    title: t`Errore`,
    url: `/${locale}${PAGES_URL.PAGE_500}`,
  };

  const COOKIE_POLICY: Page = {
    title: t`Informativa sui Cookie`,
    url: `/${locale}${PAGES_URL.COOKIE_POLICY}`,
  };

  const HOME: Page = {
    title: t`Home`,
    url: `/${locale}${PAGES_URL.HOME}`,
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: `/${locale}${PAGES_URL.RECINTI_COME_PREPARARE_IL_FONDO}`,
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: `/${locale}${PAGES_URL.TONDINI_COME_PREPARARE_IL_FONDO}`,
  };

  const GIOSTRE_IPPOWALKER: Page = {
    title: t`Giostra Ippowalker`,
    url: `/${locale}${PAGES_URL.GIOSTRE_IPPOWALKER}`,
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: `/${locale}${PAGES_URL.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO}`,
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    title: t`Giostra Tecnoexerciser`,
    url: `/${locale}${PAGES_URL.GIOSTRE_TECNOEXERCISER}`,
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: `/${locale}${PAGES_URL.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO}`,
  };

  const PRODUCTS = { GIOSTRE, TONDINI, OSTACOLI, RECINTI, DRESSAGE };

  const NAVIGATION = { ...PRODUCTS, CONTATTI };

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
    COOKIE_POLICY,
    GIOSTRE_IPPOWALKER,
    GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO,
    GIOSTRE_TECNOEXERCISER,
    GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO,
    HOME,
    PAGE_404,
    PAGE_500,
    RECINTI_COME_PREPARARE_IL_FONDO,
    TONDINI_COME_PREPARARE_IL_FONDO,
  };

  return {
    NAVIGATION,
    PAGES,
    PRODUCTS,
  };
};

export default usePages;
