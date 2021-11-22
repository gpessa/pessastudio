import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Gallery, Section, TH } from "components"
import { Picture } from "components/ModalGallery"
import { GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO, GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE } from "constants"
import { BREAKPOINT, PRODUCT_GUTTER } from "theme"

const TecnoexerciserCorridoi = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg").default,
      caption: t`Corridoio TECNOFENCE`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/corridoio/compensato-marino.jpg").default,
      caption: t`Corridoio in compensato marino`,
    },
  ]

  return (
    <Section>
      <Grid container spacing={PRODUCT_GUTTER} direction={{ [BREAKPOINT]: "row-reverse" }}>
        <Grid md={6} item>
          <TH variant="h3" sans textAlign="right">{t`I corridoi`}</TH>

          <Typography paragraph>
            <Trans>
              La giostra puo essere acquistata scegliendo tra il piú economico corridoio costituito dalla recinzione{" "}
              <strong>TECNOFENCE</strong> o il robusto corridoio <strong>EXERCISER</strong> in pannelli in compensato
              marino.
            </Trans>
          </Typography>

          {GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE}

          {GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO(18, "EXERCISER")}
        </Grid>
        <Grid md={6} item>
          <Gallery images={IMAGES} />
        </Grid>
      </Grid>
    </Section>
  )
}

export default TecnoexerciserCorridoi
