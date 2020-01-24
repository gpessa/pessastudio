import React, { ReactNode } from "react"

import * as styles from "./styles.module.scss"

const ProductTitle = ({ children }: Props) => <div className={styles.element}>{children}</div>

interface Props {
  children: ReactNode
}

export default ProductTitle
