import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Gallery, Section, TH } from "components"
import { Picture } from "components/ModalGallery"
import {
  GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO,
  GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE,
} from "utils/constants"
import { BREAKPOINT, PRODUCT_GUTTER } from "theme"

const IppowalkerCorridoi = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg").default,
      caption: t`Corridoio TECNOFENCE`,
    },
    {
      src: require("assets/products/giostre/ippowalker/corridoio/compensato-marino.jpg").default,
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
              Anche in questo semplice modello potrai decidere di dotare la tua giostra di un corridoio scegliendo tra
              il piú economico corridoio costituito dalla recinzione <strong>TECNOFENCE</strong> o il corridoio{" "}
              <strong>EASY</strong> in pannelli di compensato marino.
            </Trans>
          </Typography>

          {GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE}

          {GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO(15, "EASY")}
        </Grid>
        <Grid md={6} item>
          <Gallery images={IMAGES} />
        </Grid>
      </Grid>
    </Section>
  )
}

export default IppowalkerCorridoi
