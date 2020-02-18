import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Material, Ratio } from "@constants"

const CucchiaiSegnaletica: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__cucchiaio_de" }),
      image: require("@images/product/ostacoli/cucchiaio-de.jpg"),
      materials: [Material.TECNOPOLIMERO],
      ratio: Ratio.VERTICAL,
      depth: 20,
      weight: 0.15,
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__supporto_di_sicurezza" }),
      image: require("@images/product/ostacoli/supporto-di-sicurezza.jpg"),
      materials: [Material.PLASTICA],
      ratio: Ratio.VERTICAL,
      width: 37,
      weight: 0.05,
      price: 3.5,
    }
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__cucchiai__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__cucchiai__text" tagName="p"/>
      <Row>
        {PRODUCTS.map((product, index) => (
          <Col as={Product} key={index} {...product} sm={12} md={3} />
        ))}
      </Row>
    </>
  )
}

export default injectIntl(CucchiaiSegnaletica)
