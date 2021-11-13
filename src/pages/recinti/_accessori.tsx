import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import React from "react"
import { Product, Section, TH } from "src/components"
import { Colors } from "src/constants"
import { PRODUCT_GUTTER } from "src/theme"

const PRODUCTS = [
  // {
  //   description: t({ id: `RECINTI__prodotto__recinzione-bordo-pista__description` }),
  //   name: t({ id: `RECINTI__prodotto__recinzione-bordo-pista__name` }),
  //   images: [{ src: "/products/recinti/bordo-pista.jpg")}],
  // },
  {
    description: (
      <Trans
        id={`Diamo la possibilità di montare nella vostra recinzione un piede mobile che vi permetterà di posizionarla e spostarla dove e quando volete`}
      />
    ),
    name: <Trans id={`Piede mobile`} />,
    images: [
      { src: require("src/assets/products/recinti/piede-mobile-2.png").default },
      { src: require("src/assets/products/recinti/piede-mobile-3.png").default },
      { src: require("src/assets/products/recinti/piede-mobile-4.jpg").default },
    ],
    diameter: 60,
    height: 300,
    colors: [Colors.WHITE, Colors.GREEN],
  },
  // {
  //   name: t({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__name" }),
  //   description: t({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__description" }),
  //   images: [{ src: "/products/recinti/erpice-livellatrice.jpg")}],
  // }
]

const Accessori = () => (
  <Section color="warm1">
    <TH variant="h2">{t`Accessori`}</TH>
    <Grid container spacing={PRODUCT_GUTTER}>
      {PRODUCTS.map((product, index) => (
        <Grid key={index} xs={12} md={12} item>
          <Product {...product} />
        </Grid>
      ))}
    </Grid>
  </Section>
)

export default Accessori
