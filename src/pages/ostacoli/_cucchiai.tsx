import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Material } from "@constants"

const CucchiaiSegnaletica: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__cucchiaio_de" }),
      images: [
        { src: require("@images/product/ostacoli/cucchiaio-de-01.png") },
        { src: require("@images/product/ostacoli/cucchiaio-de-02.png") },
        { src: require("@images/product/ostacoli/cucchiaio-de-03.png") },
      ],
      materials: [Material.TECNOPOLIMERO],
      depth: 20,
      weight: 0.15,
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__cucchiaio_ps" }),
      images: [
        { src: require("@images/product/ostacoli/cucchiaio-ps-01.png") },
        { src: require("@images/product/ostacoli/cucchiaio-ps-02.png") },
        { src: require("@images/product/ostacoli/cucchiaio-ps-03.png") },
      ],
      materials: [Material.TECNOPOLIMERO],

    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__supporto_di_sicurezza" }),
      images: [
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-01.png") },
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-03.png") },
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-04.png") },
      ],
      materials: [Material.PLASTICA],
      width: 37,
      weight: 0.05,
      price: 3.5,
    }
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__cucchiai__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__cucchiai__text" tagName="p" />

      <ProductNew {...PRODUCTS[0]} />
      <ProductNew {...PRODUCTS[1]} />
      <ProductNew {...PRODUCTS[2]} />
    </>
  )
}

export default injectIntl(CucchiaiSegnaletica)
