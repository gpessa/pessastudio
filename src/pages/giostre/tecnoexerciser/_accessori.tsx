import { t, Trans } from "@lingui/macro"
import React from "react"
import { Accessori } from "src/components"
import {
  GIOSTRA_ALVEOLO_DESCRIZIONE,
  GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE,
  GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE,
} from "src/constants"

const TecnoexerciserAccessori = () => {
  const ACCESSORI = {
    intro: (
      <Trans>
        Alcuni accessori possono essere acquistati separatamente e permettono di migliorare ulteriormente le condizioni
        d'uso.
      </Trans>
    ),
    accessories: [
      {
        name: t`Chiusura a terra`,
        description: <Trans id={GIOSTRA_TONDINO_CHIUSURA_A_TERRA_DESCRIZIONE} />,
        images: [
          {
            src: require("src/assets/products/giostre/tecnoexerciser/accessori/chiusura-01.jpg").default,
            top: "25%",
            left: "50%",
            md: 3,
          },
          {
            src: require("src/assets/products/giostre/tecnoexerciser/accessori/chiusura-02.jpg").default,
            top: "50%",
            left: "50%",
            md: 4,
          },
        ],
      },
      {
        name: t`Alveolo sulla pesta`,
        description: <Trans id={GIOSTRA_ALVEOLO_DESCRIZIONE} />,
        images: [
          {
            src: require("src/assets/products/giostre/accessories/alveolo-02.jpg").default,
            md: 3,
          },
          {
            src: require("src/assets/products/giostre/accessories/alveolo-01.jpg").default,
            md: 4,
          },
        ],
      },
      {
        name: t`Rete antivento`,
        description: <Trans id={GIOSTRA_RETE_ANTIVENTO_DESCRIZIONE} />,
        images: [
          {
            md: 3,
            top: "25%",
            left: "45%",
            src: require("src/assets/products/giostre/accessories/rete-01.jpg").default,
          },
          {
            md: 4,
            top: "22%",
            left: "45%",
            src: require("src/assets/products/giostre/accessories/rete-02.jpg").default,
          },
        ],
      },
    ],
  }

  return <Accessori {...ACCESSORI} />
}

export default TecnoexerciserAccessori
