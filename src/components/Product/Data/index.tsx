import React from "react"

import * as styles from "./styles.module.scss"

const Data: React.FC<{ value: any; label: string }> = ({ value, label }) => (
  <div className={styles.data}>
    <span className={styles.dataLabel}>{label}:</span>
    <span className={styles.dataValue}>{value}</span>
  </div>
)

export default Data
