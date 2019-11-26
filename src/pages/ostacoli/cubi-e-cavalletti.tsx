import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import { Colors } from "../../constants"
import { ProductSquare, Section, Header } from "../../components"

const CubiCavalletti = () => (
  <>
    <Section>
      <h1>Cubi e Cavalletti</h1>
    </Section>

    <Section>
      <Header>Cubi Mini</Header>
      <p>Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come riempitivi sotto le barriere, sia per realizzare sequenze di piccoli salti. Ottimi per indicare le traiettorie quando si predispongono esercizi per i principianti, ma anche per preparare una successione di cavalletti quando si addestrano cavalli. Sovrapponibili, costruiti con plastica resistente agli agenti atmosferici, nel caso di impatto accidentale garantiscono l'incolumità di cavalli e cavalieri.</p>

      <Row>
        <Col md={3}>
          <ProductSquare
            image={require("../../images/cubi-mini.jpg")}
            name="Cubi Mini"
            width={35}
            height={57}
            length={37}
            weight={3}
            colors={[Colors.WHITE, Colors.BLU]}
            price={35}
          />
        </Col>  

        <Col md={3}>
          <ProductSquare
            image={require("../../images/cubi-maxi.jpg")}
            name="Cubi Maxi"
            width={37}
            height={70}
            length={57}
            weight={5}
            price={62}
          />
        </Col>
      </Row>

    </Section>

    <Section>
      <Header>Cavalletti caprilli</Header>
      <p>Il passaggio sui cavalletti, rinforza la schiena del cavallo, scioglie la muscolatura, lo induce a flettere le articolazioni. Questo lavoro dovrà essere fatto in progressione, compatibilmente con le attitudini del cavallo. Iniziare con passaggi successivi su barriere a terra, quindi su cavalletti di 20 centimetri, quindi aumentarne l'altezza fino a 30 centimetri. Le distanze iniziali di 1,2 metri, vanno via via aumentate per arrivare a distanze fino a 1,7 metri. Sono disponibili nei colori bianco, rosso, blu e giallo. Possono essere forniti completi della barriera in PPO di colore bianco, diametro 95 lunghezza 2 metri, oppure singolarmente, avendo più fori per inserimento di barriere diametro 90, 95,100,105 millimetri. Lavati con idropulitrice riprendono i colori originari anche dopo 20 anni.</p>

      <Row>
        <Col md={3}>
          <ProductSquare
            image={require("../../images/cavalletto.jpg")}
            name="Cavalletti caprilli"
            length={50}
            description={"Spessore: 10 cm."}
            height={50}
            weight={2}
            price={35}
          />
        </Col>
      </Row>
    </Section>

  </>
)

export default CubiCavalletti

