import React, { ReactNode } from "react"

import * as styles from "./styles.module.scss"

const Description: React.FC<{ description?: string | ReactNode }> = ({ description }) => {
  return description ? <div>{description}</div> : null
}

export default Description