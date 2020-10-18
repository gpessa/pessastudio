import { makeStyles, Button, ButtonProps, Link } from '@material-ui/core';
import { FormattedMessage, Link as LinkGatsby, useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import CookieConsent from 'react-cookie-consent';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    right: theme.spacing(3),
    bottom: `${theme.spacing(3)}px!important`,
    width: 350,
    boxShadow: theme.shadows[8],
    padding: theme.spacing(3),
    background: theme.palette.common.white
  },
  intro: {
    marginBottom: theme.spacing(3)
  }
}))

const Accept = (props: ButtonProps) => (
  <Button {...props} color="primary" fullWidth/>
)

const Gdpr: React.FC = () => {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <CookieConsent
      containerClasses={classes.root}
      disableStyles={true}
      ButtonComponent={Accept}
      cookieName="gatsby-gdpr-google-analytics"
      buttonText={formatMessage({ id: "COOKIE__popup__button" })}
    >
      <div className={classes.intro}>
        <FormattedMessage
          id="COOKIE__popup__text"
          values={{
            linkcookie: (msg: string) => <Link component={LinkGatsby} to="/cookie-policy">{msg}</Link>,
          }}
        />
      </div>
    </CookieConsent>
  )
}

export default Gdpr
