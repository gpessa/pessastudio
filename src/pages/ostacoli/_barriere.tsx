import React from "react"

import { ProductNew, Header } from "@components"
import { Row, Col } from "react-bootstrap"
import { Colors } from "@constants"
import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"

const Barriere = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCT = {
    description: formatMessage({ id: "OSTACOLI__barriere__product__description" }),
    name: formatMessage({ id: "OSTACOLI__barriere__product__title" }),
    image: require("@images/product/ostacoli/barriere.jpg"),
    price: 35,
    weight: 9.75,
    length: 2990,
    diameter: 95,
    colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
  }

  return (
    <div>
      <Row>
        <Col md={6}>
          <Header>{formatMessage({ id: "OSTACOLI__barriere__title" })}</Header>
          <FormattedHTMLMessage id="OSTACOLI__barriere__text" />
        </Col>
        <Col md={6}>
          <ProductNew {...PRODUCT} />
        </Col>
      </Row>
    </div>
  )
}

export default injectIntl(Barriere)
