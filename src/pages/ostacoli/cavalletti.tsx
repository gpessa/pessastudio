import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Colors } from "@constants"

const Cavalletti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCT = {
    name: formatMessage({ id: "OSTACOLI__cavalletti__product__name" }),
    colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    image: require("@images/cavalletto.jpg"),
    length: 50,
    height: 50,
    weight: 2,
    price: 35,
  }

  return (
    <Row>
      <Col md={3} as={Product} {...PRODUCT} />
      <Col md={8}>
        <Header>{formatMessage({ id: "OSTACOLI__cavalletti__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__cavalletti__text" })}
      </Col>
    </Row>
  )
}

export default injectIntl(Cavalletti)
