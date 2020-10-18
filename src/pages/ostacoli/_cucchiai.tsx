import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Title, Product } from "@components"
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
      <Title
        title={formatMessage({ id: "OSTACOLI__cucchiai__title" })}
        text={<FormattedHTMLMessage id="OSTACOLI__cucchiai__text" tagName="p" />}
      />

      <Product {...PRODUCTS[0]} />
      <Product {...PRODUCTS[1]} />
      <Product {...PRODUCTS[2]} />
    </>
  )
}

export default injectIntl(CucchiaiSegnaletica)
