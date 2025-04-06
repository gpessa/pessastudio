import { t } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import dressage from "assets/icons/dressage.jpg";
import giostre from "assets/icons/giostre.jpg";
import ostacoli from "assets/icons/ostacoli.jpg";
import recinti from "assets/icons/recinti.jpg";
import tondini from "assets/icons/tondini.jpg";
import { StaticImageData } from "next/image";

export type Page = {
  url: string;
  title: string;
  description?: string;
  image?: StaticImageData;
};

const usePages = () => {
  useLingui(); // Fix on locale change

  const OSTACOLI: Page = {
    description: t`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
    image: ostacoli,
    title: t`Ostacoli`,
    url: "/ostacoli",
  };

  const RECINTI: Page = {
    description: t`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
    image: recinti,
    title: t`Recinti`,
    url: "/recinti",
  };

  const TONDINI: Page = {
    description: t`Tondini coperti per addestrare puledri in libertà`,
    image: tondini,
    title: t`Tondini`,
    url: "/tondini",
  };

  const GIOSTRE: Page = {
    description: t`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
    image: giostre,
    title: t`Giostre`,
    url: "/giostre",
  };

  const DRESSAGE: Page = {
    description: t`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
    image: dressage,
    title: t`Dressage`,
    url: "/dressage",
  };

  const CONTATTI: Page = {
    description: t`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
    title: t`Contatti`,
    url: "/contatti",
  };

  const PAGE_404: Page = {
    title: t`Pagina non trovata`,
    url: "/404",
  };

  const PAGE_500: Page = {
    title: t`Errore`,
    url: "/500",
  };

  const COOKIE_POLICY: Page = {
    title: t`Informativa sui Cookie`,
    url: "/cookie-policy",
  };

  const HOME: Page = {
    description: t`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
    title: t`Home`,
    url: "/",
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: "/recinti/come-preparare-il-fondo",
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: "/tondini/come-preparare-il-fondo",
  };

  const GIOSTRE_IPPOWALKER: Page = {
    description: t`Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
    title: t`Giostra Ippowalker`,
    url: "/giostre/ippowalker",
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: "/giostre/ippowalker/istruzioni-montaggio",
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    description: t`Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
    title: t`Giostra Tecnoexerciser`,
    url: "/giostre/tecnoexerciser",
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: "/giostre/tecnoexerciser/istruzioni-montaggio",
  };

  const ADMIN: Page = {
    title: `Amministrazione`,
    url: "/admin",
  };

  const ADMIN_SIGNIN: Page = {
    title: `Amministrazione Login`,
    url: "/admin/signin",
  };

  // eslint-disable-next-line sort-keys-fix/sort-keys-fix
  const PRODUCTS = { GIOSTRE, TONDINI, OSTACOLI, RECINTI, DRESSAGE };

  const NAVIGATION = { ...PRODUCTS, CONTATTI };

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
    ADMIN,
    ADMIN_SIGNIN,
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
