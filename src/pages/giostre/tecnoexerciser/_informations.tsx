import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
  GIOSTRA_FENCE,
  GIOSTRA_FENCE_TYPE_TECNOFENCE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE,
  GIOSTRE_COPERTURA_PVC,
  GIOSTRE_DIAMETER_TECNOEXERCIZE,
  GIOSTRE_DOORS,
  GIOSTRE_ENGINE_75,
  GIOSTRE_EXTRA_BIG,
  GIOSTRE_EXTRA_SMALL,
  IRRIGATION,
} from "src/constants"
import { t, Trans } from "@lingui/macro"
import { withPrefix } from "gatsby"
import React from "react"

export const IMAGES: Picture[] = [
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/giostra-1.jpg").default,
    caption: <Trans id={"Giostra"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/giostra-2.jpg").default,
    caption: <Trans id={"Giostra"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/motore-3.jpg").default,
    caption: <Trans id={"Motore"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/solo-motore.jpg").default,
    caption: <Trans id={"Giostra solo motore"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/tecnofence-1.jpg").default,
    caption: <Trans id={"Giostra con corridoio TECNOFENCE"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/porta-mobile-1.jpg").default,
    caption: <Trans id={"Porta mobile"} />,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/gallery/porta-mobile-2.jpg").default,
    caption: <Trans id={"Porta mobile"} />,
  },
]

export const DIMENSIONS = [
  { sides: 15, size: 12 },
  { sides: 18, size: 14.4 },
  { sides: 20, size: 16 },
  { sides: 22, size: 17.5 },
  { sides: 24, size: 19.2 },
].map(({ sides, size }) => ({
  label: (
    <Trans
      id={`Dimensioni giostra {sides} pannelli {size} mt. e istruzioni preparazione fondo`}
      values={{ sides, size }}
    />
  ),
  file: withPrefix(`/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-${sides}.pdf`),
}))

const GIOSTRE_COOMON = {
  engine: GIOSTRE_ENGINE_75,
  control_panel: GIOSTRE_CONTROL_PANEL_TECNOEXERCIZE,
  irrigation: IRRIGATION,
  diameter: GIOSTRE_DIAMETER_TECNOEXERCIZE,
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
        corridoio EXERCISER
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
    cover: false,
    extra: GIOSTRE_EXTRA_SMALL,
  },
  {
    ...GIOSTRE_COOMON,
    name: (
      <Trans>
        Giostra <br />
        corridoio EXERCISER
        <br />
        copertura PVC
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
    cover: <Trans id={GIOSTRE_COPERTURA_PVC} />,
    extra: GIOSTRE_EXTRA_BIG,
  },
  {
    ...GIOSTRE_COOMON,
    name: (
      <Trans>
        Giostra <br />
        corridoio EXERCISER
        <br />
        copertura Rigida
      </Trans>
    ),
    fence_type: GIOSTRA_FENCE(18, "EXERCISER"),
    cover: t`Copertura rigida con lastre ondulate`,
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
          src: require("src/static/products/giostre/tecnoexerciser/accessori/chiusura-01.jpg").default,
          top: "25%",
          left: "50%",
          md: 3,
        },
        {
          src: require("src/static/products/giostre/tecnoexerciser/accessori/chiusura-02.jpg").default,
          top: "50%",
          left: "50%",
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
