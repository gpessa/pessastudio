import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { GIOSTRE_MODELS } from "modules/Giostre";

export type Page = {
  url: string;
  image?: string;
  title: MessageDescriptor;
  description?: MessageDescriptor;
};

export type PageId = keyof ReturnType<typeof getPages>["PAGES"];

const getPages = (locale: string) => {
  const OSTACOLI: Page = {
    title: msg`Ostacoli`,
    description: msg`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
    url: `/${locale}/ostacoli`,
    image: require("assets/icons/ostacoli.jpg"),
  };

  const RECINTI: Page = {
    title: msg`Recinti`,
    url: `/${locale}/recinti`,
    image: require("assets/icons/recinti.jpg"),
  };

  const TONDINI: Page = {
    title: msg`Tondini`,
    description: msg`Tondini coperti per addestrare puledri in libertà`,
    url: `/${locale}/tondini`,
    image: require("assets/icons/tondini.jpg"),
  };

  const GIOSTRE: Page = {
    title: msg`Giostre`,
    url: `/${locale}/giostre`,
    description: msg`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
    image: require("assets/icons/giostre.jpg"),
  };

  const DRESSAGE: Page = {
    title: msg`Dressage`,
    url: `/${locale}/dressage`,
    description: msg`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
    image: require("assets/icons/dressage.jpg"),
  };

  const CONTATTI: Page = {
    title: msg`Contatti`,
    description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
    url: `/${locale}/contatti`,
  };

  const PAGE_404: Page = {
    title: msg`Pagina non trovata`,
    url: `/${locale}/404`,
  };

  const PAGE_500: Page = {
    title: msg`Errore`,
    url: `/${locale}/500`,
  };

  const COOKIE_POLICY: Page = {
    title: msg`Informativa sui Cookie`,
    description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
    url: `/${locale}/cookie-policy`,
  };

  const HOME: Page = {
    title: msg`Home`,
    description: msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
    url: `/${locale}`,
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    title: msg`Come preparare il fondo`,
    description: msg`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
    url: `/${locale}/recinti/come-preparare-il-fondo`,
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: msg`Come preparare il fondo`,
    url: `/${locale}/tondini/come-preparare-il-fondo`,
  };

  const GIOSTRE_IPPOWALKER: Page = {
    title: msg`Giostre ${GIOSTRE_MODELS.IPPOWALKER}`,
    url: `/${locale}/giostre/ippowalker`,
    description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.IPPOWALKER}, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: msg`Istruzioni di montaggio`,
    url: `/${locale}/giostre/ippowalker/istruzioni-montaggio`,
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    url: `/giostre/tecnoexerciser`,
    title: msg`Giostre ${GIOSTRE_MODELS.TECNOEXERCISER}`,
    description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.TECNOEXERCISER}, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: msg`Istruzioni di montaggio`,
    url: `/${locale}/giostre/tecnoexerciser/istruzioni-montaggio`,
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

export default getPages;
