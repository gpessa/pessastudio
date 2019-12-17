import React from "react"

import * as styles from "./styles.module.scss"
import { Row, Col } from "react-bootstrap"

interface Step {
  image: string
  text: string
}

interface Props {
  steps: Step[]
}

const Path = ({ steps }: Props) => (
  <Row>
    {steps.map(({ text, image }, index) => (
      <Col md={3} key={index}>
        <div className={styles.imageWrapper}>
          <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
        </div>
        <div className={styles.stepText}>
          <span className={styles.stepNumber}>{index + 1}</span> {text}
        </div>
      </Col>
    ))}
  </Row>
)

export default Path
