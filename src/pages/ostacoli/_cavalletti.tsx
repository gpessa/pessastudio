import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Title, Product } from "@components"
import { Colors } from "@constants"
import { Grid } from "@material-ui/core"

const Cavalletti: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti__product__name" }),
      images: [{
        src: require("@images/product/ostacoli/cavalletto-01.png")
      }],
      thickness: 100,
      length: 500,
      height: 500,
      weight: 2,
      price: 35,
      colors: [Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN],
    },
    {
      name: formatMessage({ id: "OSTACOLI__cavalletti-con-barriera__product__name" }),
      images: [{
        src: require("@images/product/ostacoli/cavalletto-barriera-01.png") 
      }],
      diameter: 85,
      length: 2000,
      weight: 5.3,
      price: 91,
    },
  ]

  return (
    <Grid container spacing={10}>
      <Grid item md={6}>
        <Title
          title={formatMessage({ id: "OSTACOLI__cavalletti__title" })}
          text={<FormattedHTMLMessage id="OSTACOLI__cavalletti__text" />}
        />
      </Grid>
      <Grid item md={6} spacing={10}>
        {PRODUCTS.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </Grid>
    </Grid>
  )
}

export default injectIntl(Cavalletti)
