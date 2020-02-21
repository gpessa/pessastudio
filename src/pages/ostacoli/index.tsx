import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Section } from "@components"

import Barriere from "./_barriere"
import CandelieriLameForate from "./_candelieri-e-lame-forate"
import Cavalletti from "./_cavalletti"
import Cubi from "./_cubi"
import Cucchiai from "./_cucchiai"
import Segnaletica from "./_segnaletica"
import Fosso from "./_fosso"

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

    <Section className="bg-light">
      <Cavalletti />
    </Section>

    <Section>
      <Cubi />
    </Section>

    <Section className="bg-light">
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
