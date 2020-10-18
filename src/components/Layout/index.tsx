import React from "react"

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@theme';
import Navigation from "../Navigation"
import Breadcrumb from "../Breadcrumb"
import Footer from "../Footer"
import Gdpr from "../Gdpr"
import Seo from "../Seo"

const Layout = ({ children, pageInfo }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Seo />
    <Navigation pageInfo={pageInfo} />
    <Breadcrumb />
    <main>{children}</main>
    <Footer />
    <Gdpr />
  </ThemeProvider>
)

export default Layout
