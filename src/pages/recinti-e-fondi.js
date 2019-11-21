import React from "react"
import { Container, ListGroup } from "react-bootstrap"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const RecintiFondiPage = () => (
  <Layout pageInfo={{ pageName: "ostacoli" }}>
    <Seo title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container>
      <h1>Recinti e fondi</h1>
     
      <p>Le recinzioni Tecno Fence sono realizzate con materiale particolarmente adatto a durare nel tempo anche in presenza delle più avverse condizioni meteorologiche. Sono in grado di sopportare senza rompersi i calci e le spinte dei cavalli. A differenza del legno o di altri prodotti utilizzati per il medesimo scopo, gli animali non mordono la recinzione. Tecno Fence, non presenta spigoli vivi e inoltre, essendo elastica, è in grado di assorbire gli urti senza rompersi evitando cosi di provocare infortuni a persone e animali. Il materiale impiegato è lo stesso che viene utilizzato per la produzione di serramenti dove l’inalterabilità del colore e delle caratteristiche tecniche sono condizioni indispensabili per garantire un prodotto di qualità. L’inclusione di inibitori dei raggi ultravioletti consente anche di prevenire crepe e rotture e di resistere alla corrosione e allo sfogliamento mantenendo, inalterate, le caratteristiche originali anche con temperature variabili da +70° C a -20°C. Principalmente prodotte nel colore bianco, possono essere fornite, a richiesta, anche nel colore verde. Variabili le altezze che vanno da 1,20 mt a 1,90 mt, misura quest’ultima utilizzata principalmente per tondini da lavoro o paddock per stalloni.</p>
      <p>In ogni recinzione inoltre si possono inserire uno o più cancelli scorrevoli in alluminio.</p>
      <p>Tutte le nostre recinzioni sono personalizzate in base alle esigenze di metratura e di figura del cliente.</p>
      
      <ListGroup>
        <ListGroup.Item>Gamma recinzioni</ListGroup.Item>
        <ListGroup.Item>Ovale per salto in libertà</ListGroup.Item>
        <ListGroup.Item>Fondi</ListGroup.Item>
      </ListGroup>
    </Container>
  </Layout>
)

export default RecintiFondiPage

