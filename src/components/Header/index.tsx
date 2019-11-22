import React from "react"

import * as styles from './styles.module.scss';

const Header = ({ as: Component = 'h3', children, ...props }) => (
  <Component {...props}>
    <span className={styles.element}>{children}</span>
  </Component>
)

export default Header



