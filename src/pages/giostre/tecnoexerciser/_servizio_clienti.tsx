import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { useLocalization } from "gatsby-theme-i18n"
import React from "react"
import { ContentTable, Section, TH } from "src/components"
import { PRODUCT_GUTTER } from "src/theme"

const TecnoexerciserServizioClienti = () => {
  const { locale } = useLocalization()

  const DIMENSIONS = [
    {
      sides: 15,
      size: 12,
      file: require(`src/assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-15.pdf`).default,
    },
    {
      sides: 18,
      size: 14.4,
      file: require(`src/assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-18.pdf`).default,
    },
    {
      sides: 20,
      size: 16,
      file: require(`src/assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-20.pdf`).default,
    },
    {
      sides: 22,
      size: 17.5,
      file: require(`src/assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-22.pdf`).default,
    },
    {
      sides: 24,
      size: 19.2,
      file: require(`src/assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-24.pdf`).default,
    },
  ].map(({ sides, size, file }) => ({
    label: (
      <Trans
        id={`Dimensioni giostra {sides} pannelli {size} mt. e istruzioni preparazione fondo`}
        values={{ sides, size }}
      />
    ),
    file,
  }))

  const MANUALI = {
    it: [
      {
        label: t`Manuale quadro di controllo`,
        file: require("src/assets/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-it.pdf").default,
      },
      {
        label: t`Manuale collegamento elettrico`,
        file: require("src/assets/products/giostre/pdf/giostra-collegamento-elettrico.pdf").default,
      },
      {
        label: t`Procedura di lubrificazione`,
        file: t`https://www.youtube.com/watch?v=QMA4wPxq_ow`,
      },
    ],
    fr: [],
  }[locale]

  const OTHERS = {
    it: [
      {
        label: t`Fac simile domanda installazione giostra`,
        file: require("src/assets/products/giostre/tecnoexerciser/pdf/permessi-it.pdf").default,
      },
    ],
  }[locale]

  return (
    <Section>
      <TH variant="h4">{t`Servizio clienti`}</TH>

      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid item xs={12} md component={ContentTable} rows={DIMENSIONS} title={t`Dimensioni`} />
        {MANUALI && <Grid item xs={12} md component={ContentTable} rows={MANUALI} title={t`Manuale d'istruzioni`} />}
        {OTHERS && <Grid item xs={12} md component={ContentTable} rows={OTHERS} title={t`Altro`} />}
      </Grid>
    </Section>
  )
}

export default TecnoexerciserServizioClienti
