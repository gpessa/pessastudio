import React from "react"
import { Row, Col } from "react-bootstrap"
import { ProductSquare, Section } from "../../components"

const CandelieriLameForate = () => (
    <Section>
      <h1>Candelieri e lame forate</h1>
      <p>I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco, muniti di 4 piedi, rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli. Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi "le lame forate" in due diverse lunghezze.</p>

    <Row>
      
      <Col
        as={ProductSquare}
        image={require("../../images/candeliereAlluminio.jpg")}
        name="Candeliere 1.7 mt. Piede in alluminio"
        width={72}
        description={[
          "Profondità : 72 cm.",
        ]}
        height={170}
        weight={10}
      />

      <Col
        as={ProductSquare}
        image={require("../../images/candelierePvc.jpg")}
        name="Candeliere 1.7 mt. Piede in PVC"
        description={[
          "Profondità : 72 cm."
        ]}
        height={170}
        weight={7}
        width={72}
      />

      <Col
        as={ProductSquare}
        image={require("../../images/lamaDePiccola.jpg")}
        name="Lama DE piccola"
        description={[
          "Materiale: acciaio zincato",
          "Spessore: 2 mm.",
          "Lunghezza: 50 cm.",
        ]}
        weight={0.6}
        price={6.6}
      />

      <Col
        as={ProductSquare}
        image={require("../../images/lamaDeGrande.jpg")}
        name="Lama DE grande"
        description={[
          "Materiale: acciaio zincato",
          "Spessore: 2 mm.",
          "Lunghezza: 1.50 cm.",
        ]}
        width={6.5}
        weight={0.6}
        price={12.5}
      />

    </Row>  

  </Section>
)

export default CandelieriLameForate

