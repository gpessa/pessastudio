import React from "react"

import { ProductNew, Header } from "@components"
import { Row, Col } from "react-bootstrap"
import { Colors } from "@constants"
import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"

const Barriere = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCT = {
    description: formatMessage({ id: "OSTACOLI__barriere__product__description" }),
    name: formatMessage({ id: "OSTACOLI__barriere__product__title" }),
    images: [
      {
        src: require("@images/product/ostacoli/barriere-01.png"),
      },
      {
        src: require("@images/product/ostacoli/barriere-02.png"),
      },
      {
        src: require("@images/product/ostacoli/barriere-03.png"),
      }
    ],
    price: 35,
    weight: 9.75,
    length: 2990,
    diameter: 95,
    colors: [Colors.BLU, Colors.GREEN, Colors.RED, Colors.WHITE, Colors.YELLOW],
  }

  return (
    <div>
      <Row>
        <Col md={12}>
          <Header>{formatMessage({ id: "OSTACOLI__barriere__title" })}</Header>
          <FormattedHTMLMessage id="OSTACOLI__barriere__text" />
        </Col>
        <Col md={12}>
          <ProductNew {...PRODUCT} />
        </Col>
      </Row>
    </div>
  )
}

export default injectIntl(Barriere)
