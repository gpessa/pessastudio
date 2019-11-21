import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const TondiniPage = () => (
  <Layout pageInfo={{ pageName: "Tondini" }}>
    <Seo title="Tondini" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <h1>Tondini</h1>

      <p>Il tondino coperto è adatto a svolgere molteplici attività, per esempio è la migliore soluzione per addestrare puledri in libertà o lavorare cavalli alla corda, aiuta a facilitare il controllo dei vostri cavalli durante le lezioni ai principianti, nelle riprese dei pony ed è indispensabile per il longeur durante le riprese di volteggio. E' costituito da pannelli laterali di compensato marino, fissati alle colonne del perimetro di acciaio zincato.</p>
      <p>La struttura è costituita da tubi in acciaio zincato a caldo ad alta resistenza, collegati tra loro da piastre che formano un reticolo "geodetico a cupola ribassata". E’ una struttura semplice, leggera e piacevole alla vista. La struttura viene poi coperta con un telo spalmato in pvc di cui potrete liberamente sceglierne il colore tra quelli da noi proposti: bianco, verde o crema.</p>
      <p>La porta, che ha un’apertura standard di 2,05 mt, è fissata al suo lato sinistro con una cerniera registrabile che ne consente la regolazione. Sul lato destro un catenaccio verticale a doppio riscontro ne garantisce l’assoluta sicurezza. In zone particolarmente ventose è conveniente montare attorno al tondino una rete antivento che riduce il disturbo dell'aria al suo interno. Nel caso in cui si voglia utilizzare il tondino per l'addestramento di puledri, le pareti laterali in plywood che normalmente sono alte 1,4 metri, possono essere rialzate fino a 2 metri.</p>
      <p>Come per le nostre giostre anche i tondini sono considerate strutture precarie e non necessitano quindi di nessuna concessione edilizia ma, in taluni casi di un semplice permesso di installazione rilasciato dall’amministrazione locale.</p>
    </Container>
  </Layout>
)

export default TondiniPage
