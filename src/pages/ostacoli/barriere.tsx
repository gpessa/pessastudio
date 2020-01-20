import React from "react"

import { Product, Header } from "@components"
import { Ratio } from "@constants"
import { Row, Col } from "react-bootstrap"
import { Colors } from "@constants"
import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"

const Barriere = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCT = {
    description: formatMessage({ id: "OSTACOLI__barriere__product__description" }) ,
    name: formatMessage({ id: "OSTACOLI__barriere__product__title" }) ,
    image: require("@images/product/ostacoli/barriere.jpg") ,
    colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
    ratio: Ratio.HORIZONTAL,
    price: 35,
    weight: 9.75,
    length: 2990,
    diameter: 95
  }

  return (
    <div>
      <Row>
        <Col md={7}>
          <Header>{formatMessage({ id: "OSTACOLI__barriere__title" })}</Header>
          <FormattedHTMLMessage id="OSTACOLI__barriere__text" />
        </Col>
        <Col as={Product} {...PRODUCT} />
      </Row>
    </div>
  )
}

export default injectIntl(Barriere)
