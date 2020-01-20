import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import * as styles from "./styles.module.scss"
import { Colors } from "@constants"

const ColorsList: React.FC<{ intl: IntlFormatters; colors: Colors[] }> = ({ colors, intl: { formatMessage } }) => {
  return (
    <>
      {colors.map(backgroundColor => (
        <div className={styles.color} style={{ backgroundColor }} key={backgroundColor}></div>
      ))}
    </>
  )
}

export default injectIntl(ColorsList)
