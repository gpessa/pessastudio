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
  >Questo sito utilizza cookies e tecnologie simili. Se non si modificano le impostazioni del browser, l'utente accetta.</CookieConsent>
)

export default Gdpr



