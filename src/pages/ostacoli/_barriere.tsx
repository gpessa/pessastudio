import React from "react"

import { Product, Title } from "@components"
import { Colors } from "@constants"
import { useIntl } from "gatsby-plugin-intl"

const Barriere = () => {
  const { formatMessage, formatHTMLMessage } = useIntl()

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
      <Title
        title={formatMessage({ id: "OSTACOLI__barriere__title" })}
        text={<p>{formatHTMLMessage({ id: "OSTACOLI__barriere__text" })}</p>}
      />
      <Product {...PRODUCT} />
    </div>
  )
}

export default Barriere
