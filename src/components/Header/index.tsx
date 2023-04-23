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
  useTheme,
} from "@mui/material";
import { usePages } from "hooks";

import Link from "next/link";
import React, { useState } from "react";
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

const HeaderDesktopButtom = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.slim.fontFamily,
  fontSize: theme.typography.h6.fontSize,
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(3),
  marginLeft: theme.spacing(3),
  textTransform: "uppercase",
  fontWeight: "unset",
}));

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
  const theme = useTheme();

  // useEffect(() => {
  //   return globalHistory.listen(({ action }) => {
  //     if (action === "PUSH") handleMenuClose();
  //   });
  // }, [setOpen]);

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
              <HeaderDesktopButtom>{title}</HeaderDesktopButtom>
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
              <ListItem>{title}</ListItem>
            </Link>
          ))}
        </MenuMobileStyled>
      )}
    </AppBar>
  );
};

export default Header;
