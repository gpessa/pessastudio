import { t, Trans } from "@lingui/macro"
import React from "react"
import { Accessori } from "components"
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "utils/constants"

const IppowalkerAccessori = () => {
  const ACCESSORI = {
    intro: (
      <Trans id="Alcuni accessori possono essere acquistati separatamente e permettono di migliorare ulteriormente le condizioni d'uso della vostra giostra." />
    ),
    accessories: [
      {
        name: t`Chiusura a terra`,
        description: GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
        images: [
          {
            src: require("assets/products/giostre/ippowalker/accessori/chiusura-01.jpg").default,
            top: "62%",
            left: "42%",
            md: 3,
          },
          {
            src: require("assets/products/giostre/ippowalker/accessori/chiusura-02.jpg").default,
            top: "54%",
            left: "22%",
            md: 4,
          },
        ],
      },
      {
        name: t`Alveolo sulla pesta`,
        description: GIOSTRA_ALVEOLO_DESCRIZIONE,
        images: [
          {
            src: require("assets/products/giostre/accessories/alveolo-02.jpg").default,
            md: 3,
          },
          {
            src: require("assets/products/giostre/accessories/alveolo-01.jpg").default,
            md: 4,
          },
        ],
      },
      {
        name: t`Rete antivento`,
        description: GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
        images: [
          {
            md: 3,
            top: "25%",
            left: "45%",
            src: require("assets/products/giostre/accessories/rete-01.jpg").default,
          },
          {
            md: 4,
            top: "22%",
            left: "45%",
            src: require("assets/products/giostre/accessories/rete-02.jpg").default,
          },
        ],
      },
    ],
  }

  return <Accessori {...ACCESSORI} />
}

export default IppowalkerAccessori
