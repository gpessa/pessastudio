import React from "react"
import { injectIntl } from 'gatsby-plugin-intl';

import Navigation from "../Navigation"
import Breadcrumb from "../Breadcrumb"
import Footer from "../Footer"
import Gdpr from "../Gdpr"

const Layout = ({ children, pageInfo }) => (
  <>
    <Navigation pageInfo={pageInfo} />
    <Breadcrumb />
    <main>{children}</main>
    <Footer />
    <Gdpr />
  </>
)

export default injectIntl(Layout)
