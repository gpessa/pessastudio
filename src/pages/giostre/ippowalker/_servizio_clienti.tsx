import { t, Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { useLocalization } from "gatsby-theme-i18n"
import React from "react"
import { ContentTable, Section, TH } from "components"
import { PRODUCT_GUTTER } from "theme"

const IppowalkerServizioClienti = () => {
  const { locale } = useLocalization()

  const DIMENSIONS = [
    { horses: 4, file: require("assets/products/giostre/ippowalker/pdf/giostra-ippowalker-4.pdf").default },
    { horses: 6, file: require("assets/products/giostre/ippowalker/pdf/giostra-ippowalker-6.pdf").default },
  ].map(({ horses, file }) => ({
    label: <Trans id={`Giostra ${horses} cavalli`} />,
    file,
  }))

  const MANUALI = {
    it: [
      {
        label: t`Manuale quadro di controllo`,
        file: require("assets//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf"),
      },
      {
        label: t`Manuale collegamento elettrico`,
        file: require("assets/products/giostre/pdf/giostra-collegamento-elettrico.pdf").default,
      },
    ],
    fr: [
      {
        label: t`Manuale quadro di controllo`,
        file: require("assets//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf"),
      },
    ],
  }[locale]

  return (
    <Section>
      <TH variant="h4">{t`Servizio clienti`}</TH>

      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid item xs={12} md={6} component={ContentTable} title={t`Dimensioni`} rows={DIMENSIONS} />
        {MANUALI && (
          <Grid item xs={12} md={6} component={ContentTable} title={t`Manuale d'istruzioni`} rows={MANUALI} />
        )}
      </Grid>
    </Section>
  )
}

export default IppowalkerServizioClienti
