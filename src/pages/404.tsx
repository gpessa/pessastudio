import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Section } from '../components';

const NotFound = ({ intl: { formatMessage } }) => (
  <Section className="text-center">
    <h1>{formatMessage({ id: "404_title" })}</h1>
    <FontAwesomeIcon icon={faFrown} size="7x" className="mb-4" />
    <p>{formatMessage({ id: "404_text" })}</p>
  </Section>
)

export default injectIntl(NotFound)
