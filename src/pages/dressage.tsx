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
          linktraining: (msg: string) => (<a href="#dressage-training"><strong>{msg}</strong></a>),
          linkolimpic: (msg: string) => (<a href="#dressage-olimpic"><strong>{msg}</strong></a>)
        }}
      />
      <FormattedMessage id="DRESSAGE_intro_2"/>
    </Section>

    <Section id="dressage-training">
      <Header as="h2">{formatMessage({ id: `DRESSAGE_training_title` })}</Header>
      <FormattedHTMLMessage id="DRESSAGE_training_description" />

      <Row className="mt-5">
        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/training-lettera.jpg")}
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
            image={require("../images/product/dressage/training-modulo-dressage.jpg")}
            name="Modulo dressage"
            height={28.5}
            weight={3}
            colors={['white']}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/training-rettangolo-dressage-20x60.jpg")}
            description="Un comodo set composto da 60 moduli e 8 letter"
            name="Rettangolo dressage 20x40"
            height={2000}
            weight={4000}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/training-rettangolo-dressage-20x40.jpg")}
            description="Un comodo set composto da 80 moduli e 12 letter"
            name="Rettangolo dressage 20x60"
            height={2000}
            weight={6000}
          />
        </Col>

      </Row>
    </Section>

    <Section id="dressage-olimpic">
      <Header as="h2">{formatMessage({ id: `DRESSAGE_olimpic_title` })}</Header>
      <FormattedHTMLMessage id="DRESSAGE_olimpic_description" />

      <Row className="mt-5">
        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/olimpic-lettera.jpg")}
            name="Lettera Dressage Light"
            width={39}
            height={39}
            weight={2.5}
            colors={['white']}
            price={51}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/olimpic-modulo-dressage.jpg")}
            name="Modulo dressage"
            height={28.5}
            weight={3}
            colors={['white']}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/olimpic-rettangolo-dressage-20x60.jpg")}
            description="Un comodo set composto da 60 moduli e 8 letter"
            name="Rettangolo dressage 20x40"
            height={2000}
            weight={4000}
          />
        </Col>

        <Col md={3}>
          <ProductSquare
            image={require("../images/product/dressage/olimpic-rettangolo-dressage-20x40.jpg")}
            description="Un comodo set composto da 80 moduli e 12 letter"
            name="Rettangolo dressage 20x60"
            height={2000}
            weight={6000}
          />
        </Col>

      </Row>
    </Section>
  </>
)

export default injectIntl(Dressage)