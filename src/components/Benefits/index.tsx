import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Section, Title } from '@components';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AppsIcon from '@material-ui/icons/Apps';
import RestoreIcon from '@material-ui/icons/Restore';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import theme, { BREAKPOINT } from '@theme';

import BenefitsItem from './BenefitsItem';

const useStyles = makeStyles(theme => ({
  intro: {
    marginBottom: -20,
    [theme.breakpoints.up(BREAKPOINT)]: {
      marginBottom: 0,
    }
  }
}))
  
const Benefits = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  const PLUS = [
    {
      title: formatMessage({ id: "BENEFITS--1__title" }),
      description: formatMessage({ id: "BENEFITS--1__text" }),
      icon: TurnedInNotIcon
    },
    {
      title: formatMessage({ id: "BENEFITS--2__title" }),
      description: formatMessage({ id: "BENEFITS--2__text" }),
      icon: AccountBalanceIcon
    },
    {
      title: formatMessage({ id: "BENEFITS--3__title" }),
      description: formatMessage({ id: "BENEFITS--3__text" }),
      icon: AppsIcon
    },
    {
      title: formatMessage({ id: "BENEFITS--4__title" }),
      description: formatMessage({ id: "BENEFITS--4__text" }),
      icon: AppsIcon
    },
    {
      title: formatMessage({ id: "BENEFITS--5__title" }),
      description: formatMessage({ id: "BENEFITS--5__text" }),
      icon: RestoreIcon
    }
  ]

  return (
    <Section>
      <Grid container spacing={10}>
        <Grid
          item
          md={6}
          xs={12}
          component={Title}
          className={classes.intro}
          title={formatMessage({ id: "BENEFITS__title" })}
          subtitle={formatMessage({ id: "BENEFITS__subtitle" })}
        />
        <Grid item md={6}>
          <Grid container spacing={isDesktop ? 10 : 6}>
            {PLUS.map((item, index) => (
              <Grid
                item
                xs={6}
                key={index}
                component={BenefitsItem}
                {...item}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Benefits