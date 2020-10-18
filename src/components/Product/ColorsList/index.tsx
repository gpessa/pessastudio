import React from "react"

import * as styles from "./styles.module.scss"
import { Colors } from "@constants"

const ColorsList: React.FC<{ colors: Colors[] }> = ({ colors }) => (
  <>
    {colors.map(backgroundColor => (
      <div className={styles.color} style={{ backgroundColor }} key={backgroundColor}></div>
    ))}
  </>
)

export default ColorsList
