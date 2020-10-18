import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"

import { TH2, Product, Title } from "@components"
import { Ratio, Material } from "@constants"

const CandelieriLameForate = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCTS = [

    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-pvc__name" }),
      images: [
        { src: require("@images/product/ostacoli/candeliere-pvc-01.png") } ,
        { src: require("@images/product/ostacoli/candeliere-pvc-03.png") } ,
        { src: require("@images/product/ostacoli/candeliere-pvc-02.png") } ,
      ],
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      description: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de__description" }),
      images: [
        { src: require("@images/product/ostacoli/lama-de-03.png") } ,
        { src: require("@images/product/ostacoli/lama-de-02.png") } ,
        { src: require("@images/product/ostacoli/lama-de-01.png") } ,
      ],
      thickness: 2,
      width: 65,
      price: 12.5,
    },
  ]

  return (
    <>
      <Title
        title={formatMessage({ id: "OSTACOLI__candelieri-e-lame__title" })}
        text={<FormattedHTMLMessage id="OSTACOLI__candelieri-e-lame__text" />}
      />
      
      {PRODUCTS.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </>
  )
}

export default injectIntl(CandelieriLameForate)
