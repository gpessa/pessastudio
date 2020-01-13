import { injectIntl, FormattedHTMLMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { IntlFormatters } from 'react-intl';

import { Section } from '../../components';
import Barriere from './barriere';
import CandelieriLameForate from './candelieri-e-lame-forate';
import Cavalletti from './cavalletti';
import Cubi from './cubi';
import CucchiaiSegnaletica from './cucchiai-e-segnaletica';
import Fosso from './fosso';

const Ostacoli: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <>
    <Section>
      <h1>{formatMessage({ id: "NAVIGATION__ostacoli" })}</h1>
      <FormattedHTMLMessage id="OSTACOLI__text" />
    </Section>

    <Section className="bg-light">
      <Barriere />
    </Section>

    <Section>
      <Fosso />
    </Section>

    <Cavalletti />

    <Cubi />

    <CandelieriLameForate />

    <CucchiaiSegnaletica />
  </>
)

export default injectIntl(Ostacoli)
