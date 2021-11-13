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
    src: withPrefix("/products/giostre/tecnoexerciser/corridoio/tecnofence.jpg"),
    caption: <Trans id={"Corridoio TECNOFENCE"} />,
  },
  {
    src: withPrefix("/products/giostre/tecnoexerciser/corridoio/compensato-marino.jpg"),
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

export default Corridoi
