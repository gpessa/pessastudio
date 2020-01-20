import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "../styles.module.scss"
import { Colors } from "@constants"

const ColorsList: React.FC<{ intl: IntlFormatters, colors?: Colors[] }> = ({ colors, intl: { formatMessage } }) => {
  return colors ? (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: "PRODUCT__attributo__colors" })}:</span>{" "}
      {colors.map(backgroundColor => <div className={styles.color} style={{ backgroundColor }} key={backgroundColor}></div>)}
    </div>
  ) : null
}

export default injectIntl(ColorsList)