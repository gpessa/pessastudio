import { t } from "@lingui/macro"

export type Page = {
  url: string
  title: string
  description?: string
}

const usePages = () => {
  const OSTACOLI: Page = {
    url: "/ostacoli/",
    title: t`Ostacoli`,
    description: t({
      id: "/ostacoli/:description",
      message:
        "Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione",
    }),
  }

  const RECINTI: Page = {
    url: "/recinti/",
    title: t`Recinti`,
    description: t({
      id: "/recinti/:description",
      message:
        "Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche",
    }),
  }

  const TONDINI: Page = {
    url: "/tondini/",
    title: t`Tondini`,
    description: t({
      id: "/tondini/:description",
      message: "Tondini coperti per addestrate puledri in libertà",
    }),
  }

  const GIOSTRE: Page = {
    url: "/giostre/",
    title: t`Giostre`,
    description: t({
      id: "/giostre/:description",
      message: "Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo",
    }),
  }

  const DRESSAGE: Page = {
    url: "/dressage/",
    title: t`Dressage`,
    description: t({
      id: "/dressage/:description",
      message: "Rettangoli / Campi professionali da dressage per tutte le esigenze",
    }),
  }

  const CONTATTI: Page = {
    url: "/contatti/",
    title: t`Contatti`,
    description: t({
      id: "/contatti/:description",
      message:
        "Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli",
    }),
  }

  const PAGE_404: Page = {
    title: t`Pagina non trovata`,
    url: "/404/",
  }

  const COOKIE_POLICY: Page = {
    title: t`Cookie`,
    url: "/cookie-policy/",
  }

  const HOME: Page = {
    title: t`Home`,
    url: "/",
    description: t({
      id: "/:description",
      message: `Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
    }),
  }

  const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: "/recinti/come-preparare-il-fondo/",
  }

  const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
    title: t`Come preparare il fondo`,
    url: "/tondini/come-preparare-il-fondo/",
  }

  const GIOSTRE_IPPOWALKER: Page = {
    title: t`Giostra Ippowalker`,
    url: "/giostre/ippowalker/",
    description: t({
      id: "/giostre/ippowalker/:description",
      message: `Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
    }),
  }

  const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: "/giostre/ippowalker/istruzioni-montaggio/",
  }

  const GIOSTRE_TECNOEXERCISER: Page = {
    title: t`Giostra Tecnoexerciser`,
    url: "/giostre/tecnoexerciser/",
    description: t({
      id: "/giostre/tecnoexerciser/:description",
      message: `Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
    }),
  }

  const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
    title: t`Istruzioni di montaggio`,
    url: "/giostre/tecnoexerciser/istruzioni-montaggio/",
  }

  const PRODUCTS = {
    OSTACOLI,
    RECINTI,
    TONDINI,
    GIOSTRE,
    DRESSAGE,
  }

  const NAVIGATION = { ...PRODUCTS, CONTATTI }

  const PAGES = {
    ...PRODUCTS,
    ...NAVIGATION,
    PAGE_404,
    COOKIE_POLICY,
    HOME,
    RECINTI_COME_PREPARARE_IL_FONDO,
    TONDINI_COME_PREPARARE_IL_FONDO,
    GIOSTRE_IPPOWALKER,
    GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO,
    GIOSTRE_TECNOEXERCISER,
    GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO,
  }

  return {
    PAGES,
    PRODUCTS,
    NAVIGATION,
  }
}

export default usePages
