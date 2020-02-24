import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Material } from "@constants"

const Segnaletica: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__bandierine" }),
      image: require("@images/product/ostacoli/bandierine.jpg"),
      materials: [Material.PLASTICA],
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__numero_per_campo_ostacoli_professional" }),
      image: require("@images/product/ostacoli/numero-light.jpg"),
      materials: [Material.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 16,
    },
    {
      name: formatMessage({ id: "OSTACOLI__segnaletica__product__numero_per_campo_ostacoli_light" }),
      image: require("@images/product/ostacoli/numero-professional.jpg"),
      materials: [Material.POLIPROPILENE],
      width: 330,
      height: 330,
      weight: 1.25,
      price: 16,
    },
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__segnaletica__title" })}</Header>
      <p>{formatMessage({ id: "OSTACOLI__segnaletica__text" })}</p>
      <Row>
        {PRODUCTS.map((product, index) => (
          <Col key={index} sm={6} md={6}>
            <ProductNew {...product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default injectIntl(Segnaletica)
