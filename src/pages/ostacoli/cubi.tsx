import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Header, Product, Section } from '../../components';
import { Colors } from '../../constants';

const Cubi = () => (
  <Section>
    <Row>
      <Col>
        <Header>Cubi Mini</Header>
        <p>Bianchi, rossi, blu o gialli, sono utilizzati nei maneggi sia come riempitivi sotto le barriere, sia per realizzare sequenze di piccoli salti. Ottimi per indicare le traiettorie quando si predispongono esercizi per i principianti, ma anche per preparare una successione di cavalletti quando si addestrano cavalli. Sovrapponibili, costruiti con plastica resistente agli agenti atmosferici, nel caso di impatto accidentale garantiscono l'incolumità di cavalli e cavalieri.</p>
      </Col>
      
      <Col
        md={3}
        as={Product}
        colors={[Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN]}
        height={57}
        image={require("../../images/cubi-mini.jpg")}
        length={37}
        name="Cubi Mini"
        price={35}
        weight={3}
        width={35}
      />

      <Col
        md={3}
        as={Product}
        colors={[Colors.WHITE, Colors.BLU, Colors.YELLOW, Colors.RED, Colors.GREEN]}
        height={70}
        image={require("../../images/cubi-maxi.jpg")}
        length={57}
        name="Cubi Maxi"
        price={62}
        weight={5}
        width={37}
      />
    </Row>
  </Section>
)

export default Cubi

