import { useIntl } from "gatsby-plugin-intl"
import React from "react"

import { Hero, Products, Benefits, Testimonials } from "@components"

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

      <Testimonials />
    </>
  )
}

export default Index
