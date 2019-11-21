import React from "react"
import { Container } from "react-bootstrap";

const styles = require("./styles.scss")

const Section = ({ children, className, fluid, ...props }) => (
  <div className={`${styles.container} ${className}`} {...props}>
    <Container fluid={fluid}>{children}</Container>
  </div>
)

export default Section



