import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import CookieConsent from "react-cookie-consent"

import * as styles from "./styles.module.scss"

const Gdpr = ({ intl: { formatMessage } }) => (
  <CookieConsent
    disableStyles={true}
    cookieName="gatsby-gdpr-google-analytics"
    containerClasses={`shadow ${styles.element}`}
    buttonClasses="mt-2 btn btn-primary btn-block" 
    buttonText={formatMessage({ id: "COOKIE_popup-button" })}
  >
    <FormattedMessage
      id="COOKIE_popup"
      values={{
        linkcookie: (msg: string) => <Link to="/cookie-policy">{msg}</Link>,
      }}
    />
  </CookieConsent>
)

export default injectIntl(Gdpr)
