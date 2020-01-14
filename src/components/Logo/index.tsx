import React, { useRef, useLayoutEffect } from "react"
import { Image } from "react-bootstrap"

import * as styles from "./styles.module.scss"

interface Props {
  small: Boolean
}

const Logo = ({ small }: Props) => (
  <div className={`${styles.element} ${small && styles.elementSmall}`}>
    <Image src={require("@images/favicon.jpg")} alt="Pessa Studio" className={styles.image} />
    <hgroup className={`${styles.group}`}>
      <h1 className={styles.title}>Pessa studio</h1>
      <div className={styles.subtitle}>Horse technology</div>
    </hgroup>
  </div>
)

export default Logo
