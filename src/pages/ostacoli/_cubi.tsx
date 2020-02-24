import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Colors } from "@constants"

const Cubi: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cubi__product__cubi-mini" }),
      image: [
        require("@images/product/ostacoli/cubi-mini-01.png"),
        require("@images/product/ostacoli/cubi-mini-02.png"),
        require("@images/product/ostacoli/cubi-mini-03.png"),
      ],
      width: 350,
      length: 370,
      height: 570,
      weight: 3,
      price: 35,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: formatMessage({ id: "OSTACOLI__cubi__product__cubi-maxi" }),
      image: [
        require("@images/product/ostacoli/cubi-maxi-01.png"),
        require("@images/product/ostacoli/cubi-maxi-02.png"),
        require("@images/product/ostacoli/cubi-maxi-03.png"),
      ],
      width: 370,
      length: 570,
      height: 700,
      weight: 5,
      price: 62,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__cubi__title" })}</Header>
      {formatMessage({ id: "OSTACOLI__cubi__text" })}


      {/* <Row>
        <Col md={{ span: 12 }}> */} 
          <ProductNew {...PRODUCTS[0]} />
        {/* </Col> */}
        {/* <Col md={{ span: 12 }}> */}
          <ProductNew {...PRODUCTS[1]} />
        {/* </Col>
      </Row> */}

    </>
  )
}

export default injectIntl(Cubi)
