import React, { ReactNode } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
// import ScrollAnimation from 'react-animate-on-scroll';

import * as styles from './styles.module.scss';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const Footer = ({ left, right }: Props) => (
  <section className={styles.element}>
    <Container>
      <Row>
        <Col md={6} className={styles.left}>{left}</Col>
        <Col md={6} className={styles.right}>{right}</Col>
        {/* <Col md={6} className={styles.right} as={ScrollAnimation} animateIn="fadeInRight">{right}</Col> */}
      </Row>
    </Container>
  </section>
)

export default Footer
//fadeInRight