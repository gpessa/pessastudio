import { useIntl } from 'gatsby-plugin-intl';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from "@material-ui/core";
import { Send } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

const NewsletterSubscription: React.FC = () => {
  const { locale: LOCALE, formatMessage } = useIntl()

  const [state, setState] = useState({
    showError: false,
    response: '',
  })

  const handleSubmit = async (event: any) => {
    const data = new FormData(event.target)
    const isValid = event.currentTarget.checkValidity()

    const email = data.get('email') as string;

    event.preventDefault()
    event.stopPropagation()

    setState({
      showError: true,
      response: '',
    })

    if (!isValid) return;

    const { msg } = await addToMailchimp(email, { LOCALE });

    let response = "error-generic"
    if (msg.indexOf("is already subscribed") != -1) response = "error-already-subscribed";
    if (msg.indexOf("Thank you for subscribing!") != -1) response = "success";

    setState({
      showError: false,
      response
    })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {state.response !== "success" && (
        <TextField 
          required
          fullWidth
          type="email"
          name="email"
          label={formatMessage({ id: "NEWSLETTER__field-placeholder__email" })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  edge="end"
                  type="submit"
                  color="inherit" 
                  aria-label={formatMessage({ id: "NEWSLETTER__button" })}
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    
      {state.response === "success" && (
        <Alert severity="success">{formatMessage({ id: "NEWSLETTER__sucess" })}</Alert>
      )}

      {state.response === "error-already-subscribed" && (
        <Alert severity="error">{formatMessage({ id: "NEWSLETTER__error__already-subscribed" })}</Alert>
      )}

      {state.response === "error-generic" && (
        <Alert severity="error">{formatMessage({ id: "NEWSLETTER__error__generic" })}</Alert>
      )}
    </form>
  )
}

export default NewsletterSubscription
