import React from "react"

import { ProductSquare, Section } from "../../components"
import { Col, Row } from "react-bootstrap"

const Fosso = () => (
  <Section>
    <h1>Fosso</h1>
    <p>Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato alto 6 cm. Ottimo per insegnare ai vostri cavalli/puledri a saltarlo.</p>

    <Row>
      <Col
        md={3}
        as={ProductSquare}
        image={require("../../images/fosso.jpg")}
        name="Fosso 3 mt."
        heigh={8}
        width={2800}
        price={440}
      />
    </Row>

  </Section>
)

export default Fosso

