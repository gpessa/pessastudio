import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Header, Path, Section } from "@components"

const IstruzioniMontaggio: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const STEPS = [
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-01.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-01" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-02.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-02" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-04.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-04" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-05.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-05" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-06.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-06" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-07.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-07" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-08.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-08" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-09.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-09" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-10.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-10" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-11.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-11" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-12.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-12" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-13.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-13" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-14.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-14" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-15.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-15" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-16.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-16" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-17.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-17" }),
    },
    {
      image: require("@images/product/giostre/tecnoexerciser/montaggio/step-18.jpg"),
      text: formatMessage({ id: "GIOSTRE__tecnoexerciser__istruzioni-montaggio__step-18" }),
    },
  ]

  return (
    <Section>
      <Header>{formatMessage({ id: "GIOSTRE__istruzioni-montaggio__title" })}</Header>
      <p>{formatMessage({ id: "GIOSTRE__istruzioni-montaggio__testo" })}</p>
      <Path steps={STEPS} />
    </Section>
  )
}

export default injectIntl(IstruzioniMontaggio)
