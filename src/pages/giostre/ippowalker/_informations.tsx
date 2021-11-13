import { Trans } from "@lingui/macro"
import React from "react"
import { Picture } from "src/components/ModalGallery"
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_FENCE,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
  GIOSTRE_CONTROL_PANEL_IPPOWALKER,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DIAMETER_IPPOWALKER,
  GIOSTRE_DOORS,
  GIOSTRE_ENGINE_37,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
} from "src/constants"

export const IMAGES: Picture[] = [
  {
    src: require("src/static/products/giostre/ippowalker/gallery/ingresso.jpg").default,
    caption: <Trans id="Entrata" />,
  },
  {
    src: require("src/static/products/giostre/ippowalker/gallery/giostra-01.jpg").default,
    caption: <Trans id="Giostra Ippowalker" />,
  },
  {
    src: require("src/static/products/giostre/ippowalker/gallery/porte-elettrificate.jpg").default,
    caption: <Trans id="Porte elettrificate" />,
  },
]

export const DIMENSIONS = [
  { horses: 4, file: require(`src/static/products/giostre/ippowalker/pdf/giostra-ippowalker-4.pdf`).default },
  { horses: 6, file: require(`src/static/products/giostre/ippowalker/pdf/giostra-ippowalker-6.pdf`).default },
].map(({ horses, file }) => ({
  label: <Trans id={`Giostra ${horses} cavalli`} />,
  file,
}))

const GIOSTRE_COOMON = {
  engine: GIOSTRE_ENGINE_37,
  control_panel: GIOSTRE_CONTROL_PANEL_IPPOWALKER,
  irrigation: false,
  diameter: GIOSTRE_DIAMETER_IPPOWALKER,
  doors: GIOSTRE_DOORS,
}

export const PRODUCTS = [
  {
    ...GIOSTRE_COOMON,
    name: <Trans id={`Giostra base`} />,
    fence_type: false,
    cover: false,
    extra: false,
  },
  {
    ...GIOSTRE_COOMON,
    name: (
      <Trans>
        Giostra <br />
        corridoio TECNOFENCE
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE_TYPE_TECNOFENCE,
    cover: false,
    extra: GIOSTRE_EXTRA_SMALL,
  },
  {
    ...GIOSTRE_COOMON,
    name: (
      <Trans>
        Giostra <br />
        corridoio EASY
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE(15, "EASY"),
    cover: false,
    extra: GIOSTRE_EXTRA_SMALL,
  },
  {
    ...GIOSTRE_COOMON,
    name: (
      <Trans>
        Giostra <br />
        corridoio EASY
        <br />
        copertura PVC
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE(15, "EASY"),
    cover: <Trans id={GIOSTRE_COPERTURA_PVC} />,
    extra: GIOSTRE_EXTRA_BIG,
  },
]

export const ACCESSORI = {
  intro: (
    <Trans id="Alcuni accessori possono essere acquistati separatamente e permettono di migliorare ulteriormente le condizioni d'uso." />
  ),
  accessories: [
    {
      name: <Trans id="Chiusura a terra" />,
      description: <Trans id={GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE} />,
      images: [
        {
          src: require("src/static/products/giostre/ippowalker/accessori/chiusura-01.jpg").default,
          top: "62%",
          left: "42%",
          md: 3,
        },
        {
          src: require("src/static/products/giostre/ippowalker/accessori/chiusura-02.jpg").default,
          top: "54%",
          left: "22%",
          md: 4,
        },
      ],
    },
    {
      name: <Trans id="Alveolo sulla pesta" />,
      description: <Trans id={GIOSTRA_ALVEOLO_DESCRIZIONE} />,
      images: [
        {
          src: require("src/static/products/giostre/accessories/alveolo-02.jpg").default,
          md: 3,
        },
        {
          src: require("src/static/products/giostre/accessories/alveolo-01.jpg").default,
          md: 4,
        },
      ],
    },
    {
      name: <Trans id="Rete antivento" />,
      description: <Trans id={GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE} />,
      images: [
        {
          md: 3,
          top: "25%",
          left: "45%",
          src: require("src/static/products/giostre/accessories/rete-01.jpg").default,
        },
        {
          md: 4,
          top: "22%",
          left: "45%",
          src: require("src/static/products/giostre/accessories/rete-02.jpg").default,
        },
      ],
    },
  ],
}

export const MANUALI_LOCALIZZATI = {
  it: [
    {
      label: <Trans id="Manuale quadro di controllo" />,
      file: require("src/static//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf"),
    },
    {
      label: <Trans id="Manuale collegamento elettrico" />,
      file: require("src/static/products/giostre/pdf/giostra-collegamento-elettrico.pdf").default,
    },
  ],
  fr: [
    {
      label: <Trans id="Manuale quadro di controllo" />,
      file: require("src/static//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf"),
    },
  ],
}
