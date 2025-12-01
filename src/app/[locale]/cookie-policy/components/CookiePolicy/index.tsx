"use client";

import { Trans } from "@lingui/react/macro";
import {
  Link,
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
import { ReactNode } from "react";
import { ITALIA, NAME_LEGAL_STRING } from "utils/constants";

interface CookieData {
  nome: string;
  fornitore: ReactNode;
  scopo: ReactNode;
  durata: ReactNode;
  categoria: ReactNode;
  policyLink: ReactNode; // NUOVO CAMPO
}

interface Column {
  id: keyof CookieData; // La chiave nell'oggetto CookieData
  label: ReactNode; // L'intestazione da visualizzare
}

const columns: Column[] = [
  { id: "nome", label: <Trans>Nome Cookie</Trans> },
  { id: "fornitore", label: <Trans>Fornitore</Trans> },
  { id: "scopo", label: <Trans>Scopo</Trans> },
  { id: "durata", label: <Trans>Durata Tipica</Trans> },
  { id: "categoria", label: <Trans>Categoria (GDPR)</Trans> },
  { id: "policyLink", label: <Trans>Policy del Fornitore</Trans> }, // NUOVA COLONNA
];

const cookies: CookieData[] = [
  {
    nome: "NEXT_LOCALE",
    fornitore: <Trans>Prima Parte (Tuo Sito)</Trans>,
    scopo: (
      <Trans>
        Gestione della Localizzazione. Memorizza la lingua di visualizzazione
        preferita selezionata dall'utente (es. it, en). Essenziale per le
        applicazioni basate su framework come Next.js che supportano
        l'internazionalizzazione.
      </Trans>
    ),
    durata: <Trans>1 Anno</Trans>,
    categoria: <Trans>Tecnico (Preferenze)</Trans>,
    policyLink: <Trans>N/A</Trans>, // Prima Parte
  },
  {
    nome: "_fbc",
    fornitore: <Trans>Meta (Facebook)</Trans>,
    scopo: (
      <Trans>
        Attribuzione del Click (Facebook Click ID). Viene creato quando un
        utente arriva sul sito cliccando su un annuncio di Facebook/Instagram.
        Consente di collegare le azioni dell'utente (es. acquisti) alla
        specifica campagna pubblicitaria Meta che ha generato il traffico.
      </Trans>
    ),
    durata: <Trans>3 Mesi</Trans>,
    categoria: <Trans>Marketing/Targeting</Trans>,
    policyLink: (
      <Link
        href="https://www.facebook.com/privacy/policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans>Informativa Meta</Trans>
      </Link>
    ),
  },
  {
    nome: "_fbp",
    fornitore: <Trans>Meta (Facebook)</Trans>,
    scopo: (
      <Trans>
        Identificazione Browser (Facebook Browser ID). Contiene un ID browser
        univoco generato dal Pixel di Meta. Utilizzato per scopi di misurazione,
        ottimizzazione degli annunci e re-targeting, consentendo a Meta di
        mostrare annunci pertinenti all'utente in un secondo momento.
      </Trans>
    ),
    durata: <Trans>3 Mesi</Trans>,
    categoria: <Trans>Marketing/Targeting</Trans>,
    policyLink: (
      <Link
        href="https://www.facebook.com/privacy/policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans>Informativa Meta</Trans>
      </Link>
    ),
  },
  {
    nome: "_ga",
    fornitore: <Trans>Google Analytics</Trans>,
    scopo: (
      <Trans>
        Identificativo Utente Unico. Registra un ID univoco (Client ID) che
        identifica in modo anonimo un singolo utente/browser. Usato per
        distinguere gli utenti e generare dati statistici sull'uso del sito
        (numero di visitatori, sessioni, ecc.).
      </Trans>
    ),
    durata: <Trans>2 Anni</Trans>,
    categoria: <Trans>Analitico/Statistico</Trans>,
    policyLink: (
      <Link
        href="https://policies.google.com/privacy?hl=it"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans>Norme sulla Privacy di Google</Trans>
      </Link>
    ),
  },
  {
    nome: "_ga_QW9Q2X9B1Y",
    fornitore: <Trans>Google Analytics</Trans>,
    scopo: (
      <Trans>
        Dati di Sessione Specifici (GA4). Cookie specifico per le proprietà
        Google Analytics 4. Utilizzato per mantenere lo stato della sessione di
        navigazione e memorizzare informazioni sul traffico di origine (es. da
        dove proviene l'utente).
      </Trans>
    ),
    durata: <Trans>2 Anni</Trans>,
    categoria: <Trans>Analitico/Statistico</Trans>,
    policyLink: (
      <Link
        href="https://policies.google.com/privacy?hl=it"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Trans>Norme sulla Privacy di Google</Trans>
      </Link>
    ),
  },
  {
    nome: "CookieConsent",
    fornitore: <Trans>Prima Parte (Tuo Sito)</Trans>,
    scopo: (
      <Trans>
        Memorizzazione del Consenso. Registra se l'utente ha accettato o meno
        l'uso dei cookie e quali categorie ha scelto. Essenziale per il rispetto
        del GDPR e della normativa sui cookie.
      </Trans>
    ),
    durata: <Trans>1 Anno</Trans>,
    categoria: <Trans>Tecnico (Necessario)</Trans>,
    policyLink: <Trans>N/A</Trans>, // Prima Parte
  },
];

// ----------------------------------------------
// 3. COMPONENTE TABELLA
// ----------------------------------------------

export const CookieTable: React.FC = () => (
  <TableContainer>
    <Table stickyHeader aria-label="tabella dei cookie del sito">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id} align="left">
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {cookies.map((row) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.nome}>
            {columns.map(({ id }) => (
              <TableCell key={id} align="left">
                {row[id]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

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
        content: <CookieTable />,
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
