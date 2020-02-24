import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Ratio } from "@constants"

const Fosso: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCT = {
    image: require("@images/product/ostacoli/fosso.png"),
    name: formatMessage({ id: "OSTACOLI__fosso__product__name" }),
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  }

  return (
    <>
      <Header>{formatMessage({ id: "OSTACOLI__fosso__title" })}</Header>
      {formatMessage({ id: "OSTACOLI__fosso__text" })}
      <ProductNew {...PRODUCT} />
    </>
  )
}

export default injectIntl(Fosso)
