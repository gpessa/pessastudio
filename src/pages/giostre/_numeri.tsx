import React from 'react';

import { Section, TH5 } from '@components';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import DomainDisabledIcon from '@material-ui/icons/DomainDisabled';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { COLORS } from '@theme';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: COLORS.WARM2
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  text: {
    fontSize: '94%',
    color: theme.palette.grey[700]
  }
}));


const Numeri = () => {
  const classes = useStyles()
  
  const ITEMS = [
    {
      Icon: PersonPinCircleIcon,
      title: "3.000 giostre installate",
      text: "Piu' di 3.000 clienti europei hanno scelto PessaStudio per la loro giostra"
    },
    {
      Icon: DomainDisabledIcon,
      title: "Nessuna concessione edilizia",
      text: "Le nostre giostre sono considerate strutture precarie. Non avrete quindi bisogno di nessuna concessione edilizia"
    },
    {
      Icon: AppsIcon,
      title: "Ampia gamma",
      text: "E' possibile aquistare le nostre giostre in diverse versioni"
    }
  ]

  return (
    <Section className={classes.root}>
      <Grid container spacing={10}>
        {ITEMS.map(({ title, text, Icon }) => (
          <Grid item key={title} md={4}>
            <Box textAlign="center">
              {Icon && <Icon />}
              <TH5 className={classes.title}>{title}</TH5>
              <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}

export default Numeri