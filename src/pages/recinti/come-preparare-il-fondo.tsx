import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { TH2, Section } from "@components"

const ComePreparareIlFondo: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <Section>
    <TH2>{formatMessage({ id: "NAVIGATION__come-preparare-il-fondo" })}</TH2>
    <FormattedHTMLMessage id="RECINTI__come-preparare-il-fondo__istruzionie" />
  </Section>
)

export default injectIntl(ComePreparareIlFondo)
