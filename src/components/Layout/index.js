import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { injectIntl } from 'gatsby-plugin-intl';

import Navigation from "../Navigation"
import Breadcrumb from "../Breadcrumb"
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
        // function json2array(json) {
        //   var result = [];
        //   Object.keys(json).forEach(key => {
        //     result.push({
        //       path: json[key].node.path
        //     })
        //   });
        //   return result;
        // }

//         const set = (obj, path, value) => {
//           if (Object(obj) !== obj) return obj; // When obj is not an object
//           // If not yet an array, get the keys from the string-path
//           if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || [];
//           path.slice(0, -1).reduce((a, c, i) => // Iterate all of them except the last one
//             Object(a[c]) === a[c] // Does the key exist and is its value an object?
//               // Yes: then follow that path
//               ? a[c]
//               // No: create the key. Is the next key a potential array-index?
//               : a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1]
//                 ? [] // Yes: assign a new array object
//                 : {}, // No: assign a new plain object
//             obj)[path[path.length - 1]] = value; // Finally assign the value to the last key
//           return obj; // Return the top-level object to allow chaining
//         };

//         let pages = json2array(data.allSitePage.edges);

//         const result = pages.map(page => {
//           const fragments = page.path.split('/').filter(f => f !== '/' && f !== "");
//           set(tree, fragments, true
//         })
// debugger
        return (
          <>
            <Navigation pageInfo={pageInfo} />
            <Breadcrumb />
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
