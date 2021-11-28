import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { Send } from "@mui/icons-material"
import { Alert, IconButton, Input, InputAdornment, styled } from "@mui/material"
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"

const StyledAlert = styled(Alert)(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const NewsletterSubscription: React.FC = () => {
  const { i18n } = useLingui()
  const [state, setState] = useState({
    showError: false,
    response: "",
  })

  const handleSubmit = async (event: any) => {
    const data = new FormData(event.target)
    const isValid = event.currentTarget.checkValidity()
    const email = data.get("email") as string

    event.preventDefault()
    event.stopPropagation()

    setState({
      showError: true,
      response: "",
    })

    if (!isValid) return

    const { msg } = await addToMailchimp(email, { LOCALE: i18n.locale })

    let response = "error-generic"
    if (msg.indexOf("is already subscribed") != -1) response = "error-already-subscribed"
    if (msg.indexOf("Thank you for subscribing!") != -1) response = "success"

    setState({
      showError: false,
      response,
    })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {state.response !== "success" && (
        <Input
          required
          fullWidth
          type="email"
          name="email"
          placeholder={t`Email`}
          inputProps={{ "aria-label": t`Email` }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" type="submit" color="inherit" size="large" aria-label={t`Iscriviti`}>
                <Send />
              </IconButton>
            </InputAdornment>
          }
        />
      )}

      {state.response === "success" && (
        <StyledAlert severity="success">
          <Trans>Complimenti! Ti sei iscritto</Trans>
        </StyledAlert>
      )}

      {state.response === "error-already-subscribed" && (
        <StyledAlert severity="error">
          <Trans>Ti sei già iscritto</Trans>
        </StyledAlert>
      )}

      {state.response === "error-generic" && (
        <StyledAlert severity="error">
          <Trans>Si è verificato un problema, riprova</Trans>
        </StyledAlert>
      )}
    </form>
  )
}

export default NewsletterSubscription
