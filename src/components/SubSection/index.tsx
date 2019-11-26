import React, { ReactNode } from "react"

import * as styles from './styles.module.scss';

const Section = ({ children, className, last, ...props }: SectionPros) => (
  <div className={`${styles.container} ${last && styles.containerLast} ${className}`} {...props}>{children}</div>
)

interface SectionPros {
  children: ReactNode;
  className?: string;
  last?: boolean;
};

export default Section



