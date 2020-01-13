import { FormattedMessage, injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { IntlFormatters } from 'react-intl';

import * as styles from './styles.module.scss';

const Gdpr: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <CookieConsent
    disableStyles={true}
    cookieName="gatsby-gdpr-google-analytics"
    containerClasses={`shadow ${styles.element}`}
    buttonClasses="mt-2 btn btn-primary btn-block" 
    buttonText={formatMessage({ id: "COOKIE__popup__button" })}
  >
    <FormattedMessage
      id="COOKIE__popup__text"
      values={{
        linkcookie: (msg: string) => <Link to="/cookie-policy">{msg}</Link>,
      }}
    />
  </CookieConsent>
)

export default injectIntl(Gdpr)
