"use client";

import { Trans } from "@lingui/react/macro";
import {
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LegalPage } from "components";
import { usePages } from "hooks";
import useGdprConsent from "hooks/useGdprConsent";
import { ITALIA, NAME_LEGAL_STRING } from "utils/constants";

const CookiePolicy: React.FC = () => {
  const { PAGES } = usePages();
  const { showCookieConsent } = useGdprConsent();

  const CONTENT = {
    title: PAGES.COOKIE_POLICY.title,
    intro: (
      <Typography>
        <Trans>
          Questa Cookie Policy spiega cosa sono i cookie, quali cookie
          utilizziamo sul sito di {NAME_LEGAL_STRING} e come l’utente può
          gestire le proprie preferenze.
          <br />
          L’utilizzo dei cookie avviene in conformità al GDPR e alle linee guida
          europee.
        </Trans>
      </Typography>
    ),
    sections: [
      {
        title: <Trans>Cosa sono i Cookie</Trans>,
        content: (
          <Typography>
            <Trans>
              I cookie sono piccoli file di testo che i siti web inviano al
              browser dell’utente.
              <br />
              Vengono utilizzati per migliorare l’esperienza di navigazione,
              analizzare il traffico e offrire contenuti personalizzati.
            </Trans>
          </Typography>
        ),
      },
      {
        title: <Trans>Base Giuridica del Trattamento</Trans>,
        content: (
          <Typography>
            <Trans>
              L’installazione dei cookie tecnici è basata sul legittimo
              interesse.
              <br />I cookie di analytics, marketing e terze parti vengono
              installati solo previa accettazione esplicita tramite banner
              cookie.
            </Trans>
          </Typography>
        ),
      },
      {
        title: <Trans>Tipologie di Cookie Utilizzati</Trans>,
        content: (
          <Trans>
            <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome del Cookie</TableCell>
                    <TableCell>Durata stimata</TableCell>
                    <TableCell>Tipo di Parte</TableCell>
                    <TableCell>Tipologia (GDPR)</TableCell>
                    <TableCell>Descrizione</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      NEXT\_LOCALE
                    </TableCell>
                    <TableCell>1 Anno</TableCell>
                    <TableCell>Prima Parte</TableCell>
                    <TableCell>Tecnico (Preferenze)</TableCell>
                    <TableCell>
                      Memorizza la lingua di visualizzazione preferita
                      dell'utente.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      CookieConsent
                    </TableCell>
                    <TableCell>1 Anno</TableCell>
                    <TableCell>Prima Parte</TableCell>
                    <TableCell>Tecnico (Necessario)</TableCell>
                    <TableCell>
                      Registra e memorizza la preferenza di consenso dell'utente
                      al banner.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      \_ga
                    </TableCell>
                    <TableCell>2 Anni</TableCell>
                    <TableCell>Terza Parte (Google)</TableCell>
                    <TableCell>Analitico/Statistico</TableCell>
                    <TableCell>
                      Registra un ID univoco per distinguere i visitatori e
                      tracciare le sessioni.
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: 0 }}
                    >
                      \_ga\_1I0DED996WU
                    </TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>2 Anni</TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>
                      Terza Parte (Google)
                    </TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>
                      Analitico/Statistico
                    </TableCell>
                    <TableCell sx={{ borderBottom: 0 }}>
                      Mantiene lo stato della sessione di navigazione per lo
                      specifico ID di misurazione GA4.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Trans>
        ),
      },
      {
        title: <Trans>Come Gestire o Revocare il Consenso</Trans>,
        content: (
          <Typography>
            <Trans>
              L’utente può modificare in qualsiasi momento le proprie{" "}
              <Link onClick={showCookieConsent}>preferenze</Link>.
              <br />È inoltre possibile gestire i cookie tramite le impostazioni
              del browser o strumenti esterni come YourOnlineChoices.
            </Trans>
          </Typography>
        ),
      },
      {
        title: <Trans>Modifiche alla Cookie Policy</Trans>,
        content: (
          <Typography>
            <Trans>
              Questa Cookie Policy può essere aggiornata per conformarsi a
              normative o cambiamenti tecnologici.
              <br />
              Le modifiche saranno pubblicate su questa pagina.
            </Trans>
          </Typography>
        ),
      },
      {
        title: <Trans>Contatti</Trans>,
        content: (
          <Trans>
            Per richieste relative ai cookie o al trattamento dei dati personali
            è possibile scrivere a:{" "}
            <Link href={`mailto:${ITALIA.email}`}>{ITALIA.email}</Link>
          </Trans>
        ),
      },
    ],
  };

  return <LegalPage {...CONTENT} />;
};

export default CookiePolicy;
