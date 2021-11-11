const { pathPrefix } = require("../../../gatsby-config")

const usTree = (path: string) => {
  const urls = [...path.split("/").filter(f => f != "")]

  const fragments = urls.reduce(
    (fragments, fragment) => {
      const last = fragments.length ? fragments[fragments.length - 1] : "/"
      return [...fragments, `${last}${fragment}/`]
    },
    ["/"] as string[]
  )

  return fragments
}

export default usTree
