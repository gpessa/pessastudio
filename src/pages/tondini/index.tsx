import { withPrefix } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Columns, ContentTable, Gallery, Header, Section } from '../../components';

const Tondini = ({ intl: { formatMessage } }) => {
  const DIMENSIONS = [16, 18, 20, 22, 24]

  const IMAGES = [
    { caption: formatMessage({ id: `TONDINO_image_1` }), src: require("../../images/product/tondini/tondino-1.jpg") },
    { caption: formatMessage({ id: `TONDINO_image_2` }), src: require("../../images/product/tondini/tondino-2.jpg") },
    { caption: formatMessage({ id: `TONDINO_image_3` }), src: require("../../images/product/tondini/tondino-3.jpg") },
    { caption: formatMessage({ id: `TONDINO_image_4` }), src: require("../../images/product/tondini/tondino-4.jpg") },
    { caption: formatMessage({ id: `TONDINO_image_5` }), src: require("../../images/product/tondini/tondino-5.jpg") },
    { caption: formatMessage({ id: `TONDINO_image_6` }), src: require("../../images/product/tondini/tondino-6.jpg") },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>Tondini</h1>
            <p>Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggi.</p>
            <p>E' costituito da pannelli laterali di compensato marino, fissati alle colonne del perimetro di acciaio zincato.</p>
            <p>La struttura è costituita da tubi in acciaio zincato a caldo ad alta resistenza, collegati tra loro da piastre che formano un reticolo "geodetico a cupola ribassata". E’ una struttura semplice, leggera e piacevole alla vista. La struttura viene poi coperta con un telo spalmato in pvc di cui potrete liberamente sceglierne il colore tra quelli da noi proposti: bianco, verde o crema.</p>
            <p>La porta, che ha un’apertura standard di 2,05 mt, è fissata al suo lato sinistro con una cerniera registrabile che ne consente la regolazione. Sul lato destro un catenaccio verticale a doppio riscontro ne garantisce l’assoluta sicurezza. In zone particolarmente ventose è conveniente montare attorno al tondino una rete antivento che riduce il disturbo dell'aria al suo interno. Nel caso in cui si voglia utilizzare il tondino per l'addestramento di puledri, le pareti laterali in plywood che normalmente sono alte 1,4 metri, possono essere rialzate fino a 2 metri.</p>
            <p>Come per le nostre giostre anche i tondini sono considerate strutture precarie e non necessitano quindi di nessuna concessione edilizia ma, in taluni casi di un semplice permesso di installazione rilasciato dall’amministrazione locale.</p>
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL_client-service" })}</Header>
        <Row>
          <Col md={6}>
            <ContentTable
              title="Dimensioni tondini"
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `TONDINO_dimension_${dimension}` }),
                file: withPrefix(`/tondino-${dimension}.pdf`)
              }))}
            />
          </Col>
          <Col md={6}>
            <ContentTable
              title="Manuali"
              rows={[
                {
                  label: "Come preparare il fondo",
                  link: "/tondini/come-preparare-il-fondo",
                }
              ]}
            />
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Tondini)
