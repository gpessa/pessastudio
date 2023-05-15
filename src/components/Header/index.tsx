import { Trans } from "@lingui/react";
import Menu from "@mui/icons-material/Menu";
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
} from "@mui/material";
import { usePages } from "hooks";

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BREAKPOINT } from "theme";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

const MenuMobileStyled = styled(List)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}));

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const HeaderDesktop = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "flex",
  },
}));

const HeaderDesktopButtom = styled(Button)(({ theme, href }) => {
  const { pathname } = useRouter();
  const selected =
    pathname.startsWith(href!.substring(3)) || pathname.startsWith(href);

  return {
    fontFamily: theme.typography.slim.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    textTransform: "uppercase",
    color: selected ? theme.palette.primary.main : theme.palette.common.black,
    fontWeight: selected
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
  };
});

HeaderDesktopButtom.defaultProps = {
  color: "inherit",
  variant: "text",
};

const HeaderDesktopDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  margin: theme.spacing(3),
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "unset",
  },
}));

HeaderDesktopDivider.defaultProps = {
  orientation: "vertical",
  flexItem: true,
};

const HeaderMobile = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "fit-content",
  display: "flex",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}));

const Header: React.FC = () => {
  const trigger = useScrollTrigger({
    target: typeof window !== `undefined` ? window : undefined,
    disableHysteresis: true,
    threshold: 0,
  });
  const [open, setOpen] = useState(false);
  const { NAVIGATION } = usePages();
  const { pathname } = useRouter();

  useEffect(() => {
    handleMenuClose();
  }, [pathname]);

  const handleMenuToggle = () => {
    setOpen((open) => !open);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={trigger ? 4 : 0}>
      <ToolbarStyled>
        <Logo />

        <HeaderDesktop>
          {Object.values(NAVIGATION).map(({ url, title }) => (
            <Link passHref key={url} href={url} legacyBehavior>
              <HeaderDesktopButtom>
                <Trans id={title} />
              </HeaderDesktopButtom>
            </Link>
          ))}
          <HeaderDesktopDivider />
          <LanguageSelector />
        </HeaderDesktop>

        <HeaderMobile>
          <LanguageSelector />
          <HeaderDesktopDivider />
          <IconButton
            edge="end"
            size="large"
            color="primary"
            aria-label="Main menu"
            onClick={handleMenuToggle}
          >
            <Menu />
          </IconButton>
        </HeaderMobile>
      </ToolbarStyled>

      {open && (
        <MenuMobileStyled>
          {Object.values(NAVIGATION).map(({ url, title }) => (
            <Link key={url} href={url} legacyBehavior>
              <ListItem>
                <Trans id={title} />
              </ListItem>
            </Link>
          ))}
        </MenuMobileStyled>
      )}
    </AppBar>
  );
};

export default Header;
