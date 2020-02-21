import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Columns, ContentTable, Gallery, Header, Section } from "@components"

const Tondini: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const DIMENSIONS = [16, 18, 20, 22, 24]

  const IMAGES = [
    { caption: formatMessage({ id: `TONDINO__gallery__image-0` }), src: require("@images/product/tondini/tondino-0.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-1` }), src: require("@images/product/tondini/tondino-1.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-2` }), src: require("@images/product/tondini/tondino-2.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-3` }), src: require("@images/product/tondini/tondino-3.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-4` }), src: require("@images/product/tondini/tondino-4.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-5` }), src: require("@images/product/tondini/tondino-5.jpg") },
    { caption: formatMessage({ id: `TONDINO__gallery__image-6` }), src: require("@images/product/tondini/tondino-6.jpg") },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION__tondini" })}</h1>
            <FormattedHTMLMessage id="OSTACOLI__tondini__text" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL__client-service" })}</Header>
        <Row>
          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `TONDINO__dimensioni-${dimension}` }),
                file: withPrefix(`/tondino-${dimension}.pdf`),
              }))}
            />
          </Col>
          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "TONDINI__manuali__preparare-il-fondo" }),
                  link: "/tondini/come-preparare-il-fondo",
                },
              ]}
            />
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Tondini)
