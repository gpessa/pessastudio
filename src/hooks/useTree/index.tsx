import { useLocation } from "@reach/router"
import { useLocalization } from "gatsby-theme-i18n"
const { pathPrefix } = require("../../../gatsby-config")

const usTree = () => {
  const { pathname } = useLocation()
  const { locale } = useLocalization()

  const urls = [
    ...pathname
      .replace(pathPrefix, "")
      .replace(`/${locale}`, "/")
      .split("/")
      .filter(f => f != ""),
  ]

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
