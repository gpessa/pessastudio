import { Product, Section, TH2, TH6 } from "@components"
import { Grid, makeStyles } from "@material-ui/core"
import { COLORS, PRODUCT_GUTTER } from "@theme"
import { useIntl } from "gatsby-plugin-intl"
import React from "react"


const useStyle = makeStyles(theme => ({

}))

const Accessori = () => {
  const { formatMessage } = useIntl()
  const classes = useStyle()

  const PRODUCTS = [
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__name` }),
      images: [{ src: require("@images/product/recinti/bordo-pista.jpg") }],
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__piede-mobile__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__piede-mobile__name` }),
      images: [{ src: require("@images/product/recinti/piede-mobile.jpg") }],
      diameter: 60,
      height: 300,
    },
    {
      name: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__name" }),
      description: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__description" }),
      images: [{ src: require("@images/product/recinti/erpice-livellatrice.jpg") }],
    }
  ]

  return (
    <Section>
      <TH2 align="center">{"Accessori"}</TH2>
      <Grid container spacing={PRODUCT_GUTTER}>
          <Product { ...PRODUCTS[0] }  />
          <Product {...PRODUCTS[1]}  />
          <Product {...PRODUCTS[2]}  />
      </Grid>
    </Section>
  )
}

export default Accessori