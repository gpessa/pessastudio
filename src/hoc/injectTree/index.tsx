import React from "react"

import { Location } from "@reach/router"

const Tree = (Component: any) => (props: any) => (
  <Location>
    {({ location: { pathname } }) => {
      let url = ""
      let fragments = pathname
        .split("/")
        .filter(f => ["", "/"].indexOf(f) === -1)
        .slice(1)
        .reduce((result, id) => {
          url = `${url}/${id}`
          return [
            ...result,
            {
              id,
              url,
            },
          ]
        }, [] as UrlFragment[])

      fragments = [
        ...fragments,
        {
          id: "index",
          url: "/",
        },
      ]

      return <Component fragments={fragments} {...props} />
    }}
  </Location>
)

interface UrlFragment {
  id: string
  url: string
}

export default Tree
export { UrlFragment }
