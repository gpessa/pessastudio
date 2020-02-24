import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Colors } from "@constants"

const Cavalletti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti__product__name" }),
      image: [require("@images/product/ostacoli/cavalletto-01.png")],
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: 35,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti-con-barriera__product__name" }),
      image: [require("@images/product/ostacoli/cavalletto-01.png") ],
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
        <FormattedHTMLMessage id="OSTACOLI__cavalletti__text" />
      </Col>
      <Col md={6}>
        {PRODUCTS.map((product, index) => (
          <ProductNew key={index} {...product} />
        ))}
      </Col>
    </Row>
  )
}

export default injectIntl(Cavalletti)
