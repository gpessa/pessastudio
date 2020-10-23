import { injectIntl, useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Title, Product } from "@components"
import { Grid } from "@material-ui/core"
import { PRODUCT_GUTTER } from "@theme"

const Fosso: React.FC = () => {
  const { formatMessage } = useIntl()

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
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item md={6}>
        <Title
          title={formatMessage({ id: "OSTACOLI__fosso__title" })}
          text={formatMessage({id: "OSTACOLI__fosso__text" })}
        />
      </Grid>
      <Grid item md={6}>
        <Product {...PRODUCT} />
      </Grid>
    </Grid>
  )
}

export default injectIntl(Fosso)
