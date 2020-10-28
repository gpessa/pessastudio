import React from "react"

import { Title, Product } from "@components"
import { Material } from "@constants"
import { Grid } from "@material-ui/core"
import { PRODUCT_GUTTER } from "@theme"
import { useIntl } from "gatsby-plugin-intl"

const CucchiaiSegnaletica: React.FC = () => {
  const { formatMessage } = useIntl()

  const PRODUCTS = [
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__cucchiaio_de" }),
      images: [
        { src: require("@images/product/ostacoli/cucchiaio-de-01.png") },
        { src: require("@images/product/ostacoli/cucchiaio-de-02.png") },
        { src: require("@images/product/ostacoli/cucchiaio-de-03.png") },
      ],
      materials: [Material.TECNOPOLIMERO],
      depth: 20,
      weight: 0.15,
      price: 2.5,
    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__cucchiaio_ps" }),
      images: [
        { src: require("@images/product/ostacoli/cucchiaio-ps-01.png") },
        { src: require("@images/product/ostacoli/cucchiaio-ps-02.png") },
        { src: require("@images/product/ostacoli/cucchiaio-ps-03.png") },
      ],
      materials: [Material.TECNOPOLIMERO],

    },
    {
      name: formatMessage({ id: "OSTACOLI__cucchiai__product__supporto_di_sicurezza" }),
      images: [
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-01.png") },
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-03.png") },
        { src: require("@images/product/ostacoli/supporto-di-sicurezza-04.png") },
      ],
      materials: [Material.PLASTICA],
      width: 37,
      weight: 0.05,
      price: 3.5,
    }
  ]

  return (
    <>
      <Title
        title={formatMessage({ id: "OSTACOLI__cucchiai__title" })}
        text={<p dangerouslySetInnerHTML={{ __html: formatMessage({ id: "OSTACOLI__cucchiai__text" }) }}/>}
      />

      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map(product => (
          <Grid item xs={12}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CucchiaiSegnaletica
