import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';

import * as styles from './styles.module.scss';

const Hero = ({ image, text }: Props) => (
  <div className={styles.element} style={{ backgroundImage: `url(${image})` }}>
    {text && (
      <Container>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h1 className={`display-3 ${styles.text}`}>{text}</h1>
        </ScrollAnimation>
      </Container>
    )}
  </div>
)

interface Props {
  image: string,
  text?: string,
}

export default Hero



