import { injectIntl, FormattedHTMLMessage } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Header, Section } from "@components"

const ComePreparareIlFondo: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <Section>
    <Header>{formatMessage({ id: "NAVIGATION__come-preparare-il-fondo" })}</Header>
    <FormattedHTMLMessage id="RECINTI__come-preparare-il-fondo__istruzionie" />
  </Section>
)

export default injectIntl(ComePreparareIlFondo)
