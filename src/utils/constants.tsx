import { t, Trans } from "@lingui/macro"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import { IconButton, Typography } from "@mui/material"
import { Ul } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"

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
    message: `Ostacoli progettati e costruiti per durare nel tempo senza alcuna manutenzione`,
  }),
}

const RECINTI: Page = {
  url: "/recinti/",
  title: t({ id: "/recinti/:title", message: `Recinti` }),
  description: t({
    id: "/recinti/:description",
    message: `Un recinto da cavalli adatto a durare nel tempo anche in presenza delle più avverse condizioni meteorologiche`,
  }),
}

const TONDINI: Page = {
  url: "/tondini/",
  title: t({ id: "/tondini/:title", message: `Tondini` }),
  description: t({
    id: "/tondini/:description",
    message: `Tondini coperti per addestrate puledri in libertà`,
  }),
}

const GIOSTRE: Page = {
  url: "/giostre/",
  title: t({ id: "/giostre/:title", message: `Giostre` }),
  description: t({
    id: "/giostre/:description",
    message: `Scopri la nostra giostra per cavalli, lo strumento ideale di lavoro  per allenare il vostro cavallo`,
  }),
}

const DRESSAGE: Page = {
  url: "/dressage/",
  title: t({ id: "/dressage/:title", message: `Dressage` }),
  description: t({
    id: "/dressage/:description",
    message: `Rettangoli professionali da dressage per tutte le esigenze`,
  }),
}

