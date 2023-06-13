/* eslint-disable react/no-children-prop */
import { Trans } from "@lingui/macro";
import { Box, Button, ButtonProps, Theme, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { PRODUCT_GUTTER } from "theme";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: 350,
    position: "fixed",
    boxShadow: theme.shadows[10],
    right: theme.spacing(4),
    padding: theme.spacing(PRODUCT_GUTTER),
    bottom: `${theme.spacing(4)}!important`,
    background: theme.palette.common.white,
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    zIndex: theme.zIndex.appBar + 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
}));

const Accept = (props: ButtonProps) => (
  <Button {...props} color="primary" fullWidth />
);

const Gdpr: React.FC = () => {
  const classes = useStyles();
  const isCookiePage = useRouter().route === "/cookie-policy";

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
