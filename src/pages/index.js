import React from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import { Seo, Layout, Hero, Section, ProductSquare } from "../components"
import { LINKS } from "../components/Navigation";


const QUOTES = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    who: "Maneggio sticazzi"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    who: "Maneggio sticazzi"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    who: "Maneggio sticazzi"
  }
]

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Seo title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Hero image={require("../images/background-02.jpg")} />

    <Section className={"text-center bg-light"}>
      <h1>La tradizione continua</h1>
      <p>Pessastudio nasce 28 anni fa dalla famiglia Pessa, gente di cavalli da generazioni, oggi Luciano Pessa il fondatore si avvale della forza commerciale della figlia.</p>
      <p>L'<strong>innovazione tecnologica</strong> e la <strong>qualità</strong> dei prodotti proposti, aggiunti alla loro <strong>accessibilità economica</strong>, sono le caratteristiche che hanno sempre contraddistinto i prodotti Pessastudio venduti ed apprezzati sia in Italia che all'estero.</p>
      <p>Le nostre giostre TECNOEXERCISER, in produzione da oltre 20 anni, i tondini coperti TECNOHALLE, le recinzioni TECNOFENCE, i tapis roulant per cavalli TECNOTAPIS e gli ostacoli in alluminio indistruttibili nel tempo, hanno portato la nostra azienda ad essere leader nel settore.</p>
      <p>Negli ultimi anni abbiamo arricchito la nostra gamma con una nicchia di prodotti semplici ed economicamente sempre più accessibili, ma siamo costantemente alla ricerca di soluzioni innovative per soddisfare le esigenze dei nostri clienti.</p>
    </Section>

    <Section fluid={true}>
      <h1 className={"text-center"}>I nostri prodotti</h1>
      <Row>
        {LINKS.map(({ id, label }) => (
          <Col>
            <ProductSquare
              image={require(`../images/icon-${id}.jpg`)}
              name={label}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
            />
          </Col>
        ))}
      </Row>
    </Section>
    
    <Section fluid={true} className="bg-light">
      <h1 className={"text-center"}>Cosa dicono di noi</h1>
      <Carousel className="text-center py-5">
        {QUOTES.map(({ quote, who }) => (
          <Carousel.Item>
            <blockquote className="blockquote">
              <p>{quote}</p>
              <footer className="blockquote-footer">{who}</footer>
            </blockquote>
          </Carousel.Item>
        ))}
      </Carousel>
    </Section>


  </Layout>
)

export default IndexPage
