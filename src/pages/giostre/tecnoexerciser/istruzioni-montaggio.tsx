import { Trans } from "@lingui/macro"
import { Box, Typography } from "@mui/material"
import { Path, Section, TH } from "components"
import React from "react"

const STEPS = [
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-01.jpg").default,
    text: <Trans>Trovate e segnate il centro di ciò che sarà la vostra giostra</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-02.jpg").default,
    text: <Trans>Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-04.jpg").default,
    text: <Trans>Ancorate al suolo i supporti della giostra</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-05.jpg").default,
    text: <Trans>Montate il fondo della giostra</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-06.jpg").default,
    text: <Trans>Ancorate il gruppo motore</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-07.jpg").default,
    text: <Trans>Assicuratevi di bloccare la giostra alla giusta altezza e piana</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-08.jpg").default,
    text: <Trans>Montate le braccia di separazione</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-09.jpg").default,
    text: <Trans>Collegate le braccia di separazione attraverso i cavi</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-10.jpg").default,
    text: <Trans>Montate le porte di separazione</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-11.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-12.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-13.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-14.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-15.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-16.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-17.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
  {
    image: require("assets/products/giostre/tecnoexerciser/montaggio/step-18.jpg").default,
    text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
  },
]

const IstruzioniMontaggio: React.FC = () => (
  <Section>
    <Box mb={3} textAlign="center">
      <TH variant="h2">{<Trans>Istruzioni di montaggio</Trans>}</TH>
      <Typography>{<Trans>Segui le semplici istruzioni per montare la nostra giostra</Trans>}</Typography>
    </Box>
    <Path steps={STEPS} />
  </Section>
)

export default IstruzioniMontaggio
