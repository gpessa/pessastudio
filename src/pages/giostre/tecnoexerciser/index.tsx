import { t, Trans } from "@lingui/macro"
import { Grid, Typography } from "@mui/material"
import { useLocalization } from "gatsby-theme-i18n"
import React from "react"
import { Accessori, Columns, Compare, ContentTable, Gallery, Section, TH, Ul, Video } from "src/components"
import { GIOSTRE_ATTRIBUTES, PAGES } from "src/constants"
import { PRODUCT_GUTTER } from "src/theme"
import Copertura from "./_copertura"
import Corridoi from "./_corridoi"
import { ACCESSORI, DIMENSIONS, IMAGES, MANUALI_LOCALIZZATI, OTHERS_LOCALIZZATI, PRODUCTS } from "./_informations"

const Tecnoexerciser: React.FC = () => {
  const { locale } = useLocalization()

  // This needs to be here otherwise translations for links breaks
  const MANUALI = [
    {
      label: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.title,
      link: PAGES.GIOSTRE_TECNOEXERCISER_ISTRUZIONI_MONTAGGIO.url,
    },
    ...(MANUALI_LOCALIZZATI[locale] || []),
  ]

  const OTHERS = OTHERS_LOCALIZZATI[locale]

  return (
    <>
      <Columns
        left={
          <>
            <TH variant="h1">{t`Tecnoexerciser`}</TH>
            <Trans>
              <Typography paragraph>Tecnoexerciser è il modello di giostra attualmente più richiesto.</Typography>
              <Typography paragraph>
                Oggi, grazie alle già note caratteristiche tecniche e alla grande affidabilità, abbiamo aggiunto anche
                alcune specifiche funzioni che fanno, di questo modello, la macchina <strong>leader</strong> del
                settore.
              </Typography>
              <Typography paragraph>È possibile infatti:</Typography>
              <Ul sx={{ mb: 2 }}>
                <li>Scegliere la forza che la porta mobile esercita sugli animali per invitarli ad avanzare</li>
                <li>Mantenere un controllo costante sull'elettrificazione delle porte mobili</li>
                <li>
                  Beneficiare dell'innovativo sistema "training program" che vi consentirà di allenare i vostri cavalli
                  fino ad ottenere performance atletiche.
                </li>
                <li>Scegliere il programma di irrigazione pesta mentre la giostra sta girando</li>
              </Ul>
              <Typography paragraph>
                La struttura è fornita, a seconda delle esigenze, o con punte per l'ancoraggio al suolo o con tasselli
                nel caso in cui si desideri ancorarla ad un fondo di calcestruzzo.
              </Typography>
            </Trans>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Video src={"https://www.youtube-nocookie.com/embed/mkB5ZPK9swA"} title={t`Video giostra in movimento`} />

      <Corridoi />

      <Copertura />

      <Accessori {...ACCESSORI} />

      <Compare title={t`Gamma`} products={PRODUCTS} attributes={GIOSTRE_ATTRIBUTES} />

      <Section>
        <TH variant="h4">{t`Servizio clienti`}</TH>

        <Grid container spacing={5}>
          <Grid item xs={12} md>
            <ContentTable rows={DIMENSIONS} title={t`Dimensioni`} />
          </Grid>

          <Grid item xs={12} md>
            <ContentTable rows={MANUALI} title={t`Manuale d'istruzioni`} sx={{ mb: PRODUCT_GUTTER }} />
          </Grid>

          <Grid item xs={12} md>
            <ContentTable rows={OTHERS} title={t`Altro`} />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Tecnoexerciser
