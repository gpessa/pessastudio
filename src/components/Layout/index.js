import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Navigation from "../Navigation"
import Footer from "../Footer"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation pageInfo={pageInfo} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

export default Layout
