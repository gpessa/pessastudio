import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

import { Section, Hero, Header, Columns } from "../../components"
import { Container, Button } from "react-bootstrap"

const Giostre = ({ intl: { formatMessage } }) => (
  <>
    <Hero image={require("../../images/background-giostre.jpg")} />

    <Section className="bg-light">
      <h1>Giostre</h1>

      <p>Le giostre rappresentano il punto di forza della nostra azienda e, a darne dimostrazione, sono le oltre 3000 giostre ancora funzionanti installate in tutta Europa</p>
      <p>
        Sono state create dalla ricerca di <strong>Luciano Pessa</strong> con l'intenzione di realizzare un semplice ed affidabile strumento di lavoro che vi consentirà di allenare il vostro cavallo anche quando non avete la possibilità di montarlo
      </p>
      <p>La giostra vi permetterà, non solo di raffreddare il vostro cavallo con una passeggiata post allenamento, ma anche di creare una vera sessione di lavoro passando da un’andatura all'altra e cambiando di mano</p>
      <p>La caratteristica principale delle nostre giostre è di essere considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia, ma solo in taluni casi, di un semplice permesso di installazione rilasciato dalle amministrazioni locali</p>

      <p>E' possibile aquistare le nostre giostre in diverse versioni:</p>

      <ul>
        <li>Solo la macchina da posizionare in un corridoio di vostra realizzazione</li>
        <li>Con corridoio scoperto</li>
        <li>Completa di corridoio con copertura in PVC</li>
      </ul>
    </Section>

    <Section fluid className="pb-0">
      <Container>
        <Header>{formatMessage({ id: "GENERAL_gamma" })}</Header>
        <p>Due sono i modelli di giostra che proponiamo. <Link to="/giostre/tecnoexerciser">{formatMessage({ id: "NAVIGATION_tecnoexerciser" })}</Link>, prodotta da oltre 20 anni, e <Link to="/giostre/ippowalker">{formatMessage({ id: "NAVIGATION_ippowalker" })}</Link>, realizzata per rispondere alle esigenze di un mercato che richiede un prodotto affidabile e al tempo stesso economico.</p>
      </Container>

      <Columns
        left={
          <div className="text-center py-5">
            <h3>{formatMessage({ id: "NAVIGATION_tecnoexerciser" })}</h3>
            <Button as={Link} to="/giostre/tecnoexerciser" variant="light" size="lg">
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </div>
        }
        right={
          <div className="text-center py-5">
            <h3>{formatMessage({ id: "NAVIGATION_ippowalker" })}</h3>
            <Button as={Link} to="/giostre/ippowalker" variant="primary" size="lg">
              {formatMessage({ id: "GIOSTRE_discover-more" })}
            </Button>
          </div>
        }
      />
    </Section>
  </>
)

export default injectIntl(Giostre)
