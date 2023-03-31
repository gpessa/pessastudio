import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { Product, Title } from "components"
import React from "react"
import { PRODUCT_GUTTER } from "theme"
import { MATERIALS } from "utils/constants"

const CucchiaiSegnaletica: React.FC = () => {
  const PRODUCTS = [
    {
      name: t({ message: `Cucchiaio {type}`, values: { type: `DE` } }),
      description: <Trans>Il cucchiaio standard utilizzato al livello internazionale</Trans>,
      images: [
        { src: require("assets/products/ostacoli/cucchiaio-de-01.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-de-02.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-de-03.png").default },
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      depth: 20,
      weight: 0.15,
      price: 3.5,
    },
    {
      name: t({ message: `Cucchiaio {type}`, values: { type: `PS` } }),
      description: <Trans>Il cucchiaio dotato del nostro sistema brevettato di aggancio</Trans>,
      images: [
        { src: require("assets/products/ostacoli/cucchiaio-ps-01.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-ps-02.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-ps-03.png").default },
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      price: 4.5,
    },
    {
      name: t`Supporto di sicurezza`,
      description: (
        <Typography>
          <Trans>
            Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri
            cavalli in maniera efficace ed economica.
          </Trans>
        </Typography>
      ),
      images: [
        { src: require("assets/products/ostacoli/supporto-di-sicurezza-01.png").default },
        { src: require("assets/products/ostacoli/supporto-di-sicurezza-03.png").default },
        { src: require("assets/products/ostacoli/supporto-di-sicurezza-04.png").default },
      ],
      materials: [MATERIALS.PLASTICA],
      width: 37,
      weight: 0.05,
      price: 4,
    },
  ]

  return (
    <>
      <Title sx={{ mb: PRODUCT_GUTTER }} title={<Trans>Cucchiai</Trans>} />

      <Grid container spacing={PRODUCT_GUTTER}>
        {PRODUCTS.map((product, index) => (
          <Grid item xs={12} key={`cucchiai-segnaletica_${index}`}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CucchiaiSegnaletica
