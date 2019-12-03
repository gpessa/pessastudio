import React, { ReactNode } from 'react';
import { Image } from "react-bootstrap"

import * as styles from './styles.module.scss';

interface Step {
  image: string;
  text: string;
}
 
interface Props {
  steps: Step[]
}

const Footer = ({ steps }: Props) => (
  <div>
    {steps.map(({ text, image }) => (
      <div className={styles.step}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={image} />
        </div>
        <div className={styles.stepText}>{text}</div>
      </div>
    ))}
  </div>
)

export default Footer
