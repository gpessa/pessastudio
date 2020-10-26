import { useIntl } from "gatsby-plugin-intl"
import React from "react"

import { TH, Path, Section } from "@components"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  intro: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  }
}));

const IstruzioniMontaggio: React.FC = () => {
  const { formatMessage } = useIntl()
  const classes = useStyles()

  const STEPS = [
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-01.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-01" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-02.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-02" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-04.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-04" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-05.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-05" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-06.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-06" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-07.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-07" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-08.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-08" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-09.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-09" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-10.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-10" }),
    },
    {
      image: require("@images/product/giostre/ippowalker/montaggio/step-11.jpg"),
      text: formatMessage({ id: "GIOSTRE__ippowalker__istruzioni-montaggio__step-11" }),
    },
  ]

  return (
    <Section>
      <div className={classes.intro}>
        <TH variant="h2">{formatMessage({ id: "NAVIGATION__istruzioni-montaggio" })}</TH>
        <p>{formatMessage({ id: "GIOSTRE__istruzioni-montaggio__testo" })}</p>
      </div>
      <Path steps={STEPS} />
    </Section>
  )
}

export default IstruzioniMontaggio
