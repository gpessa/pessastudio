"use client";

import { Trans, useLingui } from "@lingui/react/macro";
import { Link, Typography } from "@mui/material";
import { Address, LegalPage } from "components";
import { usePages } from "hooks";
import NextLink from "next/link";
import { NAME_LEGAL_STRING, SEDE_LEGALE } from "utils/constants";

const InformativaPrivacyPage: React.FC = () => {
  const { PAGES } = usePages();
  const { t } = useLingui();

  const CONTENT = {
    title: PAGES.INFORMATIVA_PRIVACY.title,
    intro: (
      <Trans>
        <Typography>Benvenuto sul sito di ${NAME_LEGAL_STRING}.</Typography>
        <Typography>
          L’accesso e l’utilizzo del sito implicano l’accettazione dei presenti
          Termini e Condizioni.
        </Typography>
      </Trans>
    ),
    sections: [
      {
        title: t`Titolare del Sito`,
        content: <Address {...SEDE_LEGALE} />,
      },
      {
        title: t`Oggetto del Sito`,
        content: (
          <Trans>
            <Typography>
              Il Sito ha finalità informative e promozionali e presenta un
              catalogo di prodotti per cavalli prodotti da {NAME_LEGAL_STRING}.
            </Typography>
            <Typography>
              Sul Sito non è possibile effettuare acquisti online. Per
              informazioni, preventivi o acquisti è necessario contattare
              direttamente l’azienda tramite i canali indicati.
            </Typography>
          </Trans>
        ),
      },
      {
        title: t`Disponibilità e correttezza delle informazioni`,
        content: (
          <Trans>
            {NAME_LEGAL_STRING} si impegna a mantenere aggiornate e accurate le
            informazioni relative ai prodotti, alle caratteristiche tecniche e
            ai prezzi. Tuttavia le informazioni presenti sul Sito hanno valore
            puramente indicativo: prezzi, disponibilità e specifiche possono
            essere modificati senza preavviso e eventuali errori o inesattezze
            non sono vincolanti per l’azienda.
          </Trans>
        ),
      },

      {
        title: t`Proprietà intellettuale`,
        content: (
          <Trans>
            <Typography>
              Tutti i contenuti presenti sul Sito: testi, descrizioni,
              fotografie, immagini, grafica, loghi, layout, marchi e schede
              tecniche, sono di proprietà esclusiva di {NAME_LEGAL_STRING} o dei
              rispettivi aventi diritto.
            </Typography>
            <Typography>
              È vietato copiare, distribuire, riprodurre, modificare o
              utilizzare tali contenuti senza autorizzazione scritta.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Uso consentito del Sito`,
        content: (
          <Trans>
            <Typography>
              L’utente si impegna a non utilizzare il Sito per scopi illeciti e
              a non tentare accessi non autorizzati o azioni che compromettano
              la sicurezza, integrità o prestazioni del sito.
            </Typography>
            <Typography>
              È vietato estrarre dati o contenuti a fini commerciali senza
              consenso e utilizzare bot, scraper o sistemi automatizzati non
              autorizzati.
            </Typography>
            <Typography>
              {NAME_LEGAL_STRING} si riserva il diritto di sospendere l’accesso
              al Sito in caso di attività sospette o dannose.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Link e contenuti di terze parti`,
        content: (
          <Trans>
            <Typography>
              Il Sito può includere video YouTube, mappe Google Maps, link verso
              siti esterni e contenuti o servizi di terze parti.
            </Typography>
            <Typography>
              L’azienda non è responsabile per contenuti, politiche privacy,
              sicurezza o funzionamento dei servizi non gestiti direttamente.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Newsletter`,
        content: (
          <Trans>
            <Typography>
              Il Sito offre la possibilità di iscrizione alla newsletter tramite
              Mailchimp, raccogliendo esclusivamente l’indirizzo email
              dell’utente.
            </Typography>
            <Typography>
              L’utente può disiscriversi in qualsiasi momento tramite il link
              presente nelle email. Il trattamento dei dati è descritto
              nell’apposita{" "}
              <Link component={NextLink} href={PAGES.INFORMATIVA_PRIVACY.url}>
                {PAGES.INFORMATIVA_PRIVACY.title}
              </Link>
              .
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Limitazione di responsabilità`,
        content: (
          <Trans>
            <Typography>
              Nei limiti consentiti dalla legge, {NAME_LEGAL_STRING} non
              garantisce che il Sito sia privo di errori, interruzioni o
              vulnerabilità e non può essere ritenuta responsabile per danni
              derivanti dall’uso del Sito, dall’indisponibilità dei servizi, da
              errori tecnici o da contenuti di terze parti.
            </Typography>
            <Typography>
              L’utilizzo del Sito avviene sotto esclusiva responsabilità
              dell’utente.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Modifiche ai Termini`,
        content: (
          <Trans>
            <Typography>
              Il Titolare può aggiornare o modificare i presenti Termini e
              Condizioni in qualsiasi momento.
            </Typography>
            <Typography>
              Le modifiche saranno pubblicate su questa pagina con data di
              aggiornamento. L’uso continuato del Sito implica l’accettazione
              delle nuove condizioni.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Legge applicabile e foro competente`,
        content: (
          <Trans>
            <Typography>
              I presenti Termini sono regolati dalla legge italiana.
            </Typography>
            <Typography>
              Per qualsiasi controversia sarà competente, in via esclusiva, il
              Foro del luogo in cui ha sede {NAME_LEGAL_STRING}, salvo diversa
              disposizione obbligatoria.
            </Typography>
          </Trans>
        ),
      },

      {
        title: t`Contatti`,
        content: <Address {...SEDE_LEGALE} />,
      },
    ],
  };

  return <LegalPage {...CONTENT} />;
};

export default InformativaPrivacyPage;
