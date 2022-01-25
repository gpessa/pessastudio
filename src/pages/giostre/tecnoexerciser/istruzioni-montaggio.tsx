import { Trans } from "@lingui/macro"
import { Box, Typography } from "@mui/material"
import { Path, Section, TH } from "components"
import React from "react"

const IstruzioniMontaggio: React.FC = () => {
  const STEPS = [
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-01.jpg").default,
      text: "Trovate e segnate il centro di ciò che sarà la vostra giostra",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-02.jpg").default,
      text: "Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-04.jpg").default,
      text: "Ancorate al suolo i supporti della giostra",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-05.jpg").default,
      text: "Montate il fondo della giostra",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-06.jpg").default,
      text: "Ancorate il gruppo motore",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-07.jpg").default,
      text: "Assicuratevi di bloccare la giostra alla giusta altezza e piana",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-08.jpg").default,
      text: "Montate le braccia di separazione",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-09.jpg").default,
      text: "Collegate le braccia di separazione attraverso i cavi",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-10.jpg").default,
      text: "Montate le porte di separazione",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-11.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-12.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-13.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-14.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-15.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-16.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-17.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
    {
      image: require("assets/products/giostre/tecnoexerciser/montaggio/step-18.jpg").default,
      text: "Assicuratevi che le porte corrispondano alla figura",
    },
  ]

  return (
    <Section>
      <Box mb={3} textAlign="center">
        <TH variant="h2">{<Trans>Istruzioni di montaggio</Trans>}</TH>
        <Typography>Segui le semplici istruzioni per montare la nostra giostra</Typography>
      </Box>
      <Path steps={STEPS} />
    </Section>
  )
}

export default IstruzioniMontaggio
