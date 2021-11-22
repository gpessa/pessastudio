import { t, Trans } from "@lingui/macro"
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined"
import { IconButton, Typography } from "@mui/material"
import { Ul } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"

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
