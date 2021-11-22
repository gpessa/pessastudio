import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import React from "react"
import { Gallery, Section, TH } from "components"
import { Picture } from "components/ModalGallery"
import { GIOSTRA_COPERTURA_PVC_DESCRIZIONE, GIOSTRE_COPERTURA_NOTE } from "constants"
import { PRODUCT_GUTTER } from "theme"

const TecnoexerciserCopertura = () => {
  const IMAGES: Picture[] = [
    {
      src: require("assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-2.jpg").default,
      caption: t`Copertura in PVC`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/copertura/copertura-pvc-1.jpg").default,
      caption: t`Copertura in PVC`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-1.jpg").default,
      caption: t`Copertura rigida con lastre ondulate`,
    },
    {
      src: require("assets/products/giostre/tecnoexerciser/copertura/copertura-lastre-ondulate-2.jpg").default,
      caption: t`Copertura rigida con lastre ondulate`,
    },
  ]

  return (
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
}

export default TecnoexerciserCopertura
