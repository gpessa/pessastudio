import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { injectIntl } from 'gatsby-plugin-intl';

import Navigation from "../Navigation"
import Footer from "../Footer"
import Gdpr from "../Gdpr"

const Layout = ({ children, pageInfo, intl }) => {
  // debugger
  return (
    <StaticQuery
      // query={graphql`
      //   query SiteTitleQuery {
      //     site {
      //       siteMetadata {
      //         title
      //       }
      //     }
      //   }
      // `}
      query={graphql`
        query MyQuery {
          allSitePage(filter: {}) {
            edges {
              node {
                path
                context {
                  intl {
                    language
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        function json2array(json) {
          var result = [];
          var keys = Object.keys(json);
          keys.forEach(function (key) {
            result.push(json[key].node);
          });
          return result;
        }

        let pages = json2array(data.allSitePage.edges)
        debugger
        // pages = pages.map(p => {
        //   debugger
        //   return p.node
        // })

        return (
          <>
            <Navigation pageInfo={pageInfo} />
            <main>{children}</main>
            <Footer />
            <Gdpr />
          </>
        )
      }}
    />
  )
}

export default injectIntl(Layout)
