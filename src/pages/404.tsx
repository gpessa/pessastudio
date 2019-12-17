import { injectIntl } from "gatsby-plugin-intl"
import React from "react"

import { Section, Seo } from "../components"

const NotFound = ({ intl: { formatMessage } }) => (
  <Section className="text-center">
    <h1>Pagina non trovata</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Section>
)

export default injectIntl(NotFound)
