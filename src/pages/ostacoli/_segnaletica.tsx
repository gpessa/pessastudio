import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import { Product, Title } from "@components"
import { Material } from "@constants"
import { Grid } from "@material-ui/core"
import { PRODUCT_GUTTER } from "@theme"

const Segnaletica: React.FC= () => {
  const { formatMessage } = useIntl()

  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__bandierine" }),
      images: [{
        src: require("@images/product/ostacoli/bandierine.jpg")
      }],
      materials: [Material.PLASTICA],
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__numero_per_campo_ostacoli_professional" }),
      images: [{
        src: require("@images/product/ostacoli/numero-professional.png")
      }],
      materials: [Material.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 16,
    },
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__numero_per_campo_ostacoli_light" }),
      images: [{
        src: require("@images/product/ostacoli/numero-light.png")
      }],
      materials: [Material.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ]

  return (
    <>
      <Title
        title={formatMessage({ id: "OSTACOLI__segnaletica__title" })}
      />
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} xs={12} md={6} item>
            <Product {...product}/>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Segnaletica
