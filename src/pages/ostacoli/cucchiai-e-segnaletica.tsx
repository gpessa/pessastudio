import React from "react"
import { Col, Row } from "react-bootstrap"

import { Header, Product, Section } from "../../components"
import { Colors } from "../../constants"

const CucchiaiSegnaletica = () => (
  <Section>
    <Header>Cucchiai e segnaletica</Header>

    <p>Numerosi sono stati i test a cui abbiamo sottoposto i cucchiai per garantirne robustezza e durata nel tempo.</p>
    <p>
      Per salvaguardare l'integrità degli arti dei vostri cavalli disponiamo di supporti di sicurezza semplici, efficaci
      ed economici che vengono applicati ai cucchiai.
    </p>
    <p>
      Le barriere di abete, comunemente usate, richiedono una continua manutenzione perchè si piegano, scoloriscono nel
      tempo e si rompono frequentemente.
    </p>

    <Row>
      <Col
        as={Product}
        name="Cucchiaio DE"
        image={require("../../images/cucchiaioDe.jpg")}
        material="Tecnopolimero"
        depth={2}
        weight={15}
        price={2.5}
      />

      <Col
        as={Product}
        name="Supporto di sicurezza"
        image={require("../../images/supporto.jpg")}
        material="Tecnopolimero elastico"
        width={37}
        weight={0.05}
        price={3.5}
      />

      <Col
        as={Product}
        name="Bandierine"
        image={require("../../images/bandierine.jpg")}
        material="plastica"
        price={2.5}
      />

      <Col
        as={Product}
        name="Numero per campo ostacoli professional"
        image={require("../../images/numero-light.jpg")}
        material="Polietilene"
        weight={0.05}
        price={16}
        width={20}
        height={30}
        colors={[Colors.WHITE]}
      />

      <Col
        as={Product}
        name="Numero per campo ostacoli light"
        image={require("../../images/numero-professional.jpg")}
        material="Polipropilene"
        width={33}
        height={33}
        weight={1.25}
        price={16}
        colors={[Colors.WHITE]}
      />
    </Row>
  </Section>
)

export default CucchiaiSegnaletica
