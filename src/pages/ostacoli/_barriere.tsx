import { t, Trans } from "@lingui/macro"
import { Typography } from "@mui/material"
import React from "react"
import { Product, Title } from "src/components"
import { Colors } from "src/constants"
import { PRODUCT_GUTTER } from "src/theme"

const PRODUCT = {
  description: <Trans>Costruisci la tua barriera personalizzata scegliendo tra i colori a disposizione</Trans>,
  name: t`Barriera 3 mt.`,
  images: [
    { src: require("src/assets/products/ostacoli/barriere-01.png").default },
    { src: require("src/assets/products/ostacoli/barriere-02.png").default },
    { src: require("src/assets/products/ostacoli/barriere-03.png").default },
  ],
  price: 38,
  weight: 9.75,
  length: 2990,
  diameter: 95,
  colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
}

const Barriere = () => (
  <>
    <Title
      sx={{ mb: PRODUCT_GUTTER }}
      title={t`Barriere`}
      text={
        <Trans>
          <Typography>
            Sono le componenti dell'ostacolo più stressate, poiché, come i candelieri e i pilieri, sono perennemente
            sottoposte all'azione aggressiva degli agenti atmosferici (caldo, freddo, sole, pioggia). A questi si
            aggiungono anche gli urti degli zoccoli dei cavalli, frequenti ribaltamenti e le manipolazioni necessarie
            per aggiustarne le altezze.
          </Typography>
          <Typography>
            Le barriere di abete, comunemente usate, richiedono una continua manutenzione perché si piegano,
            scoloriscono nel tempo e si rompono frequentemente.
          </Typography>
          <Typography>
            Le barriere sintetiche di Pessastudio, invece, hanno lo stesso peso di quelle in abete, ma perdono il loro
            colore solamente dopo anni, non si scrostano e, solo raramente, si rompono sotto l'azione di un carico
            eccessivo.
          </Typography>
        </Trans>
      }
    />
    <Product {...PRODUCT} />
  </>
)

export default Barriere
