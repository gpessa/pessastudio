import { Path, Section, TH } from "@components"
import { t } from "@lingui/macro"
import { Box, Typography } from "@mui/material"
import { withPrefix } from "gatsby"
import React from "react"

const STEPS = [
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-01.jpg"),
    text: t`Trovate e segnate il centro di ciò che sarà la vostra giostra`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-02.jpg"),
    text: t`Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-04.jpg"),
    text: t`Ancorate al suolo i supporti della giostra`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-05.jpg"),
    text: t`Montate il fondo della giostra`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-06.jpg"),
    text: t`Ancorate il gruppo motore`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-07.jpg"),
    text: t`Assicuratevi di bloccare la giostra alla giusta altezza e piana`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-08.jpg"),
    text: t`Montate le braccia di separazione`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-09.jpg"),
    text: t`Collegate le braccia di separazione attraverso i cavi`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-10.jpg"),
    text: t`Montate le porte di separazione`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-11.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-12.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-13.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-14.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-15.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-16.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-17.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
  {
    image: withPrefix("/products/giostre/tecnoexerciser/montaggio/step-18.jpg"),
    text: t`Assicuratevi che le porte corrispondano alla figura`,
  },
]

const IstruzioniMontaggio: React.FC = () => (
  <Section>
    <Box mb={3} textAlign="center">
      <TH variant="h2">{t`Istruzioni di montaggio`}</TH>
      <Typography>{t`Segui le semplici istruzioni per montare la nostra giostra`}</Typography>
    </Box>
    <Path steps={STEPS} />
  </Section>
)

export default IstruzioniMontaggio
