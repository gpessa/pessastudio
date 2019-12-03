import React from "react"
import { injectIntl } from 'gatsby-plugin-intl';

import { Section, Hero, Header, SubSection } from "../../components"

const Giostre = ({ intl: { formatMessage } }) => (
  <>
    <Seo title={formatMessage({ id: "META_ostacoli_title" })} />

    <Hero image={require("../../images/background-giostre.jpg")} />

    <Section>
      <h1>Giostre</h1>

      <p>Le giostre rappresentano il punto di forza della nostra azienda e, a darne dimostrazione, sono le oltre 3000 giostre ancora funzionanti installate in tutta Europa</p>
      <p>Sono state create dalla ricerca di <strong>Luciano Pessa</strong> con l'intenzione di realizzare un semplice ed affidabile strumento di lavoro che vi consentirà di allenare il vostro cavallo anche quando non avete la possibilità di montarlo</p>
      <p>La giostra vi permetterà, non solo di raffreddare il vostro cavallo con una passeggiata post allenamento, ma anche di creare una vera sessione di lavoro passando da un’andatura all'altra e cambiando di mano</p>
      <p>La caratteristica principale delle nostre giostre è di essere considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia, ma solo in taluni casi, di un semplice permesso di installazione rilasciato dalle amministrazioni locali</p>

      <SubSection fluid>
        <Header>La gamma</Header>
        <p>Due sono i modelli di giostra che proponiamo. <strong>TECNOEXERCISER</strong>, prodotta da oltre 20 anni, e <strong>IPPOWALKER</strong>, realizzata per rispondere alle esigenze di un mercato che richiede un prodotto affidabile e al tempo stesso economico.</p>
        <p>Sia <strong>TECNOEXERCISER</strong> che <strong>IPPOWALKER</strong> sono disponibili in tre diverse versioni:</p>

        <ul>
          <li>Completa di corridoio con copertura in pvc</li>
          <li>Con corridoio scoperto in PPO</li>
          <li>Solo la macchina da posizionare in un corridoio di vostra realizzazione</li>
        </ul>
      </SubSection>
    </Section>
  </>
)

export default injectIntl(Giostre)
