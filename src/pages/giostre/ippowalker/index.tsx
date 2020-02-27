import { withPrefix } from "gatsby"
import { FormattedHTMLMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { IntlFormatters } from "react-intl"

import { Columns, ContentTable, Gallery, Header, Product, Section } from "@components"
import { Ratio } from "@constants"

const Ippowalker: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const IMAGES: Picture[] = [
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-0" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-separazioni.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-1" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-corridoio-tecno-fence.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-2" }),
    },
    {
      src: require("@images/product/giostre/ippowalker/galleria/giostra-copertura-pvc-2.jpg"),
      caption: formatMessage({ id: "GIOSTRE__ippowalker__image-3" }),
    },
  ]

  const DIMENSIONS = [4, 6]

  const PRODUCTS = [
    {
      image: require("@images/product/giostre/ippowalker/gamma/solo-motore.jpg"),
      name: "Giostra",
      description: (
        <>
          <p>L'opzione semplice ed economica</p>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-tecnofence.jpg"),
      name: "Giostra con corridoio Tecnofence",
      description: (
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
    {
      image: require("@images/product/giostre/ippowalker/gamma/con-corridoio-flat.jpg"),
      name: "Giostra con corridoio Flat",
      description: (
        <>
          <ul>
            <li>Giostra da 4 o 6 cavalli</li>
            <li>Diametro da 12 mt. o 14.2 mt.</li>
            <li>Cadenza compresa fra 60 e 210 metri al minuto</li>
            <li>Potenza motore 0.37 kw</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <>
      <Columns
        left={
          <>
            <h1>{formatMessage({ id: "NAVIGATION__ippowalker" })}</h1>
            <FormattedHTMLMessage id="GIOSTRE__ippowalker__descrizione" />
          </>
        }
        right={<Gallery images={IMAGES} />}
      />

      <Section>
        <Header>{formatMessage({ id: "GENERAL__gamma" })}</Header>
        <p>{formatMessage({ id: "GIOSTRE__ippowalker__gamma__text" })}</p>
        
        <Row>
          {PRODUCTS.map((product, index) => <Col key={index} as={Product} ratio={Ratio.HORIZONTAL} {...product} md={4}/>)}
        </Row>
      </Section>

      <Section className="bg-light">
        <Header>{formatMessage({ id: "GENERAL__client-service" })}</Header>

        <Row>
          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__dimensioni" })}
              rows={DIMENSIONS.map(dimension => ({
                label: formatMessage({ id: `GIOSTRE__ippowalker__dimensioni-${dimension}` }),
                file: withPrefix(`/giostra-ippowalker-${dimension}.pdf`),
              }))}
            />
          </Col>

          <Col md={6}>
            <ContentTable
              title={formatMessage({ id: "GENERAL__manauli" })}
              rows={[
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-quadro" }),
                  file: withPrefix(`/giostra-ippowalker-manuale-quadro.pdf`),
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__manuale-collegamento-elettrico" }),
                  file: withPrefix(`/giostra-collegamento-elettrico.pdf`),
                },
                {
                  label: formatMessage({ id: "GIOSTRE__manuali__istruzioni-montaggio" }),
                  link: withPrefix(`/giostre/ippowalker/istruzioni-montaggio`),
                },
              ]}
            />
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Ippowalker)
