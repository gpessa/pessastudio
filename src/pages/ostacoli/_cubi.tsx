import { Product, Title } from "src/components"
import { Colors } from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby"
import React from "react"

const PRODUCTS = [
  {
    name: <Trans>Cubi mini</Trans>,
    images: [
      { src: withPrefix("/products/ostacoli/cubi-mini-01.png") },
      { src: withPrefix("/products/ostacoli/cubi-mini-02.png") },
      { src: withPrefix("/products/ostacoli/cubi-mini-03.png") },
    ],
    width: 350,
    length: 370,
    height: 570,
    weight: 3,
    price: 36,
    colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
  },
  {
    name: <Trans>Cubi maxi</Trans>,
    images: [
      { src: withPrefix("/products/ostacoli/cubi-maxi-01.png") },
      { src: withPrefix("/products/ostacoli/cubi-maxi-02.png") },
      { src: withPrefix("/products/ostacoli/cubi-maxi-03.png") },
    ],
    width: 370,
    length: 570,
    height: 700,
    weight: 5,
    price: 63,
    colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
  },
]

const Cubi: React.FC = () => (
  <>
    <Title
      sx={{ mb: PRODUCT_GUTTER }}
      title={t`Cubi`}
      text={
        <Trans>
          <Typography>
            Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come riempitivi sotto le barriere, sia per
            realizzare sequenze di piccoli salti.
          </Typography>
          <Typography>
            Ottimi per indicare le traiettorie quando si predispongono esercizi per i principianti, ma anche per
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

export default Cubi
