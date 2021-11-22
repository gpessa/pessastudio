import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Product, Title } from "components"
import { MATERIALS } from "constants"
import { PRODUCT_GUTTER } from "theme"

const CucchiaiSegnaletica: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Cucchiaio DE`,
      description: t`Il cucchiaio standard utilizzato al livello internazionale`,
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
      name: t`Cucchiaio PS`,
      description: t`Il cucchiaio dotato del nostro sistema brevettato di aggancio`,
      images: [
        { src: require("assets/products/ostacoli/cucchiaio-ps-01.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-ps-02.png").default },
        { src: require("assets/products/ostacoli/cucchiaio-ps-03.png").default },
      ],
      materials: [MATERIALS.TECNOPOLIMERO],
      price: 3.5,
    },
    {
      name: t`Supporto di sicurezza`,
      description: (
        <Typography>{t`Supporti di sicurezza da applicare ai nostri cucchiai per salvaguardare l'integrità degli arti dei vostri cavalli in maniera efficace ed economica.`}</Typography>
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
      <Title
        sx={{ mb: PRODUCT_GUTTER }}
        title={t`Cucchiai`}
        text={
          <Typography>{t`Numerosi sono stati i test a cui abbiamo sottoposto i cucchiai per garantirne robustezza e durata nel tempo.`}</Typography>
        }
      />

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
