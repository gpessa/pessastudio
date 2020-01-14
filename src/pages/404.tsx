import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Section } from "@components"
import { faFrown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NotFound: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <Section className="text-center">
    <h1>{formatMessage({ id: "404__title" })}</h1>
    <FontAwesomeIcon icon={faFrown} size="7x" className="mb-4" />
    <p>{formatMessage({ id: "404__text" })}</p>
  </Section>
)

export default injectIntl(NotFound)
