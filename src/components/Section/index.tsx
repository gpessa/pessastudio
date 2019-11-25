import React, { ReactNode } from "react"
import { Container } from "react-bootstrap";

import * as styles from './styles.module.scss';

const Section = ({ children, className, fluid, id, small, ...props }: SectionPros) => (
  <div className={`${styles.container} ${small && styles.containerSmall} ${className}`} id={id} {...props}>
    <Container fluid={fluid}>{children}</Container>
  </div>
)

interface SectionPros {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
  id?: string;
  small?: boolean;
};

export default Section



