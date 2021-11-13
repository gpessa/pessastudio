import { Section, TH, Ul } from "src/components"
import { t, Trans } from "@lingui/macro"
import { Box, Link, Typography } from "@mui/material"
import { PRODUCT_GUTTER } from "src/theme"
import React from "react"
import { ITALIA, SEDE_LEGALE } from "./contatti"

const CookiePolicy: React.FC = () => (
  <>
    <Section>
      <TH variant="h1" gutterBottom>{t`Cookie policy`}</TH>
      <Typography>
        <Trans>
          Scopo di questa Politica sulla privacy è di informarvi in merito ai dati che vengono raccolti su di voi,
          all’utilizzo che ne possiamo fare ed al modo in cui tali informazioni possono essere corrette o modificate.
        </Trans>
      </Typography>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Titolare del trattamento e dati di contatto</Trans>
        </TH>
        <Typography>
          <Trans>
            {SEDE_LEGALE.name}, il cui Responsabile del Trattamento dei Dati è raggiungibile al numero{" "}
            {ITALIA.telephone}, sede legale eletta in{" "}
            {`${SEDE_LEGALE.streetAddress}, ${SEDE_LEGALE.postalCode} ${SEDE_LEGALE.addressLocality}, ${SEDE_LEGALE.addressRegion}`}
          </Trans>
        </Typography>
      </Box>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Finalità del trattamento dei dati</Trans>
        </TH>
        <Typography>
          <Trans>
            La raccolta e il trattamento dei dati personali e sensibili forniti sarà effettuato nel rispetto delle
            disposizioni legislative e regolamentari in materia di protezione dei dati personali vigenti e in
            particolare in conformità del art. 13 D. Lgs. 196/03 ed art. 13 Regolamento UE 2016/679 (d’ora in avanti
            denominato con l’acronimo GDPR) "Regolamento relativo alla protezione delle persone fisiche con riguardo al
            trattamento dei dati personali". I dati personali forniti dagli utenti che inoltrano richieste e/o
            comunicazioni a mezzo e-mail sono, peraltro, utilizzati al fine di eseguire il servizio o la prestazione
            richiesta attraverso il modulo contatti.
          </Trans>
        </Typography>
      </Box>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Modalità del trattamento dei dati</Trans>
        </TH>
        <Typography>
          <Trans>
            I vostri dati personali, ivi compresi quelli sensibili, verranno trattati con strumenti sia manuali che
            automatizzati, rispettando, in ogni caso, le prescrizioni in materia di sicurezza.
          </Trans>
        </Typography>
      </Box>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Diritto di accesso ai dati personali</Trans>
        </TH>
        <Typography>
          <Trans>
            È sempre possibile richiedere dettagli sui vostri Dati Personali ed esercitare gli altri diritti previsti
            dall'art. 7 del Codice Privacy e, pertanto, chiedere in ogni momento l'origine dei dati, la correzione,
            l'aggiornamento o l'integrazione dei dati inesatti o incompleti.
          </Trans>
        </Typography>
      </Box>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Trattamento e Diffusione dei dati</Trans>
        </TH>
        <Typography>
          <Trans>
            I vostri dati verranno trattati esclusivamente da {SEDE_LEGALE.name}e da professionisti o società di servizi
            per l'amministrazione e gestione aziendale che operino per conto della nostra azienda. Non saranno ceduti
            per nessun motivo ad aziende terze a meno di esplicito consenso da parte dell’interessato.
          </Trans>
        </Typography>
      </Box>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Diritti dell’interessato</Trans>
        </TH>
        <Trans>
          <Typography paragraph>
            Ai sensi dell’art. 13, punto 2 del RE 679/2016, l'interessato puo' esercitare i propri diritti contattando
            il titolare del trattamento (con le modalità sopra elencate):
          </Typography>
          <Ul>
            <li>Accesso ai dati personali</li>
            <li>Rettifica o cancellazione degli stessi</li>
            <li>Opposizione al trattamento</li>
            <li>Portabilità dei dati</li>
            <li>Revoca del consenso</li>
            <li>
              Reclamo all’autorità di controllo, per l’Italia{" "}
              <Link href="https://www.garanteprivacy.it/web/guest/home/footer/contatti">Garante della Privacy</Link>
            </li>
          </Ul>
        </Trans>
      </Box>
    </Section>

    <Section sx={{ paddingTop: "0!important" }}>
      <Typography variant="h2">{t`Cookie utilizzati dal presente sito`}</Typography>

      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Google analytics</Trans>
        </TH>
        <Trans>
          <Typography paragraph>
            Sul sito sono presenti i cookie tecnici di terze parti di google analytics, questo è un servizio di analisi
            web fornito da Google Inc. ("Google"). Questi permettono di registrare e visualizzare informazioni sull’uso
            del sito Web. Questi cookie permettono di ottenere informazioni tecniche dettagliate come:
          </Typography>
          <Ul>
            <li>Il percorso di navigazione dell’utente</li>
            <li>il numero di pagine visitate,</li>
            <li>Il tempo trascorso tra un clic e un altro </li>
            <li>La visualizzazione di determinate risorse </li>
          </Ul>
          <br />
          <Typography paragraph>
            Questi i cookie tengono traccia dei percorsi di navigazione permettendoci così di analizzare l’esperienza
            d’uso e migliorarne l’usabilità. Ciò che viene analizzato è il dato legato all’utente, ma quest’ultimo non
            viene mai identificato.
          </Typography>
          <Ul>
            <li>
              <Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usageprivacy">
                Informativa gestione dati
              </Link>
            </li>
            <li>
              <Link href="http://www.google.com/intl/en/analytics/privacyoverview.html">Informativa privacy</Link>
            </li>
            <li>
              <Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
                Uso cookie google analytics
              </Link>
            </li>
          </Ul>
        </Trans>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <TH variant="h5" gutterBottom sans>
          <Trans>Google maps</Trans>
        </TH>
        <Typography>
          <Trans>
            Utilizziamo Google Maps per fornire informazioni dettagliate su come individuare i nostri punti vendita e
            crediamo che contribuisca alla tua esperienza nell'uso del nostro Sito (
            <Link href="http://www.google.it/intl/it/policies/privacy">Informativa privacy</Link>)
          </Trans>
        </Typography>
      </Box>
    </Section>
  </>
)

export default CookiePolicy
