import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Ratio } from "@constants"

const Fosso: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCT = {
    image: require("@images/product/ostacoli/fosso.jpg"),
    name: formatMessage({ id: "OSTACOLI__fosso__product__name" }),
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  }

  return (
    <Row>
      <Col md={5} ratio={Ratio.HORIZONTAL} as={Product} {...PRODUCT} />
      <Col>
        <Header>{formatMessage({ id: "OSTACOLI__fosso__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__fosso__text" })}
      </Col>
    </Row>
  )
}

export default injectIntl(Fosso)
