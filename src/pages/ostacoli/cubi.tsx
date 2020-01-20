import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Colors } from "@constants"

const Cubi: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cubi__product__cubi-mini" }),
      image: require("@images/product/ostacoli/cubi-mini.jpg"),
      width: 350,
      length: 370,
      height: 570,
      weight: 3,
      price: 35,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: formatMessage({ id: "OSTACOLI__cubi__product__cubi-maxi" }),
      image: require("@images/product/ostacoli/cubi-maxi.jpg"),
      width: 370,
      length: 570,
      height: 70,
      weight: 5,
      price: 62,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
  ]

  return (
    <Row>
      <Col>
        <Header>{formatMessage({ id: "OSTACOLI__cubi__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__cubi__text" })}
      </Col>
      {PRODUCTS.map((product, index) => (
        <Col as={Product} key={index} md={3} {...product} />
      ))}
    </Row>
  )
}

export default injectIntl(Cubi)
