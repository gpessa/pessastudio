import { Gallery, Section, TH } from "src/components"
import { GIOSTRE_COPERTURA_NOTE, GIOSTRA_COPERTURA_PVC_DESCRIZIONE } from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby-link"
import React from "react"

export const IMAGES: Picture[] = [
  {
    src: withPrefix("/products/giostre/ippowalker/copertura/copertura-pvc-1.jpg"),
    caption: <Trans>Copertura in PVC</Trans>,
  },
  {
    src: withPrefix("/products/giostre/ippowalker/copertura/copertura-pvc-2.jpg"),
    caption: <Trans>Copertura in PVC</Trans>,
  },
]

const Copertura = () => (
  <Section color="warm1">
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid md={6} item>
        <TH variant="h3" sans>{t`La copertura`}</TH>
        <Typography paragraph>
          <Trans>
            É possibile acquistare la giostra sprovvista di copertura ma se il vostro obbiettivo è quello di poter
            lavorare 365 giorni all'anno, Pessastudio offre la possibilità di dotare la giostra, con corridoio EASY, di
            una <strong>copertura in PVC</strong>.
          </Trans>
        </Typography>

        {GIOSTRA_COPERTURA_PVC_DESCRIZIONE}

        {GIOSTRE_COPERTURA_NOTE}
      </Grid>
      <Grid md={6} item>
        <Gallery images={IMAGES} />
      </Grid>
    </Grid>
  </Section>
)

export default Copertura
