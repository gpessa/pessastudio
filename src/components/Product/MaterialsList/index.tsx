import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "../styles.module.scss"
import { Material } from "@constants"

const MaterialsList: React.FC<{ intl: IntlFormatters, materials?: Material[] }> = ({ materials, intl: { formatMessage } }) => {
  return materials ? (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: "PRODUCT__attributo__materials" })}:</span>
      {materials.map(material => formatMessage({ id: `GENERAL__material__${material}` })).join(", ")}
    </div>
  ) : null
}

export default injectIntl(MaterialsList)