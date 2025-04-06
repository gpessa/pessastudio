import { Trans } from "@lingui/react/macro";
import { Box, Button, ButtonProps, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { PRODUCT_GUTTER } from "theme";

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
    bottom: `${theme.spacing(4)}!important`,
    boxShadow: theme.shadows[10],
    padding: theme.spacing(PRODUCT_GUTTER),
    position: "fixed",
    right: theme.spacing(4),
    width: 350,
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
