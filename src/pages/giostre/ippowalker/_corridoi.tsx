import { Gallery, Section, TH } from "src/components"
import {
  GIOSTRA_DESCRIZIONE_RECINZIONE_COMPENSATO_MARINO,
  GIOSTRA_DESCRIZIONE_RECINZIONE_TECONOFENCE,
} from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { BREAKPOINT, PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby-link"
import React from "react"

export const IMAGES: Picture[] = [
  {
    src: require("src/assets/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg").default,
    caption: <Trans id={"Corridoio TECNOFENCE"} />,
  },
  {
    src: require("src/assets/products/giostre/ippowalker/corridoio/compensato-marino.jpg").default,
    caption: <Trans id={"Corridoio in compensato marino"} />,
  },
]

const Corridoi = () => (
  <Section>
    <Grid container spacing={PRODUCT_GUTTER} direction={{ [BREAKPOINT]: "row-reverse" }}>
      <Grid md={6} item>
        <TH variant="h3" sans textAlign="right">{t`I corridoi`}</TH>

        <Typography paragraph>
          <Trans>
            Anche in questo semplice modello di giostra potrai decidere di dotare la giostra di un corridoio scegliendo
            tra il piú economico corridoio costituito dalla recinzione <strong>TECNOFENCE</strong> o il corridoio{" "}
            <strong>EASY</strong> in pannelli in compensato marino.
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

export default Corridoi
