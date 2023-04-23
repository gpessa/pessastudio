import dressage from "assets/icons/dressage.jpg";
import giostre from "assets/icons/giostre.jpg";
import ostacoli from "assets/icons/ostacoli.jpg";
import recinti from "assets/icons/recinti.jpg";
import tondini from "assets/icons/tondini.jpg";
import { StaticImageData } from "next/image";
import { useTranslation } from "next-i18next";

export type Page = {
  url: string;
  title: string;
  description?: string | null;
  image?: StaticImageData;
};

const usePages = () => {
  const { t } = useTranslation();

  const OSTACOLI: Page = {
    url: "/ostacoli",
    title: t("Pages.ostacoli.title", { defaultValue: `Ostacoli` }),
    description: t("Pages.ostacoli.description", {
      defaultValue: `Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
    }),
    image: ostacoli,
  };

  const RECINTI: Page = {
    url: "/recinti",
    title: t("Pages.recinti.title", { defaultValue: `Recinti` }),
    description: t("Pages.recinti.description", {
      defaultValue: `Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche`,
    }),
    image: recinti,
  };

  const TONDINI: Page = {
    url: "/tondini",
    title: t("Pages.tondini.title", { defaultValue: `Tondini` }),
    description: t("Pages.tondini.description", {
      defaultValue: `Tondini coperti per addestrare puledri in libertà`,
    }),
    image: tondini,
  };

  const GIOSTRE: Page = {
    url: "/giostre",
    title: t("Pages.giostre.title", { defaultValue: `Giostre` }),
    description: t("Pages.giostre.description", {
      defaultValue: `Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo`,
    }),
    image: giostre,
  };

  const DRESSAGE: Page = {
    url: "/dressage",
    title: t("Pages.dressage.title", { defaultValue: `Dressage` }),
    description: t("Pages.dressage.description", {
      defaultValue: `Rettangoli / Campi professionali da dressage per tutte le esigenze`,
    }),
    image: dressage,
  };

  const CONTATTI: Page = {
    url: "/contatti",
    title: t("Pages.contatti.title", { defaultValue: `Contatti` }),
    description: t("Pages.contatti.description", {
      defaultValue: `Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli`,
    }),
  };

  const PAGE_404: Page = {
    url: "/404",
    title: t("Pages.page_404.title", { defaultValue: `Pagina non trovata` }),
  };

  const PAGE_500: Page = {
    url: "/500",
    title: t("Pages.page_500.title", { defaultValue: `Error` }),
  };

  const COOKIE_POLICY: Page = {
    url: "/cookie-policy",
    title: t("Pages.cookiePolicy.title", { defaultValue: `Cookie` }),
  };

  const HOME: Page = {
    url: "/",
    title: t("Pages.home.title", { defaultValue: `Home` }),
    description: t("Pages.home.description", {
      defaultValue: `Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
    }),
  };

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    url: "/recinti/come-preparare-il-fondo",
    title: t("Pages.recintiComePreparareIlFondo.title", {
      defaultValue: `Come preparare il fondo`,
    }),
  };

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    url: "/tondini/come-preparare-il-fondo",
    title: t("Pages.tondiniComePreparareIlFondo.title", {
      defaultValue: `Come preparare il fondo`,
    }),
  };

  const GIOSTRE_IPPOWALKER: Page = {
    url: "/giostre/ippowalker",
    title: t("Pages.giostreIppowalker.title", {
      defaultValue: `Giostra Ippowalker`,
    }),
    description: t("Pages.giostreIppowalker.description", {
      defaultValue: `Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
    }),
  };

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    url: "/giostre/ippowalker/istruzioni-montaggio",
    title: t("Pages.giostreIppowalkerIstruzioniMontaggio.title", {
      defaultValue: `Istruzioni di montaggio`,
    }),
  };

  const GIOSTRE_TECNOEXERCISER: Page = {
    url: "/giostre/tecnoexerciser",
    title: t("Pages.giostreTecnoexerciser.title", {
      defaultValue: `Giostra Tecnoexerciser`,
    }),
    description: t("Pages.giostreTecnoexerciser.description", {
      defaultValue: `Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
    }),
  };

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    url: "/giostre/tecnoexerciser/istruzioni-montaggio",
    title: t("Pages.giostreTecnoexerciserIstruzioniMontaggio.title", {
      defaultValue: `Istruzioni di montaggio`,
    }),
  };

  const PRODUCTS = { OSTACOLI, RECINTI, TONDINI, GIOSTRE, DRESSAGE };

  const NAVIGATION = { ...PRODUCTS, CONTATTI };

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
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
