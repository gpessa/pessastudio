import React from "react"
import { Carousel, Col, Row, Container } from "react-bootstrap"
import { Seo, Hero, Section, Product } from "../components"
import { PRODUCT_IDS } from "../constants"
import { injectIntl } from "gatsby-plugin-intl"

const Index = ({ intl: { formatMessage } }) => (
  <>
    <Seo title={formatMessage({ id: "META_index_title" })} />

    <Hero image={require("../images/background-home-1.jpg")} text="Tradizione e qualità" />

    <Section className={"text-center bg-light"} fluid>
      <Container>
        <h1>{formatMessage({ id: "HOME_storia_title" })}</h1>
        <p>Pessastudio nasce 28 anni fa dalla famiglia Pessa, gente di cavalli da generazioni, oggi Luciano Pessa il fondatore si avvale della forza commerciale della figlia.</p>
        <p>L'<strong>innovazione tecnologica</strong> e la <strong>qualità</strong> dei prodotti proposti, aggiunti alla loro <strong>accessibilità economica</strong>, sono le caratteristiche che hanno sempre contraddistinto i prodotti Pessastudio venduti ed apprezzati sia in Italia che all'estero.</p>
        <p>Le nostre giostre <strong>TECNOEXERCISER</strong>, in produzione da oltre 20 anni, i tondini coperti TECNOHALLE, le recinzioni TECNOFENCE, i tapis roulant per cavalli TECNOTAPIS e gli ostacoli in alluminio indistruttibili nel tempo, hanno portato la nostra azienda ad essere leader nel settore.</p>
        <p>Negli ultimi anni abbiamo arricchito la nostra gamma con una nicchia di prodotti semplici ed economicamente sempre più accessibili, ma siamo costantemente alla ricerca di soluzioni innovative per soddisfare le esigenze dei nostri clienti.</p>
      </Container>
    </Section>

    <Section fluid={true}>
      <h1 className={"text-center"}>I nostri prodotti</h1>
      <Container fluid>
        <Row>
          {PRODUCT_IDS.map(id => (
            <Col
              key={id}
              as={Product}
              url={`/${id}`}
              name={formatMessage({ id: `NAVIGATION_${id}` })}
              image={require(`../images/icon-${id}.jpg`)}
              description={formatMessage({
                id: `HOME_product_description_${id}`,
              })}
            />
          ))}
        </Row>
      </Container>
    </Section>

    <Section fluid={true} className="bg-light">
      <h1 className={"text-center"}>Cosa dicono di noi</h1>
      <Carousel className="text-center py-4">
        {Array(2)
          .fill(null)
          .map((x, index) => (
            <Carousel.Item key={index}>
              <blockquote className="blockquote">
                {formatMessage({ id: `HOME_quote_${index + 1}` })}
              </blockquote>
            </Carousel.Item>
          ))}
      </Carousel>
    </Section>
  </>
)

export default injectIntl(Index)
