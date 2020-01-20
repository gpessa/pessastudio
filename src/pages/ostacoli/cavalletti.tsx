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
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
      image: require("@images/cavalletto.jpg"),
      tickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: 35,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti-con-barriera__product__name" }),
      image: require("@images/cavalletto.jpg"),
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 91,
    }
  ]

  return (
    <Row>
      {PRODUCTS.map((product, index) => <Col md={3} key={index} as={Product} {...product} />)}
      <Col md={6}>
        <Header>{formatMessage({ id: "OSTACOLI__cavalletti__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__cavalletti__text" })}
      </Col>
    </Row>
  )
}

export default injectIntl(Cavalletti)
