import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { Link } from "gatsby-material-ui-components"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import React from "react"
import { Accessori, Columns, Compare, ContentTable, Gallery, Section, TH, Video } from "src/components"
import { GIOSTRE_ATTRIBUTES, PAGES } from "src/constants"
import Copertura, { IMAGES } from "./_copertura"
import Corridoi from "./_corridoi"
import { ACCESSORI, DIMENSIONS, MANUALI_LOCALIZZATI, PRODUCTS } from "./_informations"

const Ippowalker: React.FC = () => {
  const { locale } = useLocalization()

  // This needs to be here otherwise translations for links breaks
  const MANUALI = [
    {
      label: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.title,
      link: PAGES.GIOSTRE_IPPOWALKER_ISTRUZIONI_MONTAGGIO.url,
    },
    ...(MANUALI_LOCALIZZATI[locale] || []),
  ]

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{t`Ippowalker`}</TH>
            <Trans>
              <Typography paragraph>
                Ippowalker è una giostra di recente realizzazione, essa nasce dal sogno di poter fornire uno strumento
                di allenamento professionale anche a coloro che ne fanno un uso sporadico.
              </Typography>
              <Typography paragraph>
                La giostra è disponibile in due diametri 12 mt. (4 cavalli) e 14.2 mt. (6 cavalli).
              </Typography>
              <Typography paragraph>
                Costruita con la qualità e la robustezza che contraddistingue tutti i nostri prodotti essa rappresenta
                uno strumento semplice ed essenziale ma al contempo completo.
              </Typography>
              <Typography>
                Malgrado Ippowalker sia una giostra più economica abbiamo mantenuto tutte le opzioni base per allenare
                il tuo cavallo.
              </Typography>
              <Typography>
                <strong>Porte di separazione elettrificate</strong> ottenute grazie a tubi di plastica
                elettroconduttiva.
              </Typography>
              <Typography paragraph>
                Un <strong>pannello di controllo</strong> che ti permetterà di di scegliere tra un programma manuale e
                uno periodico.
              </Typography>
              <Typography>
                Al contrario del modello{" "}
                <Link component={LocalizedLink} to={PAGES.GIOSTRE_TECNOEXERCISER.url}>
                  Tecnoexercize
                </Link>
                , questo modello non dispone di irrigazione.
              </Typography>
            </Trans>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Video src={"https://www.youtube-nocookie.com/embed/slFfbd7kTzg"} title={t`Video giostra in movimento`} />

      <Corridoi />

      <Copertura />

      <Accessori {...ACCESSORI} />

      <Compare title={t`Gamma`} products={PRODUCTS} attributes={GIOSTRE_ATTRIBUTES} />

      <Section>
        <TH variant="h4">{t`Servizio clienti`}</TH>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentTable title={t`Dimensioni`} rows={DIMENSIONS} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentTable title={t`Manuale d'istruzioni`} rows={MANUALI} />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Ippowalker
