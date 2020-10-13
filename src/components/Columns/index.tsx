import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import theme, { COLORS } from '@theme';
import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Section from '../Section';

// import * as styles from './styles.module.scss';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: `linear-gradient(90deg, ${COLORS.PRIMARY} 50%, ${COLORS.WHITE} 50%)`
  },
  left: {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
    padding: theme.spacing(3)
  },
  right: {
    backgroundColor: COLORS.WHITE,
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
      disableGutters={isSmall}
      maxWidth={isSmall ? false : 'lg'}
  >
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} className={classes.left}>{left}</Grid>
        <Grid item xs={12} sm={6} className={classes.right}>{right}</Grid>
      </Grid>
    </Section>
  )
}

export default Footer