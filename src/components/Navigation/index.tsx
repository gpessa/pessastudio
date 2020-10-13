import { Link, useIntl } from 'gatsby-plugin-intl';
import React, { useLayoutEffect, useState } from 'react';

import { PAGES_IDS } from '@constants';
import { AppBar, Box, ButtonBase, makeStyles, Toolbar } from '@material-ui/core';
import { COLORS, FONTS } from '@theme';

import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  link: {
    fontFamily: FONTS.SANSERIF_SLIM,
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    fontWeight: 500,
    fontSize: 18,
    '& + &': {
      marginLeft: theme.spacing(2)
    },
    '&.contatti': {
      color: COLORS.GREY1
    }
  }
}))

const Navigation: React.FC = () => {
  const [isFloating, setIsFloating] = useState(false)
  const { formatMessage } = useIntl()
  const classes = useStyles()

  const handleScroll = () => {
    if (window.pageYOffset > 1) return setIsFloating(true)
    setIsFloating(false)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppBar position="sticky" color="inherit" elevation={isFloating ? 3 : 0}>
      <Toolbar className={classes.toolbar}>
        <ButtonBase component={Link} to="/">
          <Logo small={isFloating} />
        </ButtonBase>

        <Box>
          {PAGES_IDS.map(id => (
            <ButtonBase 
              component={Link} 
              to={`/${id}/`} 
              key={id} 
              partiallyActive={true} 
              className={`${classes.link} ${id}`}
              activeStyle={{ color: COLORS.PRIMARY }}
            >
              {formatMessage({ id: `NAVIGATION__${id}` })}
            </ButtonBase>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
