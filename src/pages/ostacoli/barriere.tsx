import React from "react"

import { Section, ProductSquare } from "../../components"

const CandelieriLameForate = () => (
    <Section>
      <h1>Candelieri e lame forate</h1>
      
      <p>Sono le componenti dell'ostacolo più stressate, poichè, come i candelieri e i pilieri, sono perennemente sottoposte all'azione aggressiva degli agenti atmosferici ( caldo-freddo, sole-pioggia ). A questi si aggiungono anche gli urti degli zoccoli dei cavalli, frequenti ribaltamenti e le manipolazioni necessarie per aggiustarne le altezze.</p>
      <p>Le barriere di abete, comunemente usate, richiedono una continua manutenzione perchè si piegano, scoloriscono nel tempo e si rompono frequentemente.</p>
      <p>Le barriere sintetiche della PESSASTUDIO, invece, hanno lo stesso peso di quelle in abete, ma perdono il loro colore solamente dopo anni, non si scrostano e, solo raramente, si rompono sotto l'azione di un carico eccessivo.</p>

      <ProductSquare
        image={require("../../images/barriere.jpg")}
        name="Candeliere 1.7 mt. Piede in alluminio"
        price={35}
      />

    </Section>
)

export default CandelieriLameForate

