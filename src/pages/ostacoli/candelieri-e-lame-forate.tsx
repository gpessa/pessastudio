import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"

import { Header, Product } from "@components"
import { Ratio, Material } from "@constants"

const CandelieriLameForate = ({ intl: { formatMessage } }: { intl: any }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-alluminio__name" }),
      image: require("@images/product/ostacoli/candeliere-alluminio.jpg"),
      width: 720,
      depth: 720,
      height: 1700,
      weight: 10,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__candeliere-pvc__name" }),
      image: require("@images/product/ostacoli/candeliere-pvc.jpg"),
      width: 720,
      depth: 720,
      height: 1700,
      weight: 7,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de-piccola__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      image: require("@images/product/ostacoli/lama-de-piccola.jpg"),
      ratio: Ratio.VERTICAL,
      thickness: 2,
      width: 65,
      lenght: 500,
      price: 6.6,
    },
    {
      name: formatMessage({ id: "OSTACOLI__candelieri-e-lame__prodotto__lama-de-grande__name" }),
      materials: [Material.ACCIAIO_ZINCATO],
      image: require("@images/product/ostacoli/lama-de-grande.jpg"),
      ratio: Ratio.VERTICAL,
      thickness: 2,
      width: 65,
      lenght: 1500,
      price: 12.5,
    },
  ]

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__barriere__title" })}</Header>
      <FormattedHTMLMessage id="OSTACOLI__barriere__text" />
      <Row>
        {PRODUCTS.map((product, index) => <Col key={index} as={Product} ratio={Ratio.VERTICAL} {...product} md={3} />)}
      </Row>
    </>
  )
}

export default injectIntl(CandelieriLameForate)
