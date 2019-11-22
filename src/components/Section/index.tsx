import React, { ReactNode } from "react"
import { Container } from "react-bootstrap";

import * as styles from './styles.module.scss';

const Section = ({ children, className, fluid, id, ...props }: SectionPros) => (
  <div className={`${styles.container} ${className}`} id={id} {...props}>
    <Container fluid={fluid}>{children}</Container>
  </div>
)

interface SectionPros {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
  id?: string;
};

export default Section



