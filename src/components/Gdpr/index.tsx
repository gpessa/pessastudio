import React from "react"
import CookieConsent from "react-cookie-consent"
import { Button } from "react-bootstrap";
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

import * as styles from './styles.module.scss';

const Gdpr = () => (
  <CookieConsent
    cookieName="gatsby-gdpr-google-analytics"
    disableStyles={true}
    ButtonComponent={Button}
    containerClasses={`shadow ${styles.element}`}
    buttonClasses="mt-2 btn-block"
  >
    <FormattedMessage
      id="COOKIE_popup"
      values={{
        linkcookie: (msg: string) => (
          <Link to="/cookie-policy">{msg}</Link>
        ),
      }}
    />
  </CookieConsent>
)

export default Gdpr



