import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"

const Fosso: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCT = {
    images: [
      { src: require("@images/product/ostacoli/fosso.png") },
    ],
    name: formatMessage({ id: "OSTACOLI__fosso__product__name" }),
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  }

  return (
    <Row>
      <Col md={6}>
        <Header>{formatMessage({ id: "OSTACOLI__fosso__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__fosso__text" })}
      </Col>
      <Col md={6}>
        <ProductNew vertical {...PRODUCT} />
      </Col>
    </Row>
  )
}

export default injectIntl(Fosso)
