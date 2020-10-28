import { useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Product, Title } from "@components"
import { Material } from "@constants"
import { PRODUCT_GUTTER } from "@theme"
import { Grid } from "@material-ui/core"

const CandelieriLameForate = () => {
  const { formatHTMLMessage, formatMessage } = useIntl()

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
        text={<p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "OSTACOLI__candelieri-e-lame__text" }) }} />}
      />
      
      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12}>
            <Product key={index} {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CandelieriLameForate
