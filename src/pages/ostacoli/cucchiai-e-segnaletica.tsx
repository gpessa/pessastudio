import React from "react"
import { Row, Col } from "react-bootstrap"

import { ProductSquare , Section } from "../../components"
 

const CucchiaiSegnaletica = () => (
  <Section>

    <h1>Cucchiai e segnaletica</h1>
    
    <p>Numerosi sono stati i test a cui abbiamo sottoposto i cucchiai per garantirne robustezza e durata nel tempo.</p>
    <p>Per salvaguardare l'integrità degli arti dei vostri cavalli disponiamo di supporti di sicurezza semplici, efficaci ed economici che vengono applicati ai cucchiai.</p>
    <p>Le barriere di abete, comunemente usate, richiedono una continua manutenzione perchè si piegano, scoloriscono nel tempo e si rompono frequentemente.</p>

    <Row>
      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/cucchiaioDe.jpg")}
        name="Cucchiaio DE"
        description={[
          "Materiale: tecnopolimero",
          "Profondità: 2 cm.",
        ]}
        weight={15}
        price={2.5}
      />

      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/supporto.jpg")}
        name="Supporto di sicurezza"
        description={[
          "Materiale: tecnopolimero elastico",
          "larghezza: 37 cm",
        ]}
        weight={0.05}
        price={3.5}
      />

      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/bandierine.jpg")}
        name="Bandierine"
        description={[
          "Materiale: plastica",
        ]}
        price={2.5}
      />

      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/numero-light.jpg")}
        name="Numero per campo ostacoli professional"
        description={[
          "Materiale: polietilene bianco",
          "larghezza: 20 cm",
          "altezza: 30",
        ]}
        weight={0.05}
        price={16}
      />

      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/numero-professional.jpg")}
        name="Numero per campo ostacoli light"
        description={[
          "Materiale: polipropilene neutro",
          "con MASTER BIANCO",
          "larghezza base: 33 cm",
          "larghezza top: 19 cm",
          "altezza: 33 cm",
        ]}
        weight={1.25}
        price={16}
      />

    </Row>
  </Section>
)

export default CucchiaiSegnaletica

