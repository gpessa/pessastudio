import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "../styles.module.scss"

const Data: React.FC<{ intl: IntlFormatters, value?: number, unit?: string, label?: string }> = ({ value, unit, label, intl: { formatMessage, formatNumber } }) => {
  if (!value) return null

  return (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: label })}:</span> {formatNumber(value / 10)} {unit}.
    </div>
  )
}

export default injectIntl(Data)