import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import { IntlFormatters } from "react-intl";
import { Col, Row } from "react-bootstrap"

import { Header, Product, Section } from "../components"
import { Colors } from "../constants"

const Dressage: React.FC<{ intl: IntlFormatters }> = ({ intl: { formatMessage } }) => {
  const TRAINING_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      image: require("../images/product/dressage/training-lettera.jpg"),
      width: 20,
      height: 30,
      weight: 0.5,
      colors:[Colors.WHITE],
      price: 20,
    },
    {
      name: "Modulo dressage",
      image: require("../images/product/dressage/training-modulo-dressage.jpg"),
      weight: 3,
      height: 28.5,
      colors:[Colors.WHITE],
    },
    {
      name: "Rettangolo dressage 20x40",
      description: "Un comodo set composto da 60 moduli e 8 lettere",
      image: require("../images/product/dressage/training-rettangolo-dressage-20x60.jpg"),
      weight: 4000,
      height: 2000,
    },
    {
      name: "Rettangolo dressage 20x60",
      description: "Un comodo set composto da 80 moduli e 12 lettere",
      image: require("../images/product/dressage/training-rettangolo-dressage-20x40.jpg"),
      weight: 6000,
      height: 2000,
    },
  ];

  const OLIMPIC_PRODUCTS = [
    {
      name: "Lettera Dressage Light",
      image: require("../images/product/dressage/olimpic-lettera.jpg"),
      width: 39,
      height: 39,
      weight: 2.5,
      colors: [Colors.WHITE],
      price: 51
    },
    { 
      name: "Modulo dressage",
      image:require("../images/product/dressage/olimpic-modulo-dressage.jpg"),
      height: 28.5,
      weight: 3,
      colors: [Colors.WHITE],
    },
    { 
      name:"Rettangolo dressage 20x40",
      image:require("../images/product/dressage/olimpic-rettangolo-dressage-20x60.jpg"),
      description: "Un comodo set composto da 60 moduli e 8 lettere",
      height: 2000,
      weight: 4000,
    },
    { 
      name:"Rettangolo dressage 20x60",
      description: "Un comodo set composto da 80 moduli e 12 lettere", 
      image:require("../images/product/dressage/olimpic-rettangolo-dressage-20x40.jpg"),
      height: 2000,
      weight: 6000,
    }
  ];

  return (
    <>
      <Section>
        <h1>{formatMessage({ id: `NAVIGATION_dressage` })}</h1>
        <FormattedMessage
          id="DRESSAGE_intro_1"
          values={{
            linktraining: (msg: string) => (
              <a href="#dressage-training">
                <strong>{msg}</strong>
              </a>
            ),
            linkolimpic: (msg: string) => (
              <a href="#dressage-olimpic">
                <strong>{msg}</strong>
              </a>
            ),
          }}
        />
        <div>{formatMessage({ id: "DRESSAGE_intro_2" })}</div>
      </Section>

      <Section id="dressage-training" className="bg-light">
        <Header as="h2">{formatMessage({ id: `DRESSAGE_training_title` })}</Header>
        <p>{formatMessage({ id : "DRESSAGE_training_description" })}</p>
        
        <Row className="mt-5">
          {TRAINING_PRODUCTS.map((product, index) => (
            <Col
              key={index}
              as={Product}
              {...product}
            />
          ))}
        </Row>  
      </Section>

      <Section id="dressage-olimpic">
        <Header as="h2">{formatMessage({ id: `DRESSAGE_olimpic_title` })}</Header>
        <p>{formatMessage({ id: "DRESSAGE_olimpic_description" })}</p>
        
        <Row className="mt-5">
          {OLIMPIC_PRODUCTS.map((product, index) => (
            <Col
              key={index}
              as={Product}
              {...product}
            />
          ))}
        </Row>
      </Section>
    </>
  )
}

export default injectIntl(Dressage)
