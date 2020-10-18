import React from "react"
import { useIntl } from 'gatsby-plugin-intl';

import { Material } from "@constants"

const MaterialsList: React.FC<{ materials: Material[] }> = ({ materials }) => {
  const { formatMessage } = useIntl()

  return <>{materials.map(material => formatMessage({ id: `GENERAL__material__${material}` })).join(", ")}</>
}

export default MaterialsList
