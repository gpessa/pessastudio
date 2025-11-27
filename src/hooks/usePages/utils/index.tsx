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

export const getPages = (locale: string) => {
  const OSTACOLI: Page = {
    description: msg`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
    image: require("assets/icons/ostacoli.jpg"),
    title: msg`Ostacoli`,
    url: `/${locale}/ostacoli`,
  };

  const RECINTI: Page = {
    image: require("assets/icons/recinti.jpg"),
    title: msg`Recinti`,
    url: `/${locale}/recinti`,
  };

  const TONDINI: Page = {
    description: msg`Tondini coperti per addestrare puledri in libertà`,
    image: require("assets/icons/tondini.jpg"),
    title: msg`Tondini`,
    url: `/${locale}/tondini`,
  };

  const GIOSTRE: Page = {
    description: msg`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
    image: require("assets/icons/giostre.jpg"),
    title: msg`Giostre`,
    url: `/${locale}/giostre`,
  };

  const DRESSAGE: Page = {
    description: msg`Rettangoli / Campi professionali da dressage per tutte le esigenze`,
    image: require("assets/icons/dressage.jpg"),
    title: msg`Dressage`,
    url: `/${locale}/dressage`,
  };

  const CONTATTI: Page = {
    description: msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
    title: msg`Contatti`,
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
    description: msg`Informativa sulla Privacy e Cookie Policy: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali secondo il GDPR`,
    title: msg`Informativa sui Cookie`,
    url: `/${locale}/cookie-policy`,
  };

  const TERMINI_E_CONDIZIONI: Page = {
    description: msg`Leggi i Termini e Condizioni di Pessastudio Horse Tecnology srl: uso del sito, responsabilità, proprietà dei contenuti e informazioni sul catalogo prodotti. Tutte le regole per navigare in sicurezza`,
    title: msg`Termini & Condizioni`,
    url: `/${locale}/termini-e-condizioni`,
  };

  const INFORMATIVA_PRIVACY: Page = {
    description: msg`Scopri come tuteliamo i tuoi dati e quali cookie utilizza il sito. Informazioni chiare su privacy, sicurezza e diritti GDPR`,
    title: msg`Informativa sulla Privacy`,
    url: `/${locale}/informativa-privacy`,
  };

  const HOME: Page = {
    description: msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
    title: msg`Home`,
    url: `/${locale}`,
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    description: msg`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
    title: msg`Come preparare il fondo`,
    url: `/${locale}/recinti/come-preparare-il-fondo`,
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: msg`Come preparare il fondo`,
    url: `/${locale}/tondini/come-preparare-il-fondo`,
  };

  const GIOSTRE_IPPOWALKER: Page = {
    description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.IPPOWALKER}, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
    title: msg`Giostre ${GIOSTRE_MODELS.IPPOWALKER}`,
    url: `/${locale}/giostre/ippowalker`,
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: msg`Istruzioni di montaggio`,
    url: `/${locale}/giostre/ippowalker/istruzioni-montaggio`,
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    description: msg`Scopri la nostra giostra ${GIOSTRE_MODELS.TECNOEXERCISER}, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
    title: msg`Giostre ${GIOSTRE_MODELS.TECNOEXERCISER}`,
    url: `/${locale}/giostre/tecnoexerciser`,
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: msg`Istruzioni di montaggio`,
    url: `/${locale}/giostre/tecnoexerciser/istruzioni-montaggio`,
  };

  const PRODUCTS = { DRESSAGE, GIOSTRE, OSTACOLI, RECINTI, TONDINI };

  const NAVIGATION = { ...PRODUCTS, CONTATTI };

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
    COOKIE_POLICY,
    INFORMATIVA_PRIVACY,
    TERMINI_E_CONDIZIONI,
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
