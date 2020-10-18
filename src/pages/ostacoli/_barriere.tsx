import React from "react"

import { Product, Title } from "@components"
import { Colors } from "@constants"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import { Grid } from "@material-ui/core"

const Barriere = ({ intl: { formatMessage } }: { intl: any }) => {
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
      <Grid container>
        <Grid item md={12}>
          <Title
            title={formatMessage({ id: "OSTACOLI__barriere__title" })}
            text={<FormattedHTMLMessage id="OSTACOLI__barriere__text" />}
          />
        </Grid>
        <Grid item md={12}>
          <Product {...PRODUCT} />
        </Grid>
      </Grid>
    </div>
  )
}

export default injectIntl(Barriere)
