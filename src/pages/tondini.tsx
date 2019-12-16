import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Figure, Row } from 'react-bootstrap';

import { Columns, Header, PdfIcon, Section, Seo, ContentTable } from '../components';

const DIMENSIONS = [16, 18, 20, 22, 24]

const IMAGES = [
  require("../images/product/tondini/tondino-1.jpg"),
  require("../images/product/tondini/tondino-2.jpg"),
  require("../images/product/tondini/tondino-3.jpg"),
  require("../images/product/tondini/tondino-4.jpg"),
  require("../images/product/tondini/tondino-5.jpg"),
  require("../images/product/tondini/tondino-6.jpg"),
];

const Tondini = ({ intl: { formatMessage } }) => (
  <>
    <Seo title={formatMessage({ id: "META_tondini_title" })} />

    <Columns
      left={
        <>
          <h1>Tondini</h1>
          <p> Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggi.</p>
          <p> E' costituito da pannelli laterali di compensato marino, fissati alle colonne del perimetro di acciaio zincato.</p>
          <p> La struttura è costituita da tubi in acciaio zincato a caldo ad alta resistenza, collegati tra loro da piastre che formano un reticolo "geodetico a cupola ribassata". E’ una struttura semplice, leggera e piacevole alla vista. La struttura viene poi coperta con un telo spalmato in pvc di cui potrete liberamente sceglierne il colore tra quelli da noi proposti: bianco, verde o crema.</p>
          <p> La porta, che ha un’apertura standard di 2,05 mt, è fissata al suo lato sinistro con una cerniera registrabile che ne consente la regolazione. Sul lato destro un catenaccio verticale a doppio riscontro ne garantisce l’assoluta sicurezza. In zone particolarmente ventose è conveniente montare attorno al tondino una rete antivento che riduce il disturbo dell'aria al suo interno. Nel caso in cui si voglia utilizzare il tondino per l'addestramento di puledri, le pareti laterali in plywood che normalmente sono alte 1,4 metri, possono essere rialzate fino a 2 metri.</p>
          <p> Come per le nostre giostre anche i tondini sono considerate strutture precarie e non necessitano quindi di nessuna concessione edilizia ma, in taluni casi di un semplice permesso di installazione rilasciato dall’amministrazione locale.</p>
        </>
      }
      right={
        <Row>
          {IMAGES.map((src, index) => (
            <Col as={Figure} md={6} key={index}>
              <Figure.Image src={src} />
              <Figure.Caption>{formatMessage({ id: `TONDINO_image_${index}` })}</Figure.Caption> 
            </Col>
          ))}
        </Row>
      }
    />

    <Section>
      <Header>Come preparare il terreno</Header>
      <p>Prima del montaggio il terreno deve essere preparato seguendo le istruzioni sotto elencate:</p>
      <ul>
        <li>Spianare il terreno su un'area corrispondente al diametro del tondino indicata sul disegno</li>
        <li>Distendere su quest'area un foglio di geotessuto</li>
        <li>Creare una piattaforma alta 7 centimetri di stabilizzato (diametro delle pietre 3-4 centimetri) quindi comprimerlo per compattarlo</li>
        <li>Infine, dopo aver montato il tondino stendere circa 10 centimetri di sabbia (grammatura 1/1,5 millimetri)</li>
      </ul>
    </Section>

    <Section className="bg-light">
      <Header>Supporto clienti</Header>

      <ContentTable
        title="Dimensioni tondini"
        headers={["Dimensione", "Scarica"]}
        rows={DIMENSIONS.map(dimension => ({
          label: formatMessage({ id: `TONDINO_dimension_${dimension}` }),
          link: <a target="_blank" href={`/tondino-${dimension}.pdf`}><PdfIcon /></a>
        }))}
      />
    </Section>
  </>
)

export default injectIntl(Tondini)
