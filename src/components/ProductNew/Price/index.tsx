import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "./styles.module.scss"

const Price: React.FC<{ intl: IntlFormatters, price?: number }> = ({ price, intl: { formatNumber, formatMessage } }) => {
  return price ? (
    <div className={styles.price}>
      {formatNumber(price, { style: "currency", currency: "EUR" })}
      <span className={styles.priceVat}>+ {formatMessage({ id: "GENERAL__IVA" })}</span>
    </div>
  ) : null
}


export default injectIntl(Price)