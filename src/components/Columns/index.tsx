import React, { ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import * as styles from './styles.module.scss';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const Footer = ({ left, right }: Props) => (
  <section className={styles.element}>
    <Container className={styles.container}>
      <Row>
        <Col md={6} className={styles.left}>{left}</Col>
        <Col md={6} className={styles.right}>{right}</Col>
      </Row>
    </Container>
  </section>
)

export default Footer