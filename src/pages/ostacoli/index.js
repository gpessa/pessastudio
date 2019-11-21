import React from "react"
import { Container, ListGroup } from "react-bootstrap"
import { Link } from "gatsby-plugin-intl"

import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const OstacoliPage = () => (
  <Layout pageInfo={{ pageName: "ostacoli" }}>
    <Seo title="Ostacoli" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <h1>Ostacoli</h1>

      <p>I nostri ostacoli sono progettati e costruiti per durare nel tempo non richiedono alcuna manutenzione e conservano, inalterata, la loro "bellezza" anche se lasciati nel campo per anni. Se gli ostacoli per il professionista sono uno strumento di lavoro, per molti altri appassionati rappresentano la realizzazione di un sogno. Noi abbiamo deciso di rendere questi strumenti resistenti nel tempo per fare in modo che questo sogno duri.</p>
      <p>Potrete scegliere le quantità e i colori nella nostra gamma di produzione e acquistare anche singoli pezzi di ricambio.</p>
      <ListGroup>

        <ListGroup.Item>
          <Link to="/ostacoli/cubi-e-cavalletti">Cubi e cavalletti</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/ostacoli/candelieri-e-lame-forate">Candelieri e lame forate</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/ostacoli/barriere">Barriere</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/ostacoli/cucchiai-e-segnaletica">Cucchiai e segnaletica</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to="/ostacoli/fosso">Fosso</Link>
        </ListGroup.Item>

      </ListGroup>
    </Container>
  </Layout>
)

export default OstacoliPage