const CONTATTI: Page = {
  url: "/contatti/",
  title: t({ id: "/contatti/:title", message: `Contatti` }),
  description: t({
    id: "/contatti/:description",
    message: `Contatta Pessastudio per un preventivo per giostre, ostacoli, tondini e attrezzature per cavalli`,
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

export enum Colors {
  YELLOW = "#FEB00D",
  GREEN = "#316330",
  WHITE = "#FFFFFF",
  BLU = "#264FD0",
  RED = "#F41701",
}

export const MATERIALS = {
  ACCIAIO_ZINCATO: <Trans>Acciaio zincato</Trans>,
  POLIPROPILENE: <Trans>Polipropilene</Trans>,
  POLIETILENE: <Trans>Polietilene</Trans>,
  PLASTICA: <Trans>Plastica</Trans>,
  TECNOPOLIMERO: <Trans>Tecnopolimero</Trans>,
}

export const GIOSTRE_ATTRIBUTES = {
  name: undefined,
  engine: <Trans>Motore</Trans>,
  diameter: <Trans>Diametro</Trans>,
  control_panel: <Trans>Quadro di comando</Trans>,
  irrigation: <Trans>Irrigazione</Trans>,
  doors: <Trans>Porte</Trans>,
  fence_type: <Trans>Recinzione</Trans>,
  cover: <Trans>Copertura</Trans>,
  extra: (
    <Trans>
      <Typography>Accessori</Typography>
      <small>(Ordinabili separatamente)</small>
    </Trans>
  ),
}

export const GIOSTRE_DIAMETER_TECNOEXERCIZE = (
  <Trans>
    <Typography>E' possibile ordinare una giostra nei diametri:</Typography>
    <Ul>
      <li>
        12,0 mt. <small>(3 cavalli)</small>
      </li>
      <li>
        14,4 mt. <small>(4 cavalli)</small>
      </li>
      <li>
        16,0 mt. <small>(5 cavalli)</small>
      </li>
      <li>
        17,6 mt. <small>(6 cavalli)</small>
      </li>
      <li>
        19,2 mt. <small>(8 cavalli)</small>
      </li>
    </Ul>
  </Trans>
)

export const GIOSTRE_DIAMETER_IPPOWALKER = (
  <Trans>
    <Typography>È possibile ordinare una giostra nei diametri:</Typography>
    <Ul>
      <li>
        12,0 mt. <small>(4 cavalli)</small>
      </li>
      <li>
        14,2 mt. <small>(6 cavalli)</small>
      </li>
    </Ul>
  </Trans>
)

export const GIOSTRE_DOORS = (
  <Trans>
    <Typography>Porte di separazione.</Typography>
    <small>(Elettrificatione 200-240 Volt monofase)</small>
  </Trans>
)

export const GIOSTRE_ENGINE_75 = <Trans>Potenza motore 0.75 kw e cadenza regolabile fra 60 e 220 metri al minuto</Trans>

export const GIOSTRE_ENGINE_37 = <Trans>Potenza motore 0.37 kw e cadenza regolabile fra 60 e 220 metri al minuto</Trans>

export const GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE = (
  <Trans>Quadro di comando con programma manuale, periodico o automatico</Trans>
)

export const GIOSTRE_CONTROL_PANEL_IPPOWALKER = <Trans>Quadro di comando con programma manuale, periodico</Trans>

export const IRRIGATION = (
  <Trans>
    Irrigazione del percorso controllabile dal quadro di comando. Aiuta a tenere la polvere sotto controllo e un terreno
    sempre perfetto
  </Trans>
)

export const GIOSTRE_EXTRA_SMALL = (
  <Ul>
    <li>
      <Trans id={"Chiusura a terra"} />
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
    </li>
    <li>
      <Trans id={"Alveolo sulla pesta"} />
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
    </li>
  </Ul>
)

export const GIOSTRE_EXTRA_BIG = (
  <Ul>
    <li>
      <Trans id={"Chiusura a terra"} />
      <IconButton href="#chiusura_a_terra" size="small" color="primary">
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
    </li>
    <li>
      <Trans id={"Alveolo sulla pesta"} />
      <IconButton href="#alveolo_sulla_pesta" size="small" color="primary">
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
    </li>
    <li>
      <Trans id={"Rete antivento"} />
      <IconButton href="#rete_antivento" size="small" color="primary">
        <RemoveRedEyeOutlinedIcon />
      </IconButton>
    </li>
  </Ul>
)

export const GIOSTRA_FENCE = (thickness: number, name: string) => (
  <Trans values={{ thickness, name }}>
    <Typography>Corridoio {name} composto da pannelli laterali in compensato marino</Typography>
    <small>(spessore {thickness} mm.)</small>
  </Trans>
)

export const GIOSTRA_FENCE_TYPE_TECNOFENCE = (
  <Trans>
    <Typography>Corridoio composto da recinzione TECNOFENCE</Typography>
    <small>(corridoio interno 1,40 mt., esterno 1,60 mt.)</small>
  </Trans>
)

export const GIOSTRA_COPERTURA_PVC_DESCRIZIONE = (
  <Trans>
    <Typography>
      La <strong>copertura in PVC</strong> è composta da una struttura in acciaio zincato la quale sorregge un telo in
      tessuto di poliestere spalmato di colore verde o crema e in base alle esigenze del cliente anche in altre
      colorazioni.
    </Typography>
    <Typography paragraph>
      Questa copertura è in grado di sorreggere un carico neve pari a 80 kg/mq * e una forza vento pari a 110 Km/h.
    </Typography>
  </Trans>
)
export const GIOSTRE_COPERTURA_NOTE = (
  <Typography variant="small" component="div" mt={PRODUCT_GUTTER}>
    <Trans>
      * In presenza di nevicate che superino la portata consentita, sarà opportuno intervenire rimuovendo l’eccesso di
      neve e cospargendo di sale la copertura prima di introdurre i cavalli.
    </Trans>
  </Typography>
)

export const GIOSTRE_COPERTURA_PVC = <Trans>Copertura in PVC</Trans>

export const GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE = (
  <Trans>
    Sono la soluzione ideale per impedire alla sabbia di uscire dal percorso consentendo di ridurre il materiale
    disperso.
  </Trans>
)

export const GIOSTRA_ALVEOLO_DESCRIZIONE = (
  <Trans>
    L'aveolo è la soluzione ottimale mantenere un fondo sempre perfetto in ogni condizione, permette di evitare buche o
    avvallamenti riducendo i costi di manutenzione.
  </Trans>
)

export const GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE = (
  <Trans>
    La rete antivento protegge l'interno della giostra da correnti d'aria inoltre aiuta il cavallo a rimanere
    concentrato sul percorso e lo rende più tranquillo.
  </Trans>
)

export const GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE = (
  <Trans>
    <Typography textAlign="justify">
      Il corridoio{" "}
      <Typography component="strong" fontWeight="bold">
        TECNOFENCE
      </Typography>{" "}
      è una soluzione semplice ed economica che ti permetterà di avere una giostra completa, sicura e durevole ad un
      costo competitivo.
    </Typography>
    <Typography textAlign="justify">
      L'altezza della recinzione esterna è di 1,60 mt., a differenza del corridoio interno alto 1,40 mt.
    </Typography>
    <Typography textAlign="justify">
      L'innovativo materiale (PPO) che non richiede manutenzione ti consentirà di abbattere i costi di manutenzione che
      affliggono le classiche recinzioni in legno.
    </Typography>
    <Typography textAlign="justify" paragraph>
      Uno dei vantaggi è inoltre quello di poter installare la giostra in piena autonomia.
    </Typography>
  </Trans>
)

export const GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO = (thickness: number, name: string) => (
  <Trans>
    <Typography textAlign="justify">
      Il corridoio <strong>{name}</strong> in compensato marino è realizzato con un multistrato{" "}
      <small>({thickness} mm. di spessore)</small> antigraffio, antiurto, resistente allo sporco e idrorepellente.
      L'obbiettivo di questa soluzione è quello di fornire un elevato grado di sicurezza forzando il cavallo a
      concentrarsi sul percorso durante l'allenamento.
    </Typography>
  </Trans>
)
