import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { TH2, Section, SubSection } from "@components"

const CookiePolicy: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <>
    <Section>
      <h1>{formatMessage({ id: "NAVIGATION__COOKIE-POLICY"})}</h1>
      <p>Scopo di questa Politica sulla privacy è di informarvi in merito ai dati che vengono raccolti su di voi, all’utilizzo che ne possiamo fare ed al modo in cui tali informazioni possono essere corrette o modificate.</p>

      <section>
        <h5>Titolare del trattamento e dati di contatto</h5>
        <div>
          <strong>PESSASTUDIO HORSE TECHNOLOGY SRL</strong>, il cui Responsabile del Trattamento dei Dati è raggiungibile al n.tel 349 0543098, sede legale eletta in Via Garibaldi 28 – 35043 Monselice (PD)
        </div>
      </section>

      <section>
        <h5>Finalità del trattamento dei dati</h5>
        <div>La raccolta e il trattamento dei dati personali e sensibili forniti sarà effettuato nel rispetto delle disposizioni legislative e regolamentari in materia di protezione dei dati personali vigenti e in particolare in conformità del art. 13 D. Lgs. 196/03 ed art. 13 Regolamento UE 2016/679 (d’ora in avanti denominato con l’acronimo GDPR) "Regolamento relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali". I dati personali forniti dagli utenti che inoltrano richieste e/o comunicazioni a mezzo e-mail sono, peraltro, utilizzati al fine di eseguire il servizio o la prestazione richiesta attraverso il modulo contatti.</div>
      </section>

      <section>
        <h5>Modalità del trattamento dei dati</h5>
        <div>I vostri dati personali, ivi compresi quelli sensibili, verranno trattati con strumenti sia manuali che automatizzati, rispettando, in ogni caso, le prescrizioni in materia di sicurezza.</div>
      </section>

      <section>
        <h5>Diritto di accesso ai dati personali </h5>
        <div>È sempre possibile richiedere dettagli sui vostri Dati Personali ed esercitare gli altri diritti previsti dall'art. 7 del Codice Privacy e, pertanto, chiedere in ogni momento l'origine dei dati, la correzione, l'aggiornamento o l'integrazione dei dati inesatti o incompleti.</div>
      </section>

      <section>
        <h5>Trattamento e Diffusione dei dati</h5>
        <div>I vostri dati verranno trattati esclusivamente da PESSASTUDIO HORSE TECHNOLOGY SRL e da professionisti o società di servizi per l'amministrazione e gestione aziendale che operino per conto della nostra azienda. Non saranno ceduti per nessun motivo ad aziende terze a meno di esplicito consenso da parte dell’interessato.</div>
      </section>

      <section>
        <h5>Diritti dell’interessato</h5>
        <p>Ai sensi dell’art. 13, punto 2 del RE 679/2016, l'interessato puo' esercitare i propri diritti contattando il titolare del trattamento (con le modalità sopra elencate):</p>
        <ul>
          <li>Accesso ai dati personali</li>
          <li>Rettifica o cancellazione degli stessi</li>
          <li>Opposizione al trattamento</li>
          <li>Portabilità dei dati</li>
          <li>Revoca del consenso</li>
          <li>Reclamo all’autorità di controllo, per l’Italia Garante della Privacy https://www.garanteprivacy.it/web/guest/home/footer/contatti</li>
        </ul>
      </section>
    </Section>

    <Section>
      <TH2>COOKIE UTILIZZATI DAL PRESENTE SITO</TH2>

      <SubSection fluid>
        <h3>Cookie del titolare</h3>
        <p>I cookie utilizzati sono di navigazione/sessione. Si tratta di cookie fondamentali per navigare all'interno del sito utilizzando tutte le sue funzionalità, come ad esempio il mantenimento della sessione e l'accesso alle aree riservate. Sono strettamente necessari, in quanto senza di essi non sarebbe possibile fornire i servizi richiesti.</p>
      </SubSection>

      <SubSection fluid>
        <h3>Cookie di terze parti</h3>

        <section>
          <h5>Google analytics</h5>
          <p>Sul sito sono presenti i cookie tecnici di terze parti di google analytics, questo è un servizio di analisi web fornito da Google Inc. (“Google”). Questi permettono di registrare e visualizzare informazioni sull’uso del sito Web. Questi cookie permettono di ottenere informazioni tecniche dettagliate come:</p>
          <ul>
            <li>Il percorso di navigazione dell’utente</li>
            <li>il numero di pagine visitate,</li>
            <li>Il tempo trascorso tra un clic e un altro </li>
            <li>La visualizzazione di determinate risorse </li>
          </ul>
          <p>Questi i cookie tengono traccia dei percorsi di navigazione permettendoci così di analizzare l’esperienza d’uso e migliorarne l’usabilità. Ciò che viene analizzato è il dato legato all’utente, ma quest’ultimo non viene mai identificato.</p>
          <ul>
            <li>
              <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usageprivacy">Informativa gestione dati</a>
            </li>
            <li>
              <a href="http://www.google.com/intl/en/analytics/privacyoverview.html">Informativa privacy</a>
            </li>
            <li>
              <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">Uso cookie google analytics</a>
            </li>
          </ul>
        </section>

        <section>
          <h5>Google maps</h5>
          <div>
            Utilizziamo Google Maps per fornire informazioni dettagliate su come individuare i nostri punti vendita e crediamo che contribuisca alla tua esperienza nell'uso del nostro Sito. <a href="http://www.google.it/intl/it/policies/privacy">Privacy Policy</a>
          </div>
        </section>

        <section>
          <h5>AddThis</h5>
          <div>
            Il pulsante “Mi Piace” e i widget sociali di Facebook sono servizi di interazione con il social network Dati Personali raccolti: Cookie e Dati di utilizzo. Luogo del trattamento: <a href="https://www.facebook.com/privacy/explanation">USA - Privacy policy</a>
          </div>
        </section>
      </SubSection>
    </Section>
  </>
)

export default injectIntl(CookiePolicy)
