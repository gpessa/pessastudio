import React, { ReactNode } from "react"

import * as styles from './styles.module.scss';
import { Container } from "react-bootstrap";

const Section = ({ children, className, id, fluid, ...props }: SectionPros) => {
  const Tag = fluid ? 'div' : Container;

  return (
    <div className={`${styles.container} ${className}`} id={id} {...props}>
      <Tag fluid={fluid}>{children}</Tag>
    </div>
  )
}

interface SectionPros {
  id?: any;
  fluid?: boolean;
  children: ReactNode;
  className?: string;
};

export default Section



