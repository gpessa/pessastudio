import { injectIntl } from "gatsby-plugin-intl"
import addToMailchimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"
import { Button, Form, FormControl, Alert } from "react-bootstrap"

const NewsletterSubscription = ({ intl: { formatMessage, locale } }) => {
  const [state, setState] = useState({
    showError: false,
    response: '',
  })

  const handleSubmit = async (event: any) => {
    const data = new FormData(event.target)
    const isValid = event.currentTarget.checkValidity()

    const email = data.get('email') as string;
    const name = data.get('name') as string;

    event.preventDefault()
    event.stopPropagation()

    setState({
      showError: true,
      response: '',
    })

    if (!isValid) return;

    const { msg } = await addToMailchimp(email, {
      NAME: name,
      LOCALE: locale
    });

    let response = "error-generic"
    if (msg.indexOf("is already subscribed") != -1) response = "error-already-subscribed";
    if (msg.indexOf("Thank you for subscribing!") != -1) response = "success";

    setState({
      showError: false,
      response
    })
  }

  return (
    <Form noValidate validated={state.showError} onSubmit={handleSubmit}>
      <h5>{formatMessage({ id: "NEWSLETTER__title" })}</h5>
      <p>{formatMessage({ id: "NEWSLETTER__intro" })}</p>

      {state.response !== "success" && (
        <>
          <Form.Group>
            <FormControl required type="email" name="email" aria-label={formatMessage({ id: "NEWSLETTER__field-placeholder__email_placeholder" })} placeholder={formatMessage({ id: "NEWSLETTER__field-email" })} />
          </Form.Group>

          <Form.Group>
            <FormControl required type="text" name="name" aria-label={formatMessage({ id: "NEWSLETTER__field-placeholder__name_placeholder" })} placeholder={formatMessage({ id: "NEWSLETTER__field-name" })} />
          </Form.Group>

          <Button variant="dark" type="submit" block>{formatMessage({ id: "NEWSLETTER__button" })}</Button>
        </>
      )}
      
      {state.response === "success" && <Alert className="mt-3" variant="success">{formatMessage({ id: "NEWSLETTER__sucess" })}</Alert>}
      {state.response === "error-already-subscribed" && <Alert className="mt-3" variant="danger">{formatMessage({ id: "NEWSLETTER__error__already-subscribed" })}</Alert>}
      {state.response === "error-generic" && <Alert className="mt-3" variant="danger">{formatMessage({ id: "NEWSLETTER__error__generic" })}</Alert>}
    </Form>
  )
}

export default injectIntl(NewsletterSubscription)
