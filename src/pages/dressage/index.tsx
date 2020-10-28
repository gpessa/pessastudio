import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Product, Section, TH } from "@components"
import { Colors, Material } from "@constants"
import { Grid, Link, Typography } from "@material-ui/core"
import { COLORS, PRODUCT_GUTTER } from "@theme"

const Dressage: React.FC = () => {
  const { formatMessage } = useIntl()

  const TRAINING_PRODUCTS = [
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__lettera__name" }),
      images: [{src: require("@images/product/dressage/training-lettera.jpg")}],
      width: 200,
      height: 300,
      weight: 0.5,
      colors: [Colors.WHITE],
      materials: [Material.POLIETILENE],
      price: 20,
    },
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__modulo__name" }),
      images: [{src: require("@images/product/dressage/training-modulo-dressage.jpg")}],
      width: 2000,
      weight: 3,
      height: 285,
      colors: [Colors.WHITE],
    },
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x40__name" }),
      images: [{src: require("@images/product/dressage/rettangolo-dressage-60x20.svg")}],
      description: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x40__text" })
    },
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x60__name" }),
      images: [{src: require("@images/product/dressage/rettangolo-dressage-40x20.svg")}],
      description: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x60__text" })
    },
  ]

  const OLIMPIC_PRODUCTS = [
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__lettera__name" }),
      images: [{src: require("@images/product/dressage/olimpic-lettera.jpg")}],
      width: 390,
      height: 700,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51,
    },
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__modulo__name" }),
      images: [{src: require("@images/product/dressage/olimpic-modulo-dressage.jpg")}],
      width: 2000,
      height: 370,
      weight: 5,
      colors: [Colors.WHITE],
      price: 74,
    },
    {
      name: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x40__name" }),
      images: [{ src: require("@images/product/dressage/rettangolo-dressage-60x20.svg")}],
      description: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x40__text" })
    },
    { 
      name: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x60__name" }),
      images: [{ src: require("@images/product/dressage/rettangolo-dressage-40x20.svg")}],
      description: formatMessage({ id: "DRESSAGE__prodotto__rettangolo_20x60__text" })
    },
  ]

  return (
    <>
      <Section>
        <TH variant="h1">{formatMessage({ id: `NAVIGATION__dressage` })}</TH>
        <Typography
          variant="body1"
          component={FormattedMessage}
          id="DRESSAGE__text"
          values={{
            linktraining: (msg: string) => <Link href="#dressage-training">{msg}</Link>,
            linkolimpic: (msg: string) => <Link href="#dressage-olimpic">{msg}</Link>,
          }}
        />
      </Section>

      <Section id="dressage-training" color={COLORS.WARM2}>
        <TH variant="h2">{formatMessage({ id: `DRESSAGE__training_title` })}</TH>
        <p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "DRESSAGE__training_description" })} } />
        <Grid container spacing={PRODUCT_GUTTER}>
          {TRAINING_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="dressage-olimpic">
        <TH variant="h2">{formatMessage({ id: `DRESSAGE__olimpic_title` })}</TH>
        <p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "DRESSAGE__olimpic_description" })} } />
        <Grid container spacing={PRODUCT_GUTTER}>
          {OLIMPIC_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3} xs={12}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export default Dressage
