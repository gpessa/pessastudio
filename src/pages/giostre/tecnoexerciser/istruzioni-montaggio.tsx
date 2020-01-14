import { injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl"

import { Header, Path, Section } from "@components"

const STEPS = [
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-01.jpg"),
    text: "Trovate e segnate il centro di ciò che sarà la vostra giostra",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-02.jpg"),
    text: "Usate la base della giostra per trovare e segnare i punti dove saranno piantate i supporti",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-04.jpg"),
    text: "Ancorate al suolo i supporti della giostra",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-05.jpg"),
    text: "Montate il fondo della giostra",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-06.jpg"),
    text: "Ancorate il gruppo motore",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-07.jpg"),
    text: "Assicuratevi di bloccare la giostra alla giusta altezza e piana",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-08.jpg"),
    text: "Montate le braccia di separazione",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-09.jpg"),
    text: "Collegate le braccia di separazione attraverso i cavi",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-10.jpg"),
    text: "Montate le porte di separazione",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-11.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-12.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-13.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-14.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-15.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-16.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-17.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
  {
    image: require("@images/product/giostre/tecnoexerciser/montaggio/step-18.jpg"),
    text: "Assicuratevi che le porte corrispondano alla figura",
  },
]

const IstruzioniMontaggio: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => (
  <Section>
    <Header>{formatMessage({ id: "NAVIGATION__istruzioni-montaggio" })}</Header>
    <p>Segui le semplici istruzioni per montare la nostra giostra.</p>
    <Path steps={STEPS} />
  </Section>
)

export default injectIntl(IstruzioniMontaggio)
