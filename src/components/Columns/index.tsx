import React, { ReactNode } from "react"
import { Col, Container, Row } from "react-bootstrap"

import * as styles from "./styles.module.scss"

interface Props {
  left: ReactNode
  right: ReactNode
  variant: "primary" | "light"
}

const Footer = ({ left, right, variant }: Props) => (
  <section className={`${styles.element} ${styles[variant]}`}>
    <Container className={styles.container}>
      <Row>
        <Col md={6} className={styles.left}>
          {left}
        </Col>
        <Col md={6} className={styles.right}>
          {right}
        </Col>
      </Row>
    </Container>
  </section>
)

export default Footer
