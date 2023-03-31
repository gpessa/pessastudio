import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { Product, Title } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { Colors } from "utils/constants"

const Cubi: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Cubi mini`,
      images: [
        { src: require("assets/products/ostacoli/cubi-mini-01.png").default },
        { src: require("assets/products/ostacoli/cubi-mini-02.png").default },
        { src: require("assets/products/ostacoli/cubi-mini-03.png").default },
      ],
      width: 350,
      length: 370,
      height: 570,
      weight: 3,
      price: 38.5,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: t`Cubi maxi`,
      images: [
        { src: require("assets/products/ostacoli/cubi-maxi-01.png").default },
        { src: require("assets/products/ostacoli/cubi-maxi-02.png").default },
        { src: require("assets/products/ostacoli/cubi-maxi-03.png").default },
      ],
      width: 370,
      length: 570,
      height: 700,
      weight: 5,
      price: 63.5,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
  ]

  return (
    <>
      <Title
        sx={{ mb: PRODUCT_GUTTER }}
        title={<Trans>Cubi per campo ostacoli</Trans>}
        text={
          <Trans>
            <Typography>
              Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come riempitivi sotto le barriere, sia per
              realizzare sequenze di piccoli salti.
            </Typography>
            <Typography>
              Ottimi per indicare le traiettorie quando si predispongono esercizi per i principianti ma anche per
              preparare una successione di cavalletti quando si addestrano cavalli.
            </Typography>
            <Typography>
              Sovrapponibili, costruiti con plastica resistente agli agenti atmosferici, nel caso di impatto accidentale
              garantiscono l'incolumità di cavalli e cavalieri.
            </Typography>
          </Trans>
        }
      />

      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`cubi_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Cubi
