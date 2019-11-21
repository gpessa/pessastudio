import React from "react"
import { Container } from "react-bootstrap"

import ProductCard from "../../components/ProductCard"

const Fosso = () => (
  <Container>
    <h1>Fosso</h1>

    <p>Il fosso ha il fondo in PVC di colore azzurro con un bordo saldato alto 6 cm. Ottimo per insegnare ai vostri cavalli/puledri a saltarlo.</p>

    <ProductCard
      image={require("../../images/fosso.jpg")}
      name="Fosso 3 mt."
      description={[
        "Altezza:8 cm.",
        "Larghezza:2.8 mt.",
        "Profondità:1.5 mt.",
      ]}
      price={440}
    />

  </Container>
)

export default Fosso

