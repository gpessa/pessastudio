import React from "react"
import CookieConsent from "react-cookie-consent"
import { Button } from "react-bootstrap";

import * as styles from './styles.module.scss';

const Gdpr = () => (
  <CookieConsent
    cookieName="gatsby-gdpr-google-analytics"
    disableStyles={true}
    ButtonComponent={Button}
    containerClasses={`shadow ${styles.element}`}
    buttonClasses="mt-2 btn-block"
  >Utilizziamo i cookie per garantire il corretto funzionamento del sito. Per ulteriori informazioni sul nostro utilizzo dei cookie, consultare la nostra politica sui cookie.</CookieConsent>
)

export default Gdpr



