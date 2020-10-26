import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { TH, Section } from "@components"

const ComePreparareIlFondo: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <Section>
    <TH variant="h2">{formatMessage({ id: "NAVIGATION__come-preparare-il-fondo" })}</TH>
    <FormattedHTMLMessage id="RECINTI__come-preparare-il-fondo__istruzioni" />
  </Section>
)

export default injectIntl(ComePreparareIlFondo)
