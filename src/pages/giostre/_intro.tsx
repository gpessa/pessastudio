import React from "react"
import AppsIcon from '@material-ui/icons/Apps';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { Section, Title } from "@components";
import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { FormattedHTMLMessage, useIntl } from "gatsby-plugin-intl";
import BenefitsItem from "../../components/Benefits/BenefitsItem";
import theme, { BREAKPOINT } from "@theme";

const useStyles = makeStyles(theme => ({
  intro: {
    marginBottom: -20,
    [theme.breakpoints.up(BREAKPOINT)]: {
      marginBottom: 0,
    }
  }
}))


const Intro = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  const ITEMS = [
    {
      icon: PersonPinCircleIcon,
      title: "3.000 giostre installate",
      description: "Piu' di 3.000 clienti europei hanno scelto PessaStudio per la loro giostra"
    },
    {
      icon: DomainDisabledIcon,
      title: "Nessuna concessione edilizia",
      description: "Le nostre giostre sono considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia"
    },
    {
      icon: AppsIcon,
      title: "Ampia gamma",
      description: "E' possibile aquistare le nostre giostre in diverse versioni"
    }
  ]

  return (
    <Section>
      <Grid container spacing={10} alignContent="space-between" justify="space-between">
        <Grid
          item
          md={6}
          xs={12}
          component={Title}
          className={classes.intro}
          title={formatMessage({ id: "BENEFITS__title" })}
          subtitle={formatMessage({ id: "BENEFITS__subtitle" })}
          text={(
            <Typography variant="body1">
              <FormattedHTMLMessage id="GIOSTRE__text" />
            </Typography>
          )}
        />
        <Grid item md={5}>
          <Grid container spacing={isDesktop ? 10 : 6}>
            {ITEMS.map((item, index) => (
              <Grid
                item
                xs={6}
                key={index}
              >
                <BenefitsItem {...item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Intro