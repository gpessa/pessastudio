import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Title, Product } from "@components"
import { Colors } from "@constants"

const Cubi: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cubi__product__cubi-mini" }),
      images: [
        { src: require("@images/product/ostacoli/cubi-mini-01.png") },
        { src: require("@images/product/ostacoli/cubi-mini-02.png") },
        { src: require("@images/product/ostacoli/cubi-mini-03.png") },
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
      images: [
        { src: require("@images/product/ostacoli/cubi-maxi-01.png") },
        { src: require("@images/product/ostacoli/cubi-maxi-02.png") },
        { src: require("@images/product/ostacoli/cubi-maxi-03.png") },
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
      <Title
        title={formatMessage({ id: "OSTACOLI__cubi__title" })}
        text={formatMessage({ id: "OSTACOLI__cubi__text" })}
      />
      
      <Product {...PRODUCTS[0]} />
      <Product {...PRODUCTS[1]} />

    </>
  )
}

export default injectIntl(Cubi)
