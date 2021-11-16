import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Product, Title } from "src/components"
import { PRODUCT_GUTTER } from "src/theme"

const Fosso: React.FC = () => {
  const PRODUCT = {
    images: [{ src: require("src/assets/products/ostacoli/fosso.png").default }],
    name: t`Fosso`,
    length: 1500,
    width: 2800,
    price: 440,
    height: 80,
  }

  return (
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid item xs={12} md={6}>
        <Title
          title={t`Fosso`}
          text={
            <Trans>
              <Typography>Ottimo per insegnare ai vostri cavalli/puledri a saltarlo.</Typography>
              <Typography>Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato alto 6 cm.</Typography>
            </Trans>
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Product {...PRODUCT} />
      </Grid>
    </Grid>
  )
}

export default Fosso
