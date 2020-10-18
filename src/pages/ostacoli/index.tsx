import { FormattedHTMLMessage, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Section, TH1 } from '@components';

import Barriere from './_barriere';
import CandelieriLameForate from './_candelieri-e-lame-forate';
import Cavalletti from './_cavalletti';
import Cubi from './_cubi';
import Cucchiai from './_cucchiai';
import Fosso from './_fosso';
import Segnaletica from './_segnaletica';
import { COLORS } from '@theme';
import { Typography } from '@material-ui/core';

const Ostacoli: React.FC = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <Section>
        <TH1>{formatMessage({ id: "NAVIGATION__ostacoli" })}</TH1>
        <FormattedHTMLMessage id="OSTACOLI__text" tagName={Typography} variant="body1" />
      </Section>

      <Section color={COLORS.WARM2}>
        <Barriere />
      </Section>

      <Section>
        <Fosso />
      </Section>

      <Section color={COLORS.WARM2}>
        <Cavalletti />
      </Section>

      <Section>
        <Cubi />
      </Section>

      <Section color={COLORS.WARM2}>
        <CandelieriLameForate />
      </Section>

      <Section>
        <Cucchiai />
      </Section>

      <Section color={COLORS.WARM2}>
        <Segnaletica />
      </Section>
    </>
  )
}

export default Ostacoli
