import React from "react"

import { Section, Header, ProductSquare } from "../components";
import { injectIntl, FormattedHTMLMessage, FormattedMessage } from 'gatsby-plugin-intl';
import { Container, Row, Col } from "react-bootstrap";

const Dressage = ({ intl: { formatMessage } }) => (
  <>
    <Section className="pb-0">
      <h1>{formatMessage({ id: `NAVIGATION_dressage` })}</h1>
      <FormattedMessage
        id="DRESSAGE_intro_1"
        values={{
          linktraining: (msg: string) => (<a href="#dressage-training">{msg}</a>),
          linkolimpic: (msg: string) => (<a href="#dressage-olimpic">{msg}</a>)
        }}
      />
      <FormattedMessage id="DRESSAGE_intro_2"/>
    </Section>

    <Section id="dressage-training">
      <Header as="h2">{formatMessage({ id: `DRESSAGE_training_title` })}</Header>
      <FormattedHTMLMessage id="DRESSAGE_training_description" />
    </Section>

    <Container>
      <Row>
        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/lettera.jpg")}
            name="Lettera Dressage Light"
            width={20}
            height={30}
            weight={0.5}
            colors={['white']}
            price={20}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/modulo-dressage.jpg")}
            name="Modulo dressage"
            height={28.5}
            weight={3}
            colors={['white']}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/rettangolo-dressage-20x60.jpg")}
            description="Un comodo set composto da 60 moduli e 8 letter"
            name="Rettangolo dressage 20x40"
            height={2000}
            weight={4000}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/rettangolo-dressage-20x40.jpg")}
            description="Un comodo set composto da 80 moduli e 12 letter"
            name="Rettangolo dressage 20x60"
            height={2000}
            weight={6000}
          />
        </Col>

      </Row>
    </Container>

    <Section id="dressage-olimpic">
      <Header as="h2">{formatMessage({ id: `DRESSAGE_olimpic_title` })}</Header>
      <FormattedHTMLMessage id="DRESSAGE_olimpic_description" />
    </Section>

    <Container>
      <Row>
        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/lettera.jpg")}
            name="Lettera Dressage Light"
            width={20}
            height={30}
            weight={0.5}
            colors={['white']}
            price={20}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/modulo-dressage.jpg")}
            name="Modulo dressage"
            height={28.5}
            weight={3}
            colors={['white']}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/rettangolo-dressage-20x60.jpg")}
            description="Un comodo set composto da 60 moduli e 8 letter"
            name="Rettangolo dressage 20x40"
            height={2000}
            weight={4000}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/rettangolo-dressage-20x40.jpg")}
            description="Un comodo set composto da 80 moduli e 12 letter"
            name="Rettangolo dressage 20x60"
            height={2000}
            weight={6000}
          />
        </Col>

      </Row>
    </Container>
  </>
)

export default injectIntl(Dressage)