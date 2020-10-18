import { Container } from "@material-ui/core";
import React from "react"

import * as styles from './styles.module.scss';

const Section: React.FC<SectionPros> = ({ children, className, id, fluid, ...props }) => {
  return (
    <div className={`${styles.container} ${className}`} id={id} {...props}>
      <Container {...{ children }} maxWidth={fluid || false}/>
    </div>
  )
}

interface SectionPros {
  id?: any;
  fluid?: boolean;
  className?: string;
};

export default Section



