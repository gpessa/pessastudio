import { Product, Title } from "@components"
import { MATERIALS } from "@constants"
import { t } from "@lingui/macro"
import { Grid } from "@mui/material"
import { PRODUCT_GUTTER } from "@theme"
import { withPrefix } from "gatsby"
import React from "react"

const Segnaletica: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Bandierine`,
      images: [{ src: withPrefix("/products/ostacoli/bandierine.jpg") }],
      materials: [MATERIALS.PLASTICA],
      price: 3.5,
    },
    {
      name: t`Numero per campo ostacoli professional`,
      images: [{ src: withPrefix("/products/ostacoli/numero-professional.png") }],
      materials: [MATERIALS.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 20,
    },
    {
      name: t`Numero per campo ostacoli light`,
      images: [{ src: withPrefix("/products/ostacoli/numero-light.png") }],
      materials: [MATERIALS.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ]

  return (
    <>
      <Title title={t`Segnaletica`} />
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid xs={12} md={6} item key={`segnaletica_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Segnaletica
