import { Link, useIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Menu } from '@material-ui/icons';
import { globalHistory } from "@reach/router";
import { PAGES_IDS } from '@constants';
import { AppBar, Box, ButtonBase, makeStyles, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { BREAKPOINT, COLORS, FONTS } from '@theme';

import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  link: {
    fontFamily: FONTS.SANSERIF_SLIM,
    textTransform: 'uppercase',
    padding: theme.spacing(2),
    fontWeight: 500,
    fontSize: 18,
    transition: theme.transitions.create(
      ['padding'],
      { duration: theme.transitions.duration.short }
    ),
    '& + &': {
      [theme.breakpoints.up(BREAKPOINT)]: {
        marginLeft: theme.spacing(1),
        paddingTop: ({ isFloating }: { isFloating: boolean }) => isFloating ? theme.spacing(2) : theme.spacing(3.5),
        paddingBottom: ({ isFloating }: { isFloating: boolean }) => isFloating ? theme.spacing(2) : theme.spacing(3.5),
      }
    },
    '&.contatti': {
      color: COLORS.GREY1
    }
  },
  mobileMenu: {
    display: 'block',
    [theme.breakpoints.up(BREAKPOINT)]: {
      display: 'none'
    }
  },
  desktopMenu: {
    display: 'none',
    [theme.breakpoints.up(BREAKPOINT)]: {
      display: 'block'
    }
  },
}))

const Navigation: React.FC = () => {
  const [isFloating, setIsFloating] = useState(false)
  const [open, setOpen] = useState(false);
  const { formatMessage } = useIntl()
  const classes = useStyles({ isFloating })

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

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') handleMenuClose()
    })
  }, [setOpen])

  const handleMenuToggle = () => {
    setOpen(open => !open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const getMenu = (menu: string[], Component: any) => {
    return menu.map(id => (
      <Component
        button
        to={`/${id}/`}
        color="inherit"
        component={Link}
        partiallyActive={true}
        className={classes.link}
        activeStyle={{ color: COLORS.PRIMARY }}
      >{formatMessage({ id: `NAVIGATION__${id}` })}</Component>
    ))
  }

  return (
    <AppBar position="sticky" color="inherit" elevation={isFloating ? 3 : 0}>
      <Toolbar className={classes.toolbar}>
        <ButtonBase component={Link} to="/">
          <Logo small={isFloating} />
        </ButtonBase>

        <Box className={classes.desktopMenu}>
          {getMenu(PAGES_IDS, ButtonBase)}
        </Box>

        <Box className={classes.mobileMenu}>
          <IconButton
            color="primary"
            aria-label="Apri menu"
            edge="end"
            onClick={handleMenuToggle}
          >
            <Menu />
          </IconButton>
        </Box>

        </Toolbar>

        {open && (
          <List className={classes.mobileMenu}>
            {getMenu(PAGES_IDS, ListItem)}
          </List>
        )}
    </AppBar>
  )
}

export default Navigation
