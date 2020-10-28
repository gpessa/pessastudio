import { FormattedHTMLMessage, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Section, TH } from '@components';

import Barriere from './_barriere';
import CandelieriLameForate from './_candelieri-e-lame-forate';
import Cavalletti from './_cavalletti';
import Cubi from './_cubi';
import Cucchiai from './_cucchiai';
import Fosso from './_fosso';
import Segnaletica from './_segnaletica'
import { COLORS } from '@theme';
import { Typography } from '@material-ui/core';

const Ostacoli: React.FC = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <Section>
        <TH variant="h1">{formatMessage({ id: "NAVIGATION__ostacoli" })}</TH>
        <FormattedHTMLMessage id="OSTACOLI__text" tagName={Typography} variant="body1" />
      </Section>

      <Section id="barriere" color={COLORS.WARM2}>
        <Barriere />
      </Section>

      <Section id="fosso">
        <Fosso />
      </Section>

      <Section id="cavalletti" color={COLORS.WARM2}>
        <Cavalletti />
      </Section>

      <Section id="cubi">
        <Cubi />
      </Section>

      <Section id="candelierilameforate" color={COLORS.WARM2}>
        <CandelieriLameForate />
      </Section>

      <Section id="cucchiai">
        <Cucchiai />
      </Section>

      <Section id="segnaletica" color={COLORS.WARM2}>
        <Segnaletica />
      </Section>
    </>
  )
}

export default Ostacoli
