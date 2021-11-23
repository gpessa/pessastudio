import { t, Trans } from "@lingui/macro"
import React from "react"

export type Page = {
  url: string
  title: JSX.Element
  description?: string
}

const OSTACOLI: Page = {
  url: "/ostacoli/",
  title: <Trans>Ostacoli</Trans>,
  description: t({
    id: "/ostacoli/:description",
    message:
      "Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione",
  }),
}

const RECINTI: Page = {
  url: "/recinti/",
  title: <Trans>Recinti</Trans>,
  description: t({
    id: "/recinti/:description",
    message:
      "Un recinto da cavalli in PVC. Indistruttibile anche in presenza delle più avverse condizioni meteorologiche",
  }),
}

const TONDINI: Page = {
  url: "/tondini/",
  title: <Trans>Tondini</Trans>,
  description: t({
    id: "/tondini/:description",
    message: "Tondini coperti per addestrate puledri in libertà",
  }),
}

const GIOSTRE: Page = {
  url: "/giostre/",
  title: <Trans>Giostre</Trans>,
  description: t({
    id: "/giostre/:description",
    message: "Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo",
  }),
}

const DRESSAGE: Page = {
  url: "/dressage/",
  title: <Trans>Dressage</Trans>,
  description: t({
    id: "/dressage/:description",
    message: "Rettangoli / Campi professionali da dressage per tutte le esigenze",
  }),
}

const CONTATTI: Page = {
  url: "/contatti/",
  title: <Trans>Contatti</Trans>,
  description: t({
    id: "/contatti/:description",
    message:
      "Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli",
  }),
}

const PAGE_404: Page = {
  title: <Trans>Pagina non trovata</Trans>,
  url: "/404/",
}

const COOKIE_POLICY: Page = {
  title: <Trans>Cookie</Trans>,
  url: "/cookie-policy/",
}

const HOME: Page = {
  title: <Trans>Home</Trans>,
  url: "/",
  description: t({
    id: "/:description",
    message: `Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
  }),
}

const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
  title: <Trans>Come preparare il fondo</Trans>,
  url: "/recinti/come-preparare-il-fondo/",
}

const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
  title: <Trans>Come preparare il fondo</Trans>,
  url: "/tondini/come-preparare-il-fondo/",
}

const GIOSTRE_IPPOWALKER: Page = {
  title: <Trans>Giostra Ippowalker</Trans>,
  url: "/giostre/ippowalker/",
  description: t({
    id: "/giostre/ippowalker/:description",
    message: `Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
  }),
}

const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
  title: <Trans>Istruzioni di montaggio</Trans>,
  url: "/giostre/ippowalker/istruzioni-montaggio/",
}

const GIOSTRE_TECNOEXERCISER: Page = {
  title: <Trans>Giostra Tecnoexerciser</Trans>,
  url: "/giostre/tecnoexerciser/",
  description: t({
    id: "/giostre/tecnoexerciser/:description",
    message: `Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
  }),
}

const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
  title: <Trans>Istruzioni di montaggio</Trans>,
  url: "/giostre/tecnoexerciser/istruzioni-montaggio/",
}

export const PRODUCT_PAGES = {
  OSTACOLI,
  RECINTI,
  TONDINI,
  GIOSTRE,
  DRESSAGE,
}

export const NAVIGATION_PAGES = { ...PRODUCT_PAGES, CONTATTI }

export const PAGES = {
  ...PRODUCT_PAGES,
  ...NAVIGATION_PAGES,
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
