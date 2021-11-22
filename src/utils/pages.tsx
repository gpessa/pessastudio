import { t } from "@lingui/macro"

export type Page = {
  url: string
  title: string
  description?: string
}

const OSTACOLI: Page = {
  url: "/ostacoli/",
  title: t({ id: "/ostacoli/:title", message: `Ostacoli` }),
  description: t({
    id: "/ostacoli/:description",
    message:
      "Prodotti professionali, sono lo strumento di lavoro indispensabile in un centro ippico o un maneggio. Progettati e costruiti per durare nel tempo senza alcuna manutenzione",
  }),
}

const RECINTI: Page = {
  url: "/recinti/",
  title: t({ id: "/recinti/:title", message: `Recinti` }),
  description: t({
    id: "/recinti/:description",
    message:
      "Un recinto da cavalli adatto a durare nel tempo anche in presenza delle più avverse condizioni meteorologiche",
  }),
}

const TONDINI: Page = {
  url: "/tondini/",
  title: t({ id: "/tondini/:title", message: `Tondini` }),
  description: t({
    id: "/tondini/:description",
    message: "Tondini coperti per addestrate puledri in libertà",
  }),
}

const GIOSTRE: Page = {
  url: "/giostre/",
  title: t({ id: "/giostre/:title", message: `Giostre` }),
  description: t({
    id: "/giostre/:description",
    message: "Scopri le nostre giostre per cavalli, lo strumento ideale di lavoro per allenare il vostro cavallo",
  }),
}

const DRESSAGE: Page = {
  url: "/dressage/",
  title: t({ id: "/dressage/:title", message: `Dressage` }),
  description: t({
    id: "/dressage/:description",
    message: "Rettangoli / Campi professionali da dressage per tutte le esigenze",
  }),
}

const CONTATTI: Page = {
  url: "/contatti/",
  title: t({ id: "/contatti/:title", message: `Contatti` }),
  description: t({
    id: "/contatti/:description",
    message:
      "Contattaci per un preventivo per ostacoli, recinti, tondini coperti, giostre, rettangoli da dressage e attrezzature per cavalli",
  }),
}

const PAGE_404: Page = {
  title: t({ id: "/404/:title", message: `Pagina non trovata` }),
  url: "/404/",
}

const COOKIE_POLICY: Page = {
  title: t({ id: "/cookie-policy/:title", message: `Cookie` }),
  url: "/cookie-policy/",
}

const HOME: Page = {
  title: t({ id: "/:title", message: `Home` }),
  url: "/",
  description: t({
    id: "/:description",
    message: `Contatta Pessastudio per preventivi di Giostre, ostacoli, tondini e attrezzature per cavalli`,
  }),
}

const RECINTI_COME_PREPARARE_IL_FONDO: Page = {
  title: t({
    id: "/recinti/come-preparare-il-fondo/:title",
    message: "Come preparare il fondo",
  }),
  url: "/recinti/come-preparare-il-fondo/",
}

const TONDINI_COME_PREPARARE_IL_FONDO: Page = {
  title: t({
    id: "/tondini/come-preparare-il-fondo/:title",
    message: `Come preparare il fondo`,
  }),
  url: "/tondini/come-preparare-il-fondo/",
}

const GIOSTRE_IPPOWALKER: Page = {
  title: t({ id: "/giostre/ippowalker/:title", message: `Ippowalker` }),
  url: "/giostre/ippowalker/",
  description: t({
    id: "/giostre/ippowalker/:description",
    message: `Scopri la nostra giostra IPPOWALKER, lo strumento economico adatto ad allenare il tuo cavallo o il tuo puledro`,
  }),
}

const GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO: Page = {
  title: t({
    id: "/giostre/ippowalker/istruzioni-montaggio/:title",
    message: `Istruzioni di montaggio`,
  }),
  url: "/giostre/ippowalker/istruzioni-montaggio/",
}

const GIOSTRE_TECNOEXERCISER: Page = {
  title: t({ id: "/giostre/tecnoexerciser/:title", message: "Tecnoexerciser" }),
  url: "/giostre/tecnoexerciser/",
  description: t({
    id: "/giostre/tecnoexerciser/:description",
    message: `Scopri la nostra giostra TECNOEXERCISER, lo strumento professionale adatto ad allenare il tuo cavallo o il tuo puledro`,
  }),
}

const GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO: Page = {
  title: t({
    id: "/giostre/tecnoexerciser/istruzioni-montaggio/:title",
    message: `Istruzioni di montaggio`,
  }),
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
