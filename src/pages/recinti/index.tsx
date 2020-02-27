import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Columns, ContentTable, Gallery, Header, Product, Section } from "@components"
import { Colors } from "@constants"

const Recinti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
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
      image: require("@images/product/recinti/recinto-1-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 1200,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-2-filagne__name` }),
      image: require("@images/product/recinti/recinto-2-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 1350,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-3-filagne__name` }),
      image: require("@images/product/recinti/recinto-3-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 1600,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-4-filagne__name` }),
      image: require("@images/product/recinti/recinto-4-filagna.jpg"),
      colors: [Colors.WHITE],
      height: 1900,
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__recinzione-bordo-pista__name` }),
      image: require("@images/product/recinti/bordo-pista.jpg"),
      colors: [Colors.WHITE],
    },
    {
      description: formatMessage({ id: `RECINTI__prodotto__piede-mobile__description` }),
      name: formatMessage({ id: `RECINTI__prodotto__piede-mobile__name` }),
      image: require("@images/product/recinti/piede-mobile.jpg"),
      colors: [Colors.GREEN],
      diameter: 60,
      height: 300,
    },
    {
      name: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__name" }),
      description: formatMessage({ id: "RECINTI__prodotto__recinzione-erpice-livellatrice__description" }),
      image: require("@images/product/recinti/erpice-livellatrice.jpg"),
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION__recinti" })}</h1>
            <FormattedHTMLMessage id="RECINTI__text" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>{formatMessage({ id: "GENERAL__gamma" })}</Header>
        <Row>
          {PRODUCTS.map((product, index) => <Col as={Product} key={index} md={4} {...product} />)}
        </Row>
      </Section>

      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL__client-service" })}</Header>
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

export default injectIntl(Recinti)
