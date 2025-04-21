import { Trans } from "@lingui/react/macro";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Section, Th } from "components";
import { usePages } from "hooks";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { ITALIA, SEDE_LEGALE, WEBSITE } from "utils/constants";
export { getStaticProps } from "utils/getProps";

const completeAddress = `${SEDE_LEGALE.streetAddress}, ${SEDE_LEGALE.addressLocality} (${SEDE_LEGALE.country})`;
const completeAddressWithAnna = `${ITALIA.name}, ${completeAddress}`;

const CookiePolicy: React.FC = () => {
  const { PAGES } = usePages();
  return (
    <Section>
      <Th variant="h1" gutterBottom>
        {PAGES.COOKIE_POLICY.title}
      </Th>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans>Titolare del trattamento</Trans>
        </Th>
        <Typography>
          <Trans>
            L'utilizzo di cookie e di tecnologie affini da parte di{" "}
            {SEDE_LEGALE.name}, con sede {completeAddress}, rientra nella
            politica di privacy del Gestore, in conformità a quanto previsto dal
            D. Lgs 196/03 Codice in materia di protezione dei dati personali
            (Codice Privacy) e dal Provvedimento dell’8 maggio 2014
            “Individuazione delle modalità semplificate per l’informativa e
            l’acquisizione del consenso per l’uso dei cookie” del Garante
            Privacy Italiano. {SEDE_LEGALE.name}, in qualità di Titolare del
            trattamento agisce conformemente a quanto previsto dalla normativa
            in materia.
          </Trans>
        </Typography>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans>Che cos'è un cookie?</Trans>
        </Th>
        <Typography>
          <Trans>
            Un cookie è un file di piccole dimensioni che viene inviato al
            browser in uso e salvato sul tuo dispositivo quando visiti un sito
            internet come {WEBSITE} (‘il sito’). I cookie permettono un
            funzionamento efficiente del sito e ne migliorano le prestazioni,
            inoltre forniscono informazioni al proprietario del sito per fini
            statistici o pubblicitari, principalmente per personalizzare la tua
            esperienza di navigazione ricordando le tue preferenze (per esempio
            ricordare la lingua e la valuta che hai impostato, per riconoscerti
            alla visita successiva, ecc.).
          </Trans>
        </Typography>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans>Quali cookie utilizziamo e per quali finalità?</Trans>
        </Th>
        <Typography mb={2}>
          <Trans>
            Il nostro sito utilizza diverse tipologie di cookie di prima parte
            (predisposti e gestiti da {SEDE_LEGALE.name}), cookie di terze parti
            (predisposti e gestiti da soggetti terzi in base alle proprie
            privacy policy e non sotto il controllo di {SEDE_LEGALE.name}),
            ognuna delle quali ha una specifica funzione. Di seguito una tabella
            esplicativa.
          </Trans>
        </Typography>
        <TableContainer component={Box} mt={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="caption">
                    <Trans>Tipologia di cookie</Trans>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    <Trans>Funzione</Trans>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Trans>Cookie di navigazione</Trans>
                </TableCell>
                <TableCell>
                  <Trans>
                    Fin dal primo accesso questi cookie permettono al sito di
                    funzionare correttamente e ti consentono di visualizzare i
                    contenuti sul tuo dispositivo riconoscendo la lingua e il
                    mercato del Paese dal quale scegli di connetterti. Se sei un
                    utente registrato, permetteranno di riconoscerti e di
                    accedere ai servizi delle aree dedicate. I cookie di
                    navigazione sono cookie tecnici e sono necessari al
                    funzionamento del sito.
                  </Trans>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Trans>Cookie Analitici</Trans>
                </TableCell>
                <TableCell>
                  <Trans>
                    Questi cookie di prima parte, sono proprietà di{" "}
                    {SEDE_LEGALE.name} (Gestore del sito) e sono impiegati per
                    raccogliere dati in forma anonima e aggregata. Questi cookie
                    sono utilizzati per elaborare analisi statistiche sulle
                    modalità di navigazione degli utenti sul nostro sito.{" "}
                    {SEDE_LEGALE.name} tratta i risultati di queste analisi in
                    maniera anonima ed esclusivamente per finalità statistiche.
                  </Trans>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Box} mt={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="caption">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Vendor</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">Category</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>_ga</TableCell>
                <TableCell>Google Analytics</TableCell>
                <TableCell>
                  <Trans>Cookie Analitici</Trans>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_ga_11DED996WJ</TableCell>
                <TableCell>Google Analytics</TableCell>
                <TableCell>
                  <Trans>Cookie Analitici</Trans>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>gatsby-gdpr-google-tagmanager</TableCell>
                <TableCell>{SEDE_LEGALE.name}</TableCell>
                <TableCell>
                  <Trans>Cookie di navigazione</Trans>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans>Accesso ai dati e Servizio Clienti</Trans>
        </Th>
        <Typography>
          <Trans>
            Puoi in qualsiasi momento ricevere assistenza e spiegazioni su come
            esercitare il consenso o il diniego selettivo o su come cancellare i
            cookie e tecnologie affini dal tuo browser, inviando una e-mail al
            Servizio Clienti selezionando "Privacy" come argomento o con
            richiesta scritta rivolta a {completeAddressWithAnna} all'indirizzo
            postale della sede legale, daremo tempestivo riscontro.
          </Trans>
        </Typography>
      </Box>
    </Section>
  );
};

export default CookiePolicy;
