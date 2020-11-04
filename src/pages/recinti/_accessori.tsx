import { Product, Section, TH } from "@components"
import { Grid } from "@material-ui/core"
import { PRODUCT_GUTTER } from "@theme"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Colors } from "@constants"

const Accessori = () => {
  const { formatMessage } = useIntl()

  const PRODUCTS = [
    // {
    //   description: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__description` }),
    //   name: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__name` }),
    //   images: [{ src: require("@images/product/recinti/bordo-pista.jpg") }],
    // },
    {
      description: formatMessage({ id: `RECINTI__prodotto__piede-mobile__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__piede-mobile__name` }),
      images: [
        { src: require("@images/product/recinti/piede-mobile-2.png") },
        { src: require("@images/product/recinti/piede-mobile-3.png") },
        { src: require("@images/product/recinti/piede-mobile-4.jpg") },
      ],
      diameter: 60,
      height: 300,
      colors: [Colors.WHITE, Colors.GREEN]
    },
    // {
    //   name: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__name" }),
    //   description: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__description" }),
    //   images: [{ src: require("@images/product/recinti/erpice-livellatrice.jpg") }],
    // }
  ]

  return (
    <Section>
      <TH variant="h2">{formatMessage({ id: "GENERAL__accessories" })}</TH>

      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} xs={12} md={12} item>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Accessori