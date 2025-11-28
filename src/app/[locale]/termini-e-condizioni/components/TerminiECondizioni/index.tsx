"use client";

import { Trans } from "@lingui/react/macro";
import { LegalPage } from "components";
import { usePages } from "hooks";
import { NAME_LEGAL_STRING, SEDE_LEGALE } from "utils/constants";
import { Link } from "@mui/material";
import NextLink from "next/link";

const TerminiECondizioni: React.FC = () => {
  const {
    PAGES: { INFORMATIVA_PRIVACY, COOKIE_POLICY, TERMINI_E_CONDIZIONI },
  } = usePages();

  const CONTENT = {
    title: TERMINI_E_CONDIZIONI.title,
    intro: (
      <Trans>
        I presenti Termini e Condizioni regolano l'accesso e l'utilizzo del sito
        web di {NAME_LEGAL_STRING}.<br />
        Navigando su questo sito, l'utente accetta integralmente le condizioni
        qui indicate.
        <br />
        Se non si accettano tali condizioni, si invita a non utilizzare il sito.
      </Trans>
    ),
    sections: [
      {
        title: <Trans>Informazioni sull'Azienda</Trans>,
        content: (
          <Trans>
            Il sito è gestito da {NAME_LEGAL_STRING}.<br />
            Il sito ha finalità puramente informative e funge da catalogo
            digitale dei prodotti o servizi offerti dall'azienda (ad esempio,
            attrezzature per l'equitazione e l'addestramento).
          </Trans>
        ),
      },
      {
        title: <Trans>Utilizzo del Sito</Trans>,
        content: (
          <Trans>
            L'accesso al sito è gratuito e libero; non è richiesta alcuna
            registrazione per la consultazione dei contenuti.
            <br />
            L'utente si impegna a utilizzare il sito esclusivamente per scopi
            leciti e in modo da non violare i diritti di terzi o limitare
            l'utilizzo del sito da parte di altri utenti.
          </Trans>
        ),
      },
      {
        title: <Trans>Natura del Sito</Trans>,
        content: (
          <Trans>
            Il sito opera esclusivamente come vetrina espositiva (Catalogo). Non
            è prevista la possibilità di concludere acquisti, transazioni o
            pagamenti direttamente online.
            <br />
            I prodotti, le descrizioni e gli eventuali prezzi mostrati hanno
            valore puramente indicativo e non costituiscono offerta al pubblico.
            <br />
            Per informazioni commerciali o per l'acquisto, è necessario
            contattare l'azienda tramite i riferimenti indicati nella sezione
            contatti.
          </Trans>
        ),
      },
      {
        title: <Trans>Proprietà Intellettuale</Trans>,
        content: (
          <Trans>
            Tutti i contenuti presenti nel sito (inclusi testi, immagini,
            grafiche, loghi, marchi e layout) sono di proprietà esclusiva di{" "}
            {NAME_LEGAL_STRING} o dei rispettivi titolari e sono protetti dalle
            vigenti normative sul diritto d'autore e sulla proprietà
            industriale.
            <br />È severamente vietata la riproduzione, distribuzione o
            modifica senza espressa autorizzazione scritta.
          </Trans>
        ),
      },
      {
        title: <Trans>Limitazione di Responsabilità</Trans>,
        content: (
          <Trans>
            {NAME_LEGAL_STRING} si adopera per fornire informazioni accurate, ma
            non garantisce che il sito sia privo di errori, inesattezze tecniche
            o omissioni. L'azienda non si assume alcuna responsabilità per l'uso
            improprio delle attrezzature mostrate sul catalogo.
            <br />
            L'azienda non potrà essere ritenuta responsabile per eventuali danni
            diretti o indiretti derivanti dall'utilizzo o dall'impossibilità di
            utilizzare il sito.
          </Trans>
        ),
      },
      {
        title: <Trans>Protezione dei Dati Personali</Trans>,
        content: (
          <Trans>
            Il sito tratta i dati di navigazione e utilizza cookie.
            <br />
            L'indirizzo email viene raccolto per il servizio di newsletter,
            previo consenso esplicito dell'utente. Tale servizio è gestito
            tramite la piattaforma esterna Mailchimp (The Rocket Science Group
            LLC), che agisce come responsabile del trattamento dei dati.
            <br />
            Il trattamento di tutti i dati personali è regolato in dettaglio
            dalla{" "}
            <Link component={NextLink} href={INFORMATIVA_PRIVACY.url}>
              Privacy Policy
            </Link>{" "}
            e dalla{" "}
            <Link component={NextLink} href={COOKIE_POLICY.url}>
              Cookie Policy
            </Link>
            , consultabili tramite i link presenti nel footer del sito.
          </Trans>
        ),
      },
      {
        title: <Trans>Modifiche ai Termini</Trans>,
        content: (
          <Trans>
            {NAME_LEGAL_STRING} si riserva il diritto di modificare o aggiornare
            i presenti Termini e Condizioni in qualsiasi momento e senza
            preavviso.
            <br />
            L'utente è invitato a consultare periodicamente questa pagina.
          </Trans>
        ),
      },
      {
        title: <Trans>Legge Applicabile e Foro Competente</Trans>,
        content: (
          <Trans>
            I presenti Termini sono regolati dalla legge italiana.
            <br />
            Per qualsiasi controversia derivante dall'interpretazione o
            esecuzione dei presenti termini, sarà competente in via esclusiva il
            Foro del luogo in cui ha sede {NAME_LEGAL_STRING}.
          </Trans>
        ),
      },
    ],
  };

  return <LegalPage {...CONTENT} />;
};

export default TerminiECondizioni;
