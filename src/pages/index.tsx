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
        <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: "HOME_storia_text" })}}></div>
      </Container>
    </Section>

    <Section fluid={true}>
      <h1 className={"text-center"}>{formatMessage({ id: "HOME_our-product_title" })}</h1>
      <Container fluid>
        <Row>
          {PRODUCT_IDS.map(id => (
            <Col
              xs={6}
              md={true}
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
      <h1 className={"text-center"}>{ formatMessage({ id: "HOME_quotes" })}</h1>
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
