import { msg } from "@lingui/core/macro";
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
  const { i18n } = useLingui();

  const OSTACOLI: Page = {
    description: i18n._(
      msg`Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`
    ),
    image: ostacoli,
    title: i18n._(msg`Ostacoli`),
    url: "/ostacoli",
  };

  const RECINTI: Page = {
    description: i18n._(
      msg`Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`
    ),
    image: recinti,
    title: i18n._(msg`Recinti`),
    url: "/recinti",
  };

  const TONDINI: Page = {
    description: i18n._(msg`Tondini coperti per addestrare puledri in libertà`),
    image: tondini,
    title: i18n._(msg`Tondini`),
    url: "/tondini",
  };

  const GIOSTRE: Page = {
    description: i18n._(
      msg`Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`
    ),
    image: giostre,
    title: i18n._(msg`Giostre`),
    url: "/giostre",
  };

  const DRESSAGE: Page = {
    description: i18n._(
      msg`Rettangoli / Campi professionali da dressage per tutte le esigenze`
    ),
    image: dressage,
    title: i18n._(msg`Dressage`),
    url: "/dressage",
  };

  const CONTATTI: Page = {
    description: i18n._(
      msg`Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`
    ),
    title: i18n._(msg`Contatti`),
    url: "/contatti",
  };

  const PAGE_404: Page = {
    title: i18n._(msg`Pagina non trovata`),
    url: "/404",
  };

  const PAGE_500: Page = {
    title: i18n._(msg`Errore`),
    url: "/500",
  };

  const COOKIE_POLICY: Page = {
    title: i18n._(msg`Informativa sui Cookie`),
    url: "/cookie-policy",
  };

  const HOME: Page = {
    description: i18n._(
      msg`Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`
    ),
    title: i18n._(msg`Home`),
    url: "/",
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    title: i18n._(msg`Come preparare il fondo`),
    url: "/recinti/come-preparare-il-fondo",
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: i18n._(msg`Come preparare il fondo`),
    url: "/tondini/come-preparare-il-fondo",
  };

  const GIOSTRE_IPPOWALKER: Page = {
    description: i18n._(
      msg`Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`
    ),
    title: i18n._(msg`Giostra Ippowalker`),
    url: "/giostre/ippowalker",
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: i18n._(msg`Istruzioni di montaggio`),
    url: "/giostre/ippowalker/istruzioni-montaggio",
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    description: i18n._(
      msg`Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`
    ),
    title: i18n._(msg`Giostra Tecnoexerciser`),
    url: "/giostre/tecnoexerciser",
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: i18n._(msg`Istruzioni di montaggio`),
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
