import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Gallery, Section, TH } from "components"
import { Picture } from "components/ModalGallery"
import { GIOSTRA_COPERTURA_PVC_DESCRIZIONE, GIOSTRE_COPERTURA_NOTE } from "utils/constants"
import { PRODUCT_GUTTER } from "theme"

const IppowalkerCopertura = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/ippowalker/copertura/copertura-pvc-1.jpg").default,
      caption: t`Copertura in PVC`,
    },
    {
      src: require("assets/products/giostre/ippowalker/copertura/copertura-pvc-2.jpg").default,
      caption: t`Copertura in PVC`,
    },
  ]

  return (
    <Section color="warm1">
      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid md={6} item>
          <TH variant="h3" sans>{t`La copertura`}</TH>
          <Typography paragraph>
            <Trans>
              É possibile acquistare la giostra sprovvista di copertura ma se il vostro obbiettivo è quello di poter
              lavorare 365 giorni all'anno, Pessastudio offre la possibilità di dotare la giostra, con corridoio EASY,
              di una <strong>copertura in PVC</strong>.
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
}

export default IppowalkerCopertura
