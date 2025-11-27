"use client";

import { Trans } from "@lingui/react/macro";
import {
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { LegalPage, Ul } from "components";
import { usePages } from "hooks";
import Cookies from "js-cookie";
import { GDPR_COOKIE_NAME, ITALIA } from "utils/constants";

const CookieCategoriesTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Categoria</TableCell>
          <TableCell>Descrizione</TableCell>
          <TableCell>Esempi di Cookie / Servizi</TableCell>
          <TableCell>Necessita consenso?</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {/* --- Technical Cookies --- */}
        <TableRow>
          <TableCell>
            <strong>Cookie Tecnici</strong>
          </TableCell>
          <TableCell>
            Necessari al funzionamento del sito. Non memorizzano informazioni
            personali utilizzabili per il profiling.
          </TableCell>
          <TableCell>
            <Ul>
              <li>Cookie banner </li>
              <li>Preferenze base del sito</li>
              <li>Caricamento pagine</li>
            </Ul>
          </TableCell>
          <TableCell>No</TableCell>
        </TableRow>

        {/* --- Analytics Cookies --- */}
        <TableRow>
          <TableCell>
            <strong>Cookie Analitici</strong>
          </TableCell>
          <TableCell>
            Utilizzati per raccogliere dati statistici aggregati e anonimi
            sull’uso del sito, come pagine visitate e tempo di permanenza.
          </TableCell>
          <TableCell>
            <Ul>
              <li>Google Analytics (GA4)</li>
              <li>Eventuali strumenti di analisi del traffico</li>
            </Ul>
          </TableCell>
          <TableCell>Sì</TableCell>
        </TableRow>

        {/* --- Marketing Cookies --- */}
        <TableRow>
          <TableCell>
            <strong>Cookie di Marketing</strong>
          </TableCell>
          <TableCell>
            Permettono di mostrare annunci personalizzati e misurare le
            performance delle campagne pubblicitarie.
          </TableCell>
          <TableCell>
            <Ul>
              <li>Meta Pixel (Facebook / Instagram)</li>
              <li>Eventuali strumenti di advertising</li>
            </Ul>
          </TableCell>
          <TableCell>Sì</TableCell>
        </TableRow>

        {/* --- Third Party Cookies --- */}
        <TableRow>
          <TableCell style={{ borderBottom: 0 }}>
            <strong>Cookie di Terze Parti</strong>
          </TableCell>
          <TableCell style={{ borderBottom: 0 }}>
            Cookie generati da servizi esterni integrati nel sito. Possono
            raccogliere dati anche senza interazione diretta.
          </TableCell>
          <TableCell style={{ borderBottom: 0 }}>
            <Ul>
              <li>YouTube (video integrati)</li>
              <li>Google Maps (mappe integrate)</li>
              <li>CDN e servizi esterni caricati via embed</li>
            </Ul>
          </TableCell>
          <TableCell style={{ borderBottom: 0 }}>Sì</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

const CookiePolicy: React.FC = () => {
  const { PAGES } = usePages();

  const showGdprCookies = () => {
    Cookies.remove(GDPR_COOKIE_NAME);
    window.location.reload();
  };

  const CONTENT = {
    title: PAGES.COOKIE_POLICY.title,
    intro: (
      <Trans>
        <Typography>
          Questa Cookie Policy spiega cosa sono i cookie, quali cookie
          utilizziamo sul sito di Pessastudio Horse Tecnology srl e come
          l’utente può gestire le proprie preferenze.{" "}
        </Typography>
        <Typography>
          L’utilizzo dei cookie avviene in conformità al GDPR e alle linee guida
          europee.
        </Typography>
      </Trans>
    ),
    sections: [
      {
        title: <Trans>Cosa sono i Cookie</Trans>,
        content: (
          <Trans>
            <Typography>
              I cookie sono piccoli file di testo che i siti web inviano al
              browser dell’utente.
            </Typography>
            <Typography>
              Vengono utilizzati per migliorare l’esperienza di navigazione,
              analizzare il traffico e offrire contenuti personalizzati.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Tipologie di Cookie Utilizzati</Trans>,
        content: (
          <Stack gap={2}>
            <Trans>
              Sul nostro sito utilizziamo diverse categorie di cookie:
            </Trans>
            <CookieCategoriesTable />
          </Stack>
        ),
      },
      {
        title: <Trans>Cookie Tecnici</Trans>,
        content: (
          <Trans>
            <Typography>
              Questi cookie sono essenziali per il funzionamento del sito e non
              richiedono il consenso dell’utente.
            </Typography>
            <Typography>
              Includono quelli relativi alla sicurezza, alla gestione delle
              preferenze di base e alla funzionalità del cookie banner.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Cookie di Analytics (Google Analytics)</Trans>,
        content: (
          <Trans>
            <Typography>
              Utilizziamo Google Analytics per raccogliere dati anonimi sul
              traffico e sul comportamento degli utenti.
            </Typography>
            <Typography>
              I cookie di analytics vengono installati solo dopo il consenso
              dell’utente. Google potrebbe trattare i dati negli Stati Uniti.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Cookie di Marketing (Meta Pixel)</Trans>,
        content: (
          <Trans>
            <Typography>
              Meta Pixel viene utilizzato per analizzare le interazioni con il
              sito e migliorare la comunicazione sulle piattaforme Meta.
            </Typography>
            <Typography>
              Questi cookie sono installati solo previo consenso e potrebbero
              comportare trasferimenti di dati fuori dall’UE.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Cookie di Terze Parti</Trans>,
        content: (
          <Trans>
            <Stack gap={2}>
              <Typography>
                Alcuni contenuti presenti sul sito sono forniti da servizi
                esterni (terze parti). <br />
                Quando visualizzi o interagisci con tali contenuti, questi
                servizi potrebbero installare cookie aggiuntivi e raccogliere
                informazioni sul tuo utilizzo, anche se non fai clic
                sull’elemento incorporato.
              </Typography>

              <Typography>
                I servizi di terze parti utilizzati nel sito includono, tra gli
                altri:
              </Typography>

              <Ul>
                <li>
                  <strong>YouTube</strong>: per mostrare video integrati.
                </li>
                <li>
                  <strong>Google Maps</strong>: per visualizzare mappe
                  interattive.
                </li>
                <li>
                  <strong>Meta (Facebook/Instagram)</strong>: tramite Pixel, per
                  misurare interazioni e attività di marketing.
                </li>
              </Ul>

              <Typography>
                Ogni servizio applica la propria cookie policy e può trasferire
                dati fuori dall’Unione Europea.
              </Typography>

              <Typography>
                Ti invitiamo a consultare le loro informative per conoscere
                modalità, finalità e tempi di conservazione dei dati.
              </Typography>
            </Stack>
          </Trans>
        ),
      },
      {
        title: <Trans>Base Giuridica del Trattamento</Trans>,
        content: (
          <Trans>
            <Typography>
              L’installazione dei cookie tecnici è basata sul legittimo
              interesse.
            </Typography>
            <Typography>
              I cookie di analytics, marketing e terze parti vengono installati
              solo previa accettazione esplicita tramite banner cookie.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Come Gestire o Revocare il Consenso</Trans>,
        content: (
          <Stack>
            <Trans>
              <Typography>
                L’utente può modificare in qualsiasi momento le proprie{" "}
                <Link onClick={showGdprCookies}>preferenze</Link>.
              </Typography>
              <Typography>
                È inoltre possibile gestire i cookie tramite le impostazioni del
                browser o strumenti esterni come YourOnlineChoices.
              </Typography>
            </Trans>
          </Stack>
        ),
      },
      {
        title: <Trans>Conservazione dei Cookie</Trans>,
        content: (
          <Trans>
            <Typography>
              La durata dei cookie varia in base alla tipologia e alla terza
              parte che li imposta.
            </Typography>
            <Typography>
              Il banner cookie fornisce una tabella aggiornata delle durate
              specifiche.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Modifiche alla Cookie Policy</Trans>,
        content: (
          <Trans>
            <Typography>
              Questa Cookie Policy può essere aggiornata per conformarsi a
              normative o cambiamenti tecnologici.
            </Typography>
            <Typography>
              Le modifiche saranno pubblicate su questa pagina.
            </Typography>
          </Trans>
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
