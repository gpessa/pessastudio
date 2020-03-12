import React from "react"
// import ScrollAnimation from "react-animate-on-scroll"
import { Container, Image } from "react-bootstrap"

import * as styles from "./styles.module.scss"

const Hero = ({ image, text }: Props) => (
  <div className={styles.element}>
    <Image src={image} className={styles.image} />
    {text && (
      <div className={styles.textWrapper}>
        <Container>
          {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
            <h1 className={`${styles.text}`}>{text}</h1>
          {/* </ScrollAnimation> */}
        </Container>
      </div>
    )}
  </div>
)

interface Props {
  image: string
  text?: string
}

export default Hero
