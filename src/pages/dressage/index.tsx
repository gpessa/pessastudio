import { FormattedMessage, injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"
import { Col, Row } from "react-bootstrap"

import { Header, Product, Section } from "@components"
import { Colors, Material } from "@constants"

const Dressage: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const TRAINING_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      image: require("@images/product/dressage/training-lettera.jpg"),
      width: 200,
      height: 300,
      weight: 0.5,
      colors: [Colors.WHITE],
      materials: [Material.POLIETILENE],
      price: 20,
    },
    {
      name: "Modulo dressage",
      image: require("@images/product/dressage/training-modulo-dressage.jpg"),
      weight: 3,
      height: 285,
      colors: [Colors.WHITE],
    },
    {
      name: "Rettangolo dressage 20x40",
      description: "Un comodo set composto da 60 moduli e 8 lettere",
      image: require("@images/product/dressage/training-rettangolo-dressage-20x60.jpg"),
    },
    {
      name: "Rettangolo dressage 20x60",
      description: "Un comodo set composto da 80 moduli e 12 lettere",
      image: require("@images/product/dressage/training-rettangolo-dressage-20x40.jpg"),
    },
  ]

  const OLIMPIC_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      image: require("@images/product/dressage/olimpic-lettera.jpg"),
      width: 390,
      height: 700,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51,
    },
    {
      name: "Modulo dressage",
      image: require("@images/product/dressage/olimpic-modulo-dressage.jpg"),
      width: 210,
      length: 2000,
      height: 370,
      weight: 5,
      colors: [Colors.WHITE],
      price: 74,
    },
    {
      name: "Rettangolo dressage 20x40",
      image: require("@images/product/dressage/olimpic-rettangolo-dressage-20x60.jpg"),
      description: "Un comodo set composto da 60 moduli e 8 lettere",
    },
    {
      name: "Rettangolo dressage 20x60",
      description: "Un comodo set composto da 80 moduli e 12 lettere",
      image: require("@images/product/dressage/olimpic-rettangolo-dressage-20x40.jpg"),
    },
  ]

  return (
    <>
      <Section>
        <h1>{formatMessage({ id: `NAVIGATION__dressage` })}</h1>
        <FormattedMessage
          id="DRESSAGE__text"
          values={{
            linktraining: (msg: string) => <a href="#dressage-training">{msg}</a>,
            linkolimpic: (msg: string) => <a href="#dressage-olimpic">{msg}</a>,
          }}
        />
      </Section>

      <Section id="dressage-training" className="bg-light">
        <Header as="h2">{formatMessage({ id: `DRESSAGE__training_title` })}</Header>
        <FormattedHTMLMessage as="div" id="DRESSAGE__training_description" />
        <Row className="mt-5">
          {TRAINING_PRODUCTS.map((product, index) => (
            <Col key={index} as={Product} {...product} md={3} />
          ))}
        </Row>
      </Section>

      <Section id="dressage-olimpic">
        <Header as="h2">{formatMessage({ id: `DRESSAGE__olimpic_title` })}</Header>
        <FormattedHTMLMessage as="div" id="DRESSAGE__olimpic_description" />
        <Row className="mt-5">
          {OLIMPIC_PRODUCTS.map((product, index) => (
            <Col key={index} as={Product} {...product} md={3} />
          ))}
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Dressage)
