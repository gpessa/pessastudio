import { injectIntl, FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { TH, Section } from "@components"

const ComePreparareIlFondo: React.FC = () => {
  const { formatMessage, formatHTMLMessage } = useIntl()
  
  return (
    <Section>
      <TH variant="h2">{formatMessage({ id: "NAVIGATION__come-preparare-il-fondo" })}</TH>
      <p>{formatHTMLMessage({ id: "RECINTI__come-preparare-il-fondo__istruzioni" })}</p>
    </Section>
  )
}

export default ComePreparareIlFondo
