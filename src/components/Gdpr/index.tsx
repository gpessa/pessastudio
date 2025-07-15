"use client";

import { Trans } from "@lingui/react/macro";
import { Box, Button, ButtonProps, Link } from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { BREAKPOINT,PRODUCT_GUTTER } from "theme";
import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()((theme) => ({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: theme.zIndex.appBar + 1,
  },
  root: {
    background: theme.palette.common.white,
    bottom: `${theme.spacing(3)}!important`,
    boxShadow: theme.shadows[10],
    left: "32px!important",
    padding: theme.spacing(PRODUCT_GUTTER),
    position: "fixed",
    right: `calc(${theme.spacing(3)} + ${theme.spacing(3)} + ${theme.spacing(
      3
    )} + ${60}px)`,
    [theme.breakpoints.up(BREAKPOINT)]: {
      width: 500,
    },
  },
}));

const Accept = (props: ButtonProps) => (
  <Button {...props} color="primary" fullWidth />
);

const Gdpr: React.FC = () => {
  const classes = useStyles();
  const path = usePathname();
  const isCookiePage = path.indexOf("/cookie-policy") != -1;

  return isCookiePage ? null : (
    <CookieConsent
      overlay={false}
      disableStyles={true}
      ButtonComponent={Accept}
      buttonText={<Trans>Acconsento</Trans>}
      containerClasses={classes.classes.root}
      overlayClasses={classes.classes.overlay}
      cookieName="CookieConsent"
    >
      <Box mb={3}>
        <Trans>
          Utilizziamo i cookie per garantire il corretto funzionamento del sito.
          Per ulteriori informazioni sul nostro utilizzo dei cookie, consultare
          la nostra{" "}
          <Link component={NextLink} href="/cookie-policy">
            politica sui cookie
          </Link>
        </Trans>
      </Box>
    </CookieConsent>
  );
};

export default Gdpr;
