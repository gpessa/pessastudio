import { Trans } from "@lingui/macro"
import { Accessori } from "components"
import React from "react"
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "utils/constants"

const IppowalkerAccessori = () => {
  const ACCESSORI = {
    accessories: [
      {
        name: <Trans>Chiusura a terra</Trans>,
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
        name: <Trans>Alveolo sulla pesta</Trans>,
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
        name: <Trans>Rete antivento</Trans>,
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
