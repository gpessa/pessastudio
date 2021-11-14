import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import React from "react"
import { Product, Title } from "src/components"
import { MATERIALS } from "src/constants"
import { PRODUCT_GUTTER } from "src/theme"

const PRODUCTS = [
  {
    name: <Trans id="Candeliere 1,7 mt. con piede in PVC" />,
    description: (
      <Trans id="I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco, muniti di 4 piedi, rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli." />
    ),
    images: [
      { md: 6, src: require("src/assets/products/ostacoli/candeliere-pvc-03.png").default },
      { md: 6, src: require("src/assets/products/ostacoli/candeliere-pvc-02.png").default },
      { md: 6, src: require("src/assets/products/ostacoli/candeliere-pvc-01.png").default },
    ],
    width: 720,
    depth: 720,
    height: 1700,
    weight: 7,
    price: 80,
  },
  {
    name: <Trans id="Lama DE da 50/150 cm." />,
    materials: [MATERIALS.ACCIAIO_ZINCATO],
    description: (
      <Trans id="Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi le lame forate in due diverse lunghezze." />
    ),
    images: [
      { md: 6, src: require("src/assets/products/ostacoli/lama-de-02.png").default },
      { md: 6, src: require("src/assets/products/ostacoli/lama-de-01.png").default },
      { md: 6, src: require("src/assets/products/ostacoli/lama-de-03.png").default },
    ],
    length: 500,
    thickness: 2,
    width: 65,
    price: [
      { price: 8.5, note: <Trans id="Lama 50 cm." /> },
      { price: 15.5, note: <Trans id="Lama 150 cm." /> },
    ],
  },
]

const CandelieriLameForate = () => (
  <>
    <Title sx={{ mb: PRODUCT_GUTTER }} title={t`Candelieri e lame forate`} />
    <Grid container spacing={PRODUCT_GUTTER}>
      {PRODUCTS.map((product, index) => (
        <Grid item xs={12} key={`candelieri_lame_forate_${index}`}>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </>
)

export default CandelieriLameForate
