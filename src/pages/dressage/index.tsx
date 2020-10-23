import { FormattedHTMLMessage, FormattedMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Product, Section, TH1, TH2 } from "@components"
import { Colors, Material } from "@constants"
import { Grid, Link, Typography } from "@material-ui/core"
import { COLORS } from "@theme"

const Dressage: React.FC = () => {
  const { formatMessage } = useIntl()

  const TRAINING_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      images: [{src: require("@images/product/dressage/training-lettera.jpg")}],
      width: 200,
      height: 300,
      weight: 0.5,
      colors: [Colors.WHITE],
      materials: [Material.POLIETILENE],
      price: 20,
    },
    {
      name: "Modulo dressage",
      images: [{src: require("@images/product/dressage/training-modulo-dressage.jpg")}],
      weight: 3,
      height: 285,
      colors: [Colors.WHITE],
    },
    {
      name: "Rettangolo dressage 20x40",
      images: [{src: require("@images/product/dressage/rettangolo-dressage-60x20.svg")}],
      description: "Un comodo set composto da 60 moduli e 8 lettere. Tutto il necessario per creare un circuito standard 60x20 mt.",
    },
    {
      name: "Rettangolo dressage 20x60",
      images: [{src: require("@images/product/dressage/rettangolo-dressage-40x20.svg")}],
      description: "Un comodo set composto da 80 moduli e 12 lettere. Tutto il necessario per creare un circuito standard 40x20 mt.",
    },
  ]

  const OLIMPIC_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      images: [{src: require("@images/product/dressage/olimpic-lettera.jpg")}],
      width: 390,
      height: 700,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51,
    },
    {
      name: "Modulo dressage",
      images: [{src: require("@images/product/dressage/olimpic-modulo-dressage.jpg")}],
      width: 210,
      length: 2000,
      height: 370,
      weight: 5,
      colors: [Colors.WHITE],
      price: 74,
    },
    {
      name: "Rettangolo dressage 20x40",
      images: [{ src: require("@images/product/dressage/rettangolo-dressage-60x20.svg")}],
      description: "Un comodo set composto da 60 moduli e 8 lettere. Tutto il necessario per creare un circuito standard 60x20 mt.",
    },
    { 
      name: "Rettangolo dressage 20x60",
      images: [{ src: require("@images/product/dressage/rettangolo-dressage-40x20.svg")}],
      description: "Un comodo set composto da 80 moduli e 12 lettere. Tutto il necessario per creare un circuito standard 40x20 mt.",
    },
  ]

  return (
    <>
      <Section>
        <TH1>{formatMessage({ id: `NAVIGATION__dressage` })}</TH1>
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
        <TH2>{formatMessage({ id: `DRESSAGE__training_title` })}</TH2>
        <FormattedHTMLMessage id="DRESSAGE__training_description" tagName="p" />
        <Grid container spacing={5}>
          {TRAINING_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section id="dressage-olimpic">
        <TH2>{formatMessage({ id: `DRESSAGE__olimpic_title` })}</TH2>
        <FormattedHTMLMessage id="DRESSAGE__olimpic_description" tagName="p" />
        <Grid container spacing={5}>
          {OLIMPIC_PRODUCTS.map((product, index) => (
            <Grid item key={index} md={3}>
              <Product vertical {...product} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  )
}

export default Dressage
