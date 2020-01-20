import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "../styles.module.scss"

const Data: React.FC<{ intl: IntlFormatters, value?: number, unit?: string, label?: string }> = ({ value, unit, label, intl: { formatMessage, formatNumber } }) => {
  return value ? (
    <div className={styles.data}>
      <span className={styles.dataLabel}>{formatMessage({ id: label })}:</span> {formatNumber(value)} {unit}.
    </div>
  ) : null
}

export default injectIntl(Data)