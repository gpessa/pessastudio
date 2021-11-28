import { Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { ContentTable, Section, TH } from "components"
import { useLocalization } from "gatsby-theme-i18n"
import React from "react"
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
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: require("assets//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-it.pdf"),
      },
      {
        label: <Trans>Manuale collegamento elettrico</Trans>,
        file: require("assets/products/giostre/pdf/giostra-collegamento-elettrico.pdf").default,
      },
    ],
    fr: [
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: require("assets//products/giostre/ippowalker/pdf/manuale-quadro-ippowalker-fr.pdf"),
      },
    ],
  }[locale]

  return (
    <Section>
      <TH variant="h4">{<Trans>Supporto clienti</Trans>}</TH>

      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid item xs={12} md={6} component={ContentTable} title={<Trans>Dimensioni</Trans>} rows={DIMENSIONS} />
        {MANUALI && (
          <Grid
            item
            xs={12}
            md={6}
            component={ContentTable}
            title={<Trans>Manuale d'istruzioni</Trans>}
            rows={MANUALI}
          />
        )}
      </Grid>
    </Section>
  )
}

export default IppowalkerServizioClienti
