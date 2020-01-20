import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, Product } from "@components"
import { Material, Ratio } from "@constants"

const CucchiaiSegnaletica: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__product__cucchiaio_de" }),
      image: require("@images/product/ostacoli/cucchiaio-de.jpg"),
      materials: [Material.TECNOPOLIMERO],
      ratio: Ratio.VERTICAL,
      depth: 20,
      weight: 0.15,
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__product__supporto_di_sicurezza" }),
      image: require("@images/product/ostacoli/supporto.jpg"),
      materials: [Material.PLASTICA],
      ratio: Ratio.VERTICAL,
      width: 37,
      weight: 0.05,
      price: 3.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__product__bandierine" }),
      image: require("@images/product/ostacoli/bandierine.jpg"),
      materials: [Material.PLASTICA],
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__product__numero_per_campo_ostacoli_professional" }),
      image: require("@images/product/ostacoli/numero-light.jpg"),
      materials: [Material.POLIETILENE],
      width: 200,
      height: 300,
      weight: 2.3,
      price: 16,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__product__numero_per_campo_ostacoli_light" }),
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
      <Header>{formatMessage({ id: "OSTACOLI__cucchiai-e-segnaletica__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__cucchiai-e-segnaletica__text" />
      <Row>
        {PRODUCTS.map((product, index) => (
          <Col as={Product} key={index} {...product} sm={12} md={3} />
        ))}
      </Row>
    </>
  )
}

export default injectIntl(CucchiaiSegnaletica)
