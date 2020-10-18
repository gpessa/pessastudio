import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import theme, { BREAKPOINT, COLORS } from '@theme';
import React, { ReactNode } from 'react';
import Section from '../Section';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up(BREAKPOINT)]: {
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 50%, ${theme.palette.common.white} 50%)`
    },
    [theme.breakpoints.down(BREAKPOINT)]: {
      padding: 0,
      '& .MuiGrid-container': {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  left: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(3)
  },
  right: {
    backgroundColor: theme.palette.common.white,
    color: "inherit",
    padding: theme.spacing(3),
  }
}))

const Footer = ({ left, right }: Props) => {
  const classes = useStyles()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Section
      className={classes.root}
      maxWidth={isSmall ? false : 'lg'}
  >
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} className={classes.left}>{left}</Grid>
        <Grid item xs={12} md={6} className={classes.right}>{right}</Grid>
      </Grid>
    </Section>
  )
}

export default Footer