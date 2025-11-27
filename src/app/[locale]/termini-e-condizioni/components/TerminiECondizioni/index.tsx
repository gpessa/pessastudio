"use client";

import { Trans } from "@lingui/react/macro";
import { LegalPage } from "components";
import { usePages } from "hooks";
import { NAME_LEGAL_STRING, SEDE_LEGALE } from "utils/constants";

const InformativaPrivacyPage: React.FC = () => {
  const { PAGES } = usePages();

  const CONTENT = {
    title: PAGES.INFORMATIVA_PRIVACY.title,
    intro: (
      <Trans>
        I presenti Termini e Condizioni regolano l'accesso e l'utilizzo del sito
        web di {NAME_LEGAL_STRING}. Navigando su questo sito, l'utente accetta
        integralmente le condizioni qui indicate. Se non si accettano tali
        condizioni, si invita a non utilizzare il sito.
      </Trans>
    ),
    sections: [
      {
        title: <Trans>Informazioni sull'Azienda</Trans>,
        content: (
          <Trans>
            Il sito è gestito da {NAME_LEGAL_STRING}, Partita IVA{" "}
            {SEDE_LEGALE.id}. L'azienda produce e vende prodotti per cavalli
            esclusivamente offline. Il sito ha finalità informative e funge da
            catalogo prodotto.
          </Trans>
        ),
      },
      {
        title: <Trans>Utilizzo del Sito</Trans>,
        content: (
          <Trans>
            Il sito può essere utilizzato esclusivamente per la consultazione
            del catalogo e delle informazioni aziendali. È vietato qualsiasi
            utilizzo improprio, fraudolento o che possa compromettere il
            funzionamento del sito.
          </Trans>
        ),
      },
      {
        title: <Trans>Nessuna Vendita Online</Trans>,
        content: (
          <Trans>
            Il sito non consente l'acquisto diretto dei prodotti. I prezzi
            mostrati hanno valore puramente informativo e non costituiscono
            un'offerta commerciale vincolante. Per acquistare i prodotti è
            necessario contattare l’azienda tramite i canali ufficiali.
          </Trans>
        ),
      },
      {
        title: <Trans>Proprietà Intellettuale</Trans>,
        content: (
          <Trans>
            Tutti i contenuti presenti nel sito — inclusi testi, immagini,
            grafiche, marchi e design — sono di proprietà esclusiva di $
            {NAME_LEGAL_STRING} o dei rispettivi titolari e sono protetti dalle
            normative sul diritto d'autore. È vietata la copia, riproduzione o
            distribuzione senza autorizzazione.
          </Trans>
        ),
      },
      {
        title: <Trans>Contenuti di Terze Parti</Trans>,
        content: (
          <Trans>
            Il sito può includere integrazioni di terze parti come YouTube e
            Google Maps. Questi servizi possono raccogliere dati dell'utente
            secondo le loro rispettive privacy policy.,
          </Trans>
        ),
      },
      {
        title: <Trans>Limitazione di Responsabilità</Trans>,
        content: (
          <Trans>
            Pur impegnandosi per mantenere informazioni accurate e aggiornate,
            l'azienda non garantisce l'assenza di errori, inesattezze o
            interruzioni del servizio. L'utilizzo del sito avviene a rischio
            dell'utente.
          </Trans>
        ),
      },
      {
        title: <Trans>Link Esterni</Trans>,
        content: (
          <Trans>
            Il sito può contenere link verso siti esterni non gestiti da $
            {NAME_LEGAL_STRING}. L'azienda non è responsabile per i contenuti o
            le pratiche di tali siti.
          </Trans>
        ),
      },
      {
        title: <Trans>Protezione dei Dati Personali</Trans>,
        content: (
          <Trans>
            Il trattamento dei dati personali raccolti tramite il sito è
            regolato dalla Privacy Policy e dalla Cookie Policy, disponibili
            tramite link nel footer. L’utente è invitato a consultarle per
            informazioni dettagliate.
          </Trans>
        ),
      },
      {
        title: <Trans>Modifiche ai Termini</Trans>,
        content: (
          <Trans>
            {NAME_LEGAL_STRING} si riserva il diritto di modificare i presenti
            Termini e Condizioni in qualsiasi momento. Le modifiche saranno
            pubblicate su questa pagina e avranno effetto dalla data di
            aggiornamento.
          </Trans>
        ),
      },
      {
        title: <Trans>Legge Applicabile</Trans>,
        content: (
          <Trans>
            I presenti Termini sono regolati dalla legge italiana. Per qualsiasi
            controversia relativa all'utilizzo del sito, sarà competente il foro
            italiano territorialmente competente.
          </Trans>
        ),
      },
    ],
  };

  return <LegalPage {...CONTENT} />;
};

export default InformativaPrivacyPage;
