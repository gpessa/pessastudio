import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Section, TH1 } from "@components"

import Barriere from "./_barriere"
import CandelieriLameForate from "./_candelieri-e-lame-forate"
import Cavalletti from "./_cavalletti"
import Cubi from "./_cubi"
import Cucchiai from "./_cucchiai"
import Segnaletica from "./_segnaletica"
import Fosso from "./_fosso"

const Ostacoli: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <>
    <Section className="bg-light">
      <TH1 gutterBottom>{formatMessage({ id: "NAVIGATION__ostacoli" })}</TH1>
      <FormattedHTMLMessage id="OSTACOLI__text" />
    </Section>

    <Section>
      <Barriere />
    </Section>

    <Section className="bg-light">
      <Fosso />
    </Section>

    <Section>
      <Cavalletti />
    </Section>

    <Section className="bg-light">
      <Cubi />
    </Section>

    <Section>
      <CandelieriLameForate />
    </Section>

    <Section className="bg-light">
      <Cucchiai />
    </Section>

    <Section>
      <Segnaletica />
    </Section>
  </>
)

export default injectIntl(Ostacoli)
