import { t } from "@lingui/macro";
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
    url: "/ostacoli",
    title: t`Ostacoli`,
    description: t`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
    image: ostacoli,
  };

  const RECINTI: Page = {
    url: "/recinti",
    title: t`Recinti`,
    description: t`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
    image: recinti,
  };

  const TONDINI: Page = {
    url: "/tondini",
    title: t`Tondini`,
    description: t`Tondini coperti per addestrare puledri in libertà`,
    image: tondini,
  };

  const GIOSTRE: Page = {
    url: "/giostre",
    title: t`Giostre`,
    description: t`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
    image: giostre,
  };

  const DRESSAGE: Page = {
    url: "/dressage",
    title: t`Dressage`,
    description: t`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
    image: dressage,
  };

  const CONTATTI: Page = {
    url: "/contatti",
    title: t`Contatti`,
    description: t`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
  };

  const PAGE_404: Page = {
    url: "/404",
    title: t`Pagina non trovata`,
  };

  const PAGE_500: Page = {
    url: "/500",
    title: t`Errore`,
  };

  const COOKIE_POLICY: Page = {
    url: "/cookie-policy",
    title: t`Informativa sui Cookie`,
  };

  const HOME: Page = {
    url: "/",
    title: t`Home`,
    description: t`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    url: "/recinti/come-preparare-il-fondo",
    title: t`Come preparare il fondo`,
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    url: "/tondini/come-preparare-il-fondo",
    title: t`Come preparare il fondo`,
  };

  const GIOSTRE_IPPOWALKER: Page = {
    url: "/giostre/ippowalker",
    title: t`Giostra Ippowalker`,
    description: t`Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    url: "/giostre/ippowalker/istruzioni-montaggio",
    title: t`Istruzioni di montaggio`,
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    url: "/giostre/tecnoexerciser",
    title: t`Giostra Tecnoexerciser`,
    description: t`Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    url: "/giostre/tecnoexerciser/istruzioni-montaggio",
    title: t`Istruzioni di montaggio`,
  };

  const ADMIN: Page = {
    url: "/admin",
    title: t`Amministrazione`,
  };

  const ADMIN_SIGNIN: Page = {
    url: "/admin/signin",
    title: t`Amministrazione Login`,
  };

  const PRODUCTS = { OSTACOLI, RECINTI, TONDINI, GIOSTRE, DRESSAGE };

  const NAVIGATION = { ...PRODUCTS, CONTATTI };

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
    ADMIN,
    ADMIN_SIGNIN,
    PAGE_404,
    PAGE_500,
    COOKIE_POLICY,
    HOME,
    RECINTI_COME_PREPARARE_IL_FONDO,
    TONDINI_COME_PREPARARE_IL_FONDO,
    GIOSTRE_IPPOWALKER,
    GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO,
    GIOSTRE_TECNOEXERCISER,
    GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO,
  };

  return {
    PAGES,
    PRODUCTS,
    NAVIGATION,
  };
};

export default usePages;
