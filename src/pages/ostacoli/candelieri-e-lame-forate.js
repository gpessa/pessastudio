import React from "react"
import { Container } from "react-bootstrap"

import ProductCard from "../../components/ProductCard"

const CandelieriLameForate = () => (
    <Container>
      <h1>Candelieri e lame forate</h1>
      <p>I candelieri sono costruiti con un montante di alluminio verniciato di colore bianco, muniti di 4 piedi, rivestiti con puntali di plastica che garantiscono, in caso di ribaltamento, l’incolumità vostra e dei vostri cavalli. Per consentirvi di realizzare ostacoli di vostra creazione possiamo fornirvi "le lame forate" in due diverse lunghezze.</p>

      <ProductCard
        image={require("../../images/candeliereAlluminio.jpg")}
        name="Candeliere 1.7 mt. Piede in alluminio"
        description={[
          "Larghezza: 72 cm.",
          "Profondità : 72 cm.",
          "Altezza: 170 cm.",
          "Peso: 10 kg."
        ]}
      />

      <ProductCard
        image={require("../../images/candelierePvc.jpg")}
        name="Candeliere 1.7 mt. Piede in PVC"
        description={[
          "Larghezza: 72 cm.",
          "Profondità : 72 cm.",
          "Altezza: 170 cm.",
          "Peso: 7 kg."
        ]}
      />

      <ProductCard
        image={require("../../images/lamaDePiccola.jpg")}
        name="Lama DE piccola"
        description={[
          "Materiale: acciaio zincato",
          "Spessore: 2 mm.",
          "Lunghezza: 50 cm.",
          "Larghezza: 6,5 cm.",
          "Peso: 0,65 Kg"
        ]}
        price={6.6}
      />

      <ProductCard
        image={require("../../images/lamaDeGrande.jpg")}
        name="Lama DE grande"
        description={[
          "Materiale: acciaio zincato",
          "Spessore: 2 mm.",
          "Lunghezza: 1.50 cm.",
          "Larghezza: 6,5 cm.",
          "Peso: 0,65 Kg"
        ]}
        price={12.5}
      />
    </Container>
)

export default CandelieriLameForate

