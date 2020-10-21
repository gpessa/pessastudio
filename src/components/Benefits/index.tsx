
import React from 'react';

import { Section, Title } from '@components';
import { Grid, makeStyles, SvgIconTypeMap, useMediaQuery } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
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

export type Benefit = {
  title: string
  description: string
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

type Props = {
  title: string
  subtitle: string
  text?: any
  benefits: Benefit[]
}
  
const Benefits: React.FC<Props> = ({ title, subtitle, text, benefits }) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));

  return (
    <Section>
      <Grid container spacing={10} justify="space-between">
        <Grid
          item
          md={6}
          xs={12}
          component={Title}
          className={classes.intro}
          text={text}
          title={title}
          subtitle={subtitle}
        />
        <Grid item md={5}>
          <Grid container spacing={isDesktop ? 10 : 6}>
            {benefits.map((item, index) => (
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

export default Benefits