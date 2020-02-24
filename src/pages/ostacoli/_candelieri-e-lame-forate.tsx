import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"

import { Header, ProductNew } from "@components"
import { Ratio, Material } from "@constants"

const CandelieriLameForate = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCTS = [

    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-pvc__name" }),
      image: [
        require("@images/product/ostacoli/candeliere-pvc-01.png"),
        require("@images/product/ostacoli/candeliere-pvc-02.png"),
        require("@images/product/ostacoli/candeliere-pvc-03.png")
      ],
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de-grande__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      description: "Lama forata disponibile in lunghezze 150cm. e 50cm.",
      image: [
        require("@images/product/ostacoli/lama-de-01.png"),
        require("@images/product/ostacoli/lama-de-02.png"),
        require("@images/product/ostacoli/lama-de-03.png")
      ],
      ratio: Ratio.VERTICAL,
      thickness: 2,
      width: 65,
      price: 12.5,
    },
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__candelieri-e-lame__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__candelieri-e-lame__text" />
      {PRODUCTS.map((product, index) => (
        <ProductNew key={index} {...product} />
      ))}
    </>
  )
}

export default injectIntl(CandelieriLameForate)
