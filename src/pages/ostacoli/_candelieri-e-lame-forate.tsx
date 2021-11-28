import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { Product, Title } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { MATERIALS } from "utils/constants"

const CandelieriLameForate = () => {
  const PRODUCTS = [
    {
      name: t`Candeliere 1,7 mt. con piede in PVC`,
      description: (
        <Trans>
          I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco, muniti di 4 piedi,
          rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento l’incolumità vostra e dei vostri
          cavalli.
        </Trans>
      ),
      images: [
        { md: 6, src: require("assets/products/ostacoli/candeliere-pvc-03.png").default },
        { md: 6, src: require("assets/products/ostacoli/candeliere-pvc-02.png").default },
        { md: 6, src: require("assets/products/ostacoli/candeliere-pvc-01.png").default },
      ],
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
      price: 80,
    },
    {
      name: t`Lama DE da 50/150 cm.`,
      materials: [MATERIALS.ACCIAIO_ZINCATO],
      description: (
        <Trans>
          Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse
          lunghezze.
        </Trans>
      ),
      images: [
        { md: 6, src: require("assets/products/ostacoli/lama-de-02.png").default },
        { md: 6, src: require("assets/products/ostacoli/lama-de-01.png").default },
        { md: 6, src: require("assets/products/ostacoli/lama-de-03.png").default },
      ],
      length: 500,
      thickness: 2,
      width: 65,
      price: [
        { price: 8.5, note: <Trans>Lama 50 cm.</Trans> },
        { price: 15.5, note: <Trans>Lama 150 cm.</Trans> },
      ],
    },
  ]

  return (
    <>
      <Title sx={{ mb: PRODUCT_GUTTER }} title={<Trans>Candelieri e lame forate</Trans>} />
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`candelieri_lame_forate_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CandelieriLameForate
