import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { Product, Title } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { MATERIALS } from "utils/constants"

const Segnaletica: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Bandierine`,
      images: [{ src: require("assets/products/ostacoli/bandierine.jpg").default }],
      materials: [MATERIALS.PLASTICA],
      price: 2.1,
    },
    {
      name: t`Numero per campo ostacoli professional`,
      images: [{ src: require("assets/products/ostacoli/numero-professional.png").default }],
      materials: [MATERIALS.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 26,
    },
    {
      name: t`Numero per campo ostacoli light`,
      images: [{ src: require("assets/products/ostacoli/numero-light.png").default }],
      materials: [MATERIALS.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ]

  return (
    <>
      <Title title={<Trans>Segnaletica</Trans>} />
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
