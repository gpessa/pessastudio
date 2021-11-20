import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import React from "react"
import theme from "src/theme"

import "pure-react-carousel/dist/react-carousel.es.css"

export default function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {element}
    </ThemeProvider>
  )
}
