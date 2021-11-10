import { Product, Title } from "@components"
import { MATERIALS } from "@constants"
import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { PRODUCT_GUTTER } from "@theme"
import React from "react"
import { withPrefix } from "gatsby-link"

const PRODUCTS = [
  {
    name: <Trans id="Candeliere 1,7 mt. con piede in PVC" />,
    description: (
      <Trans id="I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco, muniti di 4 piedi, rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli." />
    ),
    images: [
      { md: 6, src: withPrefix("/products/ostacoli/candeliere-pvc-03.png") },
      { md: 6, src: withPrefix("/products/ostacoli/candeliere-pvc-02.png") },
      { md: 6, src: withPrefix("/products/ostacoli/candeliere-pvc-01.png") },
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
      { md: 6, src: withPrefix("/products/ostacoli/lama-de-02.png") },
      { md: 6, src: withPrefix("/products/ostacoli/lama-de-01.png") },
      { md: 6, src: withPrefix("/products/ostacoli/lama-de-03.png") },
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
        <Grid item xs={12}>
          <Product key={index} {...product} />
        </Grid>
      ))}
    </Grid>
  </>
)

export default CandelieriLameForate
