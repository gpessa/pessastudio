import { Gallery, Section, TH } from "src/components"
import { GIOSTRA_COPERTURA_PVC_DESCRIZIONE, GIOSTRE_COPERTURA_NOTE } from "src/constants"
import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import { withPrefix } from "gatsby-link"
import React from "react"

export const IMAGES: Picture[] = [
  {
    src: require("src/static/products/giostre/tecnoexerciser/copertura/copertura-pvc-2.jpg").default,
    caption: <Trans>Copertura in PVC</Trans>,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/copertura/copertura-pvc-1.jpg").default,
    caption: <Trans>Copertura in PVC</Trans>,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-1.jpg").default,
    caption: <Trans>Copertura rigida con lastre ondulate</Trans>,
  },
  {
    src: require("src/static/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-2.jpg").default,
    caption: <Trans>Copertura rigida con lastre ondulate</Trans>,
  },
]

const Copertura = () => (
  <Section color="warm1">
    <Grid container spacing={PRODUCT_GUTTER}>
      <Grid md={6} item>
        <TH variant="h3" sans>{t`La copertura`}</TH>

        <Typography paragraph>
          <Trans>
            È possibile acquistare la giostra sprovvista di copertura ma se il vostro obbiettivo è quello di poter
            lavorare 365 giorni all'anno, Pessastudio, offre due possibili soluzioni abbinabili al corridoio{" "}
            <strong>Exerciser</strong>.
          </Trans>
        </Typography>

        {GIOSTRA_COPERTURA_PVC_DESCRIZIONE}

        <Typography paragraph>
          <Trans>
            L’alternativa alla copertura in PVC è la <strong>copertura rigida</strong> in lastre di vetroresina. le
            lastre vengono sorrette da una doppia struttura in acciaio zincato che permette di avere una migliore
            distribuzione del peso in caso di nevicata e una maggiore sicurezza in caso di forte vento. Una soluzione
            che ti permetterà senza opere murarie di avere una struttura robusta e durevole nel tempo.
          </Trans>
        </Typography>

        {GIOSTRE_COPERTURA_NOTE}
      </Grid>
      <Grid md={6} item>
        <Gallery images={IMAGES} />
      </Grid>
    </Grid>
  </Section>
)

export default Copertura
