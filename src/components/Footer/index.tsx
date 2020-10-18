import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Section, Title, TSmall } from '@components';
import { Divider, Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import theme, { COLORS, BREAKPOINT } from '@theme';

import LanguageSelector from './LanguageSelector';
import Map from './Map';
import Newsletter from './Newsletter';
import Socials from './Socials';

const useStyles = makeStyles(theme => ({
  copyright: {
    color: COLORS.GREY1
  },
  divider: {
    margin: theme.spacing(4),
    width: 300,
    [theme.breakpoints.up(BREAKPOINT)]: {
      width: 1,
      margin: 'unset'
    }
  }
}));

const Footer: React.FC = () => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const isDesktop = useMediaQuery(theme.breakpoints.up(BREAKPOINT));
  
  return (
    <footer>

      <Section color={COLORS.WARM1}>
        <Grid container justify="space-evenly">
          <Grid item md={4} xs={12}>
            <Title
              title={formatMessage({ id: "FOOTER__social__title" })}
              subtitle={"social"}
              text={formatMessage({ id: "FOOTER__social__intro" })}
            />
            <Socials />
          </Grid>

          <Divider
            orientation={isDesktop ? 'vertical' : 'horizontal'}
            flexItem={isDesktop}
            className={classes.divider}
          />

          <Grid item md={4} xs={12}>
            <Title
              title={formatMessage({ id: "FOOTER__newsletter__title" })}
              subtitle={"newsletter"}
              text={formatMessage({ id: "FOOTER__newsletter__intro" })}
            />
            <Newsletter />
          </Grid>
        </Grid>
      </Section>
      
      <Map />

      <Section spacing="small">
        <Grid container justify="space-between" className={classes.copyright}>
          <Grid item>
            <TSmall>COD. FISC. e Part: I.V.A. 04743610281 C.C.I.A.A. PD - R.E.A. 414822</TSmall>
          </Grid>
          <Grid item>
            <LanguageSelector />
          </Grid>
        </Grid>
      </Section>

    </footer>
  )
}

export default Footer

