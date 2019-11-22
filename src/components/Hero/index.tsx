import React from "react"
import { Image } from "react-bootstrap"

import * as styles from './styles.module.scss';

const Hero = ({ image }: Props) => (
  <div>
    <Image fluid src={image} className={styles.image} />
  </div>
)

interface Props {
  image: string
}

export default Hero



