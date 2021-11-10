import { Product, Title } from "@components"
import { MATERIALS } from "@constants"
import { t } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "@theme"
import { withPrefix } from "gatsby"
import React from "react"

const CucchiaiSegnaletica: React.FC = () => {
  const PRODUCTS = [
    {
      name: t`Cucchiaio DE`,
      description: t`Il cucchiaio standard utilizzato al livello internazionale`,
      images: [
        { src: withPrefix("/products/ostacoli/cucchiaio-de-01.png") },
        { src: withPrefix("/products/ostacoli/cucchiaio-de-02.png") },
        { src: withPrefix("/products/ostacoli/cucchiaio-de-03.png") },
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
        { src: withPrefix("/products/ostacoli/cucchiaio-ps-01.png") },
        { src: withPrefix("/products/ostacoli/cucchiaio-ps-02.png") },
        { src: withPrefix("/products/ostacoli/cucchiaio-ps-03.png") },
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
        { src: withPrefix("/products/ostacoli/supporto-di-sicurezza-01.png") },
        { src: withPrefix("/products/ostacoli/supporto-di-sicurezza-03.png") },
        { src: withPrefix("/products/ostacoli/supporto-di-sicurezza-04.png") },
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
