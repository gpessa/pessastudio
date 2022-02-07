import { Trans } from "@lingui/macro"
import { Grid } from "@mui/material"
import { ContentTable, Section, TH } from "components"
import { useLocalization } from "gatsby-theme-i18n"
import { usePages } from "hooks"
import React from "react"
import { PRODUCT_GUTTER } from "theme"

const TecnoexerciserServizioClienti = () => {
  const { locale } = useLocalization()
  const { PAGES } = usePages()

  const DIMENSIONS = [
    {
      sides: 15,
      size: 12,
      file: require("assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-15.pdf").default,
    },
    {
      sides: 18,
      size: 14.4,
      file: require("assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-18.pdf").default,
    },
    {
      sides: 20,
      size: 16,
      file: require("assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-20.pdf").default,
    },
    {
      sides: 22,
      size: 17.5,
      file: require("assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-22.pdf").default,
    },
    {
      sides: 24,
      size: 19.2,
      file: require("assets/products/giostre/tecnoexerciser/pdf/giostra-tecnoexerciser-24.pdf").default,
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
        label: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.title,
        link: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.url,
      },
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: require("assets/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-it.pdf").default,
      },
      {
        label: <Trans>Manuale collegamento elettrico</Trans>,
        file: require("assets/products/giostre/pdf/giostra-collegamento-elettrico.pdf").default,
      },
      {
        label: <Trans>Procedura di lubrificazione</Trans>,
        file: "https://www.youtube.com/watch?v=QMA4wPxq_ow",
      },
    ],
    fr: [
      {
        label: <Trans>Manuale quadro di controllo</Trans>,
        file: require("assets/products/giostre/tecnoexerciser/pdf/manuale-quadro-tecnoexerciser-fr.pdf").default,
      },
    ],
  }[locale]

  const OTHERS = {
    it: [
      {
        label: "Fac simile domanda installazione giostra",
        file: require("assets/products/giostre/tecnoexerciser/pdf/permessi-it.pdf").default,
      },
    ],
  }[locale]

  return (
    <Section>
      <TH variant="h4">{<Trans>Supporto clienti</Trans>}</TH>

      <Grid container spacing={PRODUCT_GUTTER}>
        <Grid item xs={12} md component={ContentTable} rows={DIMENSIONS} title={<Trans>Dimensioni</Trans>} />
        {MANUALI && (
          <Grid item xs={12} md component={ContentTable} rows={MANUALI} title={<Trans>Manuale d'istruzioni</Trans>} />
        )}
        {OTHERS && <Grid item xs={12} md component={ContentTable} rows={OTHERS} title={<Trans>Altro</Trans>} />}
      </Grid>
    </Section>
  )
}

export default TecnoexerciserServizioClienti
