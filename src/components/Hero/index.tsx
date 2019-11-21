import React from "react"
import { Image } from "react-bootstrap"

const styles = require("./styles.scss")

const Hero = ({ image }) => (
  <div>
    <Image fluid src={image} className={styles.image} />
  </div>
)

export default Hero



