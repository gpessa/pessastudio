import { Button, Form, FormControl, Spinner } from "react-bootstrap"
import React, { useState } from "react"

import addToMailchimp from "gatsby-plugin-mailchimp"


const NewsletterSubscription = () => {
  const [isValidated, setIsValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    event.stopPropagation()

    setIsValidated(true)
    setResponse(undefined)

    if (!event.currentTarget.checkValidity()) return

    setIsLoading(true)

    const email = event.target[1].value

    const { msg } = await addToMailchimp(email)

    let status = "error-generic"

    if (msg.indexOf("is already subscribed")) {
      status = "error-already-subscribed"
    }

    setResponse(status)
    setIsLoading(false)
    setIsValidated(false)
  }

  return (
    <Form noValidate validated={isValidated} onSubmit={e => handleSubmit(e)}>
      {response !== "success" && (
        <>
          <h5>Iscriviti alla nostra newsletter</h5>

          <p>Rimani informato sui nostri sconti e gli eventi.</p>

          <Form.Group>
            <FormControl
              required
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Button variant="dark" type="submit" block>
            Iscriviti
            {isLoading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="ml-2"
              />
            )}
          </Button>
        </>    
      )}

      {response == "success" && (
        <div className="mt-3 text-success small">Complimenti! Ti sei iscritto</div>
      )}

      {response === "error-already-subscribed" && (
        <div className="mt-3 text-danger small">Ti sei gia' iscritto</div>
      )}

      {response === "error-generic" && (
        <div className="mt-3 text-danger small">Si E' verificato un problema, riprova</div>
      )}
    </Form>
  )
}

export default NewsletterSubscription
