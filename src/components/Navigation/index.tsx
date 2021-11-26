import { Trans } from "@lingui/react"
import { Menu } from "@mui/icons-material"
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  styled,
  Toolbar,
  useScrollTrigger,
  useTheme,
} from "@mui/material"
import { globalHistory } from "@reach/router"
import { LocalizedLink } from "gatsby-theme-i18n"
import { usePages } from "hooks"
import React, { useEffect, useState } from "react"
import { BREAKPOINT } from "theme"
import LanguageSelector from "./LanguageSelector"
import Logo from "./Logo"

const MenuMobileStyled = styled(List)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}))

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}))

const NavigationDesktop = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "flex",
  },
}))

const NavigationDesktopButtom = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  fontSize: theme.typography.h6.fontSize,
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
  textTransform: "uppercase",
  fontWeight: "unset",
}))

NavigationDesktopButtom.defaultProps = {
  color: "inherit",
  variant: "text",
}

const NavigationDesktopDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  margin: theme.spacing(3),
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "unset",
  },
}))

NavigationDesktopDivider.defaultProps = {
  orientation: "vertical",
  flexItem: true,
}

const NavigationMobile = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "flex",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}))

const ElevationScroll: React.FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== `undefined` ? window : undefined,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { NAVIGATION } = usePages()
  const theme = useTheme()

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") handleMenuClose()
    })
  }, [setOpen])

  const handleMenuToggle = () => {
    setOpen(open => !open)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }

  return (
    <ElevationScroll>
      <AppBar position="sticky" color="inherit">
        <ToolbarStyled>
          <Logo />

          <NavigationDesktop>
            {Object.values(NAVIGATION).map(({ url, title }) => (
              <NavigationDesktopButtom
                activeStyle={{
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                }}
                component={LocalizedLink}
                partiallyActive={true}
                key={url}
                to={url}
              >
                <Trans id={title} />
              </NavigationDesktopButtom>
            ))}
            <NavigationDesktopDivider />
            <LanguageSelector />
          </NavigationDesktop>

          <NavigationMobile>
            <LanguageSelector />
            <NavigationDesktopDivider />
            <IconButton edge="end" size="large" color="primary" aria-label="Main menu" onClick={handleMenuToggle}>
              <Menu />
            </IconButton>
          </NavigationMobile>
        </ToolbarStyled>

        {open && (
          <MenuMobileStyled>
            {Object.values(NAVIGATION).map(({ url, title }) => (
              <ListItem
                button
                activeStyle={{
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                }}
                component={LocalizedLink}
                partiallyActive={true}
                key={url}
                to={url}
              >
                <Trans id={title} />
              </ListItem>
            ))}
          </MenuMobileStyled>
        )}
      </AppBar>
    </ElevationScroll>
  )
}

export default Navigation
