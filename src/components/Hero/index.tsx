import { TH1 } from "@components"
import { Container } from "@material-ui/core"
import React from "react"

import * as styles from "./styles.module.scss"

const Hero = ({ image, text, className }: Props) => (
  <div className={`${styles.element} ${className}`}>
    <img src={image} className={styles.image} />
    {text && (
      <div className={styles.textWrapper}>
        <Container>
          <TH1
            className={`${styles.text}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </Container>
      </div>
    )}
  </div>
)

type Props = {
  image: string
  text?: string
} & React.HTMLAttributes<HTMLElement>

export default Hero
