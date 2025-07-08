"use client";

import { usePages } from "hooks";
import { BREAKPOINT } from "theme";
import { Trans } from "@lingui/react";
import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Divider,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import LanguageSelector from "./components/HeaderLanguageSelector";
import Logo from "./components/HeaderLogo";

const MenuMobileStyled = styled(List)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}));

const ToolbarStyled = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const HeaderDesktop = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "flex",
  },
}));

const HeaderDesktopButtom = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    color: selected ? theme.palette.primary.main : theme.palette.common.black,
    fontFamily: theme.typography.slim.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: selected
      ? theme.typography.fontWeightBold
      : theme.typography.fontWeightRegular,
    lineHeight: 1,
    textTransform: "uppercase",
    textAlign: "left",
    height: 64,
  })
);

const HeaderDivider = styled(Divider)(({ theme }) => ({
  display: "none",
  margin: theme.spacing(3),
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "unset",
  },
}));

const HeaderMobile = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  width: "fit-content",
  [theme.breakpoints.up(BREAKPOINT)]: {
    display: "none",
  },
}));

const Header: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: typeof window !== `undefined` ? window : undefined,
    threshold: 0,
  });
  const [open, setOpen] = useState(false);
  const { NAVIGATION } = usePages();
  const pathname = usePathname();

  useEffect(() => {
    handleMenuClose();
  }, [pathname]);

  const handleMenuToggle = () => setOpen((open) => !open);
  const handleMenuClose = () => setOpen(false);

  return (
    <AppBar position="sticky" color="inherit" elevation={trigger ? 4 : 0}>
      <ToolbarStyled>
        <Logo />

        <HeaderDesktop direction="row" spacing={2}>
          {Object.values(NAVIGATION).map(({ url, title }) => (
            <Link passHref key={url} href={url}>
              <HeaderDesktopButtom
                variant="text"
                color="inherit"
                selected={pathname.indexOf(url) !== -1}
              >
                <Trans id={title} />
              </HeaderDesktopButtom>
            </Link>
          ))}
          {/* <HeaderDivider orientation="vertical" flexItem /> */}
          <LanguageSelector />
        </HeaderDesktop>

        <HeaderMobile>
          <LanguageSelector />
          <HeaderDivider />
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
            <Link key={url} href={url} passHref>
              <ListItem component="a">
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
