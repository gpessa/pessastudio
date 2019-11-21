import React from "react"

const styles = require("./styles.scss")

const Header = ({ as: Component = 'h3', children, ...props }) => (
  <Component {...props}>
    <span className={styles.element}>{children}</span>
  </Component>
)

export default Header



