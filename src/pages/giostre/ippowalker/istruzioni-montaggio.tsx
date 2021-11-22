import { t, Trans } from "@lingui/macro"
import { Box, Typography } from "@mui/material"
import React from "react"
import { Path, Section, TH } from "components"

const IstruzioniMontaggio: React.FC = () => {
  const STEPS = [
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-01.jpg").default,
      text: <Trans>Trovate e segnate il centro di ciò che sarà la vostra giostra</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-02.jpg").default,
      text: <Trans>Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-04.jpg").default,
      text: <Trans>Ancorate al suolo i supporti della giostra</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-05.jpg").default,
      text: <Trans>Montate il fondo della giostra</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-06.jpg").default,
      text: <Trans>Ancorate il gruppo motore</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-07.jpg").default,
      text: <Trans>Assicuratevi di bloccare la giostra alla giusta altezza e piana</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-08.jpg").default,
      text: <Trans>Montate le braccia di separazione</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-09.jpg").default,
      text: <Trans>Collegate le braccia di separazione attraverso i cavi</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-10.jpg").default,
      text: <Trans>Montate le porte di separazione</Trans>,
    },
    {
      image: require("assets/products/giostre/ippowalker/montaggio/step-11.jpg").default,
      text: <Trans>Assicuratevi che le porte corrispondano alla figura</Trans>,
    },
  ]

  return (
    <Section>
      <Box mb={3} textAlign="center">
        <TH variant="h2">{t`Istruzioni di montaggio`}</TH>
        <Typography>{t`Segui le semplici istruzioni per montare la nostra giostra`}</Typography>
      </Box>
      <Path steps={STEPS} />
    </Section>
  )
}

export default IstruzioniMontaggio
