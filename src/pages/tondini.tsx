import React from "react";
import { injectIntl } from 'gatsby-plugin-intl';

import { Section, Header, PdfIcon, Seo, SubSection, Columns } from "../components";
import { Button, Row, Col, Figure, Container } from "react-bootstrap";

const TondiniPage = ({ intl: { formatMessage } }) => (
  <>
    <Seo title={formatMessage({ id: "META_title_tondini" })} keywords={[]} />

    <Section fluid>
      {/* <Container>
        <h1>Tondini</h1>
        <Row>
          <Col>
            <p>Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggi.</p>
            <p>E' costituito da pannelli laterali di compensato marino, fissati alle colonne del perimetro di acciaio zincato.</p>
            <p>La struttura è costituita da tubi in acciaio zincato a caldo ad alta resistenza, collegati tra loro da piastre che formano un reticolo "geodetico a cupola ribassata". E’ una struttura semplice, leggera e piacevole alla vista. La struttura viene poi coperta con un telo spalmato in pvc di cui potrete liberamente sceglierne il colore tra quelli da noi proposti: bianco, verde o crema.</p>
            <p>La porta, che ha un’apertura standard di 2,05 mt, è fissata al suo lato sinistro con una cerniera registrabile che ne consente la regolazione. Sul lato destro un catenaccio verticale a doppio riscontro ne garantisce l’assoluta sicurezza. In zone particolarmente ventose è conveniente montare attorno al tondino una rete antivento che riduce il disturbo dell'aria al suo interno. Nel caso in cui si voglia utilizzare il tondino per l'addestramento di puledri, le pareti laterali in plywood che normalmente sono alte 1,4 metri, possono essere rialzate fino a 2 metri.</p>
            <p>Come per le nostre giostre anche i tondini sono considerate strutture precarie e non necessitano quindi di nessuna concessione edilizia ma, in taluni casi di un semplice permesso di installazione rilasciato dall’amministrazione locale.</p>
          </Col>

          <Col>
            <Row>
              <Col as={Figure} md={6}>
                <Figure.Image src={require("../images/product/tondini/tondino-1.jpg")} />
                <Figure.Caption>Tondino coperto 18 pannelli 15mt.</Figure.Caption>
              </Col>

              <Col as={Figure} md={6}>
                <Figure.Image src={require("../images/product/tondini/tondino-2.jpg")} />
                <Figure.Caption>Tondino coperto 24 pannelli 19.9mt.</Figure.Caption>
              </Col>

              <Col as={Figure} md={6}>
                <Figure.Image src={require("../images/product/tondini/tondino-3.jpg")} />
                <Figure.Caption>Tondino coperto.</Figure.Caption>
              </Col>

              <Col as={Figure} md={6}>
                <Figure.Image src={require("../images/product/tondini/tondino-4.jpg")} />
                <Figure.Caption>Interno tondino coperto.</Figure.Caption>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
    
      <Columns
        left={(
          <>
            <h1>Tondini</h1>
            <p>Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggi.</p>
            <p>E' costituito da pannelli laterali di compensato marino, fissati alle colonne del perimetro di acciaio zincato.</p>
            <p>La struttura è costituita da tubi in acciaio zincato a caldo ad alta resistenza, collegati tra loro da piastre che formano un reticolo "geodetico a cupola ribassata". E’ una struttura semplice, leggera e piacevole alla vista. La struttura viene poi coperta con un telo spalmato in pvc di cui potrete liberamente sceglierne il colore tra quelli da noi proposti: bianco, verde o crema.</p>
            <p>La porta, che ha un’apertura standard di 2,05 mt, è fissata al suo lato sinistro con una cerniera registrabile che ne consente la regolazione. Sul lato destro un catenaccio verticale a doppio riscontro ne garantisce l’assoluta sicurezza. In zone particolarmente ventose è conveniente montare attorno al tondino una rete antivento che riduce il disturbo dell'aria al suo interno. Nel caso in cui si voglia utilizzare il tondino per l'addestramento di puledri, le pareti laterali in plywood che normalmente sono alte 1,4 metri, possono essere rialzate fino a 2 metri.</p>
            <p>Come per le nostre giostre anche i tondini sono considerate strutture precarie e non necessitano quindi di nessuna concessione edilizia ma, in taluni casi di un semplice permesso di installazione rilasciato dall’amministrazione locale.</p>
          </>
        )}
        right={(
          <Row>
            <Col as={Figure} md={6}>
              <Figure.Image src={require("../images/product/tondini/tondino-1.jpg")} />
              <Figure.Caption>Tondino coperto 18 pannelli 15mt.</Figure.Caption>
            </Col>

            <Col as={Figure} md={6}>
              <Figure.Image src={require("../images/product/tondini/tondino-2.jpg")} />
              <Figure.Caption>Tondino coperto 24 pannelli 19.9mt.</Figure.Caption>
            </Col>

            <Col as={Figure} md={6}>
              <Figure.Image src={require("../images/product/tondini/tondino-3.jpg")} />
              <Figure.Caption>Tondino coperto.</Figure.Caption>
            </Col>

            <Col as={Figure} md={6}>
              <Figure.Image src={require("../images/product/tondini/tondino-4.jpg")} />
              <Figure.Caption>Interno tondino coperto.</Figure.Caption>
            </Col>
          </Row>
        )}
      />

      <SubSection className="bg-light">
        <Header>Come preparare il terreno</Header>
        <p>Prima del montaggio il terreno deve essere preparato seguendo le istruzioni sotto elencate:</p>
        <ul>
          <li>Spianare il terreno su un'area corrispondente al diametro del tondino indicata sul disegno</li>
          <li>Distendere su quest'area un foglio di geotessuto</li>
          <li>Creare una piattaforma alta 7 centimetri di stabilizzato (diametro delle pietre 3-4 centimetri) quindi comprimerlo per compattarlo</li>
          <li>Infine, dopo aver montato il tondino stendere circa 10 centimetri di sabbia (grammatura 1/1,5 millimetri)</li>
        </ul>
      </SubSection>

      <SubSection>
        <Header>Dimensioni tondini</Header>

        <Row className="mt-4">
          <Col>
            <Button variant="outline-primary" block href="http://www.pessastudio.eu/pdf/tondino16.pdf"><PdfIcon/> 16 LATI 13,2 mt.</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" block href="http://www.pessastudio.eu/pdf/tondino18.pdf"><PdfIcon/> 18 LATI 15 mt.</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" block href="http://www.pessastudio.eu/pdf/tondino20.pdf"><PdfIcon/> 20 LATI 16,6 mt.</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" block href="http://www.pessastudio.eu/pdf/tondino22.pdf"><PdfIcon/> 22 LATI 18,3 mt.</Button>
          </Col>
          <Col>
            <Button variant="outline-primary" block href="http://www.pessastudio.eu/pdf/tondino24.pdf"><PdfIcon/> 24 LATI 19,9 mt.</Button>
          </Col>
        </Row>
      </SubSection>

    </Section>
  </>
)

export default injectIntl(TondiniPage)
