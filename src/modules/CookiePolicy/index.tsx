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
import { Trans } from "next-i18next";
import React from "react";
import { PRODUCT_GUTTER } from "theme";
import { ITALIA, SEDE_LEGALE } from "utils/constants";

const completeAddress = `${SEDE_LEGALE.streetAddress}, ${SEDE_LEGALE.addressLocality} (${SEDE_LEGALE.addressCountry})`;
const completeAddressWithAnna = `${ITALIA.name}, ${completeAddress}`;

const CookiePolicy: React.FC = () => (
  <>
    <Section>
      <Th variant="h1" gutterBottom>
        <Trans i18nKey={"cookiePolicy.title"}>Cookie policy</Trans>
      </Th>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans i18nKey={"cookiePolicy.owner.title"}>
            Titolare del trattamento
          </Trans>
        </Th>
        <Typography>
          <Trans i18nKey={"cookiePolicy.owner.text"}>
            L'utilizzo di cookie e di tecnologie affini da parte di{" "}
            {{ name: SEDE_LEGALE.name }}, con sede {{ completeAddress }},
            rientra nella politica di privacy del Gestore, in conformità a
            quanto previsto dal D. Lgs 196/03 Codice in materia di protezione
            dei dati personali (Codice Privacy) e dal Provvedimento dell’8
            maggio 2014 “Individuazione delle modalità semplificate per
            l’informativa e l’acquisizione del consenso per l’uso dei cookie”
            del Garante Privacy Italiano. {{ name: SEDE_LEGALE.name }}, in
            qualità di Titolare del trattamento agisce conformemente a quanto
            previsto dalla normativa in materia
          </Trans>
        </Typography>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans i18nKey={"cookiePolicy.whatIs.title"}>
            Che cos'è un cookie?
          </Trans>
        </Th>
        <Typography>
          <Trans i18nKey={"cookiePolicy.whatIs.text"}>
            Un cookie è un file di piccole dimensioni che viene inviato al
            browser in uso e salvato sul tuo dispositivo quando visiti un sito
            internet come pessastudio.eu (‘il sito’). I cookie permettono un
            funzionamento efficiente del sito e ne migliorano le prestazioni,
            inoltre forniscono informazioni al proprietario del sito per fini
            statistici o pubblicitari, principalmente per personalizzare la tua
            esperienza di navigazione ricordando le tue preferenze (per esempio
            ricordare la lingua e la valuta che hai impostato, per riconoscerti
            alla visita successiva, ecc.)
          </Trans>
        </Typography>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans i18nKey={"cookiePolicy.whichOnes.title"}>
            Quali cookie utilizziamo e per quali finalità?
          </Trans>
        </Th>
        <Typography mb={2}>
          <Trans i18nKey={"cookiePolicy.whichOnes.text"}>
            Il nostro sito utilizza diverse tipologie di cookie di prima parte
            (predisposti e gestiti da {{ name: SEDE_LEGALE.name }}), cookie di
            terze parti (predisposti e gestiti da soggetti terzi in base alle
            proprie privacy policy e non sotto il controllo di{" "}
            {{ name: SEDE_LEGALE.name }}), ognuna delle quali ha una specifica
            funzione. Di seguito una tabella esplicativa
          </Trans>
        </Typography>
        <TableContainer component={Box} mt={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="caption">
                    <Trans i18nKey={"cookiePolicy.table1.header.typology"}>
                      Tipologia di cookie
                    </Trans>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    <Trans i18nKey={"cookiePolicy.table1.header.function"}>
                      Funzione
                    </Trans>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.navigation.name"}>
                    Cookie di navigazione
                  </Trans>
                </TableCell>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.navigation.text"}>
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
                  <Trans i18nKey={"cookiePolicy.type.analytics.name"}>
                    Cookie Analitici
                  </Trans>
                </TableCell>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.analytics.text"}>
                    Questi cookie di prima parte, sono proprietà di{" "}
                    {{ name: SEDE_LEGALE.name }} (Gestore del sito) e sono
                    impiegati per raccogliere dati in forma anonima e aggregata.
                    Questi cookie sono utilizzati per elaborare analisi
                    statistiche sulle modalità di navigazione degli utenti sul
                    nostro sito. {{ name: SEDE_LEGALE.name }} tratta i risultati
                    di queste analisi in maniera anonima ed esclusivamente per
                    finalità statistiche.
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
                  <Typography variant="caption">
                    <Trans i18nKey={"cookiePolicy.table2.header.name"}>
                      Name
                    </Trans>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    <Trans i18nKey={"cookiePolicy.table2.header.vendor"}>
                      Vendor
                    </Trans>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption">
                    <Trans i18nKey={"cookiePolicy.table2.header.category"}>
                      Category
                    </Trans>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>_ga</TableCell>
                <TableCell>Google Analytics</TableCell>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.analytics.name"}>
                    Cookie Analitici
                  </Trans>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>_ga_11DED996WJ</TableCell>
                <TableCell>Google Analytics</TableCell>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.analytics.name"}>
                    Cookie Analitici
                  </Trans>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>gatsby-gdpr-google-tagmanager</TableCell>
                <TableCell>{SEDE_LEGALE.name}</TableCell>
                <TableCell>
                  <Trans i18nKey={"cookiePolicy.type.navigation.name"}>
                    Cookie di navigazione
                  </Trans>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box my={PRODUCT_GUTTER}>
        <Th variant="h5" gutterBottom sans>
          <Trans i18nKey={"cookiePolicy.access.title"}>
            Accesso ai dati e Servizio Clienti
          </Trans>
        </Th>
        <Typography>
          <Trans i18nKey={"cookiePolicy.access.text"}>
            Puoi in qualsiasi momento ricevere assistenza e spiegazioni su come
            esercitare il consenso o il diniego selettivo o su come cancellare i
            cookie e tecnologie affini dal tuo browser, inviando una e-mail al
            Servizio Clienti selezionando "Privacy" come argomento o con
            richiesta scritta rivolta a {{ completeAddressWithAnna }}{" "}
            all'indirizzo postale della sede legale, daremo tempestivo riscontro
          </Trans>
        </Typography>
      </Box>
    </Section>
  </>
);

export default CookiePolicy;
