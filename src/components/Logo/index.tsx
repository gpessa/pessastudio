import React from "react"
import { Image } from 'react-bootstrap';

import * as styles from './styles.module.scss';

const Logo = () => (
  <div className={styles.element}>
    <Image src={require("../../images/favicon.jpg")} alt="Pessa Studio" className={styles.image} />
    <h1 className={styles.title}>Pessa studio</h1>
    <div className={styles.subtitle}>Horse technology</div>
  </div>
)

export default Logo