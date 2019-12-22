import React from "react"

import { Product, Header } from "../../components"
import { Col, Row } from "react-bootstrap"

const Fosso = ({ className }: { className?: string }) => (
  <div className={className}>
    <Header>Fosso</Header>
    <p>
      Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato alto 6 cm. Ottimo per insegnare ai vostri
      cavalli/puledri a saltarlo.
    </p>
    <Product
      image={require("../../images/product/ostacoli/fosso.jpg")}
      name="Fosso 3 mt."
      height={8}
      width={2800}
      price={440}
    />
  </div>
)

export default Fosso
