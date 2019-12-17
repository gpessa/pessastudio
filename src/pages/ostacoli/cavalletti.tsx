import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Header, Product, Section } from '../../components';
import { Colors } from '../../constants';

const Cavalletti = () => (
  <Section className="bg-light">
    <Row>
      <Col
        md={3}
        as={Product}
        colors={[Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN]}
        image={require("../../images/cavalletto.jpg")}
        name="Cavalletti caprilli"
        length={50}
        description={"Spessore: 10 cm."}
        height={50}
        weight={2}
        price={35}
      />
      <Col md={8}>
        <Header>Cavalletti caprilli</Header>
        <p>Il passaggio sui cavalletti, rinforza la schiena del cavallo, scioglie la muscolatura, lo induce a flettere le articolazioni. Questo lavoro dovrà essere fatto in progressione, compatibilmente con le attitudini del cavallo. Iniziare con passaggi successivi su barriere a terra, quindi su cavalletti di 20 centimetri, quindi aumentarne l'altezza fino a 30 centimetri. Le distanze iniziali di 1,2 metri, vanno via via aumentate per arrivare a distanze fino a 1,7 metri. Sono disponibili nei colori bianco, rosso, blu e giallo. Possono essere forniti completi della barriera in PPO di colore bianco, diametro 95 lunghezza 2 metri, oppure singolarmente, avendo più fori per inserimento di barriere diametro 90, 95,100,105 millimetri. Lavati con idropulitrice riprendono i colori originari anche dopo 20 anni.</p>
      </Col>
    </Row>
  </Section>
)

export default Cavalletti

