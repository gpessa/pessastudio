import React from "react"

import { Product, SubSection, Header } from "../../components"
import { Col, Row, Container } from "react-bootstrap"
import { Ratio } from "../../constants"

const Fosso = ({ className }: { className?: string; }) => (
  <div className={className}>
    <Row>
      <Col
        md={5}
        ratio={Ratio.HORIZONTAL}
        as={Product}
        image={require("../../images/fosso.jpg")}
        name="Fosso 3 mt."
        height={8}
        width={2800}
        price={440}
      />
      <Col>
        <Header>Fosso</Header>
        <p>Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato alto 6 cm. Ottimo per insegnare ai vostri cavalli/puledri a saltarlo.</p>
      </Col>
    </Row>
  </div>
)

export default Fosso

