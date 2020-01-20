import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Colors } from "@constants"

const Cavalletti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti__product__name" }),
      image: require("@images/cavalletto.jpg"),
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: 35,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti-con-barriera__product__name" }),
      image: require("@images/cavalletto.jpg"),
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 91,
    },
  ]

  return (
    <Row>
      <Col md={6}>
        <Header>{formatMessage({ id: "OSTACOLI__cavalletti__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__cavalletti__text" })}
      </Col>
      <Col md={6}>
        <Row>
          {PRODUCTS.map((product, index) => (
            <Col md={6} key={index} as={Product} {...product} />
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default injectIntl(Cavalletti)
