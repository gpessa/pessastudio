import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import React from "react"
import theme from "theme"

import "pure-react-carousel/dist/react-carousel.es.css"
import { Helmet } from "react-helmet"

export default function wrapRootElement({ element }) {
  return (
    <>
      <Helmet>
        {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {element}
      </ThemeProvider>
    </>
  )
}
