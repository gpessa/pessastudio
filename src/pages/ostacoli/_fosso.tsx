import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Header, ProductNew } from "@components"
import { Grid } from "@material-ui/core"

const Fosso: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCT = {
    images: [
      { src: require("@images/product/ostacoli/fosso.png") },
    ],
    name: formatMessage({ id: "OSTACOLI__fosso__product__name" }),
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  }

  return (
    <Grid container>
      <Grid item md={6}>
        <Header>{formatMessage({ id: "OSTACOLI__fosso__title" })}</Header>
        {formatMessage({ id: "OSTACOLI__fosso__text" })}
      </Grid>
      <Grid md={6}>
        <ProductNew vertical {...PRODUCT} />
      </Grid>
    </Grid>
  )
}

export default injectIntl(Fosso)
