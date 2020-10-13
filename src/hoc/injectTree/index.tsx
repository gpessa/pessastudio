import React from "react"

import { Location } from "@reach/router"

const Tree = (Component: React.FC) => (props: UrlFragment[]) => (
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
        {
          id: "index",
          url: "/",
        },
        ...fragments,
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
