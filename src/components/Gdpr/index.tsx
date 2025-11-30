"use client";

import { Trans } from "@lingui/react/macro";
import { Box, Button, ButtonProps, Link, Typography } from "@mui/material";
import { usePages } from "hooks";
import NextLink from "next/link";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { BREAKPOINT, PRODUCT_GUTTER } from "theme";
import { makeStyles } from "tss-react/mui";
import { GDPR_COOKIE_NAME } from "utils/constants";

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
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

const ButtonComponent = (props: ButtonProps) => (
  <Button {...props} color="primary" fullWidth />
);

const Gdpr: React.FC = () => {
  const classes = useStyles();
  const {
    PAGES: { COOKIE_POLICY, INFORMATIVA_PRIVACY },
  } = usePages();

  return (
    <CookieConsent
      overlay={false}
      disableStyles={true}
      ButtonComponent={ButtonComponent}
      buttonText={<Trans>Accetta</Trans>}
      declineButtonText={<Trans>Refiuta</Trans>}
      containerClasses={classes.classes.root}
      overlayClasses={classes.classes.overlay}
      cookieName={GDPR_COOKIE_NAME}
      enableDeclineButton={true}
      buttonWrapperClasses={classes.classes.buttons}
      flipButtons={true}
    >
      <Box mb={3}>
        <Trans>
          <Typography gutterBottom>
            Questo sito web utilizza cookie per garantirti la migliore
            esperienza sul nostro sito web, analizzare il traffico verso questo
            sito web, mostrarti annunci personalizzati su siti web di terze
            parti e fornirti funzionalità social media.
          </Typography>
          <Typography>
            Per ulteriori informazioni, consulta la nostra{" "}
            <Link component={NextLink} href={COOKIE_POLICY.url}>
              {COOKIE_POLICY.title}
            </Link>{" "}
            e la nostra{" "}
            <Link component={NextLink} href={INFORMATIVA_PRIVACY.url}>
              {INFORMATIVA_PRIVACY.title}
            </Link>
            .
          </Typography>
        </Trans>
      </Box>
    </CookieConsent>
  );
};

export default Gdpr;
