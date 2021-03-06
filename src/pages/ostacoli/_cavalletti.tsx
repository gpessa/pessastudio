import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Title, Product } from "@components"
import { Colors } from "@constants"
import { Grid } from "@material-ui/core"
import { PRODUCT_GUTTER } from "@theme"

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
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item md={6}>
        <Title
          title={formatMessage({ id: "OSTACOLI__cavalletti__title" })}
          text={<p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "OSTACOLI__cavalletti__text" }) }} />}
        />
      </Grid>
      <Grid item container md={6} spacing={PRODUCT_GUTTER} >
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12}>
            <Product key={index} {...product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default injectIntl(Cavalletti)
