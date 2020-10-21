import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Columns, ContentTable, Gallery, TH2, Product, Section, TH1, TH4 } from "@components"
import { Colors } from "@constants"
import { Grid, Typography } from "@material-ui/core"
import { COLORS } from "@theme"

const Recinti: React.FC = () => {
  const { formatMessage } = useIntl()

  const IMAGES: Picture[] = [
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-0` }),
      src: require("@images/product/recinti/recinti-image-0.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-1` }),
      src: require("@images/product/recinti/recinti-image-1.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-2` }),
      src: require("@images/product/recinti/recinti-image-2.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-3` }),
      src: require("@images/product/recinti/recinti-image-3.jpg"),
    },
    {
      caption: formatMessage({ id: `RECINTI__gallery__image-4` }),
      src: require("@images/product/recinti/recinti-image-4.jpg"),
    },
  ]

  const PRODUCTS = [
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-1-filagna__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-1-filagna__name` }),
      images: [{ src: require("@images/product/recinti/recinto-1-filagna.jpg") }],
      colors: [Colors.WHITE],
      height: 1200,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__name` }),
      images: [{ src: require("@images/product/recinti/recinto-2-filagna.jpg") }],
      colors: [Colors.WHITE],
      height: 1350,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__name` }),
      images: [{ src: require("@images/product/recinti/recinto-3-filagna.jpg") }],
      colors: [Colors.WHITE],
      height: 1600,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__name` }),
      images: [{ src: require("@images/product/recinti/recinto-4-filagna.jpg") }],
      colors: [Colors.WHITE],
      height: 1900,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__name` }),
      images: [{ src: require("@images/product/recinti/bordo-pista.jpg") }],
      colors: [Colors.WHITE],
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__piede-mobile__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__piede-mobile__name` }),
      images: [{ src: require("@images/product/recinti/piede-mobile.jpg") }],
      colors: [Colors.GREEN],
      diameter: 60,
      height: 300,
    },
    {
      name: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__name" }),
      description: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__description" }),
      images: [{ src: require("@images/product/recinti/erpice-livellatrice.jpg") }],
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH1>{formatMessage({ id: "NAVIGATION__recinti" })}</TH1>
            <FormattedHTMLMessage id="RECINTI__text" tagName={Typography} />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <TH2>{formatMessage({ id: "GENERAL__gamma" })}</TH2>
        <Grid container spacing={5}>
          {PRODUCTS.map((product, index) => (
            <Grid item key={index} md={4}>
              <Product {...product} vertical/>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section color={COLORS.WARM2}>
        <TH2>{formatMessage({ id: "GENERAL__client-service" })}</TH2>
        <ContentTable
          title={formatMessage({ id: "GENERAL__manauli" })}
          rows={[
            {
              label: formatMessage({ id: "RECINTI__manuali__preparare-il-fondo" }),
              link: "/recinti/come-preparare-il-fondo",
            },
            {
              label: formatMessage({ id: "RECINTI__manuali__istruzioni-montaggio" }),
              file: withPrefix("/recinti-istruzioni-montaggio.pdf"),
            },
          ]}
        />
      </Section>
    </>
  )
}

export default Recinti
