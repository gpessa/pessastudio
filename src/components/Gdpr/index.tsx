import { t, Trans } from "@lingui/macro"
import { Box, Button, ButtonProps, Link, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { PRODUCT_GUTTER } from "@theme"
import { LocalizedLink } from "gatsby-theme-i18n"
import React from "react"
import CookieConsent from "react-cookie-consent"

const useStyles = makeStyles((theme: Theme) => ({
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
}))

const Accept = (props: ButtonProps) => <Button {...props} color="primary" fullWidth />

const Gdpr: React.FC = () => {
  const classes = useStyles()

  return (
    <CookieConsent
      overlay={true}
      disableStyles={true}
      ButtonComponent={Accept}
      cookieName="gatsby-gdpr-google-analytics"
      buttonText={t`Acconsento`}
      containerClasses={classes.root}
      overlayClasses={classes.overlay}
    >
      <Box mb={3}>
        <Trans>
          Utilizziamo i cookie per garantire il corretto funzionamento del sito. Per ulteriori informazioni sul nostro
          utilizzo dei cookie, consultare la nostra{" "}
          <Link component={LocalizedLink} to="/cookie-policy">
            politica sui cookie
          </Link>
          .
        </Trans>
      </Box>
    </CookieConsent>
  )
}

export default Gdpr
