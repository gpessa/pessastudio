import React from "react"
import { IntlFormatters } from "react-intl"
import { injectIntl } from "gatsby-plugin-intl"

import { Material } from "@constants"

const MaterialsList: React.FC<{ intl: IntlFormatters; materials: Material[] }> = ({ materials, intl: { formatMessage } }) => {
  return <>{materials.map(material => formatMessage({ id: `GENERAL__material__${material}` })).join(", ")}</>
}

export default injectIntl(MaterialsList)
