import { useIntl } from "gatsby-plugin-intl"
import React from "react"
import { Carousel, Container } from "react-bootstrap"

import { Hero, Products, Section, Benefits } from "@components"

const Index: React.FC = () => {
  const { formatMessage } = useIntl()
  
  return (
    <>
      <Hero
        image={require("@images/background-home-1.jpg")}
        text={formatMessage({ id: "HOME__hero__text" })}
      />

      <Benefits />

      <Products />

      {/* <Section className="bg-light">
        <h1 className={"text-center"}>{formatMessage({ id: "HOME__quote__title" })}</h1>
        <Carousel className="text-center py-4">
          {Array(2)
            .fill(null)
            .map((x, index) => (
              <Carousel.Item key={index}>
                <Container as="blockquote" className="blockquote">
                  {formatMessage({ id: `HOME__quote__item-${index}` })}
                </Container>
              </Carousel.Item>
            ))}
        </Carousel>
      </Section> */}
    </>
  )
}

export default Index
