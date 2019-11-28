import React from "react"
import { Row, Col } from "react-bootstrap"

import { Product, SubSection, Header } from "../../components"
import { Ratio } from "./../../constants"
 

const CucchiaiSegnaletica = () => (
  <SubSection>
    <Header>Cucchiai e segnaletica</Header>
    
    <p>Numerosi sono stati i test a cui abbiamo sottoposto i cucchiai per garantirne robustezza e durata nel tempo.</p>
    <p>Per salvaguardare l'integrità degli arti dei vostri cavalli disponiamo di supporti di sicurezza semplici, efficaci ed economici che vengono applicati ai cucchiai.</p>
    <p>Le barriere di abete, comunemente usate, richiedono una continua manutenzione perchè si piegano, scoloriscono nel tempo e si rompono frequentemente.</p>

    <Row>
      <Col
        as={Product}
        image={require("../../images/cucchiaioDe.jpg")}
        name="Cucchiaio DE"
        description={[
          "Materiale: tecnopolimero",
          "Profondità: 2 cm.",
        ]}
        ratio={Ratio.VERTICAL}
        weight={15}
        price={2.5}
      />

      <Col
        as={Product}
        image={require("../../images/supporto.jpg")}
        name="Supporto di sicurezza"
        description={[
          "Materiale: tecnopolimero elastico",
          "larghezza: 37 cm",
        ]}
        ratio={Ratio.VERTICAL}
        weight={0.05}
        price={3.5}
      />

      <Col
        as={Product}
        image={require("../../images/bandierine.jpg")}
        name="Bandierine"
        description={[
          "Materiale: plastica",
        ]}
        price={2.5}
      />

      <Col
        as={Product}
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
        as={Product}
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
  </SubSection>
)

export default CucchiaiSegnaletica

