import React, { ReactNode } from "react"
import { Container } from "react-bootstrap";

import * as styles from './styles.module.scss';

const Section = ({ children, className, fluid, id, ...props }: SectionPros) => {
  const Tag = fluid ? 'div' : Container;

  return (
    <Tag className={`${styles.container} ${className}`} id={id} {...props}>
      <Container fluid={fluid}>{children}</Container>
    </Tag>
  )
}

interface SectionPros {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
  id?: string;
};

export default Section



