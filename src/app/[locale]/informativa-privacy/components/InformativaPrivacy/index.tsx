"use client";

import { Trans } from "@lingui/react/macro";
import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Address, LegalPage, Ul } from "components";
import { usePages } from "hooks";
import { ITALIA, NAME_LEGAL_STRING, SEDE_LEGALE } from "utils/constants";

const InformativaPrivacyPage: React.FC = () => {
  const { PAGES } = usePages();

  const CONTENT = {
    title: PAGES.INFORMATIVA_PRIVACY.title,
    intro: (
      <Trans>
        Informativa ai sensi dell'art. 13 del Regolamento Europeo 2016/679
        (GDPR)
        <br />
        La presente Policy descrive le modalità di gestione del sito web di
        {NAME_LEGAL_STRING} in riferimento al trattamento dei dati personali
        degli utenti che lo consultano e che usufruiscono dei servizi proposti,
        in conformità alle normative europee e nazionali vigenti.
      </Trans>
    ),
    sections: [
      {
        title: <Trans>Titolare del Trattamento dei Dati</Trans>,
        content: <Address {...SEDE_LEGALE} />,
      },
      {
        title: <Trans>Categorie di Dati Trattati e Finalità</Trans>,
        content: (
          <Trans>
            <Typography paragraph>
              Il Titolare tratta dati personali (quali identificativi, di
              contatto e di navigazione) esclusivamente per le finalità e le
              basi giuridiche descritte nella seguente tabella.
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tipo di Dati Raccolti</TableCell>
                  <TableCell>Finalità del Trattamento</TableCell>
                  <TableCell>Base Giuridica (GDPR)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Dati di Navigazione</Typography>
                    <Typography variant="small">
                      (es. indirizzo IP, pagine visitate)
                    </Typography>
                  </TableCell>
                  <TableCell>
                    Garantire il corretto funzionamento e la sicurezza del sito;
                    ricavare informazioni statistiche anonime sull'uso.
                  </TableCell>
                  <TableCell>
                    Legittimo Interesse del Titolare (Art. 6.1.f)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Dati per la Newsletter</Typography>
                    <Typography variant="small">(Indirizzo Email)</Typography>
                  </TableCell>
                  <TableCell>
                    Invio di comunicazioni promozionali e aggiornamenti.
                  </TableCell>
                  <TableCell>Consenso dell'interessato (Art. 6.1.a)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Dati di Tracking di Terze Parti</Typography>{" "}
                    <Typography variant="small">(Analytics, Pixel)</Typography>
                  </TableCell>
                  <TableCell>
                    Analisi delle performance del sito e attività di
                    re-marketing/pubblicità.
                  </TableCell>
                  <TableCell>
                    Consenso dell'interessato (tramite Cookie Policy) (Art.
                    6.1.a)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Trans>
        ),
      },
      {
        title: <Trans>Natura del Conferimento e Modalità di Trattamento</Trans>,
        content: (
          <Typography>
            <Trans>
              Il conferimento dei <strong>Dati di Navigazione</strong> è
              implicito. Il conferimento dell'<strong>Indirizzo Email</strong>{" "}
              per la newsletter è facoltativo; la mancata fornitura comporta
              l'impossibilità di ricevere la newsletter.
              <br />
              Il trattamento è svolto in modalità elettronica, in modo lecito e
              corretto, con l'adozione di misure di sicurezza adeguate.
            </Trans>
          </Typography>
        ),
      },
      {
        title: <Trans>Destinatari dei Dati e Trasferimento Extra-UE</Trans>,
        content: (
          <Trans>
            <Typography>
              I dati raccolti possono essere comunicati a soggetti che agiscono
              come Responsabili del Trattamento (es. Mailchimp, Google) per
              conto del Titolare.
              <br />
              I dati personali possono essere trasferiti in Paesi extra-UE/SEE
              (come gli Stati Uniti) poiché l'attività ha rilievo internazionale
              e si avvale di servizi cloud globali.
              <br />
              Tali trasferimenti avvengono solo in presenza di adeguate garanzie
              di legge, tra cui:
            </Typography>

            <Ul>
              <li>
                <strong>Clausole Contrattuali Standard (SCC):</strong> Adottate
                con fornitori come Mailchimp, Google e Facebook.
              </li>
              <li>
                <strong>Decisioni di Adeguatezza:</strong> In caso di Paesi che
                offrono un livello di protezione dei dati adeguato.
              </li>
            </Ul>

            <Typography>
              Il Titolare assicura che il trattamento avvenga sempre nel
              rispetto della legislazione italiana e del GDPR.
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Periodo di Conservazione dei Dati</Trans>,
        content: (
          <Trans>
            <Ul>
              <li>
                <strong>Dati per la Newsletter:</strong> Saranno conservati fino
                alla revoca del consenso (disiscrizione) da parte dell'utente.
              </li>

              <li>
                <strong>Dati di Navigazione/Statistiche:</strong> Conservati per
                il tempo tecnico strettamente necessario a adempiere alle
                finalità o secondo quanto specificato nella Cookie Policy.
              </li>
            </Ul>
          </Trans>
        ),
      },
      {
        title: <Trans>Diritti dell'Interessato (GDPR)</Trans>,
        content: (
          <Trans>
            <Typography>
              L'utente ha il diritto di chiedere al Titolare l'accesso, la
              rettifica, la cancellazione (Diritto all'Oblio), la limitazione
              del trattamento o di opporsi al loro trattamento.
              <br />
              Ha inoltre il diritto alla portabilità dei dati.
              <br />
              Le richieste relative all'esercizio dei diritti possono essere
              inviate al Titolare tramite l'indirizzo email dedicato:{" "}
              <Link href={`mailto:${ITALIA.email}`}>{ITALIA.email}</Link>.
              <br />
              L'utente ha, in ogni momento, il diritto di proporre reclamo
              all'Autorità di controllo (Garante per la Protezione dei Dati
              Personali).
            </Typography>
          </Trans>
        ),
      },
      {
        title: <Trans>Aggiornamenti della Policy</Trans>,
        content: (
          <Typography>
            <Trans>
              Il Titolare si riserva il diritto di modificare la presente
              Informativa in qualsiasi momento.
              <br />
              L'uso continuato del sito implica l'accettazione delle nuove
              condizioni.
            </Trans>
          </Typography>
        ),
      },
    ],
  };

  return <LegalPage {...CONTENT} />;
};

export default InformativaPrivacyPage;
